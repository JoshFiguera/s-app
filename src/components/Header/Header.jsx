import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={s.header}>
{/*
        <img src='https://i1.sndcdn.com/visuals-000007475437-COi80m-t2480x520.jpg' alt={'alt'}/>
*/}
        <img src='https://cdn-icons-png.flaticon.com/512/831/831388.png?w=740&t=st=1660125503~exp=1660126103~hmac=49af8849287174b70c48e2fe3b387861063f63297a0db3d031841c9219e9260e' alt={'alt'}/>

        <div className={s.loginBlock}>
            { props.isAuth
                ? <div>{props.login} - <button onClick={props.logout}>Log out</button> </div>
                : <NavLink to={'/login'}>Login</NavLink> }
        </div>

        <div className={s.sa}>Social App For Producers</div>


    </header>
}

export default Header;