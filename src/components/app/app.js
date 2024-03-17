import React, { Component } from 'react';
import Header from '../header/header';
import Section from '../section/section';
import Footer from '../footer/footer';
import '../app/app.css';

class App extends Component {
    render() {
        return (
            <div className="page">
                <Header />
                <Section />
                <Footer />
            </div>
        );
    }
}

export default App;
