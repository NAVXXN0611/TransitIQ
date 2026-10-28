package com.smartbus.model;
import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
@Entity
@DiscriminatorValue("PASSENGER")
public class Passenger extends User {
    private String extraAttribute;
    public Passenger() {}
    public String getExtraAttribute() { return extraAttribute; }
    public void setExtraAttribute(String extraAttribute) { this.extraAttribute = extraAttribute; }
}