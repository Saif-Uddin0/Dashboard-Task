import React from 'react';
import { Navigate } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';

const Home = () => {
    return  <Navigate to={'dashboard'} replace></Navigate>
        

};

export default Home;