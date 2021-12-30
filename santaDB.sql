-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema santagift
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema santagift
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `santagift` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `santagift` ;

-- -----------------------------------------------------
-- Table `santagift`.`role`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `santagift`.`role` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(20) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 6
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `santagift`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `santagift`.`user` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(255) NULL DEFAULT NULL,
  `password` VARCHAR(255) NULL DEFAULT NULL,
  `username` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `UKsb8bbouer5wak8vyiiy4pf2bx` (`username` ASC) VISIBLE,
  UNIQUE INDEX `UKob8kqyqqgmefl0aco34akdtpe` (`email` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `santagift`.`user_roles`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `santagift`.`user_roles` (
  `user_id` BIGINT NOT NULL,
  `role_id` INT NOT NULL,
  PRIMARY KEY (`user_id`, `role_id`),
  INDEX `FKrhfovtciq1l558cw6udg0h0d3` (`role_id` ASC) VISIBLE,
  CONSTRAINT `FK55itppkw3i07do3h7qoclqd4k`
    FOREIGN KEY (`user_id`)
    REFERENCES `santagift`.`user` (`id`),
  CONSTRAINT `FKrhfovtciq1l558cw6udg0h0d3`
    FOREIGN KEY (`role_id`)
    REFERENCES `santagift`.`role` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `santagift`.`gift`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `santagift`.`gift` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(45) NOT NULL,
  `description` VARCHAR(45) NULL,
  `img` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `santagift`.`user_has_gift`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `santagift`.`user_has_gift` (
  `user_id` BIGINT NOT NULL,
  `gift_id` INT NOT NULL,
  PRIMARY KEY (`user_id`, `gift_id`),
  INDEX `fk_user_has_gift_gift1_idx` (`gift_id` ASC) VISIBLE,
  INDEX `fk_user_has_gift_user1_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_user_has_gift_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `santagift`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_has_gift_gift1`
    FOREIGN KEY (`gift_id`)
    REFERENCES `santagift`.`gift` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
