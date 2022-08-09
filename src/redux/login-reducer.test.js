import React from "react";
import loginReducer, {setPassword} from "./login-reducer";

let state = {
    password: 'tex'
}



it('password should be only 3 symbols', () => {
    // 1.test data

    let action = setPassword('yex');


    // 2.action

    let newState = loginReducer(state, action);

    // 3.expectation

    expect(newState.password.length).toBe(3);
});