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

INSERT INTO `phones` (`phone`, `storage`, `color`, `purchasedFor`, `repairs`, `repairCost`, `sellFor`, `profit`) VALUES ('iPhone 12 Pro Max', 256, 'Space Gray', 300, 'Screen Refurbish', 50, 400, 50);
INSERT INTO `phones` (`phone`, `storage`, `color`, `purchasedFor`, `repairs`, `repairCost`, `sellFor`, `profit`) VALUES ('iPhone 13 Pro', 128, 'Product Red', 310, 'Screen Refurbish', 50, 400, 40);