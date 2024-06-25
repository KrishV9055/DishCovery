import React from 'react'
import styles from './navbar.module.css'

export default function Navbar({ componentToRender }) {
    function handleRecipeClick() {
        // console.log("Recipe btn clicked")
        componentToRender("Recipe");
    }
    function handleItemClick() {
        // console.log("Item btn clicked")
        componentToRender("Item");
    }
    return (
        <>
            <section>
                <nav>
                    <ul className={styles.menuItems}>
                        <li><a href='#' data-item='Recipe' onClick={handleRecipeClick}>Recipe</a></li>
                        <li><a href='#' data-item='Fooditem' onClick={handleItemClick}>Fooditem</a></li>
                    </ul>
                </nav>
            </section>
        </>
    )
}
