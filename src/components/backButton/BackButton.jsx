import Link from 'next/link';
import styles from './BackButton.module.css';

const FloatingButton = () => {
    return (
        <Link href="/">
            <div className={styles.floatingButton}>
                <span>&#8678;</span>
            </div>
        </Link>
    );
};

export default FloatingButton;

