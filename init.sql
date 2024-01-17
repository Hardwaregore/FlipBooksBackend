CREATE DATABASE `FlipBooks`;
USE `FlipBooks`;

CREATE TABLE `phones` (
    `id` INT PRIMARY KEY AUTO_INCREMENT,
    `phone` VARCHAR(17) NOT NULL,
    `storage` INT NOT NULL,
    `color` VARCHAR(15) NOT NULL,
    `purchasedFor` INT NOT NULL,
    `repairs` VARCHAR(200),
    `repairCost` INT,
    `sellFor` INT NOT NULL,
    `profit` INT NOT NULL,
    `sold` BOOLEAN DEFAULT FALSE
);

CREATE TABLE `keys` (
    `id` INT PRIMARY KEY AUTO_INCREMENT,
    `apiKey` VARCHAR(200) NOT NULL
);

INSERT INTO `keys` (`apiKey`) VALUES ('sD&wwHJ6o8o&Jciu8!o4C&s65fLmJ&94fPm#sCvwS&D%mpibLXEog!Q&xJ@sq96GD7oxNjLwuQ#WCfv#@GP7Jz**L7RT8^5$zW%&tU&gEWbMVqE%aB$EeU5SjMgVacfA');

-- Test Data:

INSERT INTO `phones` (`phone`, `storage`, `color`, `purchasedFor`, `repairs`, `repairCost`, `sellFor`, `profit`) VALUES ('iPhone 12 Pro Max', 256, 'Space Gray', 300, 'Screen Refurbish', 50, 400, 50);
INSERT INTO `phones` (`phone`, `storage`, `color`, `purchasedFor`, `repairs`, `repairCost`, `sellFor`, `profit`) VALUES ('iPhone 13 Pro', 128, 'Product Red', 310, 'Screen Refurbish', 50, 400, 40);
