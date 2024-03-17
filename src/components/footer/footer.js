import React, { Component } from 'react';
import "../footer/footer.css";

class Footer extends Component {
    render() {
        return (
            <footer className="footer-yummu">
                <div className="logo-footer">
                    <a href="#"><img src="static/images/footer/logo-footer.png" alt="logo"/></a>
                </div>
                <div className="menu-footer">
                    <a href="#">Меню</a>
                    <a href="#">Контакти</a>
                    <a href="#">Про нас</a>
                    <a href="#">Акції</a>
                </div>
                <div className="social-footer">
                    <a href="#"><img src="static/images/footer/fa.png" alt="fa"/></a>
                    <a href="#"><img src="static/images/footer/in.png" alt="in"/></a>
                </div>
            </footer>
        );
    }
}

export default Footer;