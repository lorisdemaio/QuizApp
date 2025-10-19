-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Creato il: Ott 19, 2025 alle 15:14
-- Versione del server: 10.4.32-MariaDB
-- Versione PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `quizapp`
--

-- --------------------------------------------------------

--
-- Struttura della tabella `domande`
--

CREATE TABLE `domande` (
  `id` int(5) NOT NULL,
  `domanda` varchar(200) NOT NULL,
  `opzione_a` varchar(200) NOT NULL,
  `opzione_b` varchar(200) NOT NULL,
  `opzione_c` varchar(200) NOT NULL,
  `opzione_d` varchar(200) NOT NULL,
  `opzione_corretta` varchar(1) NOT NULL,
  `id_quiz` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dump dei dati per la tabella `domande`
--

INSERT INTO `domande` (`id`, `domanda`, `opzione_a`, `opzione_b`, `opzione_c`, `opzione_d`, `opzione_corretta`, `id_quiz`) VALUES
(1, 'Che cos’è l’hardware di un computer?', 'I programmi installati nel computer.', 'Le parti fisiche del computer.', 'I dati salvati nel computer.', 'Il sistema operativo.', 'B', 1),
(2, 'Qual è la funzione principale del sistema operativo?', 'Gestire solo i file audio.', 'Connettere il computer a Internet.', 'Gestire le risorse hardware e software.', 'Aumentare la velocità del computer', 'C', 1),
(3, 'Quale tra questi è un sistema operativo?', 'Microsoft Word.', 'Windows.', 'Google Chrome.', 'Intel Core i5.', 'B', 1),
(4, 'Che cos’è un file?', 'Un componente hardware.', 'Una raccolta di dati salvata in memoria.', 'Una parte del processore.', 'Una cartella del desktop.', 'B', 1),
(5, 'Cosa significa “bit”?', 'Una parte del mouse.', 'Un tipo di virus.', 'L’unità minima di informazione digitale.', 'Un programma di scrittura.', 'C', 1),
(6, 'Quale di questi dispositivi è una periferica di input?', 'Stampante.', 'Monitor.', 'Tastiera.', 'Altoparlante.', 'C', 1),
(7, 'Quale componente memorizza i dati in modo permanente?', 'RAM.', 'CPU.', 'Hard disk.', 'Scheda video.', 'C', 1),
(8, 'Cosa indica la sigla “CPU”?', 'Central Processing Unit.', 'Computer Personal Unit.', 'Control Power Utility.', 'Central Program User.', 'A', 1),
(9, 'Che cosa fa un browser web?', 'Gestisce file musicali.', 'Permette di navigare su Internet.', 'Protegge il computer dai virus.', 'Crea immagini digitali.', 'B', 1),
(10, 'Quale di questi è un motore di ricerca?', 'Chrome.', 'Google.', 'Windows.', 'Facebook.', 'B', 1),
(11, 'Cosa serve la RAM?', 'A salvare i dati in modo permanente.', 'A eseguire temporaneamente i programmi in uso.', 'A connettersi alla rete Wi-Fi.', 'A stampare i documenti.', 'B', 1),
(12, 'Che cos’è un virus informatico?', 'Un errore di sistema.', 'Un programma dannoso che si diffonde tra i file.', 'Un tipo di memoria.', 'Un aggiornamento di Windows.', 'B', 1),
(13, 'Quale di questi è un programma di videoscrittura?', 'Paint.', 'Word.', 'Excel.', 'PowerPoint', 'B', 1),
(14, 'Cosa indica la sigla “URL”?', 'User Reference Link.', 'Uniform Resource Locator.', 'Universal Resource List.', 'Unique Reference Locator.', 'B', 1),
(15, 'Quale tra questi è un formato di file immagine?', '.jpg', '.docx', '.mp3', '.txt', 'A', 1),
(16, 'Qual è la funzione principale del tasto “Ctrl”?', 'Accendere il computer.', 'Controllare la connessione Internet.', 'Usato insieme ad altri tasti per eseguire comandi rapidi.', 'Cancellare un testo.', 'C', 1),
(17, 'Cosa significa “Wi-Fi”?', 'Wireless Fidelity.', 'Wide Fiber.', 'Web Finder.', 'Windows File.', 'A', 1),
(18, 'Quale tra questi è un software antivirus?', 'Chrome.', 'Avast.', 'Excel.', 'Skype.', 'B', 1),
(19, 'Che cosa indica il termine “cloud”?', 'Un tipo di virus.', 'Una memoria esterna USB.', 'Un servizio di archiviazione online.', 'Un browser web.', 'C', 1),
(20, 'Quale tasto permette di cancellare un carattere a sinistra del cursore?', 'Esc.', 'Shift.', 'Backspace.', 'Tab.', 'C', 1);

-- --------------------------------------------------------

--
-- Struttura della tabella `quiz`
--

CREATE TABLE `quiz` (
  `id` int(5) NOT NULL,
  `titolo` varchar(100) NOT NULL,
  `descrizione` varchar(150) NOT NULL,
  `tema` varchar(7) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dump dei dati per la tabella `quiz`
--

INSERT INTO `quiz` (`id`, `titolo`, `descrizione`, `tema`) VALUES
(1, 'Informatica di base', 'Quiz di informatica di base: verifica le tue conoscenze sui concetti fondamentali di computer, software, hardware e internet.', '#3d6991');

-- --------------------------------------------------------

--
-- Struttura della tabella `risultati`
--

CREATE TABLE `risultati` (
  `id` int(5) NOT NULL,
  `quiz` varchar(100) NOT NULL,
  `risultato` int(5) NOT NULL,
  `id_utente` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dump dei dati per la tabella `risultati`
--

INSERT INTO `risultati` (`id`, `quiz`, `risultato`, `id_utente`) VALUES
(1, 'Informatica di base', 20, 1),
(2, 'Informatica di base', 20, 2),
(3, 'Informatica di base', 9, 2);

-- --------------------------------------------------------

--
-- Struttura della tabella `utenti`
--

CREATE TABLE `utenti` (
  `id` int(5) NOT NULL,
  `username` varchar(100) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dump dei dati per la tabella `utenti`
--

INSERT INTO `utenti` (`id`, `username`, `email`, `password`) VALUES
(2, 'Loris', 'demaioloris8@gmail.com', '$2b$10$amIZac9z3zmMQf89G5jgI.gUTHUDBpRJ640vIESHR.b/qCTp5TQc2');

--
-- Indici per le tabelle scaricate
--

--
-- Indici per le tabelle `domande`
--
ALTER TABLE `domande`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_quiz` (`id_quiz`);

--
-- Indici per le tabelle `quiz`
--
ALTER TABLE `quiz`
  ADD PRIMARY KEY (`id`);

--
-- Indici per le tabelle `risultati`
--
ALTER TABLE `risultati`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_utente` (`id_utente`);

--
-- Indici per le tabelle `utenti`
--
ALTER TABLE `utenti`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT per le tabelle scaricate
--

--
-- AUTO_INCREMENT per la tabella `risultati`
--
ALTER TABLE `risultati`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT per la tabella `utenti`
--
ALTER TABLE `utenti`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
