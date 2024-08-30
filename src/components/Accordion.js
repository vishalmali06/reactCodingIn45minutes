import React, { useState } from 'react';

function Accordion() {
    const [activeIndex, setActiveIndex] = useState(null);
    const sections = [
        { title: 'Section 1', content: 'Content of Section 1' },
        { title: 'Section 2', content: 'Content of Section 2' },
        { title: 'Section 3', content: 'Content of Section 3' }
    ];

    const toggleSelection = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    }

    return (
        <div>
            {sections.map((section, index) => (
                <div key={index}>
                    <h2 onClick={() => toggleSelection(index)}>{section.title} </h2>
                    {activeIndex === index && <p>{section.content}</p>}
                </div>
            ))}
        </div>
    )
}

export default Accordion;