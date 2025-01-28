// página de contato
import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="container-contato">
      <h2>Contato</h2>
      <p>
        Estamos ansiosos para ouvir você! Entre em contato conosco através dos
        detalhes abaixo ou envie-nos uma mensagem diretamente pelo formulário
      </p>
      <p>
        <strong>Endereço:</strong> 738 Av. Beira Mar, Fortaleza, CE
      </p>
      <p>
        <strong>Telefone:</strong> (85) 1234-5678
      </p>
      <p>
        <strong>Email:</strong> contato@cafedoamanha.com
      </p>
      <form
        action="https://formsubmit.co/contatocafecapacita@gmail.com"
        method="POST"
        className="form-contato"
      >
        <label htmlFor="nome">Nome:</label>
        <input type="text" id="nome" name="nome" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="mensagem">Mensagem: </label>
        <textarea name="mensagem" rows="4" id="mensagem" required></textarea>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Contact;
