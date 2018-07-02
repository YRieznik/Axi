import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import HeaderBlock from './components/Header/HeaderBlock';
import '../style/style.scss';
import Popup from './components/Popup';
import axios from 'axios';


class App extends Component {

    render() {
        return (
            <div className="container">
                <HeaderBlock/>
                <h1>Some  sdas TExsdadasdtssdsd</h1>
            </div>
        );
    }

};


ReactDOM.render(<App />, document.getElementById('root'));
