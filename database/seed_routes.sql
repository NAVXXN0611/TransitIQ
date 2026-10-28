CREATE DATABASE IF NOT EXISTS smartbus_db;
USE smartbus_db;

DROP TABLE IF EXISTS trips;
DROP TABLE IF EXISTS bus_stops;
DROP TABLE IF EXISTS routes;
DROP TABLE IF EXISTS buses;

CREATE TABLE buses (
    bus_number VARCHAR(20) PRIMARY KEY,
    capacity INT NOT NULL,
    status VARCHAR(50) DEFAULT 'Active',
    latitude DECIMAL(10, 8),
    longitude DECIMAL(11, 8)
);

CREATE TABLE routes (
    route_id VARCHAR(20) PRIMARY KEY,
    route_name VARCHAR(100) NOT NULL,
    source VARCHAR(50) NOT NULL,
    destination VARCHAR(50) NOT NULL
);

CREATE TABLE bus_stops (
    stop_id INT AUTO_INCREMENT PRIMARY KEY,
    route_id VARCHAR(20),
    stop_name VARCHAR(100) NOT NULL,
    stop_order INT NOT NULL,
    FOREIGN KEY (route_id) REFERENCES routes(route_id) ON DELETE CASCADE
);

CREATE TABLE trips (
    trip_id VARCHAR(20) PRIMARY KEY,
    route_id VARCHAR(20),
    bus_number VARCHAR(20),
    departure_time VARCHAR(20) NOT NULL,
    FOREIGN KEY (route_id) REFERENCES routes(route_id),
    FOREIGN KEY (bus_number) REFERENCES buses(bus_number)
);

INSERT INTO buses (bus_number, capacity, status, latitude, longitude) VALUES 
('TN-38-N-1234', 50, 'Active', 11.01680000, 76.96880000),
('TN-38-N-5678', 60, 'Active', 11.01657860, 76.96880330);

INSERT INTO routes (route_id, route_name, source, destination) VALUES 
('R-01-UP', 'Gandhipuram to Karunya Nagar', 'Gandhipuram', 'Karunya Nagar'),
('R-01-DN', 'Karunya Nagar to Gandhipuram', 'Karunya Nagar', 'Gandhipuram'),
('R-02-UP', 'Gandhipuram to Singanallur', 'Gandhipuram', 'Singanallur'),
('R-02-DN', 'Singanallur to Gandhipuram', 'Singanallur', 'Gandhipuram');

INSERT INTO bus_stops (route_id, stop_name, stop_order) VALUES 
('R-01-UP', 'Gandhipuram Bus Stand', 1), ('R-01-UP', 'Ukkadam Bus Stand', 2), ('R-01-UP', 'Kuniyamuthur', 3), ('R-01-UP', 'Karunya Nagar', 4),
('R-01-DN', 'Karunya Nagar', 1), ('R-01-DN', 'Kuniyamuthur', 2), ('R-01-DN', 'Ukkadam Bus Stand', 3), ('R-01-DN', 'Gandhipuram Bus Stand', 4),
('R-02-UP', 'Gandhipuram Town Bus Stand', 1), ('R-02-UP', 'Nava India', 2), ('R-02-UP', 'Peelamedu', 3), ('R-02-UP', 'Singanallur Bus Stop', 4),
('R-02-DN', 'Singanallur Bus Stop', 1), ('R-02-DN', 'Peelamedu', 2), ('R-02-DN', 'Nava India', 3), ('R-02-DN', 'Gandhipuram Town Bus Stand', 4);

INSERT INTO trips (trip_id, route_id, bus_number, departure_time) VALUES 
('T-101', 'R-01-UP', 'TN-38-N-1234', '08:30 AM'),
('T-102', 'R-01-DN', 'TN-38-N-1234', '11:00 AM'),
('T-201', 'R-02-UP', 'TN-38-N-5678', '08:15 AM'),
('T-202', 'R-02-DN', 'TN-38-N-5678', '09:00 AM');