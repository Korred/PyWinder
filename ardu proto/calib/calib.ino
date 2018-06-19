// fibra_calibration.pde
// -*- mode: C++ -*-


#include <AccelStepper.h>
#include "testing.h"




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

// Define some steppers and the pins to use
AccelStepper ftw_x_stepper(AccelStepper::FULL2WIRE, FTW_X_DIR, FTW_X_STEP);
AccelStepper ftw_y_stepper(AccelStepper::FULL2WIRE, FTW_Y_DIR, FTW_Y_STEP);




// STEPS
#define DISTANCE 1000

// STEPS/S
#define SPEED 300

void setup()
{
  // Start serial monitor
  Serial.begin(9600); 

  Layer test(1,25);


  // set pinMode for Limit Switches
  pinMode(LSWITCH_R, INPUT_PULLUP);
  pinMode(LSWITCH_L, INPUT_PULLUP);

  delay(5);
  
          int x_max_speed = 2348;
          int y_max_speed = 2348;
          int y_const_speed = 2348;
          
          // setup x-axis stepper
          ftw_x_stepper.setMaxSpeed(x_max_speed);
          ftw_x_stepper.setAcceleration(3000); 
}




void loop()
{

      //ftw_x_stepper.moveTo(2000);
      //while(ftw_x_stepper.currentPosition() != 0)
      //{
      //  ftw_x_stepper.run();
      //}

    int i = DISTANCE;
           ftw_x_stepper.moveTo(i);  // Set the position to move to
           ftw_x_stepper.setSpeed(SPEED);
               while (true) {
        ftw_x_stepper.runSpeedToPosition();  // Start moving the stepper
        if(ftw_x_stepper.currentPosition() == i){
          break;
        }
    }
    

Serial.println(ftw_x_stepper.currentPosition());
           ftw_x_stepper.moveTo(0);  // Set the position to move to
           ftw_x_stepper.setSpeed(SPEED);
               while (true) {
        ftw_x_stepper.runSpeedToPosition();  // Start moving the stepper
                if(ftw_x_stepper.currentPosition() == 0){
          break;
        }
    }

while(true){
  Serial.println("DONE");
}

}

