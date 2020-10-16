import React, { useContext } from 'react';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { Link, useHistory, useLocation } from 'react-router-dom';
import googleIcon from '../../images/logos/google.png';
import logo from '../../images/logos/logo.png';
import './Login.css';


const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: '/dashboard' },
  };

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  const handleGoogleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
      .then(function (result) {
        const { displayName, email, photoURL } = result.user;
        const signedInUser = { name: displayName, email, photoURL };
        setLoggedInUser(signedInUser);
        history.replace(from);
      })
      .catch(function (error) {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <div className='text-center m-auto d-flex justify-content-center align-items-center main-container'>
      <div className='mt-5'>
        <Link to='/' className='navbar-brand'>
          <img style={{height: '50px'}} className='brand-logo' src={logo} alt='logo' />
        </Link>
      </div>
      <div className='form-field d-flex justify-content-center align-items-center'>
        <h3 className='mb-4'>Login with</h3>
        <button className='sign-btn' onClick={handleGoogleSignIn}>
          <img className='media-icon' src={googleIcon} alt='google icon' />
          Continue with Google
        </button>
        <div className='mt-2'>
          <span className='text-left'>Don't have an account?</span>
          <Link to='/login'>
            <span className='ml-2'>Create an account</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
