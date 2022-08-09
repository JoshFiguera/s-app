/*
import React from "react";
import {connect} from "react-redux";
import Login from "./Login";
import {getLoginUserData} from "../../redux/login-reducer";


class LoginContainer extends React.Component {

    componentDidMount() {
        this.props.getLoginUserData();
    }

    render() {
        return (
            <Login {...this.props}/>
        )
    }
}

const mapStateToProps = (state) => ({
    email: state.auth.email,
    password: state.auth.password,
    rememberMe: state.auth.rememberMe,

});


export default connect(mapStateToProps, {getLoginUserData})(LoginContainer);*/
