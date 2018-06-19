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

// Select either dev or prod configuration
#define CONFIG 'dev'

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

#define FTW_X_STEP 2 
#define FTW_X_DIR 3  
#define FTW_Y_STEP 6 
#define FTW_Y_DIR 7  



// Define some steppers and the pins the will use
AccelStepper ftw_x_stepper(AccelStepper::FULL2WIRE, FTW_X_DIR,FTW_X_STEP);
AccelStepper ftw_y_stepper(AccelStepper::FULL2WIRE, FTW_Y_DIR,FTW_Y_STEP);

void setup()
{
    switch(CONFIG){
      case 'dev':
        // setup x-axis stepper
        ftw_x_stepper.setMaxSpeed(200.0);
        ftw_x_stepper.setAcceleration(100.0);
        ftw_x_stepper.moveTo(2000);
        
        // setup y-axis stepper
        ftw_y_stepper.setMaxSpeed(200.0);
        ftw_y_stepper.setAcceleration(100.0);
        ftw_y_stepper.moveTo(2000);
        break;
      case 'prod':
        break;
    }
}

void loop()
{
    ftw_x_stepper.run();
    ftw_y_stepper.run();
}
