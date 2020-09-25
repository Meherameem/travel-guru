import React from 'react';
// import {Image, Container, Button} from 'react-bootstrap';
// import { useState} from 'react';
import { useParams } from "react-router-dom";
import places from '../../fakeData/PlaceData';
import styles from '../Home/Home.module.css';
import booking_styles from './Booking.module.css';
import { Button} from 'react-bootstrap';
import { Form, Nav, Navbar } from 'react-bootstrap';
// import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
// import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
// import Search from '../Search/Search';

const Booking = () => {

  const {id} = useParams();
  const location_details = places.find(place => place.id === Number(id));
  // const result = trees.find(tree => tree.name === "oak");
  console.log(location_details);
  
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


          <div style={{display: 'flex',flexDirection:'row'}}>
            <div style={{display: 'flex',flexDirection:'column'}} className={booking_styles.booking_info}>
              <div className= {booking_styles.title_info}><p>{location_details.name}</p></div>
              <div className={booking_styles.title_description}>  <p>{location_details.description}</p></div>
            </div>


            <div className={booking_styles.booking_form}>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>From</Form.Label>
                  <Form.Control type="text" defaultValue="Dhaka" />

                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>To</Form.Label>
                  <Form.Control type="text"  defaultValue={location_details.name} />
                </Form.Group>


                <div style={{display: 'flex',flexDirection:'row'}}>

                  <Form.Group>
                    <TextField
                      id="date"
                      label="FROM"
                      type="date"
                      defaultValue="2017-05-24"

                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </Form.Group>

                  <Form.Group>
                    <TextField
                      id="date"
                      label="TO"
                      type="date"
                      defaultValue="2017-05-24"

                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </Form.Group>

                </div>

                <Link to={"/search/"+id}><Button  variant="warning">  Start Booking  </Button></Link>

              </Form>
            </div>


          </div>


          <Link to={"/search/"}><Button  variant="warning" type="submit">  Start Booking  </Button></Link>

        </div>
    );
};

export default Booking;
