<template>
  <section id="contact" class="section contact">
    <div class="container">
      <div class="contact-title">
        <p class="eyebrow">Contato</p>
        <h2>Vamos criar algo?</h2>
        <p>Estou disponível para oportunidades, parcerias e novos projetos.</p>
      </div>

      <div class="contact-grid">
        <div class="contact-methods">
          <a
            v-for="method in methods"
            :key="method.title"
            class="contact-method"
            :href="method.link"
            target="_blank"
            rel="noreferrer"
          >
            <strong>{{ method.title }}</strong>
            <span>{{ method.detail }}</span>
          </a>
        </div>

        <form class="contact-form" action="https://formspree.io/f/mpwjkpen" method="POST">
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
          <button class="button button-primary" type="submit">Enviar mensagem</button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactSection',
  props: {
    methods: {
      type: Array,
      required: true,
    },
  },
}
</script>
