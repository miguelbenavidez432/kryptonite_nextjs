import Image from "next/image"
import styles from '@/app/central/central.module.css'

const Central = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src='/kriptonite-logo.png' alt="" width={100} height={100} className="brightness-50"></Image>
        <Image src='/central_de_medios_2.png' alt="" width={250} height={100} className="brightness-50"></Image>
      </div>
      <div>
        <p className={styles.p}>
          En nuestra central de medios nos dedicamos a ofrecer soluciones integrales y efectivas para la planificación, compra y ejecución de estrategias de medios.
          Nuestro objetivo es ayudar a las marcas a maximizar su alcance e impacto en el mercado, optimizando cada dólar invertido en publicidad.
          <br />
          <br />
          Contamos con un equipo de expertos en investigación de mercado, análisis de audiencia y seguimiento de tendencias, quienes se encargan de identificar 
          las mejores oportunidades de medios para cada cliente. Además, tenemos relaciones sólidas con los principales medios de comunicación y plataformas digitales, 
          lo que nos permite negociar las mejores tarifas y condiciones para nuestros clientes.
          <br />
          <br />
          Nos enorgullece destacarnos por nuestra capacidad para adaptarnos a los cambios constantes en la industria de la publicidad, aprovechando las últimas tecnologías 
          y herramientas de análisis de datos. Esto nos permite ofrecer estrategias de medios altamente personalizadas, asegurando que cada campaña sea lo más efectiva posible.
          <br />
          <br />
          Además, nuestro enfoque se basa en una comunicación transparente y cercana con nuestros clientes. Trabajamos en estrecha colaboración con ellos para entender 
          sus necesidades y objetivos, y brindarles un servicio personalizado y proactivo.
          <br />
          <br />
          Si buscas una central de medios comprometida con el éxito de tu marca, confía en nosotros. Estamos aquí para ayudarte a alcanzar tus metas de visibilidad y 
          crecimiento a través de estrategias de medios estratégicas y eficientes.
          <br />
          <br />
          Compramos, vendemos y comercializamos medios tradicionales, medios digitales y vía pública así como también transporte público y nuevas tecnologías como 
          puntos wifi y wifi en colectivos y trenes.
        </p>
      </div>
    </div>
  )
}

export default Central