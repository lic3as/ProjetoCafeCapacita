import React, { useEffect } from 'react';
import foto1 from '../assets/casal3.jpg';
import foto2 from '../assets/cafe1.jpeg';
import foto3 from '../assets/cafe2.jpeg';
import './Carousel.css';

import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export function ImageCarousel() {
  return(
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={foto1} alt="Nanda e Júnior" />
        <Carousel.Caption>
          <div className='caption'>
            <h3>Nanda e Júnior</h3>
            </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={foto2} alt="Nossas delícias" />
        <Carousel.Caption>
          <div className='caption'>
            <h3>Nossas delícias</h3>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={foto3} alt="Nosso espaço" />
        <Carousel.Caption>
          <div className='caption'>
            <h3>Nosso espaço</h3>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
