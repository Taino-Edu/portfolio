import styles from '../styles/ChatSection.module.css';

// Chat com IA desativado temporariamente.
// Para ativar: crie uma conta em console.anthropic.com,
// gere uma API Key e adicione no .env.local como ANTHROPIC_API_KEY=sua_chave

export default function ChatSection() {
  return (
    <section id="chat" className={styles.chatSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Entre em Contato</h2>
        <p className={styles.subtitle}>
          Topou uma ideia? Tem uma oportunidade? Me chama!
        </p>

        <div className={styles.contactCards}>
          <a
            href="https://github.com/Taino-Edu"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactCard}
          >
            <span className={styles.contactIcon}>💻</span>
            <div>
              <p className={styles.contactLabel}>GitHub</p>
              <p className={styles.contactValue}>github.com/Taino-Edu</p>
            </div>
          </a>

          <a
            href="mailto:esusxd0@gmail.com"
            className={styles.contactCard}
          >
            <span className={styles.contactIcon}>📧</span>
            <div>
              <p className={styles.contactLabel}>Email</p>
              <p className={styles.contactValue}>esusxd0@gmail.com</p>
            </div>
          </a>
        </div>

        <div className={styles.availabilityBadge}>
          <span className={styles.dot}></span>
          Disponível para projetos e oportunidades
        </div>
      </div>
    </section>
  );
}
