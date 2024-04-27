import React from 'react'
import Formulario from './Formulario'
import { FaCalendarAlt } from "react-icons/fa"

const Contacto = () => {
    return (
        <div>
            <div className="about-section-container">
                <div className="about-section-text-container">
                    <h1 className="primary-heading">
                        Contacto
                    </h1>
                </div>
            </div>
            <div className="nosotros-section-bottom">
                <div className="contact-section-info">
                    <div className="info-boxes-img-container">
                        <span><FaCalendarAlt className="card-icon" /></span>
                    </div>
                    <div >
                        <p className='secondary-heading'>Estas a un mensaje de encontrar las herramientas que te permitan escalar al siguiente nivel! 🚀</p>
                        <h1 className='secondary-heading'>Agendá una reunión directamente aquí</h1>
                    </div>
                </div>
            </div>
            <Formulario />
        </div>
    )
}

export default Contacto