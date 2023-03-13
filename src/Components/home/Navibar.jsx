import { React, useState } from 'react';
import logo from '../../img/logo.png';
import { NavLink } from "react-router-dom";

export default function Navibar() {
    const [menuBurger, setMenuBurger] = useState('');




    return (
        <>
            <div className={`nav-bar ${menuBurger}`}>
                <div className="container">
                    <nav className="links">
                        <NavLink className='link' to='/' onClick={() => setMenuBurger('')}>Matchlar</NavLink>
                        <NavLink className='link' to='/news' onClick={() => setMenuBurger('')}>Yangiliklar</NavLink>
                        <NavLink className='link' to='/table' onClick={() => setMenuBurger('')}>Turnir Jadvali</NavLink>
                        <NavLink className='link' to='/stat' onClick={() => setMenuBurger('')}>Statistika</NavLink>
                        <NavLink className='link' to='/teams' onClick={() => setMenuBurger('')}>Jamoalar</NavLink>
                        <NavLink className='link' to='/kubok' onClick={() => setMenuBurger('')}>Kubok</NavLink>
                        <div className="nav-logo" onClick={() => setMenuBurger('')}>
                            <img src={logo} alt="Rasimni yuklashda hatolik" />
                        </div>
                    </nav>
                </div>
            </div>
            <div className='menu-burger' onClick={() => {
                setMenuBurger('active');
                if (menuBurger === 'active') {
                    setMenuBurger('');
                }
            }}>
                <div className={`burger ${menuBurger}`}></div>
            </div>
        </>
    )
};


