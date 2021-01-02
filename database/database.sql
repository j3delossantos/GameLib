-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 02, 2021 at 06:54 PM
-- Server version: 10.1.30-MariaDB
-- PHP Version: 7.1.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ng_games_db`
--
CREATE DATABASE IF NOT EXISTS `ng_games_db` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `ng_games_db`;

-- --------------------------------------------------------

--
-- Table structure for table `games`
--

CREATE TABLE IF NOT EXISTS `games` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(180) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `image` varchar(200) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `games`
--

INSERT INTO `games` (`id`, `title`, `description`, `image`, `created_at`) VALUES
(1, 'Need For Speed', 'The bes car game', 'https://as.com/meristation/imagenes/2019/08/19/noticias/1566241104_969595_1566241177_noticia_normal.jpg', '2021-01-01 01:21:03'),
(2, 'Mario Bros', 'A good game', 'https://as.com/meristation/imagenes/2019/08/19/noticias/1566241104_969595_1566241177_noticia_normal.jpg', '2021-01-01 01:26:17'),
(9, 'Leag Of Legends', 'Un juego muy famoso y entretenido', 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltcfa4652c8d383f56/5e21837f63d1b6503160d39b/Home-page.jpg', '2021-01-01 22:44:26'),
(12, 'Angri birdsvvv', 'Un juego para mobile muy bueno ', 'https://www.frikipandi.com/wp-content/uploads/2010/10/andry-birds-660x330.jpg', '2021-01-02 16:06:18');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
