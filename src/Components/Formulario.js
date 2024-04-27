import React from 'react'

const Formulario = () => {
    return (
        <div className="form-page-wrapper">
            <p className="primary-text">
                Te invitamos a completar el formulario para compartir tus consultas o comentarios con nosotros. Estamos aquí para ayudarte.
            </p>
            <div className='form-section-bottom'>
                <div className='form-section-info'>
                    <input className='form-input' type="text" placeholder="Nombre" />
                </div>
                <div className='form-section-info'>
                    <input className='form-input' type="text" placeholder="Apellido" />
                </div>
                <div className='form-section-info'>
                    <input className='form-input' type="text" placeholder="E-mail" /></div>
                <div className='form-section-info'>
                    <input className='form-input' type="text" placeholder="Teléfono" /></div>
                <div className='form-section-info'>
                    <input className='form-input' type="text" placeholder="País" /></div>
                <div className='form-section-info'>
                    <input className='form-input-comentario' type="text" placeholder="Comentario" /></div>
                <div className='form-section-info'>
                    <input className='form-input' type="text" placeholder="Ingrese el código de la imagen" /></div>
                <button className="primary-button">Enviar</button>
            </div>

        </div>
    )
}

export default Formulario