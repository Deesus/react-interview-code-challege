import React, {Component} from 'react';
import Css from './TextField.css';

const AppInput = (props) => {
    return (
        <label>
            <input className={Css.TextField} onChange={props.inputFieldOnChange} placeholder="Username" />
        </label>
    );
};

export default AppInput;