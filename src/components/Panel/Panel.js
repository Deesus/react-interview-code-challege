import React, {Component} from 'react';
import Css from './Panel.css';
import AppButton from '../AppButton/AppButton';
import TextField from '../TextField/TextField';
import PanelHeader from './PanelHeader/PanelHeader';


class Panel extends Component {
    constructor(props) {
        super(props);

        // the Panel's default state:
        this.state = {
            headingText: 'Login to your Account',
            userName: ''
        };
    }

    // TODO: this `onChange` handler doesn't seem to change the `userName` property
    handleTextFieldOnChange = (event) => {
        this.userName = event.target.value;
    };

    // TODO: this `onClick` handler doesn't seem to change the `headingText` property or reset the `userName`
    handleButtonOnClick = (event) => {
        if (this.state.userName.trim() !== '') {
            this.headingText = `Welcome, ${this.state.userName}!`;
            this.userName = '';
        }
    };

    // TODO: why can't the component return our markup?
    return (
        <div className={Css.Panel}>
            <PanelHeader headingText={ this.state.headingText } userName={ this.state.userName } />

            <TextField inputFieldOnChange={ this.handleTextFieldOnChange } value={ this.state.userName } />
            <AppButton buttonOnClick={ this.handleButtonOnClick }>Log In</AppButton>
        </div>
    );
}

export default Panel;