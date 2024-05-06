import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
    .use(initReactI18next)
    .init({
        debug: true,
        fallbackLng: 'es',
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        // language resources
        resources: {
            es: {
                translation: {
                    welcome: "Welcome to React",
                    nosotros: "Nosotros",
                    contacto: "Contacto",
                    sumate: "Súmate al equipo",
                    home1: "No tan solo vendemos sofware, creamos la solución que necesitas!",
                    home2: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd",
                    nosotrosDesc: "En Squab, nos impulsa el avance constante. No nos limitamos a identificar problemas; nos destacamos por crear soluciones informáticas integrales que impulsarán tu éxito. Ya sea desarrollando aplicaciones móviles de vanguardia o diseñando software a medida, nuestro enfoque se centra en satisfacer tus necesidades específicas con precisión y eficacia. En Squab, nos comprometemos no solo a mantener el ritmo, sino a liderar la vanguardia de la innovación tecnológica.",
                    nosotrosSpec: "Nuestras especialidades:",
                    sistWeb: "Sistemas Web",
                    softMed: "Software a Medida",
                    appDesktop: "Apps de Escritorio",
                    webDesign: "Diseño web",
                    consult: "Consultoría y Asesoría",
                    contactDesc: "Estas a un mensaje de encontrar las herramientas que te permitan escalar al siguiente nivel! 🚀",
                    contactSchedule: "Agendá una reunión directamente ",
                    constactSchedule2: "aquí",
                    contactForm: "Te invitamos a completar el formulario para compartir tus consultas o comentarios con nosotros. Estamos aquí para ayudarte.",
                    nombre: "Nombre:",
                    apellido: "Apellido:",
                    email: "E-mail:",
                    telef: "Teléfono:",
                    pais: "País:",
                    comment: "Comentario:",
                    codigoImg: "Ingrese el código de la imagen:",
                    enviar: "Enviar",
                    pol: "Politica de privacidad",
                }
            },
            en: {
                translation: {
                    welcome: "About us",
                    nosotros: "About us",
                    contacto: "Contact",
                    sumate: "Join the team",
                    home1: "We don't just sell software, we create the solution you need!",
                    home2: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd",
                    nosotrosDesc: "At Squab, we are driven by constant advancement. We don't just identify problems; We stand out for creating comprehensive IT solutions that will boost your success. Whether developing cutting-edge mobile applications or designing custom software, our focus is on meeting your specific needs with precision and efficiency. At Squab, we are committed to not only keeping pace, but leading the forefront of technological innovation.",
                    nosotrosSpec: "Our specialties:",
                    sistWeb: "Web Systems",
                    softMed: "Custom Software",
                    appDesktop: "Desktop Apps",
                    webDesign: "Web Design",
                    consult: "Consulting and Advice",
                    contactDesc: "You are one message away from finding the tools that allow you to scale to the next level! 🚀",
                    contactSchedule: "Schedule a meeting directly ",
                    contactSchedule2: "here",
                    contactForm: "We invite you to complete the form to share your questions or comments with us. We are here to help you.",
                    nombre: "Name:",
                    apellido: "Last name:",
                    email: "E-mail:",
                    telef: "Telephone:",
                    pais: "Country:",
                    comment: "Comment:",
                    codigoImg: "Enter the image code:",
                    enviar: "Send",
                    pol: "Privacy Policy",
                }
            },
        }
    });

export default i18n;