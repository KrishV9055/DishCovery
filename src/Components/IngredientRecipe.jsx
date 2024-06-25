import React, { useEffect, useState } from 'react'
import RecipeCard from './RecipeCard';

export default function IngredientRecipe({ ingredient1, ingredient2,ingredient3 }) {

  const [loading,setLoading] = useState(false);
  const [ids,setIds] = useState([]);
  const [titles,setTitles] = useState([]);
  const [imgs, setImgs] = useState([]);
  const [instructions, setInstructions] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=8ca60f4b99644ce5b0cd34c3b293c25b&ingredients=${ingredient1},${ingredient2},${ingredient3}&number=5`)
    .then((res) => {
      if(!res.ok) {
        throw new Error("Network Error");
      }
      else {
        return res.json();
      }
    })
    .then((response) => {
      console.log(response || []);
      let temp = [];
      temp = (response.map((x) => (x.id)) || []);
      setIds(temp);
      temp = (response.map((x) => (x.title)) || []);
      setTitles(temp);
      temp = (response.map((x) => (x.image)) || []);
      setImgs(temp);
      setLoading(false);
    })
    .catch((error) => {
        setError(error.message);
        setLoading(false);
    });
  },[ingredient1,ingredient2,ingredient3])

  useEffect(() => {
    fetch(`https://api.spoonacular.com/recipes/informationBulk?apiKey=8ca60f4b99644ce5b0cd34c3b293c25b&ids=${ids[0]},${ids[1]},${ids[2]},${ids[3]},${ids[4]}`)
    .then((res) => {
      if(!res.ok) {
        throw new Error("Network Error!");
      }
      else {
        return res.json();
      }
    })
    .then((response) => {
      let instructionsArray = (response.map((x) => (x.instructions)) || []);
      setInstructions(instructionsArray);
      setLoading(false);
    })
    .catch((error) => {
        setError(error.message);
        setLoading(false);
    });
  },[ids])
  if(loading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      {titles.map((title, index) => (
        <RecipeCard key={ids[index]} index={ids[index]} title={title} src={imgs[index]} instructions={instructions[index]}/>
      ))}
    </div>
  )
}
