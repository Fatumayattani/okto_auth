import React from 'react';
import ReactDOM from 'react-dom/client';
import { GoogleOAuthProvider } from '@react-oauth/google';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
const GOOGLE_CLIENT_ID = "809424109258-oecvao8rj793m1mhkav5kht508mn9tk4.apps.googleusercontent.com"
root.render(
    <React.StrictMode>
        <GoogleOAuthProvider clientId = {GOOGLE_CLIENT_ID}>
            <App />
        </GoogleOAuthProvider>
    </React.StrictMode>
);
