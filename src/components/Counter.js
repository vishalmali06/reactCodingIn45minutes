
// Requirements:
// The counter should start at 0.
// Increment button should increase the count by 1.
// Decrement button should decrease the count by 1.
// Reset button should set the count back to 0.

import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>Counter : {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    );

}

export default Counter;