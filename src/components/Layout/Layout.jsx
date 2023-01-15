import React from "react"
import { NavLink, Outlet } from 'react-router-dom';
import css from '../Layout/Layout.module.css'



export const Layout = () => {
    return (
        <>
        <header>
        <nav className={css.navigation}>
        <NavLink className={css.navLink} to="/"> Home </NavLink>
        <NavLink className={css.navLink} to="/movies"> Movies </NavLink>
      </nav>
      </header>
      <Outlet/>
        </>
    )
}