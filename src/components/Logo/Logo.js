import React from 'react';

import atosLogo from '../../assets/images/atos.png';
import classes from './Logo.css';

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={atosLogo} alt="MyBurger" />
    </div>
);

export default logo;