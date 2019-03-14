import React, {Component} from 'react';
import Css from './PanelHeader.css';
import logo from './silhouette.svg';

const PanelHeader = (props) => {
    return (
        <>
            <h2 className={Css.PanelHeading}>{ props.headingText }</h2>
            <h3 className={Css.PanelSubHeading}>{ props.userName }</h3>
            <figure className={Css.PanelLogo}>
                <img src={logo} alt="logo" />
            </figure>
        </>
    );
};

export default PanelHeader;