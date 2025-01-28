//página de contato
import React from 'react';
import "./Contact.css";

const Contact = () => {
    return (
        <div class="container" >
            <h2>Contato</h2>
            <p>
                Estamos ansiosos para ouvir você! Entre em contato consosco através dos detalhes abaixo ou envie-nos uma mensagem diretamente pelo formulário
            </p>
            <p><strong>Endereço:</strong>738 Av. Beira Mar, Fortaleza, CE</p>
            <p><strong>Telefone:</strong> (85) 1234-5678</p>
            <p><strong>Email:</strong>contato@cafedoamanha.com</p>
            <form action="https://formsubmit.co/contatocafecapacita@gmail.com" method="POST" class="form-contato">

            <label for="nome">Nome:</label>
            <input type="text" id="nome" name="nome" required />
            
            <label for="email">Email:</label>
            <input type="text" id="email " name="email" required />

            <label for="mensagem">Mensagem: </label>
            <textarea name="mensagem" rows="4" id="mensagem" required ></textarea>

            <button type="submit">Enviar</button>
            </form>
        </div>
    );
};

export default Contact;