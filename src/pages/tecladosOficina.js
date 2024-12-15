import React from 'react';
import CardP from '../components/Card';

const TecladosOficina = () => {
  return (
    <div>
      <div className="banner">
        <img
          className="img"
          src="https://www.info-computer.com/img/cms/Blog%20Camila%20Sa/Teclado%20para%20Escribir%20o%20Trabajar%20en%20Oficina.jpg"
          alt="Banner"
        />
      </div>
      <div className="container">
        <div className="TecladosWired">
          <h3>Teclados USB/Wired</h3>
          <div className="container mt-4">
            <div className="row">
              <CardP
                imgSrc="https://m.media-amazon.com/images/I/81cg9myC9kL._AC_SX466_.jpg"
                title="Amazon Basics"
                text="Teclado USB con cable de perfil bajo con diseño de EE. UU. Negro mate"
                price={19.99}
              />
              <CardP
                imgSrc="https://m.media-amazon.com/images/I/61VemcsGNBL._AC_SX466_.jpg"
                title="Lenovo Preferred Pro II"
                text="Teclado USB externo con cable. Producto al por menor sellado de fábrica para EE. UU., negro"
                price={29.99}
              />
              <CardP
                imgSrc="https://m.media-amazon.com/images/I/61tB3MA5hRL._AC_SX466_.jpg"
                title="Teclado CHERRY Stream"
                text="Teclado con cable USB SX. Pulsación de teclas silenciosa para oficina en casa, trabajo o computadora personal. Negro"
                price={39.99}
              />
            </div>
          </div>
        </div>
        <div className="TecladosWireless">
          <h3>Teclados Bluetooth/Wireless</h3>
          <div className="container mt-4">
            <div className="row">
              <CardP
                imgSrc="https://m.media-amazon.com/images/I/61FKpihhZaL._AC_SX466_.jpg"
                title="Teclado MEETION wireless"
                text="Teclado inalámbrico para Mac, multidispositivo delgado Bluetooth recargable de bajo perfil Apple Layout"
                price={49.99}
              />
              <CardP
                imgSrc="https://m.media-amazon.com/images/I/61cQPww5CUL._AC_SX466_.jpg"
                title="Teclado Macally Mini Bluetooth"
                text="Teclado Bluetooth para Mac - Teclado multidispositivo premium - Teclado inalámbrico compatible con Apple"
                price={59.99}
              />
              <CardP
                imgSrc="https://m.media-amazon.com/images/I/51BOC78+sjL._AC_SX679_.jpg"
                title="Teclado Arteck"
                text="Teclado inalámbrico 2.4G de acero inoxidable ultra delgado de tamaño completo con teclado numérico"
                price={69.99}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TecladosOficina;
