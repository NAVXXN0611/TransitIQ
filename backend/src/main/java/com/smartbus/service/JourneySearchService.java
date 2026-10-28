package com.smartbus.service;
import com.smartbus.model.BusStop;
import com.smartbus.model.Trip;
import com.smartbus.repository.BusStopRepository;
import com.smartbus.repository.TripRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;

@Service
public class JourneySearchService {
    @Autowired
    private BusStopRepository busStopRepository;
    @Autowired
    private TripRepository tripRepository;

    public List<Trip> searchAvailableJourneys(String startStop, String endStop) {
        List<Trip> availableJourneys = new ArrayList<>();
        List<BusStop> startStops = busStopRepository.findByStopNameIgnoreCase(startStop);
        List<BusStop> endStops = busStopRepository.findByStopNameIgnoreCase(endStop);

        if (startStops.isEmpty() || endStops.isEmpty()) return availableJourneys;

        for (BusStop start : startStops) {
            for (BusStop end : endStops) {
                if (start.getRoute().getRouteId().equals(end.getRoute().getRouteId())) {
                    if (start.getStopOrder() < end.getStopOrder()) {
                        List<Trip> routeTrips = tripRepository.findByRoute_RouteId(start.getRoute().getRouteId());
                        availableJourneys.addAll(routeTrips);
                    }
                }
            }
        }
        return availableJourneys;
    }
}