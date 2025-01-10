import React from 'react';

const Carrito = () => {
  return (
    <div className='container-fluid vw-200 vh-100'>
      <div className="col-md-10 col-lg-6 mx-auto">
        <div className="card">
          <div className="card-header bg-custom text-black">
            <h1 className="mb-0">Carrito de compras</h1>
          </div>
          <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <div>
                  <label className="form-label mb-0">Nombre del producto: </label>
                  <p className="mb-0">Precio del producto: $</p>
                </div>
                <button className="btn btn-danger ml-3"> Eliminar </button>
              </div>
            <hr />
            <div className="d-flex justify-content-between">
              <h4>Total:</h4>
              <h4>$</h4>
            </div>
            <div className="d-flex justify-content-between mt-4">
              <button
                className="btn btn-success"
                type="button"
              >
                Finalizar compra
              </button>
            </div>
          </div>
        </div>

        <div className='card mt-4'>
          <div className='card-header bg-custom text-black'>
            <h1 className='mb-0'>Orden de compra</h1>
          </div>
          <div className='card-body'>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div>
                    <h5 className="mb-0">Compra #</h5>
                    <p className="mb-0"><strong>Fecha:</strong></p>
                    <p className="mb-0"><strong>Total:</strong> $</p>
                    <p className="mb-0"><strong>Productos:</strong></p>
                    <ul className="mb-0">
                    </ul>
                  </div>
                  <button
                    className="btn btn-danger ml-3"
                  >
                    Cancelar Compra
                  </button>
                </div>
              <p>No has realizado ninguna compra.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carrito;