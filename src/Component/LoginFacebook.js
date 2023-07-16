import React from 'react';
import FacebookLogin from 'react-facebook-login';

const LoginFacebook = () => {
  const handleFacebookLogin = (response) => {
    if (response.status !== 'unknown') {
      // User is logged in with Facebook
      const accessToken = response.accessToken;
      // Send the access token to the Django backend for authentication
      fetch('https://3d7b-154-126-56-5.ngrok-free.app/social/api/login/facebook/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ access_token: accessToken }),
      })
        .then((response) => response.json())
        .then((data) => {
          // Handle the response from the Django backend
          console.log(data);
        })
        .catch((error) => {
          // Handle any errors
          console.error(error);
        });
    } else {
      // User is not logged in with Facebook or cancelled the login process
      console.log('User is not logged in with Facebook');
    }
  };

  return (
    <div>
      <FacebookLogin
        appId="266421499351906"
        fields="name,email,picture,manage_pages"
        callback={handleFacebookLogin}
      />
    </div>
  );
};

export default LoginFacebook;