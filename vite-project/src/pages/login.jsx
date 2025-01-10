import React from 'react';
import '../styles/login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKeyboard } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
  return (
    <div className="login-body">
      <Link className="brand" to="/">
        <div className="brand-content">
          <FontAwesomeIcon icon={faKeyboard} className="brand-icon" />
          <span className="brand-text">BestKeyboard</span>
        </div>
      </Link>
      <div className="login-wrapper">
        <h2 className="text-center mb-4">Inicio de Sesión</h2>
        <form id="login-form">
          <div className="login-form-group">
            <label htmlFor="username">Usuario:</label>
            <input
              type="text"
              className="form-control"
              id="username"
            />
          </div>
          <div className="login-form-group">
            <label htmlFor="password">Contraseña:</label>
            <input
              type="password"
              className="form-control"
              id="password"
            />
          </div>
          <button type="submit" className="btn btn-primary">Iniciar Sesión</button>
          <p className="text-center mt-3">
            ¿No tienes una cuenta?{' '}
            <Link to="/register" className="register-link">Regístrate</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;