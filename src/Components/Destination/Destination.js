import React from 'react';
// import {Image, Container, Button} from 'react-bootstrap';
// import { useState} from 'react';
import { useParams } from "react-router-dom";


const Destination = () => {

  const {pid} = useParams();


    return (
        <div>
          <h1> {pid} Destination</h1>

        </div>
    );
};

export default Destination;
