import { useState } from 'preact/hooks';
import Hero from './components/Hero/Hero';
import styles from './App.module.scss';
import Todo from './components/Todo/Todo';

export function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={styles['main-wrapper']}>

      <Hero />
      <Todo/>

    </div>
  )
}
