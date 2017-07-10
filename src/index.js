import React from 'react';
import ReactDOM from 'react-dom';
import  SignIn  from './components/SignIn';
import { createStore } from 'redux';
import { firebaseApp } from './firebase';
import { Provider } from 'react-redux';




ReactDOM.render(<div>
    <SignIn/>
</div>, document.getElementById('root'));
