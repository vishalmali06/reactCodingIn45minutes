
// Requirements:

// Allow users to add new todo items.
// Display the list of todo items.
// Allow users to mark items as completed.
// Allow users to remove items from the list.

import React, { useState } from 'react';

function TodoApp() {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');

    const addTodo = () => {
        if (input.trim()) {
            setTodos([...todos, { text: input, completed: false }]);
            setInput('');
        }
    }


    const toggleComplete = (index) => {
        const newTodos = [...todos];
        newTodos[index].completed = !newTodos[index].completed;
        setTodos(newTodos);
    }

    const removeTodo = (index) => {
        setTodos(todos.filter((_, i) => i != index));
    }


    return (
        <div>
            <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder='Add a todo'
            />

            <button onClick={addTodo}>Add</button>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                        {todo.text}
                        <button onClick={() => { toggleComplete(index) }}>
                            {todo.completed ? 'Undo' : 'Complete'}
                        </button>
                        <button onClick={() => removeTodo(index)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoApp;