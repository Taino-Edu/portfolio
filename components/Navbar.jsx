'use client';
import { useState } from 'react';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <span>Taino</span>
        </div>

        <ul className={`${styles.navLinks} ${menuOpen ? styles.open : ''}`}>
          <li><a href="#home" onClick={() => setMenuOpen(false)}>Início</a></li>
          <li><a href="#about" onClick={() => setMenuOpen(false)}>Sobre</a></li>
          <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projetos</a></li>
          <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
          <li><a href="#chat" onClick={() => setMenuOpen(false)}>Contato</a></li>
        </ul>

        <button
          className={styles.menuToggle}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}
