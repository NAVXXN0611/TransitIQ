package com.smartbus.service;
import com.smartbus.model.Bus;
import com.smartbus.repository.BusRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Random;

@Service
public class BusTrackingService {
    @Autowired
    private BusRepository busRepository;
    private final Random random = new Random();

    @Scheduled(fixedRate = 4000)
    public void simulateV2CTelemetryAndMovement() {
        List<Bus> activeBuses = busRepository.findByStatus("Active");
        for (Bus bus : activeBuses) {
            if (bus.getBusNumber().equals("TN-38-N-1234")) {
                bus.setLatitude(bus.getLatitude() + 0.0005);
                bus.setLongitude(bus.getLongitude() - 0.0002);
            } else if (bus.getBusNumber().equals("TN-38-N-5678")) {
                bus.setLatitude(bus.getLatitude() - 0.0003);
                bus.setLongitude(bus.getLongitude() + 0.0004);
            }
            if (random.nextInt(100) > 95) {
                bus.setStatus("Maintenance Required");
            }
            busRepository.save(bus);
        }
    }
}