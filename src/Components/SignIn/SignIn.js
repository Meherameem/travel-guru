import React, { useState } from 'react';
import { Button, Form, Nav, Navbar } from 'react-bootstrap';
import styles from './SignIn.module.css';
//firebase part
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';
import { Link } from 'react-router-dom';

firebase.initializeApp(firebaseConfig);
//firebase part end

const SignIn = () => {
    const [user,setUser] = useState({
        isSignedIn : false,
        name: '',
        email : '',
        password: '',
    })
    const provider = new firebase.auth.GoogleAuthProvider();
    const handleSignIn = () => {
        firebase.auth().signInWithPopup(provider)
        .then(res => {
            const {displayName,email} = res.user;
            const signedInUser = {
                isSignedIn : true,
                name: displayName,
                email:email,
            }
            setUser(signedInUser);
            console.log(user);
        })
        .catch(err => {
            console.log(err.message);
        })
    };
    const handleSignOut = () => {
        firebase.auth().signOut()
        .then(res =>{
            const signedOutUser = {
                isSignedIn: false,
                name :'',
                email :'',
                password : '',
                success: false
            }
            setUser(signedOutUser);
        })
        .catch(err => {
            console.log(err.message);
        })
    }
    const handleBlur = (e) => {
        let isFieldValid = true;
        if (e.target.name === 'email'){
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if (e.target.name === 'password'){
            const isPasswordValid = e.target.value.length>6;
            const passwordNumber = /\d{1}/.test(e.target.value);
            isFieldValid = (isPasswordValid && passwordNumber);
        }
        if (isFieldValid){
            const newUserInfo = {...user};
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    }
    const handleSubmit = (e) => {
        if (user.email && user.password){
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then(res => {
                const newUserInfo = {...user};
                newUserInfo.error = '';
                newUserInfo.success = true;
                setUser(newUserInfo);
            })
            .catch(error => {
                const newUserInfo = {...user};
                newUserInfo.error = error.message;
                newUserInfo.success = false;
                setUser(newUserInfo);
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode,' ',errorMessage);
              });
        }
        e.preventDefault();
    }
    return (
        <div>
            <div style={{display: 'flex',flexDirection:'row'}}>
            <img className={styles.image} src={require('../../resources/Logo.png')} alt="logo"></img>
            <Form>
              <Form.Control className={styles.form} type="text" placeholder="Search Your Destination" />
            </Form>
            <Navbar className={styles.navbar}>
              <Nav>
                <Nav.Link className={styles.linker} style={{marginRight:'30px',textDecoration:'none'}} href='/home'>Home</Nav.Link>
                <Nav.Link className={styles.linker} style={{marginRight:'30px',textDecoration:'none'}} href='/news'>News</Nav.Link>
                <Nav.Link className={styles.linker} style={{marginRight:'30px',textDecoration:'none'}} href='/destination'>Destination</Nav.Link>
                <Nav.Link className={styles.linker} style={{marginRight:'30px',textDecoration:'none'}} href='/blog'>Blog</Nav.Link>
                <Nav.Link className={styles.linker} style={{marginRight:'30px',textDecoration:'none'}} href='/contact'>Contact</Nav.Link>
                <Nav.Link className={styles.linker} style={{marginRight:'30px',textDecoration:'none'}} href='/login'>Login</Nav.Link>
              </Nav>
            </Navbar>
          </div>
          <div style={{marginTop:'50px',marginLeft:'480px',marginBottom:'0px',height:'250px',width:'400px'}}>
              <h4>Create a new account</h4>
              <Form>
                  <Form.Control onBlur={handleBlur} style={{borderRadius:'20px'}} type="text" name="name" placeholder=" Your Name" required></Form.Control><br></br>
                  <Form.Control onBlur={handleBlur} style={{borderRadius:'20px'}} type="text" name="email" placeholder="Email Address" required></Form.Control><br></br>
                  <Form.Control onBlur={handleBlur} style={{borderRadius:'20px'}} type="password" name="password" placeholder="Password" required></Form.Control><br></br>
                  {/* <input onBlur={handleBlur} type='password' style={{borderRadius:'20px'}} name="password" placeholder="Password" required></input><br></br><br></br> */}
                  
                  <input onClick={handleSubmit} type="submit" value="Submit"></input>
                  
              </Form>
          </div>
              <p style={{color:'red'}}>{user.error}</p>
              {user.success && <p styles={{color:'green'}}>{user.name} congratulations!your account has been created successfully!Please Login to Continue.</p>}
          
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>

          <h6><Link to="/login">Already Have an account? Login Here!</Link></h6>
            {
                user.isSignedIn ? <Button style={{borderRadius:'20px'}} onClick={handleSignOut}>Sign Out</Button> : <Button style={{marginTop:'10px',borderRadius:'20px'}} onClick={handleSignIn} variant="light"><img style={{height:'3%', width:'3%'}} src={require('../../resources/Icon/google.png')} alt='Google'></img><span style={{marginLeft:'5px'}}>Continue with Google</span></Button>
            }
            {
                user.isSignedIn && <p className={styles.header}> Congratulations! {user.name}. Your Sign In with Google has been completed successfully!Please Login to Continue.</p>
            }
        </div>
    );
};

export default SignIn;