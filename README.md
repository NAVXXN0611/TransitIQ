# TransitIQ - SmartBus Management System

An Object-Oriented Public Transport Operations and Passenger Demand Management System built for Coimbatore. This project implements a decoupled three-tier architecture utilizing Java Spring Boot, React, and MySQL.

## Project Structure
This repository is structured as a monorepo:
* `/backend`: Java Spring Boot REST API providing core OOP business logic, journey search, and live GPS telemetry.
* `/frontend`: React.js + Vite web application featuring the passenger journey search portal and live Leaflet map tracking.
* `/database`: MySQL initialization scripts containing real Coimbatore routes and bus sequences.

## Tech Stack
* **Frontend:** React 18, Vite, Tailwind CSS, React-Leaflet, Axios
* **Backend:** Java, Spring Boot 3, Spring Data JPA, Hibernate
* **Database:** MySQL 8

## Setup Instructions

### 1. Database Setup
1. Ensure MySQL is running on port 3306.
2. Execute the SQL script located at `database/seed_routes.sql` to generate the `smartbus_db` database and insert the sample route data.

### 2. Backend Setup
1. Navigate to the backend directory: `cd backend`
2. Update `src/main/resources/application.properties` with your MySQL `username` and `password`.
3. Run the Spring Boot application using Maven: `./mvnw spring-boot:run` (Server will start on port 8080).

### 3. Frontend Setup
1. Navigate to the frontend directory: `cd frontend`
2. Install dependencies: `npm install`
3. Start the Vite development server: `npm run dev` (App will run on port 5173).