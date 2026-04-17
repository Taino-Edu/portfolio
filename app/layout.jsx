import '../styles/globals.css';
import Navbar from '../components/Navbar';

export const metadata = {
  title: 'Eduardo Taino | Desenvolvedor Full Stack',
  description:
    'Portfolio de Eduardo Taino, desenvolvedor Full Stack com foco em Back-end. Especialista em NestJS, Rust, TypeScript e Angular.',
  keywords: ['portfolio', 'desenvolvedor', 'backend', 'nestjs', 'rust', 'typescript', 'angular', 'fullstack'],
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
