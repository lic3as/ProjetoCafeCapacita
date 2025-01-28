//página de histórias
import React from 'react';
import './Stories.css';

function Stories() {
    return (
        <section className='container-everything'>
             <h2>Histórias</h2>
             <p className='beginning- text'> Descubra as histórias inspiradoras que fazem parte do Café Do Amanhã. Desde as viajens aventureiras
                 de Nanda até as serentas à beaira-mar de Junior, cada momento é uma celebração de suas paixões </p>

                 <div className='container-stories'>
                    <div className='box'>
                        <h4>Rock nas estradas</h4>
                        <p>Nanda sempre teve uma alma inquieta, apaixonada por viagens e
                         pela liberdade que só a estrada pode oferecer. Durante uma viagem pelo 
                         interior do Brasil, ao som de suas bandas de rock favoritas, ela descobriu um pequeno café 
                         escondido em uma vila remota inspirada pelo lugar, decidiu trazer 
                         essa experiência única para o Café do Amanhã, onde o aroma do café se mistura 
                         com a trilha sonora de suas aventuras.</p>
                    </div>

                    <div className='box'>
                        <h4>MPB a Beira Mar</h4>
                        <p>Junior, por outro lado, encontra a verdadeira paz ao som das ondas do mar e de uma boa música brasileira.
                            Sua paixão pela MPB é evidente em cada detalhe do Café Do Amanhã,
                            onde as melodias de grandes ícones como Vinícios de Moraes e Tom Jobim preechem o ambiente. Foi em uma noite tranquila
                            Sentado na areia e ouvindo "Garota de Ipanema", que Junior teve a ideia de criar um espaço onde músicae café 
                            se encontram em perfeita harmonia.
                        </p>
                    </div>

                    <div className='box'>
                        <h4>Um encontro de paixões</h4>
                        <p>Quando Nanda e Junior se conheceram, parecia que o destino havia reunido duas almas 
                            complementares. Enquanto Nanda compartilha suas histórias de viajem e seu amor pelo rock, Junior
                            fala de suas noites à beira-mar e da suavidade da MPB. Juntos, transformam o Café do Amanhã em um lugar onde 
                            cada visita é uma nova história, cada xícara de café um novo capítulo, e cada canção no ar uma celebração de suas paixões. 
                        </p>
                    </div>
                 </div>

        </section>
    );
}

export default Stories;
