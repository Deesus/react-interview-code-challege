import React from 'react';
import Css from './AppButton.css';


const Button = () => {
    // TODO: for every instance of the AppButton, we should be able to pass content INSIDE the button (not just props) -- but how?

    // TODO: the `buttonOnClick` event isn't being triggered -- why?
    return (
        <button className={Css.Button} onClick={buttonOnClick}>
            TODO: we want to pass content here
        </button>
    );
};

export default Button;