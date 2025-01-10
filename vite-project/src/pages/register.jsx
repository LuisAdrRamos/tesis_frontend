import React from 'react';
import '../styles/login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKeyboard } from '@fortawesome/free-solid-svg-icons';

const Register = () => {
  return (
    <div className='login-body'>
      <Link className="brand" to="/">
        <div className="brand-content">
          <FontAwesomeIcon icon={faKeyboard} className="brand-icon" />
          <span className="brand-text">BestKeyboard</span>
        </div>
      </Link>
      <div className="login-wrapper">
        <h2 className="text-center mb-4">Registro</h2>
        <form id="login-form">
          <div className="form-group">
            <label htmlFor="regEmail">Correo Electrónico:</label>
            <input
              type="email"
              className="form-control"
              id="regEmail"
            />
          </div>
          <div className="form-group">
            <label htmlFor="regUsername">Usuario:</label>
            <input
              type="text"
              className="form-control"
              id="regUsername"
            />
          </div>
          <div className="form-group">
            <label htmlFor="regPassword">Contraseña:</label>
            <input
              type="password"
              className="form-control"
              id="regPassword"
            />
          </div>
          <button type="submit" className="btn btn-primary">Registrarse</button>
          <p className="text-center mt-3">
            ¿Ya tienes una cuenta?{' '}
            <Link to="/login" className="login-link">Inicia Sesión</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;