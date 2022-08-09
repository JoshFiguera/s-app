import React from "react";
import {create} from 'react-test-renderer';
import ProfileStatus from './ProfileStatus';


describe("Profile Status Component", () => {
    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus status = 'it'/>);
        const instance = component.getInstance();
        expect(instance.state.status).toBe('it')
    });

    test("after creation span should be displayed", () => {
        const component = create(<ProfileStatus status = 'it'/>);
        const root = component.root;
        let span = root.findByType('span');
        expect(span).not.toBeNull();
    });

    test("after creation input shouldn't be displayed", () => {
        const component = create(<ProfileStatus status = 'it'/>);
        const root = component.root;
        expect (()=>{
            let input = root.findByType('input')
        }).toThrow();
    });


    test("after creation span should be correct", () => {
        const component = create(<ProfileStatus status = 'it'/>);
        const root = component.root;
        let span = root.findByType('span');
        expect(span).not.toBeNull();
    });

    test("input should be displayed in editMode instead of span", () => {
        const component = create(<ProfileStatus status = 'it'/>);
        const root = component.root;
        let span = root.findByType('span');
        span.props.onMouseMove();
        let input = root.findByType('input');
        expect(input.props.value).toBe('it');
    });

    test("callback should be called", () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus status ='it' updateStatus = {mockCallback}/>);
        const instance = component.getInstance();
        instance.deactivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1);
    });

});