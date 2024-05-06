import React from 'react'
import { useTranslation } from 'react-i18next'

const Formulario = () => {
    const { t } = useTranslation()

    return (
        <form className="form-page-wrapper">
            <p className="primary-text">
                {t('contactForm')}
            </p>
            <div className='form-section-bottom'>
                <div className='form-section-info'>
                    <input className='form-input' type="text" placeholder={t('nombre')} />
                </div>
                <div className='form-section-info'>
                    <input className='form-input' type="text" placeholder={t('apellido')} />
                </div>
                <div className='form-section-info'>
                    <input className='form-input' type="text" placeholder={t('email')} /></div>
                <div className='form-section-info'>
                    <input className='form-input' type="text" placeholder={t('telef')} /></div>
                <div className='form-section-info'>
                    <input className='form-input' type="text" placeholder={t('pais')} /></div>
                <div style={{width: '88%', height: '200px'}}>
                    <textarea className='form-input-comentario' type="text" placeholder={t('comment')} /></div>
                <div className='form-section-info'>
                    <input className='form-input' type="text" placeholder={t('codigoImg')} /></div>
                <button className="primary-button">{t('enviar')}</button>
            </div>

        </form>
    )
}

export default Formulario