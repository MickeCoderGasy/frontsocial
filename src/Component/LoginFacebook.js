import React from 'react';
import FacebookLogin from 'react-facebook-login';

const LoginFacebook = () => {
  const handleFacebookLogin = (response) => {
    if (response.status !== 'unknown') {
      // User is logged in with Facebook
      const accessToken = response.accessToken;
      // Send the access token to the Django backend for authentication
      fetch('https://557f-41-188-36-110.ngrok-free.app/social/api/login/facebook/', {
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
        appId="216353421374535"
        fields="name,email,picture,public_profile,manage_pages,pages_messaging,pages_show_list"
        callback={handleFacebookLogin}
      />
    </div>
  );
};

export default LoginFacebook;