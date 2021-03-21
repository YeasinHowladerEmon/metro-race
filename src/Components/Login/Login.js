import React, { useContext, useState } from 'react';
import { Container, Form} from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import googleSign from '../../images/Group 573.png'
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import './Login.css'

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app(); // if already initialized, use that one
}


const Login = () => {
    const [newLogin, setNewLogin] = useState(true)
    const [user, setUser] = useContext(UserContext);

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/destination" } };

    const handleGoogleSign = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                var credential = result.credential;
                var token = credential.accessToken;

                const { displayName, email, photoURL } = result.user;
                const signedInUser = {
                    isSignedIn: true,
                    name: displayName,
                    email: email,
                    photo: photoURL

                }
                setUser(signedInUser)
                history.replace(from)

            }).catch((error) => {

                var errorCode = error.code;
                var errorMessage = error.message;

                var email = error.email;
                console.log(errorCode, errorMessage, email, error);

                var credential = error.credential;

            });
    }

    const handleBlur = (e) => {
        let isFieldValid = true;

        if (e.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value)
        }
        if (e.target.name === 'password') {
            const isPasswordValid = e.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(e.target.value)
            isFieldValid = isPasswordValid && passwordHasNumber;
        }
        if (isFieldValid) {
            const newLoggedInfo = { ...user }
            newLoggedInfo[e.target.name] = e.target.value
            setUser(newLoggedInfo);
        }
    }

    const handleSubmit = (e) => {


        console.log(user.email, user.password);
        if (newLogin && user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then((res) => {
                    // Signed in 
                    const newUserInfo = { ...user };
                    newUserInfo.error = '';
                    newUserInfo.success = true
                    setUser(newUserInfo)
                    history.replace(from);
                    // ...
                })
                .catch((error) => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false
                    setUser(newUserInfo)
                });
        }

        if (!newLogin && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then((res) => {

                    const newUserInfo = { ...user };
                    newUserInfo.error = '';
                    newUserInfo.success = true
                    setUser(newUserInfo)
                    history.replace(from)
                })
                .catch((error) => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false
                    setUser(newUserInfo)
                });
        }

        e.preventDefault()
    }
    return (
    <>
        <section className="get-in-touch">       
                {
                    newLogin ? <h1 className="title">create form</h1> : <h1 className="title"> login form</h1>
                }
            <Container>
                <Form onSubmit={handleSubmit} className="contact-form">
                   
                    <Form.Group className="form-field">
                        {
                            newLogin && <input onBlur={handleBlur} name="name" className="Input-text" type="name" placeholder="" required /> 
                        }
                        {
                            newLogin && <Form.Label className='Label'>Your Name</Form.Label>
                        }
                     
                    </Form.Group>
                    <Form.Group  className="form-field">
                        <input onBlur={handleBlur} name="email" type="email" className="Input-text"
                        placeholder="" required />
                        
                        <Form.Label className='Label'>Email address</Form.Label>
                       
                    </Form.Group>
                    <Form.Group  className="form-field">
                        <input onBlur={handleBlur} name="password" type="password" className="Input-text" placeholder="" required />
                        <Form.Label className='Label'>Password</Form.Label>
                    </Form.Group>
                    <Form.Group className="form-field">
                        {
                            newLogin && <input onBlur={handleBlur} name="conform " className="Input-text" type="password" placeholder="" required /> 
                        }
                        
                        {
                            newLogin &&  <Form.Label className='Label'>Conform Password</Form.Label>
                        }
                        
                    </Form.Group>
                    <Form.Group >
                        {
                            newLogin ? <p style={{marginLeft: '30px'}}>AL READY HAVE AN ACCOUNT ? <Link onClick={() => setNewLogin(!newLogin)}>LOGIN</Link> </p>: <p style={{marginLeft: '30px'}}> DON'T HAVE AN ACCOUNT ? <Link onClick={() => setNewLogin(!newLogin)}>CREATE AN ACCOUNT</Link></p>
                        }
                    </Form.Group>
                    <input className="submit-btn" type="submit" value="Submit" />
                    <p style={{ color: 'red' }} className="">
                        {user.error}
                    </p>
                    {
                        user.success && <p style={{ color: 'green' }}>user {!newLogin ? 'logged In' : "created In"} success</p>
                    }

                </Form>
                <hr />
                <p style={{textAlign: 'center'}} className="me-2">Or, </p>
                <div onClick={handleGoogleSign} style={{ cursor: 'pointer' }} className="">
                    <div className="d-flex justify-content-center align-items-center connect ">
                        <img style={{ width: 30, cursor: 'pointer' }} src={googleSign} alt="" />
                        <p style={{marginLeft:'10px', marginTop:"10px"}}>Connect with google</p>
                    </div>
                </div>
            </Container>
            </section>  
    </>
    );
};

export default Login;