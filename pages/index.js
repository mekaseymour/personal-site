import cn from 'classnames'
import Image from 'next/image';

import birdGif from '../images/bird.gif';
import pandaGif from '../images/panda.gif'

import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <style jsx global>
        {`
          :root {
            --gray-800: #252525;
          }
          body {
            background-color: #f5f5f5;
          }
        `}
      </style>
      <div>
        <h1 className={styles.title}>Hi, I'm Meka</h1>
        <div className={styles.description}>
          <p>I’m a software engineer with over five years of experience building products at early to mid-stage startups (and occasionally elsewhere).</p>
          <p>Teaching and walking around Harlem all other times.</p>
          <p>If you’re working on a project (esp. in climate or health) and want to chat feel free to reach out.</p>
        </div>
        <div className={styles.buttonContainer}>
          <a href="mailto:mekaseymour@gmail.com" className={cn(styles.button, styles.primary)}>Drop me an email</a>
          <a href="/" className={styles.button}>☕️ Schedule some time</a>
        </div>
      </div>
      <div className={styles.socialContainer}>
        <a href="https://www.linkedin.com/in/mekaseymour/" target="_blank">
          <Image className={styles.socialLink} src={pandaGif}  height={50} width={50} alt="link to LinkedIn" />
        </a>
        <a href="https://twitter.com/mekaseymour" target="_blank">
          <Image className={styles.socialLink} src={birdGif} height={50} width={50} alt="link to Twitter" />
        </a>
      </div>
    </div>
    )
}
