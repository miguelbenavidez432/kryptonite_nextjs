'use client'
import Image from "next/image";
import styles from './home.module.css'
import Slider from "@/components/slider/Slider";
import Link from "next/link";
import { useEffect } from "react";

const Homepage = () => {

  function handleMouseEnter(event, text) {
    const imageElement = event.target.closest(`.${styles.image}`);
    if (imageElement) {
      const textElement = imageElement.querySelector(`.${styles.imageText}`);
      textElement.innerHTML = text;
      textElement.classList.add(styles.imageTextVisible);
      imageElement.classList.add(styles.imageShifted);
    }
  }

  function handleMouseLeave(event) {
    const imageElement = event.target.closest(`.${styles.image}`);
    if (imageElement) {
      const textElement = imageElement.querySelector(`.${styles.imageText}`);
      textElement.classList.remove(styles.imageTextVisible);
      imageElement.classList.remove(styles.imageShifted);
    }
  }

  useEffect(() => {
    const images = document.querySelectorAll(`.${styles.overlayImage}`);
    images.forEach((img, index) => {
      setTimeout(() => {
        img.style.opacity = 1;
      }, index * 1000);
    });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.bgImage}>
        <div className={styles.overlayWrapper}>
          <Image src="/fondo.png" alt="Fondo" fill className={`${styles.overlayImage}`} />
          <Image src="/foco.png" alt="Foco" width={1500} height={1500} className={`${styles.overlayImage}`} />
          <Image src="/recuadro.png" alt="Recuadro" width={1500} height={1500} className={`${styles.overlayImage}`} />
          <Image src="/ka.png" alt="Ka" width={1500} height={1500} className={`${styles.overlayImage}`} />
          <Image src="/superman.png" alt="Superman" width={1500} height={1500} className={`${styles.overlayImage}`} />
        </div>
      </div>
      <div className={styles.imageWrapper}>
        <div className={`${styles.image} ${styles.animateImage}`} onMouseEnter={(e) => handleMouseEnter(e, 'En nuestra agencia de publicidad nos enorgullece ofrecer soluciones creativas e innovadoras para promover y posicionar marcas en el mercado. Nuestro equipo de expertos multidisciplinarios está comprometido en ofrecer resultados excepcionales a nuestros clientes al implementar estrategias de marketing efectivas y campañas publicitarias impactantes. <span style="color: #6d6d6d ;">Click en la imagen para ver más...</span>')} onMouseLeave={handleMouseLeave}>
          <Link href='/agencia'>
            <Image src="/agencia_2.png" alt="Agencia" width={350} height={150} />
          </Link>
          <p className={styles.imageText}></p>
        </div>
        <div className={`${styles.image} ${styles.animateImage}`} onMouseEnter={(e) => handleMouseEnter(e, 'En nuestra consultoría de comunicación y estrategia nos especializamos en ayudar a las empresas a desarrollar y ejecutar estrategias de comunicación efectivas y a medida. Nuestro enfoque radica en comprender a fondo las necesidades y objetivos de cada cliente, para así poder diseñar soluciones personalizadas que generen un impacto positivo en su reputación y relación con su público objetivo. <span style="color: #6d6d6d ;">Click en la imagen para ver más...</span>')} onMouseLeave={handleMouseLeave}>
          <Link href='/consultoria'>
            <Image src="/consultoria_2.png" alt="Consultoría" width={350} height={150} />
          </Link>
          <p className={styles.imageText}></p>
        </div>
        <div className={`${styles.image} ${styles.animateImage}`} onMouseEnter={(e) => handleMouseEnter(e, 'En nuestra central de medios nos dedicamos a ofrecer soluciones integrales y efectivas para la planificación, compra y ejecución de estrategias de medios. Nuestro objetivo es ayudar a las marcas a maximizar su alcance e impacto en el mercado, optimizando cada dólar invertido en publicidad. <span style="color: #6d6d6d ;">Click en la imagen para ver más...</span>')} onMouseLeave={handleMouseLeave}>
          <Link href='/central'>
            <Image src="/central_de_medios_2.png" alt="Central de medios" width={350} height={150} />
          </Link>
          <p className={styles.imageText}></p>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.mobileImages}>
          <Link href='/agencia'>
            <div className={styles.imageGroup}>
              <Image src="/kriptonite-logo.png" alt="" width={100} height={10} />
              <Image src="/agencia_2.png" alt="" width={230} height={75} />
            </div>
          </Link>
          <p className={styles.p}>En nuestra agencia de publicidad nos enorgullece ofrecer soluciones creativas e innovadoras para promover y
            posicionar marcas en el mercado. Nuestro equipo de expertos multidisciplinarios está comprometido en ofrecer
            resultados excepcionales a nuestros clientes al implementar estrategias de marketing efectivas y campañas
            publicitarias impactantes.</p>
          <Link href='/agencia' className='text-gray-400 hover:text-white bg-black'> Ver más...</Link>
        </div>
        <div className={styles.mobileImages}>
          <Link href='/central'>
            <div className={styles.imageGroup}>
              <Image src="/kriptonite-logo.png" alt="" width={100} height={30} />
              <Image src="/central_de_medios_2.png" alt="" width={200} height={75} />
            </div>
          </Link>
          <p className={styles.p}>En nuestra central de medios nos dedicamos a ofrecer soluciones integrales y efectivas para la planificación,
            compra y ejecución de estrategias de medios. Nuestro objetivo es ayudar a las marcas a maximizar su alcance e
            impacto en el mercado, optimizando cada dólar invertido en publicidad.</p>
          <Link href='/central-de-medios' className='text-gray-400 hover:text-white bg-black'> Ver más...</Link>
        </div>
        <div className={styles.mobileImages}>
          <Link href='/consultoria'>
            <div className={styles.imageGroup}>
              <Image src="/kriptonite-logo.png" alt="" width={100} height={30} />
              <Image src="/consultoria_2.png" alt="" width={200} height={75} />
            </div>
          </Link>
          <p className={styles.p}>En nuestra consultoría de comunicación y estrategia nos especializamos en ayudar a las empresas a
            desarrollar y ejecutar estrategias de comunicación efectivas y a medida. Nuestro enfoque radica en comprender
            a fondo las necesidades y objetivos de cada cliente, para así poder diseñar soluciones personalizadas que generen
            un impacto positivo en su reputación y relación con su público objetivo.</p>
          <Link href='/consultoria' className='text-gray-400 hover:text-wite bg-black'> Ver más...</Link>
        </div>
      </div>
      <main className=" w-3/5 max-h-[520px] md:w-3/5 md:my-4 mx-auto grid place-items-center rounded-3xl bg-slate-600 bg-opacity-30 lg:w-2/5">
        <Slider />
      </main>
    </div>
  );
};

export default Homepage;


