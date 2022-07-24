import { useState } from 'preact/hooks';
import Hero from './components/Hero/Hero';
import styles from './App.module.scss';

export function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={styles['main-wrapper']}>

      <Hero />

    </div>
  )
}
