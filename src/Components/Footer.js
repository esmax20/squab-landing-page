import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { useTranslation } from 'react-i18next'

const Footer = () => {
    const { t } = useTranslation()
    return (
        <div className="footer-wrapper">
            <h1 className="footer-custom-logo">sq<span className="custom-logo-underline">u</span>ab</h1>

            <div className="footer-section-two">
                <div className="footer-section-row">
                    <a href='/#' style={{ margin: '0 0 0 0', textDecoration: 'None', color: '#F9F9F9' }}>Home</a>
                    <a href='/#nosotros' style={{ margin: '0 0 0 20px', textDecoration: 'None', color: '#F9F9F9' }}>{t('nosotros')}</a>

                    <a href='/#contacto' style={{ margin: '0 0 0 20px', textDecoration: 'None', color: '#F9F9F9' }}>{t("contacto")}</a>

                    <span style={{ margin: '0 0 0 20px' }}>{t('sumate')}</span>

                </div>

                <div className="footer-section-row">
                    <span className="footer-icons">
                        <FaWhatsapp />
                        <HiOutlineMail />
                    </span>
                    <span>info@squabsoftware.com</span>
                </div>
                <div className="footer-section-row">
                    <span style={{ margin: '0 0 0 0px' }}>{t('pol')}</span>
                    <span style={{ margin: '0 0 0 20px' }}>Squabsoftware © 2024</span>
                </div>
            </div>
        </div>
    );
};

export default Footer