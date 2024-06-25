import React from 'react'
import styles from './heading.module.css'
import Logo from '../../Images/LogoOnly.png'

export default function Heading() {
  return (
    <>
      <div className={styles.outerDiv}>
        <img src={Logo} className={styles.logoImg}/>
        <div className={styles.head}>
          DishCovery<br/>
          <div className={styles.subHead}>
            Unveiling Flavours, Managing Calories 
          </div>
        </div>
      </div>
    </>
    

  )
}
