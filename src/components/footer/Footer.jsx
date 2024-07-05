import styles from '@/components/footer/footer.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.img}>
        <Image src='/kriptonite-logo.png' alt='' width={80} height={50} />
        <h2 className={styles.p}>Kryptonite Agency</h2>
        <h3 className={styles.h3}>Sabemos como derrotar a Superman</h3>
      </div>
      <div className={styles.rrss}>
        {/* <Link href="https://www.instagram.com/kryptoniteagency">
          <Image src='/instagram.jpg' alt='Instagram' width={60} height={50} className={styles.img} />
        </Link> */}
      </div>
    </div>
  )
}

export default Footer