import React from 'react';
import { Form, Nav, Navbar } from 'react-bootstrap';
import styles from './Home.module.css';
import places from '../../fakeData/PlaceData';
import HomeCard from '../HomeCard/HomeCard';
const Home = () => {
    const placesInShort = places;
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
            <div className={styles.homeCard}>
                {placesInShort.map(place =><HomeCard key={place.id} place={place}></HomeCard>)}
            </div>
        </div>
    );
};

export default Home;