package com.example.UnitConverter;

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
        System.out.println("Request Length, StartUnit, EndUnit: " + form.getLength() + " " + form.getStartUnit() + " " + form.getEndUnit());

        System.out.println()
        return "Request Length, StartUnit, EndUnit: " + form.getLength() + " " + form.getStartUnit() + " " + form.getEndUnit();
    }

}

class LengthForm {
    private String length;
    private String startUnit;
    private String endUnit;

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

    public String convertUnit(String currentStartUnit, String currentEndUnit) {
        /**
         * Switch/Case each unit
         */

        switch(currentStartUnit) {
            
        }
        
    }

    // private Float toMili() {
        
    // }

    // private Float toCentimeter() {

    // }

    // private Float toMeter() {

    // }

    // private Float toKilometer() {

    // }

    // private Float toNano() {

    // }

    // private Float toYard() {

    // }

    // private Float toMile() {

    // }

    // private Float toInch() {

    // }

}
