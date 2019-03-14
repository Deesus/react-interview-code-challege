import React, {Component} from 'react';
import Css from './PanelHeader.css';
import logo from './silhouette.svg';

const PanelHeader = () => {

    // TODO: our styles are breaking because of the <div> tag -- if only we could return <h2>, <h3>, and <figure> tags all at once

    // TODO: how do we get `headingText` to display text in our component?
    return (
        <div>
            <h2 className={Css.PanelHeading}>{ headingText }</h2>
            <h3 className={Css.PanelSubHeading}>{ userName }</h3>
            <figure className={Css.PanelLogo}>
                <img src={logo} alt="logo" />
            </figure>
        </div>
    );
};

export default PanelHeader;