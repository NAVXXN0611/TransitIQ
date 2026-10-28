package com.smartbus.model;
import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
@Entity
@DiscriminatorValue("ADMIN")
public class TransportAdmin extends User {
    private String extraAttribute;
    public TransportAdmin() {}
    public String getExtraAttribute() { return extraAttribute; }
    public void setExtraAttribute(String extraAttribute) { this.extraAttribute = extraAttribute; }
}