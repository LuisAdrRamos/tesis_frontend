import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './styles/App.css';

// Componentes
import NavBar from './components/navbar.jsx';
import Carousel from './components/carousel.jsx';
import Card from './components/cards.jsx';
import Footer from './components/footer.jsx';

// Paginas
import Perfil from './pages/perfil.jsx';
import Login from './pages/login.jsx';
import Register from './pages/register.jsx';
import TecladosOficina from './pages/tecladosOficina.jsx';
import TecladosMecanicos from './pages/tecladosMecanicos.jsx';
import TecladosCustom from './pages/tecladosCustom.jsx';
import Carrito from './pages/carrito.jsx';

const AppContent = () => {
  const location = useLocation();
  const noHeaderFooterRoutes = [];

  return (
    <div>
      {!noHeaderFooterRoutes.includes(location.pathname) && <NavBar />}
      <Routes>
        <Route path="/" element={
          <div>
            <Carousel />
            <div className="container mt-1">
              <div className="row">
                <Card
                  imgSrc="https://www.info-computer.com/img/cms/Blog%20Camila%20Sa/Teclado%20para%20Escribir%20o%20Trabajar%20en%20Oficina.jpg"
                  title="Teclados de Membrana"
                  text="Mejora tu productividad con nuestros teclados de oficina ergonómicos y duraderos."
                  link='/tecladosOficina'
                />
                <Card
                  imgSrc="https://www.muycomputerpro.com/wp-content/uploads/2021/02/logitech_g_pro_x_mechanical_gaming_keyboard.jpg"
                  title="Teclados Mecanicos"
                  text="Descubre nuestros teclados mecánicos de alta calidad. Perfectos para gamers y profesionales."
                  link='/tecladosMecanicos'
                />
                <Card
                  imgSrc="https://www.profesionalreview.com/wp-content/uploads/2022/03/keychron-q1.jpg"
                  title="Teclados Custom"
                  text="Lleva tu experiencia de escritura y gaming al siguiente nivel con nuestros teclados Custom."
                  link='/tecladosCustom'
                />
              </div>
            </div>
          </div>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/tecladosOficina" element={<TecladosOficina />} />
        <Route path="/tecladosMecanicos" element={<TecladosMecanicos />} />
        <Route path="/tecladosCustom" element={<TecladosCustom />} />
        <Route path="/carrito" element={<Carrito/>}/>
      </Routes>
      {!noHeaderFooterRoutes.includes(location.pathname) && <Footer />}
    </div>
  );
};

const AppWrapper = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default AppWrapper;