import java.util.*;
import java.util.ArrayList;
import java.util.Map.*;

class Conversions{

    public static void main(String[] args) {
        System.out.println("======================================== test conversions ====================================");

        int val = 255;

        System.out.println(converts("mm", "cm", 20));
        System.out.println(converts("km", "m", 20));
        System.out.println(converts("in", "yd", 20));
        System.out.println(converts("mi", "cm", 20));
    }

    

    public static String converts(String startUnit, String endUnit, double value) {

        // mm, cm, m, km, in, ft, yd, mi
        double[] mm = {1.0, 0.1, 0.001, 0.000001, 0.03937008, 0.00328084, 0.00109361, 0.000000621371};
        double[] cm = {10.0, 1.0, 0.01, 0.00001, 0.39370079, 0.03280840, 0.01093613, 0.00000621};
        double[] m  = {1000.0, 100.0, 1.0, 0.001, 39.3700787, 3.28083990, 1.09361330, 0.00062137};
        double[] km = {1000000.0, 100000.0, 1000.0, 1.0, 39370.0787, 3280.83990, 1093.61330, 0.62137119};
        double[] in = {25.4, 2.54, 0.0254, 0.0000254, 1.0, 0.08333333, 0.02777778, 0.00001578};
        double[] ft = {304.8, 30.48, 0.3048, 0.0003048, 12.0, 1.0, 0.33333333, 0.00018939};
        double[] yd = {914.4, 91.44, 0.9144, 0.000914, 36.0, 3.0, 1.0, 0.00056818};
        double[] mi = {1609000.0, 160934.4, 1609.344, 1.609344, 63360.0, 5280.0, 1760.0, 1.0};
        
        HashMap<String, double[]> conversions = new HashMap<>();

        conversions.put("mm", mm);
        conversions.put("cm", cm);
        conversions.put("m", m);
        conversions.put("km", km);
        conversions.put("in", in);
        conversions.put("ft", ft);
        conversions.put("yd", yd);
        conversions.put("mi", mi);


        var x = conversions.get(startUnit);
        double cVal;
        String cString = "";

        switch(endUnit) {
            case "mm":
                cVal = x[0];
                cString = String.valueOf(value * cVal) + " mm";
                break;
            case "cm":
                cVal = x[1];
                cString = String.valueOf(value * cVal) + " cm";
                break;
            case "m":
                cVal = x[2];
                cString = String.valueOf(value * cVal) + " m";
                break;
            case "km":
                cVal = x[3];
                cString = String.valueOf(value * cVal) + " km";
                break;
            case "in":
                cVal = x[4];
                cString = String.valueOf(value * cVal) + " in";
                break;
            case "ft":
                cVal = x[5];
                cString = String.valueOf(value * cVal) + " ft";
                break;
            case "yd":
                cVal = x[6];
                cString = String.valueOf(value * cVal) + " yd";
                break;
            case "mi":
                cVal = x[7];
                cString = String.valueOf(value * cVal) + " mi";
                break;
            default:
                break;
        }

        return cString;

    }
}