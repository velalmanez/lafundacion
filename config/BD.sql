USE `bd_lafundacion` ;

-- -----------------------------------------------------
-- Table `bd_lafundacion`.`sis_atletas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bd_lafundacion`.`sis_atletas` (
  `id_user` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(60) NOT NULL,
  `apPaterno` VARCHAR(60) NOT NULL,
  `apMaterno` VARCHAR(60) NULL,
  `email` VARCHAR(250) NOT NULL,
  `squat` VARCHAR(10) NULL,
  `benchPress` VARCHAR(10) NULL,
  `deadLift` VARCHAR(10) NULL,
  `unidadMedida` VARCHAR(4) NULL,
  PRIMARY KEY (`id_user`),
  UNIQUE INDEX `id_sis_users_UNIQUE` (`id_user` ASC) VISIBLE)
ENGINE = InnoDB;


INSERT INTO `sis_atletas` (nombre, apPaterno, apMaterno, email, squat, benchPress, deadLift, unidadMedida)
VALUES ('ALEKS IVAN','VELAZQUEZ', 'ARRIAGA', 'ivanvelazquez@epluribusunvm.com', '205', '140', '235', 'kg');

SELECT * FROM sis_atletas