import { h } from 'preact';
import { useRef, useEffect } from 'preact/hooks';
import styles from './Numbers.module.scss';

const Number = ({ number, field }) => {

    const myNumber = useRef();

    useEffect(() => {
        let shadow = '';
        for (let i = 0; i < 50; i++) {
            shadow += (shadow ? ',' : '') + i * 1 + 'px ' + i * 1 + 'px  #2c2025be';
        }
        myNumber.current.style.textShadow = shadow;
    });

    return (
        <div className={styles['main-wrapper']} >
            <div className={styles['wrapper-box']} >
                <section className={styles.box} >
                    <span className={styles.number} ref={myNumber}>{number} </span>
                    <div className={styles['right-ear']}></div>
                    <div className={styles['left-ear']}></div>
                </section>

                <div className={styles.divider}></div>
            </div>
            <div className={styles.field}>{field}</div>
        </div>
    )
}

export default Number;