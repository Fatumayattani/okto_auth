import React, { useState } from "react";
import { useOkto } from "okto-sdk-react";
import { GoogleLogin } from "@react-oauth/google";

function LoginPage() {
const { authenticate } = useOkto();
const [authToken, setAuthToken] = useState(null);

const handleGoogleLogin = async (credentialResponse) => {
 const idToken = credentialResponse.credential;
  authenticate(idToken, (authResponse, error) => {
      if (authResponse) {
        setAuthToken(authResponse.auth_token);
        console.log("Authenticated successfully, auth token:", authResponse.auth_token);
      } else if (error) {
            console.error("Authentication error:", error);
        }
    });
 };

 return (
    <div>
        <h1>Login</h1>
        {!authToken ? (
        <GoogleLogin
            onSuccess={handleGoogleLogin}
            onError={(error) => console.error("Login Failed", error)}
        />
        ) : (
            <p>Authenticated</p>
        )}
    </div>
    );
}

export default LoginPage;