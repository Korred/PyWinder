from math import pi, sin, radians

# distance measurements in mm
# INITIAL SETTINGS ################
ANGLE = 75
FEEDRATE = 2000
FORM_WIDTH = 200
TUBE_WIDTH = 150
RADIUS = 60
FILAMENT_WIDTH = 3
FILAMENT_THICKNESS = 0.5
OFFSET_LEFT = 15
OFFSET_RIGHT = 15
SWITCH_OFFSET_LEFT = 10
SWITCH_OFFSET_RIGHT = 10
###################################

perimeter = 2*pi*RADIUS
left_coord = OFFSET_LEFT
move = TUBE_WIDTH + SWITCH_OFFSET_RIGHT + SWITCH_OFFSET_LEFT
travel_y = move * (sin(radians(ANGLE))/sin(radians(90-ANGLE)))
extra = perimeter

REPETITIONS = 4

GCODE = ["G91", 
         "G21",
         "G1 F {} ; Set Feedrate".format(FEEDRATE),
         "",
         "G1 X{:.2f} Y{:.2f} ; Set to Start".format(left_coord, 0),
         "",]

for i in range(REPETITIONS):
    left = ["G1 X{:.2f} Y{:.2f}".format(move, travel_y),
            "G1 Y{:.2f}".format(extra)]

    right = ["G1 X{:.2f} Y{:.2f}".format(-move, travel_y),
             "G1 Y{:.2f}".format(extra)]
    
    GCODE.extend(left)
    GCODE.extend(right)
    GCODE.append("")

print("\n".join(GCODE))




