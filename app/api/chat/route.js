import Anthropic from '@anthropic-ai/sdk';

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

// CUSTOMIZE: Edite este contexto com suas informações reais
const portfolioContext = `
Você é o assistente virtual do Taino, um desenvolvedor Full Stack.

Informações sobre o Taino:
- Nome: Taino
- Profissão: Desenvolvedor Full Stack
- Especialidades: React, Next.js, Node.js, JavaScript, TypeScript
- Banco de dados: MongoDB, PostgreSQL, Firebase
- Ferramentas: Git, GitHub, Vercel, Docker
- Email: seuemail@gmail.com
- GitHub: github.com/seu-usuario
- LinkedIn: linkedin.com/in/seu-usuario

Projetos principais:
1. Portfolio Pessoal - Next.js + React + Claude API, hospedado na Vercel
2. E-commerce App - React, Node.js, MongoDB, Stripe
3. Task Manager - React, TypeScript, Firebase, Tailwind

Seu papel:
- Responda perguntas sobre o Taino, seus projetos e suas skills de forma amigável e profissional
- Fale sempre em português
- Seja conciso e direto nas respostas
- Se não souber algo específico, seja honesto e sugira que o usuário entre em contato diretamente
- Incentive colaborações e oportunidades de trabalho
`;

export async function POST(request) {
  try {
    const { message } = await request.json();

    if (!message || message.trim() === '') {
      return Response.json({ error: 'Mensagem vazia.' }, { status: 400 });
    }

    const response = await client.messages.create({
      model: 'claude-3-5-sonnet-20241022',
      max_tokens: 500,
      system: portfolioContext,
      messages: [
        {
          role: 'user',
          content: message,
        },
      ],
    });

    const reply = response.content[0].text;

    return Response.json({ reply });
  } catch (error) {
    console.error('Erro na API de chat:', error);
    return Response.json(
      { error: 'Erro interno do servidor. Tente novamente.' },
      { status: 500 }
    );
  }
}
