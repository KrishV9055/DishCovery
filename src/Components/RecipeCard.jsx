import React from 'react'
import styles from './recipeCard.module.css'

export default function RecipeCard(props) {
  return (
    <div>
        <div key={props.index} className={styles.outerDiv}>
            <h3 className={styles.title}>{props.title}</h3>
            <img className={styles.img} src={props.src} alt={`recipe ${props.title}`} />
            <div className={styles.instructions} dangerouslySetInnerHTML={{ __html: props.instructions }}></div>
        </div>
    </div>
  )
}