import React from 'react'
import { FaApple, FaAndroid, FaChrome, FaCog, FaDesktop, FaPenFancy, FaUserTie } from "react-icons/fa"

const Nosotros = () => {
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
            title: "Sistemas web",
        },
        {
            image: <FaCog className="card-icon" />,
            title: "Software a medida",
        },
        {
            image: <FaDesktop className="card-icon" />,
            title: "App de escritorio",
        },
        {
            image: <FaPenFancy className="card-icon" />,
            title: "Diseño web",
        },
        {
            image: <FaUserTie className="card-icon" />,
            title: "Consultoría y Asesoría",
        }
    ]
    return (
        <>
            <div className="about-section-container">
                <div className="about-section-text-container">
                    <h1 className="primary-heading">
                        Nosotros
                    </h1>
                    <p className="primary-text">
                        En Squab, nos impulsa el avance constante. No nos limitamos a identificar problemas; nos destacamos por crear soluciones informáticas integrales que impulsarán tu éxito. Ya sea desarrollando aplicaciones móviles de vanguardia o diseñando software a medida, nuestro enfoque se centra en satisfacer tus necesidades específicas con precisión y eficacia. En Squab, nos comprometemos no solo a mantener el ritmo, sino a liderar la vanguardia de la innovación tecnológica.
                    </p>
                </div>
            </div>
            <h2 className="secondary-heading">
                Nuestras especialidades:
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