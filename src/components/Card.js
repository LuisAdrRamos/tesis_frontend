import React from 'react';
import { useCart } from '../pages/CartContext';

const CardP = ({ imgSrc, title, text, price }) => {
  const { handleAddToCart } = useCart();
  return (
    <div className="col-md-4 d-flex align-items-stretch">
      <div className="card d-flex flex-column">
        <img src={imgSrc} className="custom-card-img-top" alt={title} />
        <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <h5>Precio: ${price}</h5>
        <div className='card-footer'>
        <button
          onClick={() => {
            console.log('Añadiendo al carrito:', { title, price });
            handleAddToCart({ title, price });
          }}
          className="btn btn-primary">Añadir al Carrito
        </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default CardP;
