import React from "react";
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';
/*import App from './App';*/
import MainSocialApp from "./App";

test('renders learn react link', () => {
  render(<MainSocialApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


/*
it('test', ()=> {
  const div = document.createElement('div');
  ReactDOM.render(<MainSocialApp />, div);
  ReactDOM.unmountComponentAtNode(div);
})*/
