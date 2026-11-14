export default function ContactSection({ methods }) {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="contact-title">
          <p className="eyebrow">Contato</p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <h3>Me encontre por aqui</h3>
            <p>
              Para propostas, dúvidas ou convites, envie uma mensagem pelo formulário
              ou escolha um dos canais profissionais abaixo.
            </p>

            <div className="contact-methods">
              {methods.map((method) => (
                <a
                  key={method.title}
                  className="contact-method"
                  href={method.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <strong>{method.title}</strong>
                  <span>{method.detail}</span>
                </a>
              ))}
            </div>
          </div>

          <form className="contact-form" action="https://formspree.io/f/mpwjkpen" method="POST">
            <h3>Envie uma mensagem</h3>
            <label>
              Nome
              <input type="text" name="name" placeholder="Seu nome" required />
            </label>
            <label>
              Email
              <input type="email" name="email" placeholder="seu@email.com" required />
            </label>
            <label>
              Mensagem
              <textarea name="message" rows="5" placeholder="Escreva sua mensagem" required></textarea>
            </label>
            <button className="button button-primary" type="submit">Enviar mensagem</button>
          </form>
        </div>
      </div>
    </section>
  )
}
