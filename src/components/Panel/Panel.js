import React, {Component} from 'react';
import Css from './Panel.css';
import AppButton from '../AppButton/AppButton';
import TextField from '../TextField/TextField';
import PanelHeader from './PanelHeader/PanelHeader';


class Panel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            headingText: 'Login to your Account',
            userName: ''
        }
    }

    handleTextFieldOnChange = (event) => {
        this.setState({
            userName: event.target.value
        });
    };

    handleButtonOnClick = (event) => {
        if (this.state.userName.trim() !== '') {
            this.setState({
                headingText: `Welcome, ${this.state.userName}!`,
                userName: ''
            });
        }
    };

    render() {
        return (
            <div className={Css.Panel}>
                <PanelHeader headingText={this.state.headingText} userName={this.state.userName} />

                <TextField inputFieldOnChange={ this.handleTextFieldOnChange } value={ this.state.userName } />
                <AppButton buttonOnClick={this.handleButtonOnClick}>Log In</AppButton>
            </div>
        );
    }
}

export default Panel;