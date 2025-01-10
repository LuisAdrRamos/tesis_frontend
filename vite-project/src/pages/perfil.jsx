import React from "react";

const perfil = () =>{
  return (
    <div className='container-fluid vw-100 vh-100'>
      <div className='col-md-8 col-lg-6 mx-auto'>
        <div className='card-profile'>
          <div className='card-header bg-custom text-black'>
            <h4 className='mb-0'>Perfil de Usuario</h4>
          </div>
          <div className='card-body'>
            <form>
              <div className='mb-3'>
                <label htmlFor='userId' className='form-label'>ID de Usuario</label>
                <input
                  type='text'
                  name='userId'
                  id='userId'
                  className='form-control'
                />
              </div>
              <div className='mb-3'>
                <label htmlFor='correo' className='form-label'>Correo Electrónico</label>
                <input
                  type='email'
                  name='correo'
                  id='correo'
                  className='form-control'
                />
              </div>
              <div className='mb-3'>
                <label htmlFor='user' className='form-label'>Nombre de Usuario</label>
                <input
                  type='text'
                  name='user'
                  id='user'
                  className='form-control'
                />
              </div>
              <div className='mb-3'>
                <label htmlFor='contraseña' className='form-label'>Contraseña</label>
                <input
                  type='password'
                  name='contraseña'
                  id='contraseña'
                  className='form-control'
                />
              </div>
              <div className='d-flex justify-content-between'>
                <button type='submit' className='btn btn-success'>Actualizar Datos</button>
                <button type='button' className='btn btn-secondary'>Borrar Cuenta</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default perfil