import React, { useState, useEffect } from 'react';
import RecipeCard from './RecipeCard';

export default function ItemRecipe({ itemToBeSearched }) {
    let item = itemToBeSearched;
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [ids, setIds] = useState([]);
    const [imgs, setImgs] = useState([]);
    const [titles, setTitles] = useState([]);
    const [instructions, setInstructions] = useState([]);

    useEffect(() => {
        if (item) {
            setLoading(true);
            fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=f3740ec530954a5dbadfa06487f2a9b4&query=${item}`)
                .then((res) => {
                    if (!res.ok) {
                        throw new Error("Network Error !!");
                    }
                    return res.json();
                })
                .then((data) => {
                    setData(data.results || []);
                    let tempImgs = (data.results.map((x) => (x.image)) || []);
                    let tempTitles = (data.results.map((x) => (x.title)) || []);
                    let tempIds = (data.results.map((x) => (x.id)) || []);
                    setImgs(tempImgs);
                    setTitles(tempTitles);
                    setIds(tempIds);
                    setLoading(false);
                })
                .catch((error) => {
                    setError(error.message);
                    setLoading(false);
                });
        }
    }, [item]);

    useEffect(() => {
        if (ids.length > 0) {
            setLoading(true);
            fetch(`https://api.spoonacular.com/recipes/informationBulk?apiKey=f3740ec530954a5dbadfa06487f2a9b4&ids=${ids.join(',')}`)
                .then((res) => {
                    if (!res.ok) {
                        throw new Error("Network Error");
                    }
                    return res.json();
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
        }
    }, [ids]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            {titles.map((title, index) => (
                <RecipeCard key={ids[index]} index={ids[index]} title={title} src={imgs[index]} instructions={instructions[index]}/>
            ))}
        </div>
    );
}
