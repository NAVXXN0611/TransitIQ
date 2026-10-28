package com.smartbus.model;
import jakarta.persistence.*;
@Entity
@Table(name = "trips")
public class Trip {
    @Id private String tripId;
    @ManyToOne @JoinColumn(name = "route_id") private Route route;
    @ManyToOne @JoinColumn(name = "bus_number") private Bus bus;
    private String departureTime;
    public Trip() {}
    public String getTripId() { return tripId; }
    public void setTripId(String tripId) { this.tripId = tripId; }
    public Route getRoute() { return route; }
    public void setRoute(Route route) { this.route = route; }
    public Bus getBus() { return bus; }
    public void setBus(Bus bus) { this.bus = bus; }
    public String getDepartureTime() { return departureTime; }
    public void setDepartureTime(String departureTime) { this.departureTime = departureTime; }
}