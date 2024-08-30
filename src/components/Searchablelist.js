import React, { useState } from 'react';

function SearchableList() {
    const items = ['Apple', 'Banana', 'Orange', 'Mango', 'Pineapple'];
    const [query, setQuery] = useState('');

    const filteredItems = items.filter(item =>
        item.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div>
            <input
                type="text"
                placeholder="Search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <ul>
                {filteredItems.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default SearchableList;
