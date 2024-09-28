CREATE DATABASE `mod4_final_virvil` /*!40100 DEFAULT CHARACTER SET utf8mb3 */ /*!80016 DEFAULT ENCRYPTION='N' */;

CREATE TABLE `platforms` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;
INSERT INTO `platforms` (`id`, `name`) VALUES 
('1', 'Amazon'),
('2', 'La casa del libro'),
('3', 'El corte ingles');

CREATE TABLE `books` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `year` varchar(255) NOT NULL,
  `category` varchar(255) NOT NULL,
  `platform_id` int unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `books_platforms_fk_idx` (`platform_id`),
  CONSTRAINT `books_platforms_fk` FOREIGN KEY (`platform_id`) REFERENCES `platforms` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
INSERT INTO `books` (`id`, `name`, `year`, `category`, `platform_id`) VALUES 
('1', 'Alicia en el país de las maravillas', 1908, "Aventuras", 1),
('2', 'En el nombre de la rosa', 1968, "Misterio", 2);


CREATE TABLE `characters` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `lastname` varchar(255) DEFAULT NULL,
  `book_id` int unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `books_characters_fk_idx` (`book_id`),
  CONSTRAINT `books_characters_fk` FOREIGN KEY (`book_id`) REFERENCES `books` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
