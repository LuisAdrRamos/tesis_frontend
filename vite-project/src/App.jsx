import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/App.css'

import NavBar from './components/navbar.jsx';
import Carousel from './components/carousel.jsx';
import Card from './components/cards.jsx';
import Footer from './components/footer.jsx';

import TecladosOficina from './pages/tecladosOficina.jsx';

export function AppContent() {
    return (
        <Router>
            <NavBar />
            <Carousel/>

            <div className='container mt-1'>
                <div className='row'>
                    <Card
                    imgSrc="https://www.info-computer.com/img/cms/Blog%20Camila%20Sa/Teclado%20para%20Escribir%20o%20Trabajar%20en%20Oficina.jpg"
                    title="Teclados de Oficina"
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

            <h1>Hola mundo</h1>

            <Footer/>
            <Routes>
                <Route path="/tecladosOficina" element={<TecladosOficina />} />
                {/* <Route path="/tecladosMecanicos" element={<TecladosMecanicos />} /> */}
                {/* <Route path="/tecladosCustom" element={<TecladosCustom />} /> */}
            </Routes>
        </Router>
    );
}