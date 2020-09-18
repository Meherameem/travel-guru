import React from 'react';
import { Card } from 'react-bootstrap';
import styles from './HomeCard.module.css';

const HomeCard = (props) => {
    const {name} = props.place;
    return (
        <div className={styles.headerOneStyle}>
            <Card style={{backgroundImage:`url('../../resourses/Image/place/${name}.png')`}}>
                {name}
            </Card>
        </div>
    );
};

export default HomeCard;