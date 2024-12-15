import CardP from '../components/Card.js';

const TecladosMecanicos = () => {
    return (
      <div>
      <div className="banner">
        <img
          className="img"
          src="https://www.muycomputerpro.com/wp-content/uploads/2021/02/logitech_g_pro_x_mechanical_gaming_keyboard.jpg"
          alt="Banner"
        />
      </div>
    
      <div className="container">
        <div className="TecladosWired">
          <h3>Teclados USB/Wired</h3>
          <div className="container mt-4">
            <div className="row">
                <CardP
                  imgSrc="https://m.media-amazon.com/images/I/51J+ecqGagL._AC_SX300_SY300_.jpg"
                  title="Logitech G Pro TKL"
                  text="Teclado mecánico con cable para juegos, interruptor de clic azul GX y teclas retroiluminadas RGB LIGHTSYNC."
                  price={59.99}
                />
                <CardP
                  imgSrc="https://m.media-amazon.com/images/I/61f+pqReaHL._AC_SX466_.jpg"
                  title="CORSAIR K60 RGB TKL RGB"
                  text="Teclado óptico mecánico para juegos con cable - Interruptores OPX - Teclas de policarbonato - Compatible con iCUE."
                  price={89.99}
                />
                <CardP
                  imgSrc="https://m.media-amazon.com/images/I/71+hr28liUL._AC_SX466_.jpg"
                  title="HyperX Alloy Origins"
                  text="Teclado mecánico para juegos, interruptor acuático, táctil, RGB, NGENUITY, teclas retroiluminadas, ghosting."
                  price={59.99}
                />
            </div>
          </div>
        </div>
    
        <div className="TecladosWireless">
          <h3>Teclados Wireless</h3>
          <div className="container mt-4">
            <div className="row">
                <CardP
                  imgSrc="https://m.media-amazon.com/images/I/61ep6omO+0L._AC_SX466_.jpg"
                  title="Logitech MX Keys Mini"
                  text="Diseñado con profesionales, diseñado para ganar."
                  price={139.99}
                />
                <CardP
                  imgSrc="https://m.media-amazon.com/images/I/61cOWihbRbL._AC_SX466_.jpg"
                  title="Razer BlackWidow V3 Mini"
                  text="Tecnología inalámbrica HyperSpeed - 200 horas de duración de la batería."
                  price={99.99}
                />
                <CardP
                  imgSrc="https://m.media-amazon.com/images/I/81o8Tzb64SL._AC_SX466_.jpg"
                  title="Corsair K65 Plus 75% RGB"
                  text="Teclado mecánico inalámbrico para juegos 75% RGB."
                  price={134.99}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default TecladosMecanicos;