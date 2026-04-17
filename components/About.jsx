import styles from '../styles/About.module.css';

const milestones = [
  {
    year: '2008',
    title: 'Os primeiros cliques',
    description:
      'Com 4 anos de idade, já estava explorando computadores — antes mesmo de aprender a escrever à mão, aprendeu a digitar no teclado.',
  },
  {
    year: '2018',
    title: 'A faísca: jogos e programação',
    description:
      'Sua grande amiga Helena foi quem o levou de vez para o mundo da programação, inspirando-o a criar jogos. A partir daí, código virou linguagem natural.',
  },
  {
    year: '2022',
    title: 'Ensinando o que aprendeu',
    description:
      'Deu aulas de programação — uma das formas mais sólidas de consolidar conhecimento. Transmitir lógica e pensamento computacional para outros reforçou sua base técnica.',
  },
  {
    year: 'Hoje',
    title: 'Junior Dev + Estudante + Freelancer',
    description:
      'Atualmente Auxiliar Programador (Junior) na TransSat, estudante, freelancer e CLT. Construindo sistemas reais, aprendendo na prática e expandindo o stack constantemente.',
  },
];

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Sobre Mim</h2>
          <p className={styles.subtitle}>
            Trajetória de quem cresceu junto com a tecnologia
          </p>
        </div>

        <div className={styles.content}>
          <div className={styles.intro}>
            <p className={styles.introText}>
              Me chamo <strong>Eduardo Taino</strong>. Minha relação com computadores
              começou muito antes de eu entender o que era código — tinha 4 anos quando
              aprendi a digitar, ainda antes de aprender a escrever com caneta. Tecnologia
              sempre foi minha segunda língua.
            </p>
            <p className={styles.introText}>
              Hoje atuo como desenvolvedor Full Stack com foco em back-end, construindo
              sistemas que vão de APIs RESTful a rastreamento de satélites em tempo real.
              Sou movido por desafios que exigem arquitetura sólida e código que funciona
              de verdade em produção.
            </p>

            <div className={styles.stats}>
              <div className={styles.stat}>
                <span className={styles.statValue}>20+</span>
                <span className={styles.statLabel}>anos com computadores</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statValue}>4+</span>
                <span className={styles.statLabel}>projetos em produção</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statValue}>3</span>
                <span className={styles.statLabel}>linguagens principais</span>
              </div>
            </div>
          </div>

          <div className={styles.timeline}>
            {milestones.map((item, index) => (
              <div key={index} className={styles.milestone}>
                <div className={styles.milestoneYear}>{item.year}</div>
                <div className={styles.milestoneContent}>
                  <h3 className={styles.milestoneTitle}>{item.title}</h3>
                  <p className={styles.milestoneDesc}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.currentStatus}>
          <h3 className={styles.statusTitle}>Status atual</h3>
          <div className={styles.statusGrid}>
            <div className={styles.statusItem}>
              <span className={styles.statusDot}></span>
              <div>
                <p className={styles.statusRole}>Auxiliar Programador</p>
                <p className={styles.statusOrg}>TransSat</p>
              </div>
            </div>
            <div className={styles.statusItem}>
              <span className={styles.statusDot}></span>
              <div>
                <p className={styles.statusRole}>Desenvolvedor Freelancer</p>
                <p className={styles.statusOrg}>Projetos independentes</p>
              </div>
            </div>
            <div className={styles.statusItem}>
              <span className={styles.statusDot}></span>
              <div>
                <p className={styles.statusRole}>Estudante</p>
                <p className={styles.statusOrg}>Em formação contínua</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
