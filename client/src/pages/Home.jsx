import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get('/api/get-data')
            .then(response => {
                console.log(response.data.length);
                setData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);


    return (
        <div>
            <h1 className='text-3xl font-bold underline'>Home</h1>

            <ul>
                {data && data.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
};

export default Home;