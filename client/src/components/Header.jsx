import React from 'react';
import { useAuth } from '../contexts/AuthContext';

const Header = () => {

    const { user } = useAuth();
    console.log('Header - '+ user.email)

    return (
        <>
            <header className='bg-gray-500 p-4'>
                <h1>Header - {user.email}</h1>
            </header>
        </>
    )
};

export default Header;