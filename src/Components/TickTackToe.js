import React, { Component } from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import styles from '../gamestyles.module.css';

var boardSelection;
var i; //Counter
var counter;

export default class TickTackToe extends Component {
    
    state = {
        Board: [null, null, null, null, null, null, null, null, null],
        PlayerTurn: "One",
        gameOver: false,
        disabled: false,
        wins: [0,0], //Element 0 Player 1, Element 1 Player 2 wins
        playerVictory: null,
        mark: "X",
    }

    setSquare = (square) => {
       
        if(this.state.Board[square] === "X" || this.state.Board[square] === "Circle")
        {
            alert("Square already taken! Choose another Square")
        }
        else
        {
            boardSelection = this.state.Board;
            if(this.state.PlayerTurn === "One")
            {
                boardSelection[square] = "X"
            }
            else
            {
                boardSelection[square] = "Circle"
            }
            this.setState({Board: boardSelection}, function() {
                //Change to the other players turn after board is updated
                if(this.state.PlayerTurn === "One")
                {
                    this.setState({PlayerTurn: "Two", mark: "O"})
                }
                else
                {
                    this.setState({PlayerTurn: "One", mark: "X"})
                }
                this.checkVictory();
            })
        }
        
    }
    checkVictory = () => {
        counter = 0; //Reset counter
        for(i=0; i<this.state.Board.length; i++)
        {
            if(this.state.Board[i] !== null)
            {
                counter=counter+1; //how many squares have been played
            }

            if(this.state.gameOver !== true) //As long as the game is not over check victory conditions
            {
                //Conditions for Player One to Win
                if((this.state.Board[0] === "X" && this.state.Board[1] === "X" && this.state.Board[2] === "X") || (this.state.Board[3] === "X" && this.state.Board[4] === "X" && this.state.Board[5] === "X") || (this.state.Board[6] === "X" && this.state.Board[7] === "X" && this.state.Board[8] === "X") || (this.state.Board[0] === "X" && this.state.Board[3] === "X" && this.state.Board[6] === "X") || (this.state.Board[1] === "X" && this.state.Board[4] === "X" && this.state.Board[7] === "X") || (this.state.Board[2] === "X" && this.state.Board[5] === "X" && this.state.Board[8] === "X") || (this.state.Board[0] === "X" && this.state.Board[4] === "X" && this.state.Board[8] === "X") || (this.state.Board[2] === "X" && this.state.Board[4] === "X" && this.state.Board[6] === "X"))
                {
                    this.setState({GameOver: true, disabled: true}, function() {
                        var wins = []; //Reset
                        wins = this.state.wins;
                        wins[0] = this.state.wins[0] + 1;
                        this.setState({wins: wins, playerVictory: "Victory for Player 1!"});
                    });
                    break; //Break the loop, the game has ended before all squares were selected.
                }
                //Conditions for Player Two to Win
                else if((this.state.Board[0] === "Circle" && this.state.Board[1] === "Circle" && this.state.Board[2] === "Circle") || (this.state.Board[3] === "Circle" && this.state.Board[4] === "Circle" && this.state.Board[5] === "Circle") || (this.state.Board[6] === "Circle" && this.state.Board[7] === "Circle" && this.state.Board[8] === "Circle") || (this.state.Board[0] === "Circle" && this.state.Board[3] === "Circle" && this.state.Board[6] === "Circle") || (this.state.Board[1] === "Circle" && this.state.Board[4] === "Circle" && this.state.Board[7] === "Circle") || (this.state.Board[2] === "Circle" && this.state.Board[5] === "Circle" && this.state.Board[8] === "Circle") || (this.state.Board[0] === "Circle" && this.state.Board[4] === "Circle" && this.state.Board[8] === "Circle") || (this.state.Board[2] === "Circle" && this.state.Board[4] === "Circle" && this.state.Board[6] === "Circle"))
                {
                    this.setState({GameOver: true, disabled: true}, function() {
                        var wins = []; //Reset
                        wins = this.state.wins;
                        wins[1] = this.state.wins[1] + 1;
                        this.setState({wins: wins, playerVictory: "Victory for Player 2!"});
                    });
                    break; //Break the loop, the game has ended before all squares were selected.
                }
                //Conditions for a draw to occur
                else if(counter === 9) 
                {
                    this.setState({GameOver: true, disabled: true, playerVictory: "The Game ends in a Draw!"});
                    break; //Break the loop, the game has ended before all squares were selected.
                } 
            } 
        }   
    }

    resetGame = () => {
        this.setState({PlayerTurn: "One", disabled: false, GameOver: false, playerVictory: null, Board: [null, null, null, null, null, null, null, null, null]});
    }
    
