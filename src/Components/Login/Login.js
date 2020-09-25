import React, { useState } from 'react';
import { Form, Nav, Navbar } from 'react-bootstrap';
import styles from './Login.module.css';
//firebase part
import * as firebase from "firebase/app";
import "firebase/auth";
// import firebaseConfig from '../../firebase.config';
import { Link } from 'react-router-dom';


// firebase.initializeApp(firebaseConfig);
//firebase part end


const Login = () => {
  var success = false;
    const [user,setUser] = useState({
        isLoggedIn : false,
        email : '',
        password: '',
    })
    const handleLogin = (e) => {
      console.log('clickedlog',user);
  
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .then(res =>{
                console.log(res);
                console.log('loggedin');
                success = true;
            })
            .catch(error => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode,' ',errorMessage);

                
              });
        
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
          <div style={{marginTop:'150px',marginLeft:'480px',marginBottom:'0px',height:'250px',width:'400px'}}>
              <h4>Log into Your Account</h4>
              <br></br><br></br>
              <Form>
                  <Form.Control onBlur={handleBlur} style={{borderRadius:'20px'}} type="text" name="email" placeholder="Email Address" required></Form.Control><br></br>
                  <Form.Control onBlur={handleBlur} style={{borderRadius:'20px'}} type="password" name="password" placeholder="Password" required></Form.Control><br></br>
                  
                  <input onClick={handleLogin} type="submit" value="Submit"></input>
                  
              </Form>
          </div> 
          <br></br>
          {success ? <p>loggedin</p> : <p>sorry!</p>}
          <br></br>
          <br></br>
          <br></br>
          

          <h6><Link to="/signin">Don't Have an account? Sign in Here!</Link></h6>
        </div>
    );
};

export default Login;