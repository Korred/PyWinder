from math import pi, sin

# distance measurements in mm
# INITIAL SETTINGS ################
ANGLE = 45
FEEDRATE = 1000
TUBE_WIDTH = 5000
RADIUS = 50
FILAMENT_WIDTH = 2
FILAMENT_THICKNESS = 2
OFFSET_LEFT = 50
OFFSET_RIGHT = 50
###################################

perimeter = 2*pi*RADIUS
travel_x = OFFSET_LEFT + TUBE_WIDTH + OFFSET_RIGHT
travel_y = travel_x*sin(ANGLE)/sin(90-ANGLE)
extra = perimeter + TUBE_WIDTH * 0.8

REPETITIONS = 4

GCODE = ["G90", 
         "G21",
         "F {}".format(FEEDRATE),
         "",
         "G1 X{:.2f} Y{:.2f}".format(OFFSET_LEFT, 0)]

for i in range(REPETITIONS):
    left = ["X{:.2f} Y{:.2f}".format(travel_x, travel_y),
            "Y{:.2f}".format(extra)]

    right = ["X{:.2f} Y{:.2f}".format(OFFSET_LEFT, travel_y),
            "Y{:.2f}".format(extra)]
    
    GCODE.extend(left)
    GCODE.extend(right)
    GCODE.append("")

print("\n".join(GCODE))




