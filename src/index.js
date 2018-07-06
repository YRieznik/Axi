import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import HeaderBlock from './components/Header/HeaderBlock';
import '../style/style.scss';
import {BrowserRouter, Route} from 'react-router-dom';

class App extends Component {

    render() {
        return (
            <BrowserRouter>
            <div className="container">
                <HeaderBlock/>
                <h1>Some TExsdadasdtssdsd</h1>
            </div>
            </BrowserRouter>
        );
    }

};


ReactDOM.render(<App />, document.getElementById('root'));
