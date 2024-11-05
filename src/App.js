import React from 'react';
import { OktoProvider, BuildType } from 'okto-sdk-react';
import LoginPage from './LoginPage';

const OKTO_CLIENT_API_KEY = "3a0ea874-f0d0-4428-94c3-10016480d94b";

function App() {
    return (
        <OktoProvider apiKey={OKTO_CLIENT_API_KEY} buildType={BuildType.SANDBOX}>
            <LoginPage/>
        </OktoProvider>
    );
}
export default App;