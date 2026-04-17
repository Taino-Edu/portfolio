import styles from '../styles/Hero.module.css';

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.label}>Desenvolvedor Full Stack</p>
          <h1 className={styles.name}>Eduardo Taino</h1>
          <p className={styles.description}>
            Foco em back-end com arquiteturas limpas e sistemas de alto desempenho.
            Especializado em <strong>NestJS</strong>, <strong>TypeScript</strong> e <strong>Rust</strong>.
          </p>
          <div className={styles.cta}>
            <a href="#projects" className={styles.btnPrimary}>Ver Projetos</a>
            <a
              href="https://github.com/Taino-Edu"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnSecondary}
            >
              GitHub
            </a>
          </div>
        </div>

        <div className={styles.visual}>
          <div className={styles.codeBlock}>
            <div className={styles.dots}>
              <span></span><span></span><span></span>
            </div>
            <pre className={styles.code}>
{`const dev = {
  name: "Eduardo Taino",
  focus: "Back-end",
  stack: [
    "NestJS",
    "TypeScript",
    "Rust",
    "Angular",
  ],
  arch: "Clean Architecture",
  status: "open to work",
};`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
