import Image from "next/image"
import styles from '@/app/consultoria/consultoria.module.css'

const Consultoria = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src='/kriptonite-logo.png' alt="" width={100} height={100} className="brightness-50"></Image>
        {/* <Image src='/consultoria_2.png' alt="" width={200} height={100} className="brightness-50"></Image> */}
        <h1 className={styles.h1}>CONSULTORÍA DE MEDIOS</h1>
      </div>
      <div>
        <p className={styles.p}>
          En nuestra consultoría de comunicación y estrategia, nos especializamos en ayudar a las empresas a desarrollar y ejecutar estrategias de comunicación efectivas y a medida. Nuestro enfoque radica en comprender
          a fondo las necesidades y objetivos de cada cliente, para así poder diseñar soluciones personalizadas que generen un impacto positivo en su reputación y relación con su público objetivo.
          <br />
          <br />
          Contamos con un equipo de consultores altamente capacitados y con experiencia en diversos sectores industriales. Nuestra metodología de trabajo se basa en el análisis exhaustivo de la situación actual de cada cliente, 
          la identificación de oportunidades de mejora y la implementación de estrategias y tácticas de comunicación innovadoras y efectivas.
          <br />
          <br />
          Ya sea que necesite apoyo en la gestión de crisis, la creación de contenido relevante y persuasivo, la gestión de relaciones con los medios de comunicación, la investigación de mercado y opinión pública o 
          el desarrollo de campañas de comunicación integradas, estamos aquí para ayudarlo a alcanzar sus metas y destacarse en el competitivo mundo de la comunicación empresarial.
        </p>
      </div>
    </div>
  )
}

export default Consultoria