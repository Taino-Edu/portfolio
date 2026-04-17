'use client';
import { useState } from 'react';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          {/* Troque pelo seu nome ou logo */}
          <span>Taino.dev 🚀</span>
        </div>

        {/* Menu desktop */}
        <ul className={`${styles.navLinks} ${menuOpen ? styles.open : ''}`}>
          <li><a href="#home" onClick={() => setMenuOpen(false)}>Início</a></li>
          <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projetos</a></li>
          <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
          <li><a href="#chat" onClick={() => setMenuOpen(false)}>Chat IA</a></li>
          <li><a href="#footer" onClick={() => setMenuOpen(false)}>Contato</a></li>
        </ul>

        {/* Botão mobile */}
        <button
          className={styles.menuToggle}
          onClick={toggleMenu}
          aria-label="Abrir menu"
        >
          <span className={menuOpen ? styles.open : ''}></span>
          <span className={menuOpen ? styles.open : ''}></span>
          <span className={menuOpen ? styles.open : ''}></span>
        </button>
      </div>
    </nav>
  );
}
