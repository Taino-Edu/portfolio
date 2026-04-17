import styles from '../styles/Projects.module.css';

const projects = [
  {
    title: 'OrbitalWatch',
    description:
      'Rastreamento em tempo real de satélites e aeronaves. Backend em Rust com WebSocket, algoritmo SGP4 para propagação orbital e visualização 3D. Integração com Celestrak e OpenSky Network.',
    techs: ['Rust', 'WebSocket', 'JavaScript', 'Globe.gl', 'SGP4'],
    github: 'https://github.com/Taino-Edu/telemetria-de-sat-lites-e-avi-es',
    featured: true,
  },
  {
    title: 'Task Dashboard',
    description:
      'Gestão de tarefas com dashboard em tempo real e métricas de progresso. Stack moderna com GraphQL, TypeORM e SQLite no back-end, Angular 17 no front-end.',
    techs: ['Angular 17', 'NestJS', 'GraphQL', 'TypeORM', 'SQLite'],
    github: 'https://github.com/Taino-Edu/Projeto-semifinal',
    featured: false,
  },
  {
    title: 'Matrix Game',
    description:
      'Jogo tático em grid com síntese de áudio procedural via Web Audio API, gerando 4 estilos musicais dinâmicos. Conta com pathfinding e enemy AI.',
    techs: ['React', 'TypeScript', 'Zustand', 'Web Audio API'],
    github: 'https://github.com/Taino-Edu/fragmento1',
    featured: false,
  },
  {
    title: 'Valinor Kanban',
    description:
      'Aplicação Kanban fullstack com drag-and-drop, CRUD completo e API REST. Angular com CDK no front, NestJS com DTOs e Pipes no back-end.',
    techs: ['Angular', 'NestJS', 'TypeScript', 'REST API'],
    github: 'https://github.com/Taino-Edu/valinor',
    featured: false,
  },
  {
    title: 'API de Autenticação',
    description:
      'Serviço de autenticação stateless com JWT, refresh tokens e controle de permissões por roles. Guards customizados, interceptors e validação de payload com class-validator.',
    techs: ['NestJS', 'TypeScript', 'JWT', 'PostgreSQL', 'TypeORM'],
    github: 'https://github.com/Taino-Edu',
    featured: false,
  },
  {
    title: 'Portfólio',
    description:
      'Este portfólio — construído com Next.js 14, CSS Modules e um assistente de IA via Gemini API. Deploy automatizado via Vercel com variáveis de ambiente seguras.',
    techs: ['Next.js 14', 'React', 'CSS Modules', 'Gemini API', 'Vercel'],
    github: 'https://github.com/Taino-Edu/portfolio',
    featured: false,
  },
];

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Projetos</h2>
          <p className={styles.subtitle}>
            Da telemetria espacial a jogos com IA — projetos que mostram como penso e o que construo
          </p>
        </div>

        <div className={styles.grid}>
          {projects.map((project, index) => (
            <div
              key={index}
              className={`${styles.card} ${project.featured ? styles.featured : ''}`}
            >
              {project.featured && (
                <span className={styles.featuredBadge}>Destaque</span>
              )}
              <h3 className={styles.cardTitle}>{project.title}</h3>
              <p className={styles.cardDescription}>{project.description}</p>
              <div className={styles.techs}>
                {project.techs.map((tech, i) => (
                  <span key={i} className={styles.techTag}>{tech}</span>
                ))}
              </div>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                Ver no GitHub →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
