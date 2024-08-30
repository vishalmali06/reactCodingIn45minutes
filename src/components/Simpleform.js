// Requirements:

// The form should have inputs for name, email, and password.
// Validate that the name is not empty.
// Validate that the email is in a correct format.
// Validate that the password is at least 6 characters long.
// Display error messages for invalid inputs.

import React, { useState } from 'react';

function SimpleForm() {
    const [form, setForm] = useState({ name: '', email: '', password: '' });
    const [errors, setError] = useState({});

    const validate = () => {
        const errors = {};
        if (!form.name) errors.name = 'Name is required';
        if (!form.email) errors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(form.email)) errors.email = 'Email is invalid'
        if (form.password.length < 6) errors.password = 'Password must be at least 6 characters long';
        return errors;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setError(validationErrors);
        } else {
            setError({});
            console.log('Form submitted', form);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input
                    type='text'
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
                {errors.name && <p>{errors.name}</p>}
            </div>

            <div>
                <label>Email:</label>
                <input
                    type='email'
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
                {errors.email && <p>{errors.email}</p>}
            </div>

            <div>
                <label>Password:</label>
                <input
                    type='password'
                    value={form.password}
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                />
                {errors.password && <p>{errors.password}</p>}
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}

export default SimpleForm;