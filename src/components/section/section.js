import React, { Component } from 'react';
import Product from '../product/product';
import TopProduct from '../topProduct/topProduct';
import ContactBlock from '../contactBlock/contactBlock';

class Section extends Component {
    render() {
        return (
            <div className="sections">
                <div className="section">
                    <div className="banners">
                        <img className="banner-pizza" src="static/images/slider/yellow.png" alt="yellow"/>
                    </div>
                    <div className="tabs">
                        <div className="tab">
                            <a href="#">Всі</a>
                            <a href="#">Піца</a>
                            <a href="#">Кава</a>
                        </div>
                    </div>
                    <Product />
                </div>
                <div className="section">
                    <TopProduct />
                </div>
                <div className="section">
                    <ContactBlock />
                </div>
            </div>
        );
    }
}

export default Section;