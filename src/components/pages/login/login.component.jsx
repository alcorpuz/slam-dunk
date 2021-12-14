import React from "react"
import Amplify from 'aws-amplify';
import awsconfig from '../../../aws-exports';
import { AmplifyAuthenticator } from '@aws-amplify/ui-react'


Amplify.configure(awsconfig)

function Login() {
    return (
      <div className="login">
            <AmplifyAuthenticator/>
      </div>
    );
  }
  
  export default Login;