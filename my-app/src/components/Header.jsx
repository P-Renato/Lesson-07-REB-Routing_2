import React from "react";
import { NavLink } from "react-router-dom";

export default function Header () {
    return (
        <div>
           <h1>My App</h1>
           <nav>
            <NavLink to="/"> Home </NavLink>
            <NavLink to="products"> Products </NavLink>
            <NavLink to="about"> About </NavLink>
            <NavLink to="profile">Profile</NavLink>
           </nav>
        </div>
    )
}
