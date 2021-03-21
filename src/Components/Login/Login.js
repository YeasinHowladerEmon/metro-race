import React, { useContext, useState } from 'react';
import { Container, Form, Section } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import googleSign from '../../images/Group 573.png'
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app(); // if already initialized, use that one
}


const Login = () => {
    const [newLogin, setNewLogin] = useState(true)

    const [user, setUser] = useContext(UserContext);

    const handleGoogleSign = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                /** @type {firebase.auth.OAuthCredential} */
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
        <Section className="get-in-touch">       
                {
                    newLogin ? <h1 className="title">create form</h1> : <h1 className="title"> login form</h1>
                }
            <Container>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        {
                            newLogin && <Form.Control onBlur={handleBlur} name="name" type="name" placeholder="Enter Your name" required />
                        }
                        <br />
                        <Form.Control onBlur={handleBlur} name="email" type="email" placeholder="Enter email" required />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Control onBlur={handleBlur} name="password" type="password" placeholder="Password" required />

                        <br />
                        {
                            newLogin && <Form.Control onBlur={handleBlur} name="conform " type="password" placeholder="Conform Password" required />
                        }
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        {
                            newLogin ? <Link onClick={() => setNewLogin(!newLogin)}>Login</Link> : <Link onClick={() => setNewLogin(!newLogin)}>create</Link>
                            
                        }
                    </Form.Group>
                    <input type="submit" value="Submit" />
                    <p style={{ color: 'red' }} className="">
                        {user.error}
                    </p>
                    {
                        user.success && <p style={{ color: 'green' }}>user {!newLogin ? 'logged In' : "created In"} success</p>
                    }

                </Form>
            </Container>
        </Section>    
            <hr />
            <span className="me-2">Or, </span>
            <div onClick={handleGoogleSign} style={{ cursor: 'pointer' }}>
                <div className="d-flex justify-content-center align-items-center mt-4 text-secondary">
                    <img style={{ width: 30, cursor: 'pointer' }} src={googleSign} alt="" /> <br /> <br />
                    <p>Conect with google</p>
                </div>
            </div>

            {
                user.isSignedIn && <div>
                    <h3>welcome, {user.name}</h3>
                    <h3>your email: {user.email}</h3>
                    <img src={user.photo} alt="" />
                </div>
            }
    </>
    );
};

export default Login;