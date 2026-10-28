package com.smartbus.model;
import jakarta.persistence.*;
@Entity
@Table(name = "bus_stops")
public class BusStop {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY) private int stopId;
    @ManyToOne @JoinColumn(name = "route_id") private Route route;
    private String stopName;
    private int stopOrder;
    public BusStop() {}
    public int getStopId() { return stopId; }
    public void setStopId(int stopId) { this.stopId = stopId; }
    public Route getRoute() { return route; }
    public void setRoute(Route route) { this.route = route; }
    public String getStopName() { return stopName; }
    public void setStopName(String stopName) { this.stopName = stopName; }
    public int getStopOrder() { return stopOrder; }
    public void setStopOrder(int stopOrder) { this.stopOrder = stopOrder; }
}