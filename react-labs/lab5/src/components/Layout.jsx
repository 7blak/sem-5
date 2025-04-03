import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

function Layout() {
    const activeStyle = {
        fontWeight: 'bold',
        color: 'blue',
    };

    return (
        <div>
            {/*Navigation links*/}
            <nav>
                <NavLink
                    to="/"
                    style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                    Home
                </NavLink>
                {' | '}
                <NavLink
                    to="/about"
                    style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                    About
                </NavLink>
                {' | '}
                <NavLink
                    to="/cars"
                    style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                    Cars
                </NavLink>
            </nav>

            {/*Render nested route components*/}
            <Outlet />
        </div>
    );
}

export default Layout;