CREATE DATABASE autogenius;
USE autogenius;
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    phone_number VARCHAR(20) NOT NULL
);

CREATE TABLE IF NOT EXISTS problems (
    id INT AUTO_INCREMENT PRIMARY KEY,
    make VARCHAR(255) NOT NULL,
    model VARCHAR(255) NOT NULL,
    year INT NOT NULL,
    description TEXT NOT NULL,
    image VARCHAR(255),
    username VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS cars (
    id INT AUTO_INCREMENT PRIMARY KEY,
    make VARCHAR(255) NOT NULL,
    model VARCHAR(255) NOT NULL,
    year INT NOT NULL,
    image VARCHAR(255),
    UNIQUE (make, model, year) -- Ensure make, model, and year combination is unique
);


CREATE TABLE IF NOT EXISTS problems (
    id INT AUTO_INCREMENT PRIMARY KEY,
    make VARCHAR(255) NOT NULL,
    model VARCHAR(255) NOT NULL,
    year INT NOT NULL,
    description TEXT NOT NULL,
    image VARCHAR(255),
    username VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS solutions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    problem_id INT NOT NULL,
    make VARCHAR(255) NOT NULL,
    model VARCHAR(255) NOT NULL,
    year INT NOT NULL,
    description TEXT NOT NULL,
    username VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);



INSERT INTO cars (make, model, image, year) VALUES
('Toyota', 'Corolla', 'corolla.jpeg', 2020),
('Honda', 'Civic', 'Civic.jpeg', 2019),
('Ford', 'Focus', 'Focus.jpeg', 2018),
('Chevrolet', 'Malibu','Malibu.jpeg', 2017),
('Nissan', 'Altima', 'Altima.jpeg', 2020),
('BMW', '3 Series', '3_Series.jpg', 2021),
('Mercedes-Benz', 'C-Class', 'C-Class.jpg', 2021),
('Audi', 'A4', 'A4.jpeg', 2019),
('Volkswagen', 'Jetta', 'Jetta.jpeg', 2018),
('Hyundai', 'Elantra', 'Elantra.jpg', 2017),
('Toyota', 'Camry', 'Camry.png', 2020),
('Honda', 'Accord', 'Accord.jpeg', 2019),
('Ford', 'Mustang', 'Mustang.jpeg', 2018),
('Chevrolet', 'Cruze','Cruze.jpeg', 2017),
('Nissan', 'Sentra', 'Sentra.jpeg', 2020),
('BMW', '5 Series','5_Series.jpeg', 2021),
('Mercedes-Benz', 'E-Class','E-Class.jpeg', 2021),
('Audi', 'Q5', 'q5.jpeg', 2019),
('Volkswagen', 'Golf', 'Golf.jpeg', 2018),
('Hyundai', 'Sonata', 'Sonata.jpeg', 2017);

INSERT INTO problems (make, model, year, description, image, username) VALUES
('Toyota', 'Corolla', 2020, 'Engine makes a strange noise when accelerating.', '1722655515090-download (2).jpg', 'user1'),
('Toyota', 'Corolla', 2020, 'Check engine light is on.', '1722655515090-download (2).jpg', 'user2'),
('Honda', 'Civic', 2019, 'Brakes squeak loudly when applied.', '1722655515090-download (2).jpg', 'user3'),
('Honda', 'Civic', 2019, 'Oil leak detected under the car.', '1722655515090-download (2).jpg', 'user4'),
('Ford', 'Focus', 2018, 'Air conditioning is not cooling properly.', '1722655515090-download (2).jpg', 'user5'),
('Ford', 'Focus', 2018, 'Battery needs to be replaced.', '1722655515090-download (2).jpg', 'user6'),
('Chevrolet', 'Malibu', 2017, 'Transmission shifts roughly.', '1722655515090-download (2).jpg', 'user7'),
('Chevrolet', 'Malibu', 2017, 'Suspension makes a clunking sound over bumps.', '1722655515090-download (2).jpg', 'user8'),
('Nissan', 'Altima', 2020, 'Windshield wipers are not functioning correctly.', '1722655515090-download (2).jpg', 'user9'),
('Nissan', 'Altima', 2020, 'Exhaust system is noisy.', '1722655515090-download (2).jpg', 'user10'),
('BMW', '3 Series', 2021, 'Car pulls to the left while driving.', '1722655515090-download (2).jpg', 'user11'),
('BMW', '3 Series', 2021, 'Check engine light is flickering.', '1722655515090-download (2).jpg', 'user12'),
('Mercedes-Benz', 'C-Class', 2021, 'Front brakes are squeaking.', '1722655515090-download (2).jpg', 'user13'),
('Mercedes-Benz', 'C-Class', 2021, 'Car’s air conditioning system is not working.', '1722655515090-download (2).jpg', 'user14'),
('Audi', 'A4', 2019, 'Steering wheel feels loose.', '1722655515090-download (2).jpg', 'user15'),
('Audi', 'A4', 2019, 'Engine misfires during acceleration.', '1722655515090-download (2).jpg', 'user16'),
('Volkswagen', 'Jetta', 2018, 'Clutch pedal is sticking.', '1722655515090-download (2).jpg', 'user17'),
('Volkswagen', 'Jetta', 2018, 'Headlights are dim.', '1722655515090-download (2).jpg', 'user18'),
('Hyundai', 'Elantra', 2017, 'Car shakes at high speeds.', '1722655515090-download (2).jpg', 'user19'),
('Hyundai', 'Elantra', 2017, 'Battery drains quickly.', '1722655515090-download (2).jpg', 'user20'),
('Toyota', 'Camry', 2020, 'Brake system warning light is on.', '1722655515090-download (2).jpg', 'user21'),
('Toyota', 'Camry', 2020, 'Engine coolant is leaking.', '1722655515090-download (2).jpg', 'user22'),
('Honda', 'Accord', 2019, 'Transmission fluid is leaking.', '1722655515090-download (2).jpg', 'user23'),
('Honda', 'Accord', 2019, 'Front suspension noise.', '1722655515090-download (2).jpg', 'user24'),
('Ford', 'Mustang', 2018, 'Exhaust system has a rattle.', '1722655515090-download (2).jpg', 'user25'),
('Ford', 'Mustang', 2018, 'AC compressor is making noise.', '1722655515090-download (2).jpg', 'user26'),
('Chevrolet', 'Cruze', 2017, 'Battery needs replacement.', '1722655515090-download (2).jpg', 'user27'),
('Chevrolet', 'Cruze', 2017, 'Oil pressure warning light is on.', '1722655515090-download (2).jpg', 'user28'),
('Nissan', 'Sentra', 2020, 'Power steering fluid is low.', '1722655515090-download (2).jpg', 'user29'),
('Nissan', 'Sentra', 2020, 'Wiper blades are worn out.', '1722655515090-download (2).jpg', 'user30'),
('BMW', '5 Series', 2021, 'Engine overheating issue.', '1722655515090-download (2).jpg', 'user31'),
('BMW', '5 Series', 2021, 'Suspension system needs alignment.', '1722655515090-download (2).jpg', 'user32'),
('Mercedes-Benz', 'E-Class', 2021, 'ABS warning light is on.', '1722655515090-download (2).jpg', 'user33'),
('Mercedes-Benz', 'E-Class', 2021, 'Cars infotainment system is unresponsive.', '1722655515090-download (2).jpg', 'user34'),
('Audi', 'Q5', 2019, 'Door locks are malfunctioning.', '1722655515090-download (2).jpg', 'user35'),
('Audi', 'Q5', 2019, 'Engine stalling intermittently.', '1722655515090-download (2).jpg', 'user36'),
('Volkswagen', 'Golf', 2018, 'Headlights are flickering.', '1722655515090-download (2).jpg', 'user37'),
('Volkswagen', 'Golf', 2018, 'Brake pads are worn out.', '1722655515090-download (2).jpg', 'user38'),
('Hyundai', 'Sonata', 2017, 'Engine light is on.', '1722655515090-download (2).jpg', 'user39'),
('Hyundai', 'Sonata', 2017, 'Transmission slipping.', '1722655515090-download (2).jpg', 'user40');


INSERT INTO solutions (problem_id, make, model, year, description, username) VALUES
(1, 'Toyota', 'Corolla', 2020, 'Replaced the air filter and fixed the strange noise.', 'user1'),
(2, 'Honda', 'Civic', 2019, 'Reset the check engine light after service.', 'user2'),
(3, 'Ford', 'Focus', 2018, 'Replaced the brake pads to stop squeaking.', 'user3'),
(4, 'Chevrolet', 'Malibu', 2017, 'Fixed the oil leak by tightening the oil pan.', 'user4'),
(5, 'Nissan', 'Altima', 2020, 'Recharged the AC system for better cooling.', 'user5'),
(6, 'BMW', '3 Series', 2021, 'Replaced the battery with a new one.', 'user6'),
(7, 'Mercedes-Benz', 'C-Class', 2021, 'Serviced the transmission for smoother shifting.', 'user7'),
(8, 'Audi', 'A4', 2019, 'Repaired the suspension to eliminate clunking sounds.', 'user8'),
(9, 'Volkswagen', 'Jetta', 2018, 'Replaced the windshield wipers and cleaned the windshield.', 'user9'),
(10, 'Hyundai', 'Elantra', 2017, 'Replaced the exhaust system to reduce noise.', 'user10'),
(11, 'Toyota', 'Camry', 2020, 'Realigned the wheels to prevent pulling.', 'user11'),
(12, 'Honda', 'Accord', 2019, 'Reset the check engine light after inspection.', 'user12'),
(13, 'Ford', 'Mustang', 2018, 'Replaced front brakes to stop squeaking.', 'user13'),
(14, 'Chevrolet', 'Cruze', 2017, 'Fixed the AC system to ensure proper functioning.', 'user14'),
(15, 'Nissan', 'Sentra', 2020, 'Tightened the steering components for better handling.', 'user15'),
(16, 'BMW', '5 Series', 2021, 'Replaced faulty ignition coils to fix misfiring.', 'user16'),
(17, 'Mercedes-Benz', 'E-Class', 2021, 'Repaired the clutch pedal mechanism.', 'user17'),
(18, 'Audi', 'Q5', 2019, 'Adjusted headlights for proper illumination.', 'user18'),
(19, 'Volkswagen', 'Golf', 2018, 'Balanced tires to reduce shaking at high speeds.', 'user19'),
(20, 'Hyundai', 'Sonata', 2017, 'Replaced the battery to prevent quick drainage.', 'user20'),
(21, 'Toyota', 'Corolla', 2020, 'Serviced the brake system and resolved warning light issue.', 'user21'),
(22, 'Honda', 'Civic', 2019, 'Fixed the coolant leak by replacing hoses.', 'user22'),
(23, 'Ford', 'Focus', 2018, 'Replaced the transmission fluid and fixed leaks.', 'user23'),
(24, 'Chevrolet', 'Malibu', 2017, 'Repaired front suspension to eliminate noise.', 'user24'),
(25, 'Nissan', 'Altima', 2020, 'Fixed the exhaust rattle by replacing the muffler.', 'user25'),
(26, 'BMW', '3 Series', 2021, 'Replaced the AC compressor for quieter operation.', 'user26'),
(27, 'Mercedes-Benz', 'C-Class', 2021, 'Replaced battery to resolve power issues.', 'user27'),
(28, 'Audi', 'A4', 2019, 'Resolved oil pressure issue with an oil change.', 'user28'),
(29, 'Volkswagen', 'Jetta', 2018, 'Top-up power steering fluid to restore functionality.', 'user29'),
(30, 'Hyundai', 'Elantra', 2017, 'Replaced worn-out wiper blades.', 'user30'),
(31, 'Toyota', 'Camry', 2020, 'Fixed overheating issue by replacing the thermostat.', 'user31'),
(32, 'Honda', 'Accord', 2019, 'Performed alignment to correct suspension issues.', 'user32'),
(33, 'Ford', 'Mustang', 2018, 'Resolved ABS warning by repairing the ABS module.', 'user33'),
(34, 'Chevrolet', 'Cruze', 2017, 'Updated infotainment system to fix unresponsiveness.', 'user34'),
(35, 'Nissan', 'Sentra', 2020, 'Repaired malfunctioning door locks.', 'user35'),
(36, 'BMW', '5 Series', 2021, 'Replaced faulty components causing engine stalling.', 'user36'),
(37, 'Mercedes-Benz', 'E-Class', 2021, 'Fixed flickering headlights by replacing bulbs.', 'user37'),
(38, 'Audi', 'Q5', 2019, 'Replaced worn brake pads.', 'user38'),
(39, 'Volkswagen', 'Golf', 2018, 'Repaired engine light issue by servicing the engine.', 'user39'),
(40, 'Hyundai', 'Sonata', 2017, 'Fixed transmission slipping by replacing the fluid.', 'user40');


