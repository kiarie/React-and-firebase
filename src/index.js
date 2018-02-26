import React from 'react';
import { render } from 'react-dom';
import App from './App';

firebase.auth().onAuthStateChanged(function (user) {
    render(<App user={user} />, document.querySelector('#root'));
});