import React from 'react';
import {Image, Container, Button} from 'react-bootstrap';
import styles from './HomeCard.module.css';

import { useState} from 'react';
import { Link } from 'react-router-dom';
import Destination from '../Destination/Destination'

const HomeCard = (props) => {
  const {name,title,description} = props.place;
  const details = {name,description};
  const handleBookingBtn =(details) => {
    return (
      <Destination details={details}></Destination>
    );
  }

  const ImageClicked =() => {
      return (
        <div className={styles.cardDetails}>
          <h2>{name}</h2>
          <p>{title}</p>
          <Link to='/destination'><Button onClick={handleBookingBtn(details)} className={styles.bookingButton}>Booking</Button></Link>
        </div>
      );
}
  const [clicked, setClicked] = useState(false);
  const toggle = () => setClicked(!clicked);

    return (
<Container style={{display:'flex',flexDirection:'row'}}>
  <div> {clicked && <ImageClicked/>}</div>

  <div className={styles.zoom}>
      <div className={styles.box}>
        <Image onClick={toggle} style={{width:200, height: 300,}} src={require(`../../resources/Image/place/${name}.png`)} roundedCircle/>
        <div className={styles.text}>
          {name}

        </div>

      </div>

    </div>

</Container>

  );
  };

  export default HomeCard;