import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';


const Home = () => {
    return (
        <div className='bg-primary vh-100'>
           
            <Header/>
        <Outlet/>
        </div>
    );
};

export default Home;