import React, {Component} from 'react';
import Css from './App.css';
import Panel from './components/Panel/Panel';


class App extends Component {
    render() {
        return (
            <div className={Css.App}>
                <Panel></Panel>
            </div>
        );
    }
}

export default App;
