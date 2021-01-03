import React, { Component } from 'react'
import {Container} from 'react-bootstrap';
import {Link} from "react-router-dom";
import styles from '../gamestyles.module.css';

export default class GamesNavBar extends Component {
    
    state = {

    }
    
    render() {
        return (
            <Container fluid style={{padding: "0em", minWidth: "320px", width: "100%"}}>
               <ul className={styles.navUL}>
                        <Link to="/Home"><li className={styles.navLI}>Home</li></Link>
                        <Link to="/TickTackToe"><li className={styles.navLI}>Tick-Tack-Toe</li></Link>
                        <Link to="/Hangman"><li className={styles.navLI}>Hangman</li></Link>
                        <Link to="/Battleship"><li className={styles.navLI}>Battleship</li></Link>


                        </ul>
                 
            </Container>
        )
    }
}
