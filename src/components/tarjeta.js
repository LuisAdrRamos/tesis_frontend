import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ imgSrc, title, text, link }) => (
  <div className="col-md-4 d-flex align-items-stretch">
    <div className="card d-flex flex-column">
      <img src={imgSrc} className="card-img-top" alt="..." />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <Link to={link} className="btn btn-primary">Ver Catalogo</Link>
      </div>
    </div>
  </div>
);

export default Card;