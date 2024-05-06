import React from 'react'
import { FaCalendarAlt } from "react-icons/fa"
import { useTranslation } from 'react-i18next'

const Contacto = () => {
    const { t } = useTranslation()
    return (
        <div>
            <div className="about-section-container">
                <div className="about-section-text-container">
                    <h1 className="primary-heading">
                        {t('contacto')}
                    </h1>
                </div>
            </div>
            <div className="nosotros-section-bottom">
                <div className="contact-section-info">
                    <span style={{margin: '0 10px'}}><FaCalendarAlt className="card-icon" /></span>
                    <div >
                        <p style={{ margin: '20px 0 30px' }} className='secondary-heading'>{t('contactDesc')}</p>
                        <h1 className='secondary-heading'>{t('contactSchedule')}<a href='/#sumate' style={{ textDecoration: 'underline', color: '#24796B' }}>{t('contactSchedule2')}</a></h1>
                    </div>
                </div>
            </div>            
        </div>
    )
}

export default Contacto