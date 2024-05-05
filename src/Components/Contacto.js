import React from 'react'
import Formulario from './Formulario'
import { FaCalendarAlt } from "react-icons/fa"
import { BiUnderline } from 'react-icons/bi'

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
                    <span style={{margin: '0 10px'}}><FaCalendarAlt className="card-icon" /></span>
                    <div >
                        <p style={{ margin: '20px 0 30px' }} className='secondary-heading'>Estas a un mensaje de encontrar las herramientas que te permitan escalar al siguiente nivel! 🚀</p>
                        <h1 className='secondary-heading'>Agendá una reunión directamente <a href='/#contacto' style={{ textDecoration: 'underline', color: '#24796B' }}>aquí</a></h1>
                    </div>
                </div>
            </div>
            <Formulario />
        </div>
    )
}

export default Contacto