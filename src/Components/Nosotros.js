import React from 'react'
import { FaApple, FaAndroid, FaChrome, FaCog, FaDesktop, FaPenFancy, FaUserTie } from "react-icons/fa"
import { useTranslation } from 'react-i18next'

const Nosotros = () => {
    const { t } = useTranslation();

    const especialidadesData = [
        {
            image: <FaApple className="card-icon" />,
            title: "Apps iOS",
        },
        {
            image: <FaAndroid className="card-icon" />,
            title: "Apps Android"
        },
        {
            image: <FaChrome className="card-icon" />,
            title: t('sistWeb'),
        },
        {
            image: <FaCog className="card-icon" />,
            title: t('softMed'),
        },
        {
            image: <FaDesktop className="card-icon" />,
            title: t('appDesktop'),
        },
        {
            image: <FaPenFancy className="card-icon" />,
            title: t('webDesign'),
        },
        {
            image: <FaUserTie className="card-icon" />,
            title: t('consult'),
        }
    ]
    return (
        <>
            <div className="about-section-container">
                <div className="about-section-text-container">
                    <h1 className="primary-heading">
                        {t('nosotros')}
                    </h1>
                    <p className="primary-text">
                        {t('nosotrosDesc')}
                    </p>
                </div>
            </div>
            <h2 className="secondary-heading">
                {t('nosotrosSpec')}
            </h2>
            <div className="nosotros-section-bottom">
                {especialidadesData.map((data) => (
                    <div className="nosotros-section-info" key={data.title}>
                        <span>{data.image}</span>
                        <h3>{data.title}</h3>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Nosotros