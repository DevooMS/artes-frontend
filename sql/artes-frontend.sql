-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Creato il: Mag 11, 2023 alle 21:01
-- Versione del server: 10.4.28-MariaDB
-- Versione PHP: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `artes-frontend`
--

-- --------------------------------------------------------

--
-- Struttura della tabella `attivita`
--

CREATE TABLE `attivita` (
  `idActivity_A` int(11) NOT NULL,
  `nome_attivita` varchar(15) NOT NULL,
  `descrizione` text NOT NULL,
  `testo` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dump dei dati per la tabella `attivita`
--

INSERT INTO `attivita` (`idActivity_A`, `nome_attivita`, `descrizione`, `testo`) VALUES
(1, 'Attivita_1', 'attivita_desc1', 'attivita_testo1'),
(2, 'Attivita_2', 'attivita_desc2', 'attivita_testo2'),
(3, 'Attivita_3', 'attivita_desc3', 'attivita_testo3'),
(4, 'Attivita_4', 'attivita_desc4', 'attivita_testo4'),
(5, 'Attivita_5', 'attivita_desc5', 'attivita_testo5');

-- --------------------------------------------------------

--
-- Struttura della tabella `attivita_protocollo`
--

CREATE TABLE `attivita_protocollo` (
  `idActivity_protocollo` int(11) NOT NULL,
  `nome_attivita` varchar(15) NOT NULL,
  `descrizione` text NOT NULL,
  `idPhase` int(11) NOT NULL,
  `posizione_content` int(11) NOT NULL,
  `attivitaProtocollo_A` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dump dei dati per la tabella `attivita_protocollo`
--

INSERT INTO `attivita_protocollo` (`idActivity_protocollo`, `nome_attivita`, `descrizione`, `idPhase`, `posizione_content`, `attivitaProtocollo_A`) VALUES
(1, 'Attivita_1', 'attivita_desc1', 53, 0, 13),
(4, 'Attivita_4', 'attivita_desc4', 53, 1, 14),
(1, 'Attivita_1', 'attivita_desc1', 65, 0, 21);

-- --------------------------------------------------------

--
-- Struttura della tabella `chat`
--

CREATE TABLE `chat` (
  `idChat_A` int(11) NOT NULL,
  `testo` text NOT NULL,
  `idPhase` int(11) NOT NULL,
  `posizione_content` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dump dei dati per la tabella `chat`
--

INSERT INTO `chat` (`idChat_A`, `testo`, `idPhase`, `posizione_content`) VALUES
(5, 'Provolo', 54, 1),
(8, 'Provolo', 66, 0),
(9, 'prova', 66, 1);

-- --------------------------------------------------------

--
-- Struttura della tabella `fasi`
--

CREATE TABLE `fasi` (
  `idPhase_A` int(11) NOT NULL,
  `time` varchar(50) NOT NULL,
  `nome` varchar(25) NOT NULL,
  `idP` int(11) NOT NULL,
  `posizioni` int(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dump dei dati per la tabella `fasi`
--

INSERT INTO `fasi` (`idPhase_A`, `time`, `nome`, `idP`, `posizioni`) VALUES
(53, '5min', 'TemplateFaseStage1', 18, 0),
(54, '2min', 'TemplateFaseStage2', 18, 1),
(65, '5min', 'TemplateFaseStage1', 24, 0),
(66, '2min', 'TemplateFaseStage2', 24, 1);

-- --------------------------------------------------------

--
-- Struttura della tabella `fasi_template`
--

CREATE TABLE `fasi_template` (
  `idTemplate` int(11) NOT NULL,
  `idPhaseT_A` int(25) NOT NULL,
  `nome` varchar(25) NOT NULL,
  `posizioni` int(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dump dei dati per la tabella `fasi_template`
--

INSERT INTO `fasi_template` (`idTemplate`, `idPhaseT_A`, `nome`, `posizioni`) VALUES
(4, 10, 'TemplateFase1', 0),
(4, 11, 'TemplateFase2', 1),
(4, 12, 'TemplateFase3', 2),
(2, 13, 'TemplateFaseStage1', 0),
(2, 14, 'TemplateFaseStage2', 1);

-- --------------------------------------------------------

--
-- Struttura della tabella `protocollo`
--

CREATE TABLE `protocollo` (
  `idP_A` int(11) NOT NULL,
  `protocolName` varchar(50) NOT NULL,
  `nickname_utente` varchar(25) NOT NULL,
  `idTemplate` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dump dei dati per la tabella `protocollo`
--

INSERT INTO `protocollo` (`idP_A`, `protocolName`, `nickname_utente`, `idTemplate`) VALUES
(18, 'ProtocolCOPY', 'UserABC', 2),
(24, 'ABZ', 'User123', 2);

-- --------------------------------------------------------

--
-- Struttura della tabella `template`
--

CREATE TABLE `template` (
  `idTemplate` int(11) NOT NULL,
  `nomeTemplate` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dump dei dati per la tabella `template`
--

INSERT INTO `template` (`idTemplate`, `nomeTemplate`) VALUES
(2, 'Template2'),
(4, 'Template1');

-- --------------------------------------------------------

--
-- Struttura della tabella `utente`
--

CREATE TABLE `utente` (
  `username` varchar(25) NOT NULL,
  `email` varchar(50) NOT NULL,
  `nome` varchar(25) NOT NULL,
  `cognome` varchar(25) NOT NULL,
  `password` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dump dei dati per la tabella `utente`
--

INSERT INTO `utente` (`username`, `email`, `nome`, `cognome`, `password`) VALUES
('User123', 'a@gmail.com', 'admin', 'admin', '7815696ecbf1c96e6894b779456d330e'),
('UserABC', 'b@gmail.com', 'b', 'ab', '7815696ecbf1c96e6894b779456d330e');

--
-- Indici per le tabelle scaricate
--

--
-- Indici per le tabelle `attivita`
--
ALTER TABLE `attivita`
  ADD PRIMARY KEY (`idActivity_A`);

--
-- Indici per le tabelle `attivita_protocollo`
--
ALTER TABLE `attivita_protocollo`
  ADD PRIMARY KEY (`attivitaProtocollo_A`),
  ADD KEY `attivita_foreignkey` (`idPhase`),
  ADD KEY `attivita_protocollo_foreignkey` (`idActivity_protocollo`);

--
-- Indici per le tabelle `chat`
--
ALTER TABLE `chat`
  ADD PRIMARY KEY (`idChat_A`),
  ADD KEY `chat_foreignkey` (`idPhase`);

--
-- Indici per le tabelle `fasi`
--
ALTER TABLE `fasi`
  ADD PRIMARY KEY (`idPhase_A`),
  ADD KEY `fasi_foreignkey` (`idP`);

--
-- Indici per le tabelle `fasi_template`
--
ALTER TABLE `fasi_template`
  ADD PRIMARY KEY (`idPhaseT_A`),
  ADD KEY `fase_template_foreignkey` (`idTemplate`);

--
-- Indici per le tabelle `protocollo`
--
ALTER TABLE `protocollo`
  ADD PRIMARY KEY (`idP_A`),
  ADD KEY `utente_nickname_foreignkey` (`nickname_utente`),
  ADD KEY `Idtemplate_foreignkey` (`idTemplate`);

--
-- Indici per le tabelle `template`
--
ALTER TABLE `template`
  ADD PRIMARY KEY (`idTemplate`);

--
-- Indici per le tabelle `utente`
--
ALTER TABLE `utente`
  ADD PRIMARY KEY (`username`);

--
-- AUTO_INCREMENT per le tabelle scaricate
--

--
-- AUTO_INCREMENT per la tabella `attivita`
--
ALTER TABLE `attivita`
  MODIFY `idActivity_A` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT per la tabella `attivita_protocollo`
--
ALTER TABLE `attivita_protocollo`
  MODIFY `attivitaProtocollo_A` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT per la tabella `chat`
--
ALTER TABLE `chat`
  MODIFY `idChat_A` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT per la tabella `fasi`
--
ALTER TABLE `fasi`
  MODIFY `idPhase_A` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=67;

--
-- AUTO_INCREMENT per la tabella `fasi_template`
--
ALTER TABLE `fasi_template`
  MODIFY `idPhaseT_A` int(25) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT per la tabella `protocollo`
--
ALTER TABLE `protocollo`
  MODIFY `idP_A` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT per la tabella `template`
--
ALTER TABLE `template`
  MODIFY `idTemplate` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Limiti per le tabelle scaricate
--

--
-- Limiti per la tabella `attivita_protocollo`
--
ALTER TABLE `attivita_protocollo`
  ADD CONSTRAINT `attivita_foreignkey` FOREIGN KEY (`idPhase`) REFERENCES `fasi` (`idPhase_A`),
  ADD CONSTRAINT `attivita_protocollo_foreignkey` FOREIGN KEY (`idActivity_protocollo`) REFERENCES `attivita` (`idActivity_A`);

--
-- Limiti per la tabella `chat`
--
ALTER TABLE `chat`
  ADD CONSTRAINT `chat_foreignkey` FOREIGN KEY (`idPhase`) REFERENCES `fasi` (`idPhase_A`);

--
-- Limiti per la tabella `fasi`
--
ALTER TABLE `fasi`
  ADD CONSTRAINT `fasi_foreignkey` FOREIGN KEY (`idP`) REFERENCES `protocollo` (`idP_A`);

--
-- Limiti per la tabella `fasi_template`
--
ALTER TABLE `fasi_template`
  ADD CONSTRAINT `fase_template_foreignkey` FOREIGN KEY (`idTemplate`) REFERENCES `template` (`idTemplate`),
  ADD CONSTRAINT `fasi_template_foreignkey` FOREIGN KEY (`idTemplate`) REFERENCES `template` (`idTemplate`);

--
-- Limiti per la tabella `protocollo`
--
ALTER TABLE `protocollo`
  ADD CONSTRAINT `Idtemplate_foreignkey` FOREIGN KEY (`idTemplate`) REFERENCES `template` (`idTemplate`),
  ADD CONSTRAINT `utente_nickname_foreignkey` FOREIGN KEY (`nickname_utente`) REFERENCES `utente` (`username`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
