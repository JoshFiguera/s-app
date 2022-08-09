import React from "react";
import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";

let state = {
    posts: [
        {id: 1, message: 'hi', likesCount: 7},
        {id: 2, message: 'ohh', likesCount: 12}
    ]
}



it('it kama', () => {
    // 1.test data

    let action = addPostActionCreator('tex');


    // 2.action

    let newState = profileReducer(state, action);

    // 3.expectation

    expect(newState.posts.length).toBe(3);
});

it('message of new post should be correct', () => {
    // 1.test data

    let action = addPostActionCreator('tex');


    // 2.action

    let newState = profileReducer(state, action);

    // 3.expectation

    expect(newState.posts[2].message).toBe('tex');
});



it('delete post', () => {
    // 1.test data

    let action = deletePost(1);


    // 2.action

    let newState = profileReducer(state, action);

    // 3.expectation

    expect(newState.posts.length).toBe(1);
});

it('incorrect id', () => {
    // 1.test data

    let action = deletePost(1000);


    // 2.action

    let newState = profileReducer(state, action);

    // 3.expectation

    expect(newState.posts.length).toBe(2);
});

it('incorrect id', () => {
    // 1.test data

    let action = deletePost(1000);


    // 2.action

    let newState = profileReducer(state, action);

    // 3.expectation

    expect(newState.posts.length).toBe(2);
});