import React, { useState } from 'react';

export default function APITesting() {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [name, setName] = useState("");
    const [loading, setLoading] = useState(false);

    function handleInput(event) {
        setName(event.target.value);    
    }

    function handlePress() {
        setLoading(true);
        fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=f3740ec530954a5dbadfa06487f2a9b4&query=${name}`)
        .then((res) => {
            if (!res.ok) {  
                throw new Error('Network response was not ok');
            }
            return res.json();
        })
        .then((data) => {
            setData(data.results || []);
            setLoading(false);
        })
        .catch((error) => {
            setError(error.message);
            setLoading(false);
        });
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <>
            <input type="text" className="name" onChange={handleInput} />
            <button className="btn" onClick={handlePress}>Submit</button>
            {   data.length > 0 && (
                <div>
                    {data.map((x) => <div key={x.id}>{x.title}</div>)}
                </div>
            )}
        </>
    );
}
