import { useState, useEffect } from 'preact/hooks';
import styles from './Counter.module.scss';
import { calculateCountdown } from '../../helpers/calculateCountdown';
import Number from '../numbers/Numbers';

const Counter = ({ finalDate }) => {

    const [actualCountdown, setActualcountdown] = useState(calculateCountdown(finalDate));

    useEffect(() => {
        const loop = setTimeout(() => {
            setActualcountdown(calculateCountdown(finalDate));
        }, 1000);
        return () => clearTimeout(loop);
    }, [actualCountdown]);

    return <div className={styles['wrapper-counter']}>

        <Number number={actualCountdown[0]} field={'Dias'} />
        <Number number={actualCountdown[1]} field={'Horas'} />
        <Number number={actualCountdown[2]} field={'Minutos'} />
        <Number number={actualCountdown[3]} field={'Segundos'} />

    </div>
}

export default Counter;