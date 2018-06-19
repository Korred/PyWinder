
class Layer {
    public:
        unsigned int length;
        long angle;
        unsigned int passes;
        int x_speed;
        int y_speed;
        String dummy = "";

        //Constructor
        Layer(int length, int angle){
            length = mm_to_steps(length);
            angle = angle;
            Serial.println("Created Layer!");
            Serial.println(dummy + "Angle: " + angle + "\n" + "Length: " + length);
        };

        void create_passes(void){
        };

        int mm_to_steps(int mm){
            int conv_var = 1337;
            return mm * conv_var;
        };

};
