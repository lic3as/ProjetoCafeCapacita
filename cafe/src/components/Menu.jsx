import React, {useState} from "react";
import { Tab, Tabs } from 'react-bootstrap';
import './Menu.css';
import coffe1 from '../assets/graos.jpg';
import coffe2 from '../assets/petit.jpg';
import coffe3 from '../assets/croissant.jpeg';
import coffe4 from '../assets/milk.jpeg';
import coffe5 from '../assets/cha.jpeg';

const Menu = () => {
    const [currentImage, setCurrentImage] = useState(coffe1);

    return(
        <div className="content">
            <div className="header">
                <h2>Café do Amanhã</h2>
            </div>
            <div className="main-menu">
                <div className="menu-img">
                    <img src={currentImage} alt="Café" />
                </div>
                <div className="menu-tabs">
                    <Tabs defaultActiveKey="cafes" id="styles-menu-tabs" className="mb-3"onSelect={(key) => {
                        switch(key){
                            case "cafes":
                                setCurrentImage(coffe1);
                                break;
                            case "sobremesas":
                                setCurrentImage(coffe2);
                                break;
                            case "especiais":
                                setCurrentImage(coffe3);
                                break;
                            case "bebidas-geladas":
                                setCurrentImage(coffe4);
                                break;
                            case "chas":
                                setCurrentImage(coffe5);
                                break; 
                            default:
                                setCurrentImage(coffe1);
                                break;  
                        }
                    }}>
                        <Tab eventKey="cafes" title="Cafés ☕">
                            <ul className="menu-list">
                                <li>Águas de Março <span>R$ 5,00</span></li>
                                <li>Sampa <span>R$ 6,50</span></li>
                                <li>Garota de Ipanema <span>R$ 7,00</span></li>
                                <li>Chega de Saudade <span>R$ 6,00</span></li>
                                <li>Carinhoso <span>R$ 8,00</span></li>
                                <li>Cappuccino Malandragem <span>R$ 9,00</span></li>
                            </ul>
                        </Tab>
                        <Tab eventKey="sobremesas" title="Sobremesas 🍰">
                            <ul className="menu-list">
                                <li>Doce de Maracujá <span>R$ 8,00</span></li>
                                <li>Romeu e Julieta <span>R$ 9,00</span></li>
                                <li>Chão de Giz <span>R$ 10,00</span></li>
                                <li>Bolinho de Chuva <span>R$ 6,50</span></li>
                                <li>Coração Bobo <span>R$ 7,50</span></li>
                                <li>Pettit Gateau Ilegais <span>R$ 12,00</span></li>
                            </ul>
                        </Tab>
                        <Tab eventKey="especiais" title="Especiais 🎵">
                            <ul className="menu-list">
                                <li>Tarde em Itapoã <span>R$ 12,00</span></li>
                                <li>O Canto da Cidade <span>R$ 10,00</span></li>
                                <li>Fora da Ordem <span>R$ 11,50</span></li>
                                <li>O Leãozinho <span>R$ 9,50</span></li>
                                <li>Iron Maiden<span>R$ 11,50</span></li>
                                <li>Metallica <span>R$ 9,50</span></li>
                            </ul>
                        </Tab>
                        <Tab eventKey="bebidas-geladas" title="Bebidas Geladas 🥤">
                            <ul className="menu-list">
                                <li>Sorvete de Baunilha <span>R$ 7,00</span></li>
                                <li>Milk Shake de Chocolate <span>R$ 10,00</span></li>
                                <li>Milk Shake de Morango <span>R$ 10,00</span></li>
                                <li>Vitamina de Banana <span>R$ 8,00</span></li>
                                <li>Vitamina de Morango <span>R$ 8,50</span></li>
                            </ul>
                        </Tab>
                        <Tab eventKey="chas" title="Chás 🍵">
                                <ul className="menu-list">
                                <li>Chá de Hortelã <span>R$ 4,50</span></li>
                                <li>Chá Verde <span>R$ 5,00</span></li>
                                <li>Chá de Camomila <span>R$ 4,50</span></li>
                                <li>Chá de Frutas Vermelhas <span>R$ 6,00</span></li>
                                <li>Chá de Gengibre e Limão <span>R$ 5,50</span></li>
                            </ul></Tab>
                    </Tabs>
                </div>
            </div>
            
        </div>
        
    )
}

export default Menu;
