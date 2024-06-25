import React, { useState } from 'react'
import styles from './recipe.module.css'
import { FaSearch } from "react-icons/fa";
import ItemRecipe from './ItemRecipe';

export default function Recipe({ renderRecipe }) {
    const [item,setItem] = useState("");
    const [component,setComponent] = useState(<></>);

    function handleSearch(event) {
      event.preventDefault();
      setComponent(<ItemRecipe itemToBeSearched={item}/>)
      setItem("");
    }

    if( renderRecipe === "False") {
        return (
            <>
            </>
        )
    }
    return (
      <>
        <form onSubmit={handleSearch}>
          <div className={styles.outerDiv}>
            <div className={styles.inputDiv}>
              <input type="text" className={styles.input} placeholder="Enter a food item" value={item} onChange={(event) => setItem(event.target.value)} required/>
              <button className={styles.search}><FaSearch /></button>
            </div>
          </div>
        </form>
        {component}
      </>
    
  )
}