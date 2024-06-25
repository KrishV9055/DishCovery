import React, { useState } from 'react'
import Navbar from './Navbar'
import RecipeComponent from './RecipeComponent'
import ItemComponent from'./ItemComponent'

export default function Render() {
    const [renderRecipe,setRenderRecipe] = useState("True");
    const [renderItem,setRenderItem] = useState("False");
    function handleNavbar(component) {
        if(component === "Recipe") {
            setRenderItem("False");
            setRenderRecipe("True");
        }
        else{
            setRenderRecipe("False");
            setRenderItem("True");
        }
    }
    return (
    <>
        <Navbar componentToRender={handleNavbar}/>
        <RecipeComponent renderRecipe={renderRecipe}/> 
        <ItemComponent renderItem={renderItem}/>
    </>
  )
}