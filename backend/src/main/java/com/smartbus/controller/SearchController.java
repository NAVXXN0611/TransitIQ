package com.smartbus.controller;
import com.smartbus.model.Trip;
import com.smartbus.service.JourneySearchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/search")
@CrossOrigin(origins = "http://localhost:5173")
public class SearchController {
    @Autowired
    private JourneySearchService journeySearchService;
    @GetMapping("/journeys")
    public List<Trip> searchJourneys(@RequestParam String startStop, @RequestParam String endStop) {
        return journeySearchService.searchAvailableJourneys(startStop, endStop);
    }
}