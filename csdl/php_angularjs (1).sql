-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Client :  127.0.0.1
-- Généré le :  Mar 13 Juin 2017 à 11:08
-- Version du serveur :  10.1.19-MariaDB
-- Version de PHP :  5.6.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `php_angularjs`
--

-- --------------------------------------------------------

--
-- Structure de la table `diemsinhvien`
--

CREATE TABLE `diemsinhvien` (
  `mssv` varchar(20) NOT NULL,
  `diem` int(2) NOT NULL,
  `tenmon` varchar(100) CHARACTER SET utf8 COLLATE utf8_vietnamese_ci NOT NULL,
  `diemchu` varchar(2) CHARACTER SET utf8 COLLATE utf8_vietnamese_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `diemsinhvien`
--

INSERT INTO `diemsinhvien` (`mssv`, `diem`, `tenmon`, `diemchu`) VALUES
('admin3', 1, 'Lập trình web', 'F');

-- --------------------------------------------------------

--
-- Structure de la table `thongtingiaovien`
--

CREATE TABLE `thongtingiaovien` (
  `msgv` varchar(10) CHARACTER SET utf8 COLLATE utf8_vietnamese_ci NOT NULL,
  `hoten` varchar(100) CHARACTER SET utf8 COLLATE utf8_vietnamese_ci NOT NULL,
  `diachi` varchar(100) CHARACTER SET utf8 COLLATE utf8_vietnamese_ci NOT NULL,
  `email` varchar(100) CHARACTER SET utf8 COLLATE utf8_vietnamese_ci NOT NULL,
  `sdt` bigint(20) NOT NULL,
  `tenmon` varchar(100) CHARACTER SET utf8 COLLATE utf8_vietnamese_ci NOT NULL,
  `avatar` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `thongtingiaovien`
--

INSERT INTO `thongtingiaovien` (`msgv`, `hoten`, `diachi`, `email`, `sdt`, `tenmon`, `avatar`) VALUES
('GV123', 'Trần thị bưởi', 'can tho cty', 'phucdangb1400718@gmail.com', 923167564, 'Lập trình web', 'avatar.jpg');

-- --------------------------------------------------------

--
-- Structure de la table `thongtinsinhvien`
--

CREATE TABLE `thongtinsinhvien` (
  `mssv` varchar(20) NOT NULL,
  `ho` varchar(20) CHARACTER SET utf8 COLLATE utf8_vietnamese_ci NOT NULL,
  `ten` varchar(20) CHARACTER SET utf8 COLLATE utf8_vietnamese_ci NOT NULL,
  `gioitinh` varchar(3) NOT NULL,
  `sdt` bigint(13) NOT NULL,
  `email` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `thongtinsinhvien`
--

INSERT INTO `thongtinsinhvien` (`mssv`, `ho`, `ten`, `gioitinh`, `sdt`, `email`) VALUES
('1234', '123', '123', 'nam', 923167564, '123433324@gmail.com'),
('admin', 'admin', 'admin', 'nam', 1, '123433324@gmail.com'),
('admin3', 'admin3', 'admin3', 'nam', 923167564, '123433324@gmail.com');

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `username` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `user`
--

INSERT INTO `user` (`username`, `password`) VALUES
('admin', '21232f297a57a5a743894a0e4a801fc3');

--
-- Index pour les tables exportées
--

--
-- Index pour la table `diemsinhvien`
--
ALTER TABLE `diemsinhvien`
  ADD PRIMARY KEY (`mssv`),
  ADD UNIQUE KEY `mssv` (`mssv`);

--
-- Index pour la table `thongtingiaovien`
--
ALTER TABLE `thongtingiaovien`
  ADD PRIMARY KEY (`msgv`);

--
-- Index pour la table `thongtinsinhvien`
--
ALTER TABLE `thongtinsinhvien`
  ADD PRIMARY KEY (`mssv`);

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`username`);

--
-- Contraintes pour les tables exportées
--

--
-- Contraintes pour la table `diemsinhvien`
--
ALTER TABLE `diemsinhvien`
  ADD CONSTRAINT `diemsinhvien_ibfk_1` FOREIGN KEY (`mssv`) REFERENCES `thongtinsinhvien` (`mssv`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
