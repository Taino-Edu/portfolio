import styles from '../styles/Projects.module.css';

const projects = [
  {
    title: 'OrbitalWatch',
    description:
      'Sistema de rastreamento em tempo real de satélites e aeronaves. Backend em Rust com WebSocket, algoritmo SGP4 para propagação orbital e visualização 3D do globo. Integração com APIs externas como Celestrak e OpenSky Network.',
    techs: ['Rust', 'WebSocket', 'JavaScript', 'Globe.gl', 'SGP4'],
    github: 'https://github.com/Taino-Edu/telemetria-de-sat-lites-e-avi-es',
    demo: '',
    highlight: true,
  },
  {
    title: 'Task Dashboard',
    description:
      'Aplicação de gestão de tarefas com dashboard em tempo real, métricas de progresso e design Glassmorphism. Stack moderna com GraphQL, TypeORM e SQLite no back-end e Angular 17 no front-end.',
    techs: ['Angular 17', 'NestJS', 'GraphQL', 'TypeORM', 'SQLite'],
    github: 'https://github.com/Taino-Edu/Projeto-semifinal',
    demo: '',
    highlight: false,
  },
  {
    title: 'Matrix Game',
    description:
      'Jogo tático em grid com síntese de áudio procedural — gera 4 estilos musicais dinâmicos via Web Audio API. Conta com pathfinding, enemy AI e arquitetura modular com React e Zustand.',
    techs: ['React', 'TypeScript', 'Zustand', 'Web Audio API', 'CSS Modules'],
    github: 'https://github.com/Taino-Edu/fragmento1',
    demo: '',
    highlight: false,
  },
  {
    title: 'Valinor Kanban',
    description:
      'Aplicação Kanban fullstack com drag-and-drop, CRUD completo e persistência via API REST. Frontend em Angular com CDK, backend robusto em NestJS com DTOs, Pipes e validação.',
    techs: ['Angular', 'NestJS', 'TypeScript', 'REST API', 'Angular CDK'],
    github: 'https://github.com/Taino-Edu/valinor',
    demo: '',
    highlight: false,
  },
];

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <h2 className={styles.title}>Projetos</h2>
        <p className={styles.subtitle}>
          Alguns dos projetos que desenvolvi — da telemetria espacial a jogos com IA
        </p>

        <div className={styles.grid}>
          {projects.map((project, index) => (
            <div
              key={index}
              className={`${styles.card} ${project.highlight ? styles.highlighted : ''}`}
            >
              {project.highlight && (
                <span className={styles.highlightBadge}>⭐ Destaque</span>
              )}
              <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>{project.title}</h3>
              </div>
              <p className={styles.cardDescription}>{project.description}</p>
              <div className={styles.techs}>
                {project.techs.map((tech, i) => (
                  <span key={i} className={styles.techTag}>
                    {tech}
                  </span>
                ))}
              </div>
              <div className={styles.links}>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.linkBtn}
                >
                  GitHub
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.linkBtn} ${styles.demoBtn}`}
                  >
                    Demo ao vivo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
