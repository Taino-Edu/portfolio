import styles from '../styles/Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.name}>Eduardo Taino</p>
          <p className={styles.tagline}>Desenvolvedor Full Stack — Foco em Back-end</p>

          <div className={styles.links}>
            <a href="https://github.com/Taino-Edu" target="_blank" rel="noopener noreferrer" className={styles.link}>
              GitHub
            </a>
            <a href="mailto:esusxd0@gmail.com" className={styles.link}>
              Email
            </a>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© {currentYear} Eduardo Taino</p>
        </div>
      </div>
    </footer>
  );
}
