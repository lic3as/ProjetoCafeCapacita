import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './OrderPage.css';

function OrderPage() {
  const [order, setOrder] = useState({
    name: '',
    tableNumber: '',
    items: [],
  });

  const [showModal, setShowModal] = useState(false);
  const [currentCategory, setCurrentCategory] = useState('');
  const [currentItem, setCurrentItem] = useState('');
  const [currentQuantity, setCurrentQuantity] = useState(1);

  const menuItems = {
    cafes: {
      'Águas de Março': 5.0,
      Sampa: 6.5,
      'Garota de Ipanema': 7.0,
      'Chega de Saudade': 6.0,
      Carinhoso: 8.0,
      'Cappuccino Malandragem': 9.0,
    },
    sobremesas: {
      'Doce de Maracujá': 8.0,
      'Romeu e Julieta': 9.0,
      'Chão de Giz': 10.0,
      'Bolinho de Chuva': 6.5,
      'Coração Bobo': 7.5,
      'Pettit Gateau Ilegais': 12.0,
    },
    especiais: {
      'Tarde em Itapoã': 12.0,
      'O Canto da Cidade': 10.0,
      'Fora da Ordem': 11.5,
      'O Leãozinho': 9.5,
    },
    bebidasGeladas: {
      'Sorvete de Baunilha': 7.0,
      'Milk Shake de Chocolate': 10.0,
      'Milk Shake de Morango': 10.0,
      'Vitamina de Banana': 8.0,
      'Vitamina de Morango': 8.5,
    },
    chas: {
      'Chá de Hortelã': 4.5,
      'Chá Verde': 5.0,
      'Chá de Camomila': 4.5,
      'Chá de Frutas Vermelhas': 6.0,
      'Chá de Gengibre e Limão': 5.5,
    },
  };

  const calculateTotal = items =>
    items.reduce(
      (total, item) =>
        total + (menuItems[item.category]?.[item.name] || 0) * item.quantity,
      0
    );

  const handleCategoryClick = category => {
    setCurrentCategory(category);
    setCurrentItem('');
    setCurrentQuantity(1);
    setShowModal(true);
  };

  const handleAddItem = () => {
    if (!currentItem || currentQuantity <= 0) {
      alert('Por favor, selecione um item e uma quantidade válida.');
      return;
    }

    const updatedItems = [...order.items];
    const existingItemIndex = updatedItems.findIndex(
      item => item.category === currentCategory && item.name === currentItem
    );

    if (existingItemIndex !== -1) {
      updatedItems[existingItemIndex].quantity += currentQuantity;
    } else {
      updatedItems.push({
        category: currentCategory,
        name: currentItem,
        quantity: currentQuantity,
      });
    }

    setOrder({ ...order, items: updatedItems });
    setShowModal(false);
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert(
      `Pedido enviado com sucesso! Valor total: R$ ${calculateTotal(
        order.items
      ).toFixed(2)}`
    );
    setOrder({ name: '', tableNumber: '', items: [] });
  };

  return (
    <div className="order-container">
      <h2 className="order-title">Faça seu pedido</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={order.name}
            onChange={e => setOrder({ ...order, name: e.target.value })}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="tableNumber">Número da Mesa:</label>
          <input
            type="text"
            id="tableNumber"
            name="tableNumber"
            value={order.tableNumber}
            onChange={e => setOrder({ ...order, tableNumber: e.target.value })}
            required
          />
        </div>

        <div className="menu-category-list">
          {Object.keys(menuItems).map(category => (
            <Button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className="category-button"
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </Button>
          ))}
        </div>

        <h3 className="order-total">
          Total: R$ {calculateTotal(order.items).toFixed(2)}
        </h3>

        <button type="submit" className="submit-button">
          Enviar Pedido
        </button>
      </form>
      <div>
        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <button
              type="button"
              className="close custom-close"
              onClick={() => setShowModal(false)}
            >
              <span aria-hidden="true">&times;</span>
            </button>
            <Modal.Title>Selecione o item e a quantidade</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="form-group">
              <label htmlFor="itemSelect">Item:</label>
              <select
                id="itemSelect"
                name="itemSelect"
                value={currentItem}
                onChange={e => setCurrentItem(e.target.value)}
                className="form-control"
              >
                <option value="">Selecione um item</option>
                {Object.keys(menuItems[currentCategory] || {}).map(item => (
                  <option key={item} value={item}>
                    {item} - R$ {menuItems[currentCategory][item].toFixed(2)}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="quantity">Quantidade:</label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                value={currentQuantity}
                onChange={e => setCurrentQuantity(parseInt(e.target.value))}
                min="1"
                className="form-control"
              />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Cancelar
            </Button>
            <Button variant="primary" onClick={handleAddItem}>
              Adicionar ao Pedido
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}

export default OrderPage;
