import styles from '../styles/Skills.module.css';

const skillCategories = [
  {
    category: 'Back-end',
    icon: '⚙️',
    skills: ['NestJS', 'Node.js', 'Rust', 'TypeScript', 'REST APIs', 'GraphQL', 'WebSocket'],
  },
  {
    category: 'Front-end',
    icon: '🎨',
    skills: ['Angular', 'React', 'TypeScript', 'HTML5', 'CSS3', 'CSS Modules'],
  },
  {
    category: 'Banco de Dados',
    icon: '🗄️',
    skills: ['SQLite', 'TypeORM', 'In-Memory DB', 'PostgreSQL'],
  },
  {
    category: 'Outras Linguagens',
    icon: '🦾',
    skills: ['Rust', 'C#', 'Python', 'JavaScript'],
  },
  {
    category: 'Arquitetura & Padrões',
    icon: '🏗️',
    skills: ['Clean Architecture', 'CRUD', 'DTOs & Pipes', 'State Management', 'Async/Await'],
  },
  {
    category: 'Ferramentas',
    icon: '🛠️',
    skills: ['Git', 'GitHub', 'Vercel', 'VS Code', 'Zustand', 'Angular CDK'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <h2 className={styles.title}>Skills</h2>
        <p className={styles.subtitle}>Tecnologias e ferramentas que uso no dia a dia</p>

        <div className={styles.grid}>
          {skillCategories.map((category, index) => (
            <div key={index} className={styles.category}>
              <div className={styles.categoryHeader}>
                <span className={styles.icon}>{category.icon}</span>
                <h3 className={styles.categoryTitle}>{category.category}</h3>
              </div>
              <div className={styles.badges}>
                {category.skills.map((skill, i) => (
                  <span key={i} className={styles.badge}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
