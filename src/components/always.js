import React from 'react';
import {NavLink} from 'react-router-dom';

export default () => {
    return (
        <div>
            <NavLink to="/" activeClassName="active">Home</NavLink> |
            <NavLink to="/news" activeClassName="active">News</NavLink> |
            <NavLink to="/about" activeClassName="active">About</NavLink> |
            <NavLink to="/topics" activeClassName="active">Topics</NavLink>
        </div>
    )
};