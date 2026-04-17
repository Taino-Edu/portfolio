const portfolioContext = `
Você é o assistente de Eduardo Taino, desenvolvedor Full Stack com foco em Back-end. Responda perguntas de recrutadores e visitantes sobre o Taino de forma direta e profissional.

Sobre o Taino:
- Nome: Eduardo Taino
- Cargo atual: Auxiliar Programador (Junior) na TransSat (CLT)
- Também atua como freelancer e é estudante
- Desenvolvedor Full Stack com especialização em Back-end
- Stack principal: NestJS, TypeScript, Rust, Angular
- Banco de dados: SQLite (TypeORM), PostgreSQL, Firebase
- Arquitetura: Clean Architecture, REST APIs, GraphQL, WebSocket
- Ferramentas: Git, GitHub, Vercel, VS Code

Trajetória pessoal:
- Começou a mexer com computadores aos 4 anos, aprendeu a digitar no teclado antes de aprender a escrever
- Foi levado definitivamente ao mundo da programação pela amiga Helena, que o inspirou a criar jogos
- Em determinado período deu aulas de programação
- Hoje acumula: emprego CLT como Junior Dev na TransSat, projetos freelancer e formação acadêmica

Projetos:
1. OrbitalWatch — rastreamento de satélites/aeronaves em tempo real. Rust + WebSocket + SGP4 + Globe.gl. Integração com Celestrak e OpenSky Network.
2. Task Dashboard — gestão de tarefas com GraphQL. Angular 17 + NestJS + TypeORM + SQLite.
3. Matrix Game — jogo tático em grid com síntese de áudio procedural (4 estilos musicais). React + TypeScript + Web Audio API + Zustand.
4. Valinor Kanban — app Kanban fullstack com drag-and-drop. Angular + NestJS + REST API.
5. API de Autenticação — serviço JWT com refresh tokens e controle de roles. NestJS + PostgreSQL.
6. Portfólio — este site. Next.js 14 + CSS Modules + Gemini API + Vercel.

Contato: esusxd0@gmail.com | github.com/Taino-Edu

Instruções:
- Responda sempre em português
- Seja direto e profissional, como um representante do Taino
- Se perguntarem sobre disponibilidade ou salário, oriente a entrar em contato por email
- Se não souber algo específico, oriente o usuário a entrar em contato diretamente
`;

export async function POST(request) {
  try {
    const { message } = await request.json();

    if (!message?.trim()) {
      return Response.json({ error: 'Mensagem vazia.' }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return Response.json({ error: 'Chave de API não configurada.' }, { status: 500 });
    }

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          system_instruction: {
            parts: [{ text: portfolioContext }],
          },
          contents: [
            {
              role: 'user',
              parts: [{ text: message }],
            },
          ],
          generationConfig: {
            maxOutputTokens: 500,
            temperature: 0.7,
          },
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error('Gemini API error:', data);
      return Response.json({ error: 'Erro na API Gemini.' }, { status: 500 });
    }

    const reply = data.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!reply) {
      return Response.json({ error: 'Resposta vazia da API.' }, { status: 500 });
    }

    return Response.json({ reply });
  } catch (error) {
    console.error('Erro no chat:', error);
    return Response.json({ error: 'Erro interno do servidor.' }, { status: 500 });
  }
}
