import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
    return (
        <div className="footer-wrapper">
            <h1 className="footer-custom-logo">sq<span className="custom-logo-underline">u</span>ab</h1>

            <div className="footer-section-two">
                <div className="footer-section-row">
                    <a href='/#' style={{ margin: '0 0 0 0', textDecoration: 'None', color: '#F9F9F9' }}>Home</a>
                    <a href='/#nosotros' style={{ margin: '0 0 0 20px', textDecoration: 'None', color: '#F9F9F9' }}>Nosotros</a>

                    <a href='/#contacto' style={{ margin: '0 0 0 20px', textDecoration: 'None', color: '#F9F9F9' }}>Contacto</a>

                    <span style={{ margin: '0 0 0 20px' }}>Súmate al equipo</span>

                </div>

                <div className="footer-section-row">
                    <span className="footer-icons">
                        <FaWhatsapp />
                        <HiOutlineMail />
                    </span>
                    <span>info@squabsoftware.com</span>
                </div>
                <div className="footer-section-row">
                    <span style={{ margin: '0 0 0 0px' }}>Politica de privacidad</span>
                    <span style={{ margin: '0 0 0 20px' }}>Squabsofware © 2024</span>
                </div>
            </div>
        </div>
    );
};

export default Footer