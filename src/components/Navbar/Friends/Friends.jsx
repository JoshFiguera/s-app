import React from 'react';
import s from '../Navbar.module.css';

const Friends = (props) => {

    return (
        <div className={s.item}>{props.state.friends}</div>
    )
}

export default Friends;
