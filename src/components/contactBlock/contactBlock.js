import React, { Component } from 'react';
import '../contactBlock/contactBlock.css';

class ContactBlock extends Component {
    render() {
        return (
            <div className="contact-block">
                <div className="map">
                    <img src="static/images/body/map.png" alt="map"/>
                </div>
                <div className="info-contact">
                    <img src="static/images/body/white.png" alt="white"/>
                </div>
            </div>
        );
    }
}

export default ContactBlock;