import React,{useState} from 'react'
import styles from './item.module.css'
import { FaSearch } from "react-icons/fa";
import IngredientRecipe from './IngredientRecipe';

export default function Item({ renderItem }) {
  const [ingredient1,setingredient1] = useState("");
  const [ingredient2,setingredient2] = useState("");
  const [ingredient3,setingredient3] = useState("");
  const [component,setComponent] = useState(<></>);

  function handleSubmit(event) {
    event.preventDefault();
    setComponent(<IngredientRecipe ingredient1={ingredient1} ingredient2={ingredient2} ingredient3={ingredient3}/>);
    setingredient1("");
    setingredient2("");
    setingredient3("");
  }
  if(renderItem === "False") {
        return(
        <>
        
        </>
        )
    }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className={styles.outerDiv}>
          <div className={styles.inputDiv}>
            <input type="text" className={styles.input} placeholder='Enter the first ingredient' value={ingredient1} onChange={(event) => setingredient1(event.target.value)} required/>
            <input type="text" className={styles.input} placeholder='Enter the second ingredient' value={ingredient2} onChange={(event) => setingredient2(event.target.value)} required/>
            <input type="text" className={styles.input} placeholder='Enter the third ingredient' value={ingredient3} onChange={(event) => setingredient3(event.target.value)} required/>
          </div>
          <button className={styles.searchBtn}><FaSearch /> Find Recipes</button>
        </div>
      </form>
      {component}
    </>
  )
}
