package com.example.UnitConverter;

import java.util.*;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.ui.Model;
import org.springframework.web.servlet.config.annotation.CorsRegistry;


@RestController
public class IndexController {

    @GetMapping("/")
    public ModelAndView index() {
        return new ModelAndView("index");
    }

    @CrossOrigin(origins = "http://localhost:5173")
    @PostMapping("/conv")
    public String testPost(LengthForm form){
        //System.out.println(form.getStartUnit());

        String startUnit = form.getStartUnit();
        String endUnit = form.getEndUnit();
        double value = Double.parseDouble(form.getLength());
        String convertedValue = form.convertUnits(startUnit, endUnit, value);

        return String.valueOf(value) + startUnit + " = " + convertedValue;
    }

}

class LengthForm {
    private String length;
    private String startUnit;
    private String endUnit;

    // mm, cm, m, km, in, ft, yd, mi
    private double[] mm = {1.0, 0.1, 0.001, 0.000001, 0.03937008, 0.00328084, 0.00109361, 0.000000621371};
    private double[] cm = {10.0, 1.0, 0.01, 0.00001, 0.39370079, 0.03280840, 0.01093613, 0.00000621};
    private double[] m  = {1000.0, 100.0, 1.0, 0.001, 39.3700787, 3.28083990, 1.09361330, 0.00062137};
    private double[] km = {1000000.0, 100000.0, 1000.0, 1.0, 39370.0787, 3280.83990, 1093.61330, 0.62137119};
    private double[] in = {25.4, 2.54, 0.0254, 0.0000254, 1.0, 0.08333333, 0.02777778, 0.00001578};
    private double[] ft = {304.8, 30.48, 0.3048, 0.0003048, 12.0, 1.0, 0.33333333, 0.00018939};
    private double[] yd = {914.4, 91.44, 0.9144, 0.000914, 36.0, 3.0, 1.0, 0.00056818};
    private double[] mi = {1609000.0, 160934.4, 1609.344, 1.609344, 63360.0, 5280.0, 1760.0, 1.0};
        
    private static HashMap<String, double[]> conversions = new HashMap<>();
    
    public LengthForm() {
        conversions.put("mm", mm);
        conversions.put("cm", cm);
        conversions.put("m", m);
        conversions.put("km", km);
        conversions.put("in", in);
        conversions.put("ft", ft);
        conversions.put("yd", yd);
        conversions.put("mi", mi);
    }

   

    public String getLength() {
        // Trimming whitespace is a good practice for user input
        return length != null ? length.trim() : null; 
    }

    public void setLength(String length) {
        this.length = length;
    }

    public String getStartUnit() {
        return startUnit != null ? startUnit.trim() : null;
    }

    public void setStartUnit(String startUnit) {
        this.startUnit = startUnit;
    }

    public String getEndUnit() {
        return endUnit != null ? endUnit.trim(): null;
    }

    public void setEndUnit(String endUnit) {
        this.endUnit = endUnit;
    }

    public static String convertUnits(String startUnit, String endUnit, double value) {

        var x = conversions.get(startUnit);
        double cVal;
        String cString = "";

        switch(endUnit) {
            case "mm":
                cVal = x[0];
                cString = String.valueOf(value * cVal) + "mm";
                break;
            case "cm":
                cVal = x[1];
                cString = String.valueOf(value * cVal) + "cm";
                break;
            case "m":
                cVal = x[2];
                cString = String.valueOf(value * cVal) + "m";
                break;
            case "km":
                cVal = x[3];
                cString = String.valueOf(value * cVal) + "km";
                break;
            case "in":
                cVal = x[4];
                cString = String.valueOf(value * cVal) + "in";
                break;
            case "ft":
                cVal = x[5];
                cString = String.valueOf(value * cVal) + "ft";
                break;
            case "yd":
                cVal = x[6];
                cString = String.valueOf(value * cVal) + "yd";
                break;
            case "mi":
                cVal = x[7];
                cString = String.valueOf(value * cVal) + "mi";
                break;
            default:
                break;
        }
        return cString;
    }

}
