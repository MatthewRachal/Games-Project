import React, { Component } from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import {Link} from "react-router-dom";
import styles from '../gamestyles.module.css';

export default class Dashboard extends Component {
    
    state = {

    }
    
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col>
                    <   h1>Game Dashboard</h1>
                    </Col>
                </Row>

                <Row>
                    <Col xs={12} sm={12} md={4} lg={4} style={{marginTop: "1em"}}>
                        <Link to="./TickTackToe"><button className={styles.gameButton}>Tick-Tack Toe</button></Link>
                    </Col>
                    <Col xs={12} sm={12} md={4} lg={4} style={{marginTop: "1em"}}>
                        <Link to="./Hangman"><button className={styles.gameButton}>Hangman</button></Link>
                    </Col>
                    <Col xs={12} sm={12} md={4} lg={4} style={{marginTop: "1em"}}>
                        <Link to="./Battleship"><button className={styles.gameButton}>Battleship</button></Link>
                    </Col>
                </Row>
            </Container> 
        )
    }
}
