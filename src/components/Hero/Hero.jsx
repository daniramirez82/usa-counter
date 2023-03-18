import { h } from 'preact';
import Counter from '../Counter/Counter';

import styles from './Hero.module.scss';

const Hero = () => {

    const FINAL_DATE = new Date(2024, 9, 13);

    return (
        <div className={styles['wrapper-hero']}>
            <video autoplay muted loop id="usa-video">
                <source src="/video-usa.mp4" type="video/mp4"></source>
            </video>
            <div className={styles.gradient}></div>
            <div className={styles.gradient2}></div>
            <div className={styles.overlay}>
                <div className={styles.content}>
                <h1>Cuenta atrás:</h1>
                <Counter finalDate={FINAL_DATE} />
                </div>
            </div>
        </div>
    )
}

export default Hero;