
class Layer {
    public:
        unsigned int id;
        long angle;
        unsigned int passes;

        //Constructor
        Layer(int id, int angle){
            id = id;
            angle = angle;
            Serial.println("Created Layer!")
        }

}