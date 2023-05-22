import axios from 'axios'
import React from 'react'
import GoogleLogin from 'react-google-login'

const GoogleLoginButton = () => {
    const responseGoogle = async (response) => {
      try {
        const res = await axios.post('https://suppler-tracker-v1.onrender.com/api/google', {
          tokenId: response.tokenId,
        });
        if (res && res.data) {
          console.log(res.data); // Handle the response as needed
        } else {
            console.error('Empty response or missing data'); // Handle the error case
          }
      } catch (err) {
        console.error(err.response.data); // Handle the error as needed
      }
    };

  return (
    <GoogleLogin
    clientId=""
    buttonText="Login with Google"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />
    )
}

export default GoogleLoginButton