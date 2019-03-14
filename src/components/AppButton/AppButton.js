import React from 'react';
import Css from './AppButton.css';


const Button = (props) => {
    const handleButtonOnClick = (val) => {

    };

    return (
        <button className={Css.Button} onClick={props.buttonOnClick}>
            { props.children }
        </button>
    );
};

export default Button;