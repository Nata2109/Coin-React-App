import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
           <NavLink to='/'> Home </NavLink>
           <NavLink to='/LandingPage'> Landing Page </NavLink>
           <NavLink to='/TestPage'> Test Page </NavLink>
        </div>
    )
}

export default Navigation;