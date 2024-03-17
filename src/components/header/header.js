import React, { Component } from 'react';
import '../header/header.css';

class Header extends Component {
    render() {
        return (
            <header className="header-yummu">
                <div className="menu-header">
                    <a href="#">Контакти</a>
                    <a href="#">Меню</a>
                    <a href="#">Акції</a>
                </div>
                <div className="logo-header">
                    <a href="#"><img src="static/images/logo/logo_pizza.png" alt="logo"/></a>
                </div>
                <div className="info-header">
                    <p>Щодня 10:00-21:00</p>
                    <a href="#">+380999999999</a>
                </div>
            </header>
        );
    }
}

export default Header;