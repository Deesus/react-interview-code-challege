import React, {Component} from 'react';
import Css from './TextField.css';

const AppInput = () => {

    // TODO: the `inputFieldOnChange` event doesn't seem to work -- why?
    return (
        <label>
            <input className={Css.TextField} onChange={inputFieldOnChange} placeholder="Username" />
        </label>
    );
};

export default AppInput;