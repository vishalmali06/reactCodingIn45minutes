// Requirements:

// Fetch data from an API (e.g., JSONPlaceholder's posts endpoint).
// Display the data in a list.
// Show a loading indicator while fetching data.
// Handle any potential errors gracefully.

import React, { useEffect, useState } from 'react';

function DataFetcher() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(responce => responce.json())
            .then(data => {
                setData(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>Loading...</p>
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }


    return (
        <ul>
            {data.map(item => (
                <li key={item.id}>{item.title}</li>
            ))}
        </ul>
    )
}

export default DataFetcher;