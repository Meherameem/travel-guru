import React from 'react';

// import { useState} from 'react';
import { useParams } from "react-router-dom";
//import places from '../../fakeData/PlaceData';
import hotels from '../../fakeData/SearchData';
import styles from '../Home/Home.module.css';
import search_styles from './Search.module.css';
import {Image, Row, Col} from 'react-bootstrap';
import { Form, Nav, Navbar } from 'react-bootstrap';
//import Booking from '../Booking/Booking'


const Search = () => {

    const {id} = useParams();



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


          <div className={search_styles.hotel_info}  >
            {/* <div style={{display: 'flex',flexDirection:'r'}}></div>
            */}
            {hotels.filter(hotel => hotel.id === Number(id)).map(filteredhotel => (

              <div className={search_styles.for_padding}>
                <Row>
                  <Col>
                    <Image style={{width:350, height: 200,}} src={require(`../../resources/Image/${filteredhotel.image}.png`)} />
                  </Col>

                  <Col>
                    <p className={search_styles.title_style}>{filteredhotel.name}</p>
                    <p className={search_styles.other_details}>
                      {filteredhotel.guest}{filteredhotel.room}{filteredhotel.bed}{filteredhotel.bath}
                    </p>
                    <p className={search_styles.other_details}> {filteredhotel.ac}</p>
                    <p className={search_styles.other_details}> {filteredhotel.cancel}</p>

                    <div className={search_styles.star_design}>
                      <p><i class="fa fa-star" aria-hidden="flase"></i>{filteredhotel.rating}({filteredhotel.rating_count}) {'  '} ${filteredhotel.price_per_night}/night </p>
                    </div>
                    <p></p>
                    <p></p>
                  </Col>
                </Row>
                </div>



            ))}
          </div>




        </div>
    );
};

export default Search;
