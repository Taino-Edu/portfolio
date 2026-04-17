import styles from '../styles/Skills.module.css';

const skillCategories = [
  {
    category: 'Back-end',
    skills: ['NestJS', 'Node.js', 'Rust', 'TypeScript', 'REST APIs', 'GraphQL', 'WebSocket'],
  },
  {
    category: 'Front-end',
    skills: ['Angular', 'React', 'TypeScript', 'HTML5', 'CSS3'],
  },
  {
    category: 'Banco de Dados',
    skills: ['SQLite', 'TypeORM', 'PostgreSQL', 'Firebase'],
  },
  {
    category: 'Linguagens',
    skills: ['TypeScript', 'Rust', 'JavaScript', 'Python', 'C#'],
  },
  {
    category: 'Arquitetura',
    skills: ['Clean Architecture', 'CRUD', 'DTOs & Pipes', 'Async/Await'],
  },
  {
    category: 'Ferramentas',
    skills: ['Git', 'GitHub', 'Vercel', 'VS Code', 'Zustand', 'Angular CDK'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Skills</h2>
          <p className={styles.subtitle}>Tecnologias e ferramentas do dia a dia</p>
        </div>

        <div className={styles.grid}>
          {skillCategories.map((category, index) => (
            <div key={index} className={styles.category}>
              <h3 className={styles.categoryTitle}>{category.category}</h3>
              <div className={styles.badges}>
                {category.skills.map((skill, i) => (
                  <span key={i} className={styles.badge}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
