package com.smartbus.repository;
import com.smartbus.model.BusStop;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;
@Repository
public interface BusStopRepository extends JpaRepository<BusStop, Integer> {
    List<BusStop> findByStopNameIgnoreCase(String stopName);
}