    render() {
        return (
            <Container fluid style={{margin: "2em 0em 0em 0em", textAlign: "center", minWidth: "320px", maxWidth: "2200px"}}>

                <Row style={{height: "30px",}}>
                    <Col>
                        <h4 className={styles.victory}>{this.state.playerVictory}</h4>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={12} md={4} lg={4} xl={4}>
                        <button className={styles.gameButton} onClick={e=> {e.preventDefault(); this.resetGame()}}>Reset Game</button>
                    </Col>
                    <Col xs={12} sm={12} md={4} lg={4} xl={4}>
                        <h4 style={{whiteSpace: "nowrap"}}>Current Player Turn: {this.state.PlayerTurn}</h4>
                    </Col>
                    <Col xs={12} sm={12} md={4} lg={4} xl={4}>
                        <h5>Current Score:</h5>
                        <h6><span style={{color: "red"}}>Player 1 Wins:</span> {this.state.wins[0]}</h6>
                        <h6><span style={{color: "blue"}}>Player 2 Wins:</span> {this.state.wins[1]}</h6>
                    </Col>
                </Row>
             
                <Row style={{margin: "1em 0em 0em 0em", padding: "0em 0em 0em 0em", justifyContent: "center",}}>
                    <Col style={{margin: "0em", padding: "0em", borderStyle: "solid", borderBottom: "none", borderRight: "none", height: "150px", minWidth: "100px"}}><button disabled={this.state.disabled} onClick={e=> {e.preventDefault(); this.setSquare(0)}} className={this.state.Board[0] === "X" ? styles.TTTBoxChecked : this.state.Board[0] === "Circle" ? styles.TTTBoxCircle : styles.TTTBoxNone}/></Col>
                    <Col style={{margin: "0em", padding: "0em", borderStyle: "solid", borderBottom: "none", borderRight: "none", height: "150px"}}><button disabled={this.state.disabled} onClick={e=> {e.preventDefault(); this.setSquare(1)}} className={this.state.Board[1] === "X" ? styles.TTTBoxChecked : this.state.Board[1] === "Circle" ? styles.TTTBoxCircle : styles.TTTBoxNone}/></Col>
                    <Col style={{margin: "0em", padding: "0em", borderStyle: "solid", borderBottom: "none", height: "150px"}}><button disabled={this.state.disabled} onClick={e=> {e.preventDefault(); this.setSquare(2)}} className={this.state.Board[2] === "X" ? styles.TTTBoxChecked : this.state.Board[2] === "Circle" ? styles.TTTBoxCircle : styles.TTTBoxNone}/></Col>
                </Row>
                <Row style={{margin: "0em 0em 0em 0em", padding: "0em 0em 0em 0em", justifyContent: "center"}}>
                    <Col style={{margin: "0em", padding: "0em", borderStyle: "solid", borderBottom: "none", borderRight: "none",height: "150px"}}><button disabled={this.state.disabled} onClick={e=> {e.preventDefault(); this.setSquare(3)}} className={this.state.Board[3] === "X" ? styles.TTTBoxChecked : this.state.Board[3] === "Circle" ? styles.TTTBoxCircle : styles.TTTBoxNone}/></Col>
                    <Col style={{margin: "0em", padding: "0em", borderStyle: "solid", borderBottom: "none", borderRight: "none",height: "150px"}}><button disabled={this.state.disabled} onClick={e=> {e.preventDefault(); this.setSquare(4)}} className={this.state.Board[4] === "X" ? styles.TTTBoxChecked : this.state.Board[4] === "Circle" ? styles.TTTBoxCircle : styles.TTTBoxNone}/></Col>
                    <Col style={{margin: "0em", padding: "0em", borderStyle: "solid", borderBottom: "none", height: "150px"}}><button disabled={this.state.disabled} onClick={e=> {e.preventDefault(); this.setSquare(5)}} className={this.state.Board[5] === "X" ? styles.TTTBoxChecked : this.state.Board[5] === "Circle" ? styles.TTTBoxCircle : styles.TTTBoxNone}/></Col>

                </Row> 
                <Row style={{margin: "0em", padding: "0em", justifyContent: "center"}}>
                    <Col style={{margin: "0em", padding: "0em", borderStyle: "solid", borderRight: "none", height: "150px"}}><button disabled={this.state.disabled} onClick={e=> {e.preventDefault(); this.setSquare(6)}} className={this.state.Board[6] === "X" ? styles.TTTBoxChecked : this.state.Board[6] === "Circle" ? styles.TTTBoxCircle : styles.TTTBoxNone}/></Col>
                    <Col style={{margin: "0em", padding: "0em", borderStyle: "solid", borderRight: "none", height: "150px"}}><button disabled={this.state.disabled} onClick={e=> {e.preventDefault(); this.setSquare(7)}} className={this.state.Board[7] === "X" ? styles.TTTBoxChecked : this.state.Board[7] === "Circle" ? styles.TTTBoxCircle : styles.TTTBoxNone}/></Col>
                    <Col style={{margin: "0em", padding: "0em", borderStyle: "solid", height: "150px"}}><button disabled={this.state.disabled} onClick={e=> {e.preventDefault(); this.setSquare(8)}} className={this.state.Board[8] === "X" ? styles.TTTBoxChecked : this.state.Board[8] === "Circle" ? styles.TTTBoxCircle : styles.TTTBoxNone}/></Col>
                </Row>
            </Container>
        )
    }
}
