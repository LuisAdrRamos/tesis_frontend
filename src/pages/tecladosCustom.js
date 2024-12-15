import CardP from '../components/Card';

const TecladosCustom = () => {
    return (
      <div>
      <div className="banner">
        <img
          className="img"
          src="https://www.profesionalreview.com/wp-content/uploads/2022/03/keychron-q1.jpg"
          alt="Banner"
        />
      </div>
    
      <div className="container">
        <div className="TecladosWired">
          <h3>Teclados Custom Yunzii</h3>
          <div className="container mt-4">
            <div className="row">
              <CardP
                imgSrc="https://m.media-amazon.com/images/I/61zZEjhB2DL._AC_SX679_.jpg"
                title="YUNZII AL66"
                text="Teclado mecánico inalámbrico, 65% de control de perilla, teclado de aluminio para juegos BT/2.4G/interruptores prelubricados intercambiables en caliente, teclado RGB."
                price={89.99}
              />
              <CardP
                imgSrc="https://m.media-amazon.com/images/I/61I74tHG-hL._AC_SX679_PIbundle-82,TopRight,0,0_SH20_.jpg"
                title="YUNZII YZ75"
                text="Teclado mecánico inalámbrico para juegos 75% intercambiable en caliente, retroiluminación RGB, BT5.0/2.4G/USB-C, teclas subPBT."
                price={74.99}
              />
              <CardP
                imgSrc="https://m.media-amazon.com/images/I/61TGv5THrIL._AC_SX466_.jpg"
                title="YUNZII B75 PRO"
                text="Teclado mecánico inalámbrico, 75% junta de teclado para juegos, teclado personalizado de intercambio en caliente con perilla, interruptores prelubricados RGB, Bluetooth/Tipo-C/2.4G."
                price={79.99}
              />
            </div>
          </div>
        </div>
    
        <div className="TecladosWireless">
          <h3>Teclados EPOMAKER</h3>
          <div className="container mt-4">
            <div className="row">
              <CardP
                imgSrc="https://m.media-amazon.com/images/I/614U66QoZQL._AC_SX679_.jpg"
                title="EPOMAKER Ajazz AK820 Pro"
                text="Teclado mecánico 75%, teclado para juegos montado en junta con pantalla inteligente TFT y perilla, Bluetooth 5.1/2.4G inalámbrico/teclado personalizado con cable tipo C."
                price={55.99}
              />
              <CardP
                imgSrc="https://m.media-amazon.com/images/I/61YZkEqwhaL._AC_SX300_SY300_QL70_FMwebp_.jpg"
                title="EPOMAKER EK68"
                text="Teclado inalámbrico 65% para juegos, teclado mecánico con junta intercambiable en caliente con perilla de metal, Bluetooth 5.0/2.4Ghz inalámbrico/teclado personalizado con cable USB-C."
                price={89.99}
              />
              <CardP
                imgSrc="https://m.media-amazon.com/images/I/61EtsD0mfLL._AC_SX466_.jpg"
                title="EPOMAKER x Aula F75"
                text="Teclado mecánico inalámbrico 75%, teclado para juegos con perilla y pantalla LED, retroiluminación RGB, inalámbrico/BT5.0/2.4G/teclado para juegos con cable."
                price={79.99}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    
    );
}

export default TecladosCustom;