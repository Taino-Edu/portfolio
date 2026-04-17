'use client';
import { useState, useRef, useEffect } from 'react';
import styles from '../styles/ChatSection.module.css';

export default function ChatSection() {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: 'Olá! Sou o assistente do Taino. Pode me perguntar sobre seus projetos, habilidades ou experiência.',
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMessage = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });

      const data = await response.json();
      if (data.error) throw new Error(data.error);

      setMessages((prev) => [...prev, { role: 'assistant', content: data.reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: 'Erro ao processar. Tente novamente.' },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <section id="chat" className={styles.chatSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Fale com o Assistente</h2>
          <p className={styles.subtitle}>
            Pergunte sobre projetos, tecnologias ou disponibilidade
          </p>
        </div>

        <div className={styles.chatBox}>
          <div className={styles.messagesArea}>
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`${styles.message} ${
                  msg.role === 'user' ? styles.userMessage : styles.botMessage
                }`}
              >
                <div className={styles.bubble}>{msg.content}</div>
              </div>
            ))}
            {loading && (
              <div className={`${styles.message} ${styles.botMessage}`}>
                <div className={styles.bubble}>
                  <span className={styles.typing}>
                    <span></span><span></span><span></span>
                  </span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className={styles.inputArea}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Faça uma pergunta..."
              className={styles.input}
              disabled={loading}
            />
            <button
              onClick={sendMessage}
              disabled={loading || !input.trim()}
              className={styles.sendButton}
            >
              Enviar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
