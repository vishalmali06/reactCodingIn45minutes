import React, { useState } from 'react';
import './Tabs.css';

function Tabs() {
    const [activeTab, setActiveTab] = useState(0);
    const tabs = ['Tab 1', 'Tab 2', 'Tab 3'];
    const content = [
        'Content of tab 1',
        'Content of tab 2',
        'Content of tab 3',
    ];

    return (
        <div>
            <div className='tab-buttons'>
                {tabs.map((tab, index) => (
                    <button key={index} onClick={() => setActiveTab(index)}>
                        {tab}
                    </button>
                ))}
            </div>
            <div className='tab-buttons'>
                {content[activeTab]}
            </div>
        </div>
    )
}

export default Tabs;