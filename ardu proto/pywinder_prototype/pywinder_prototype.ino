// pywinder_prototype.pde
// -*- mode: C++ -*-
//
// PyWinder prototype code for testing
// Includes logic for both FULL2WIRE (dev) and FULL4WIRE (prod) steppers
// Runs one stepper (X) forwards and backwards, accelerating and decelerating
// at the limits. Second stepper (Y) runs constantly.
//
// Copyright (C) 2018 Dawid Dluginski, Philipp Kochanski

#include <AccelStepper.h>

// Set dev to true or false
#define DEV false
#define CALIBRATION false
#define HOMING false

/*
+-----------+-----+------+-----+
|   TYPE    | DIR | FUN  | PIN |
+-----------+-----+------+-----+
| FULL2WIRE | X   | STEP |   2 |
| FULL2WIRE | X   | DIR  |   3 |
| FULL2WIRE | Y   | STEP |   6 |
| FULL2WIRE | Y   | DIR  |   7 |
+-----------+-----+------+-----+
*/

// ORIGIN = RIGHT END (0)
// LEFT movement = POSITIVE (++)
// RIGHT movement = NEGATIVE (--)

// Steppers
#define FTW_X_STEP 4
#define FTW_X_DIR 5
#define FTW_Y_STEP 9
#define FTW_Y_DIR 10

// Limit Switches
#define LSWITCH_L 2
#define LSWITCH_R 3

// Buttons
#define WIND_BUTTON 11
#define UNWIND_BUTTON 12

// Define some steppers and the pins to use
AccelStepper ftw_x_stepper(AccelStepper::FULL2WIRE, FTW_X_DIR, FTW_X_STEP);
AccelStepper ftw_y_stepper(AccelStepper::FULL2WIRE, FTW_Y_DIR, FTW_Y_STEP);


int wind_button_state = 0;
int unwind_button_state = 0;
int poll_state = 1;
int saved_y_speed = 0;

void setup()
{
  // Start serial monitor
  Serial.begin(9600); 

  // set pinMode for Limit Switches
  pinMode(LSWITCH_R, INPUT_PULLUP);
  pinMode(LSWITCH_L, INPUT_PULLUP);

  // set pinMode for Buttons
  pinMode(WIND_BUTTON, INPUT);
  pinMode(UNWIND_BUTTON, INPUT);
  delay(5);
  
  switch(DEV){
      case true:       
        {
          int x_max_speed = 2348;
          int y_max_speed = 2348;
          int y_const_speed = 2348;
          
          // setup x-axis stepper
          ftw_x_stepper.setMaxSpeed(x_max_speed);
          ftw_x_stepper.setAcceleration(500.0);
          
          
          // setup y-axis stepper
          ftw_y_stepper.setMaxSpeed(y_max_speed);
          ftw_y_stepper.setAcceleration(500.0);
          ftw_y_stepper.setSpeed(y_const_speed);
          saved_y_speed = y_const_speed;
        }
        break;
      case false:
        {
          int x_max_speed = 10;
          int y_max_speed = 2348;
          int y_const_speed = 2348;
          
          // setup x-axis stepper
          ftw_x_stepper.setMaxSpeed(x_max_speed);
          ftw_x_stepper.setAcceleration(100.0);
          
          
          // setup y-axis stepper
          ftw_y_stepper.setMaxSpeed(y_max_speed);
          ftw_y_stepper.setAcceleration(100.0);
          ftw_y_stepper.setSpeed(y_const_speed);
        }
        break;
   }


  if (HOMING){
    long homing_pos = 0;
    long steps_offset = 2000;
    Serial.println("Starting Homing Procedure...");
    while (digitalRead(LSWITCH_L) && homing_pos < steps_offset) {
        ftw_x_stepper.moveTo(homing_pos);  // Set the position to move to
        homing_pos++;  // Increase by 1 for next move if needed
        ftw_x_stepper.run();  // Start moving the stepper
    }

    homing_pos = 0;
    while (digitalRead(LSWITCH_R)) {  
        ftw_x_stepper.moveTo(homing_pos);  // Set the position to move to
        homing_pos--;  // Decrease by 1 for next move if needed
        ftw_x_stepper.run();  // Start moving the stepper
    }
    ftw_x_stepper.setCurrentPosition(0); // Set current position to 0
    Serial.println("Homing completed!");
    ftw_x_stepper.disableOutputs();
    ftw_x_stepper.enableOutputs();
  }

  
  

}

void reset_states(){
  wind_button_state = 0;
  unwind_button_state = 0;
  poll_state = 0;
}

void enable_polling(){
  poll_state = 1;
}



void loop()
{
    if (poll_state == 1){
      wind_button_state = digitalRead(WIND_BUTTON);
      unwind_button_state = digitalRead(UNWIND_BUTTON);
    }


    if (wind_button_state == 1) {
      
      reset_states();
      delay(1000); //delay needed before reading again otherwise old value will be read again
      ftw_y_stepper.setSpeed(saved_y_speed);
      while(true){
        wind_button_state = digitalRead(WIND_BUTTON);
        if(wind_button_state == 1){
          Serial.println("Stopped");
          Serial.println(ftw_y_stepper.currentPosition());
          reset_states();
          break;
        }
        ftw_y_stepper.runSpeed();
      }

    }

    if (unwind_button_state == 1) {
      
      reset_states();
      delay(1000);

      ftw_y_stepper.moveTo(0);
      while(ftw_y_stepper.currentPosition() != 0)
      {
        ftw_y_stepper.run();
      }
    }

    if (poll_state == 0){
      Serial.println("Reset Polling");
      delay(1000); //delay needed before reading again otherwise old value will be read again
      enable_polling();
    }


}

