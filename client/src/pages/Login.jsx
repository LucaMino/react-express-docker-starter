import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        // reset error
        setError(null);

        console.log(email, password);

        axios.post('/auth/login', { email, password })
            .then(response => {
                const jwtToken = response.data.token;
                const refreshToken = response.data.refreshToken;
                // set jwt token in cookie
                // document.cookie = `jwtToken=${jwtToken}; path=/; secure; HttpOnly; SameSite=Strict;`;
                // document.cookie = `refreshToken=${refreshToken}; path=/; secure; HttpOnly; SameSite=Strict;`;
                console.log(jwtToken);
                // window.location.href = '/';
            })
            .catch(error => console.log(error))
        ;
    }

    return (
        <div className='flex items-center justify-center min-h-screen bg-gray-100'>
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-2xl shadow-lg">
                <h2 className="text-2xl font-bold text-center text-gray-900">Login</h2>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-medium text-left text-gray-700">Email address</label>
                        <input
                            onChange={e => {setEmail(e.target.value)}}
                            type="email"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            id="email"
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="password" className="block text-sm text-left font-medium text-gray-700">Password</label>
                        <input
                            onChange={e => {setPassword(e.target.value)}}
                            type="password"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            id="password"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        LOG IN
                    </button>
                </form>
            </div>
        </div>
    )
};

export default Login;