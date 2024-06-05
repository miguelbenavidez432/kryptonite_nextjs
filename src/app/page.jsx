'use client'
import Image from "next/image";
import styles from './home.module.css'
import Slider from "@/components/slider/Slider";
import Link from "next/link";

const Homepage = () => {

  function handleMouseEnter(event, text) {
    const imageElement = event.target.closest(`.${styles.image}`);
    if (imageElement) {
      const textElement = imageElement.querySelector(`.${styles.imageText}`);
      textElement.textContent = text;
      textElement.style.visibility = 'visible';
      imageElement.style.marginLeft = '-200px';
    }
  }

  function handleMouseLeave(event) {
    const imageElement = event.target.closest(`.${styles.image}`);
    if (imageElement) {
      const textElement = imageElement.querySelector(`.${styles.imageText}`);
      textElement.style.visibility = 'hidden';
      imageElement.style.marginLeft = '';
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.bgImage}>
        <Image src="/kriptonitebg2.png" alt="Kryptonite" fill className={styles.img} />
      </div>
      <div className={styles.imageWrapper}>
        <div className={styles.image} onMouseEnter={(e) => handleMouseEnter(e, 'En nuestra agencia de publicidad nos enorgullece ofrecer soluciones creativas e innovadoras para promover y posicionar marcas en el mercado. Nuestro equipo de expertos multidisciplinarios está comprometido en ofrecer resultados excepcionales a nuestros clientes al implementar estrategias de marketing efectivas y campañas publicitarias impactantes.')} onMouseLeave={handleMouseLeave}>
          <Link href='/agencia'>
            <Image src="/agencia_2.png" alt="Agencia" width={350} height={150} />
          </Link>
          <p className={styles.imageText}></p>
        </div>
        <div className={styles.image} onMouseEnter={(e) => handleMouseEnter(e, 'En nuestra consultoría de comunicación y estrategia nos especializamos en ayudar a las empresas a desarrollar y ejecutar estrategias de comunicación efectivas y a medida. Nuestro enfoque radica en comprender a fondo las necesidades y objetivos de cada cliente, para así poder diseñar soluciones personalizadas que generen un impacto positivo en su reputación y relación con su público objetivo.')} onMouseLeave={handleMouseLeave}>
          <Link href='/consultoria'>
            <Image src="/consultoria_2.png" alt="Consultoría" width={350} height={150} />
          </Link>
          <p className={styles.imageText}></p>
        </div>
        <div className={styles.image} onMouseEnter={(e) => handleMouseEnter(e, 'En nuestra central de medios nos dedicamos a ofrecer soluciones integrales y efectivas para la planificación, compra y ejecución de estrategias de medios. Nuestro objetivo es ayudar a las marcas a maximizar su alcance e impacto en el mercado, optimizando cada dólar invertido en publicidad.')} onMouseLeave={handleMouseLeave}>
          <Link href='/central'>
            <Image src="/central_de_medios_2.png" alt="Central de medios" width={350} height={150} />
          </Link>
          <p className={styles.imageText}></p>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.mobileImages}>
          <div className={styles.imageGroup}>
            <Image src="/kriptonite-logo.png" alt="" width={100} height={30} />
            <Image src="/agencia_2.png" alt="" width={200} height={75} />
          </div>
          <p className={styles.p}>En nuestra agencia de publicidad nos enorgullece ofrecer soluciones creativas e innovadoras para promover y
            posicionar marcas en el mercado. Nuestro equipo de expertos multidisciplinarios está comprometido en ofrecer
            resultados excepcionales a nuestros clientes al implementar estrategias de marketing efectivas y campañas
            publicitarias impactantes.</p>
          <Link href='/agencia' className='text-gray-400 hover:text-white'> Ver más...</Link>
        </div>
        <div className={styles.mobileImages}>
          <div className={styles.imageGroup}>
            <Image src="/kriptonite-logo.png" alt="" width={100} height={30} />
            <Image src="/central_de_medios_2.png" alt="" width={200} height={75} />
          </div>
          <p className={styles.p}>En nuestra central de medios nos dedicamos a ofrecer soluciones integrales y efectivas para la planificación,
            compra y ejecución de estrategias de medios. Nuestro objetivo es ayudar a las marcas a maximizar su alcance e
            impacto en el mercado, optimizando cada dólar invertido en publicidad.</p>
          <Link href='/central-de-medios' className='text-gray-400 hover:text-white'> Ver más...</Link>
        </div>
        <div className={styles.mobileImages}>
          <div className={styles.imageGroup}>
            <Image src="/kriptonite-logo.png" alt="" width={100} height={30} />
            <Image src="/consultoria_2.png" alt="" width={200} height={75} />
          </div>
          <p className={styles.p}>En nuestra consultoría de comunicación y estrategia nos especializamos en ayudar a las empresas a
            desarrollar y ejecutar estrategias de comunicación efectivas y a medida. Nuestro enfoque radica en comprender
            a fondo las necesidades y objetivos de cada cliente, para así poder diseñar soluciones personalizadas que generen
            un impacto positivo en su reputación y relación con su público objetivo.</p>
          <Link href='/consultoria' className='text-gray-400 hover:text-wite'> Ver más...</Link>
        </div>
      </div>
      <main className="w-100 mx-auto grid place-items-center rounded-3xl bg-slate-600 bg-opacity-30">
        <Slider />
      </main>
    </div>
  );
};

export default Homepage;
