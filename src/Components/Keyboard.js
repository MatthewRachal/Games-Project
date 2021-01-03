import React, { Component } from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import styles from '../gamestyles.module.css';

var disabled;
export default class Keyboard extends Component {
    
    state = {
        disabled: [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        disabledAll: false,
    }

    sendLetter = (id, letter) => {
        disabled = this.state.disabled;
        disabled[id] = true;
        this.setState({disabled: disabled}, function() {
            this.props.selectLetter(letter);
        });
    }
    componentDidUpdate = (prevProps) => {
        //If the game is over, disable all keyboard buttons
        if(this.props.disableAll !== prevProps.disableAll)
        {
            this.setState({disabled: [true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true] })
        }
        
    }

   
    render() {
        

        return (
            <Container fluid style={{minWidth: "100%", textAlign: "center", margin: "2em 0em 0em 0em", padding: "0"}}>
                <Row>
                    <Col>
                        <button style={{borderRight: "none"}} disabled={this.state.disabled[0]} onClick={e=> {e.preventDefault(); this.sendLetter(0,"Q")}} className={styles.keyBoardButton}>Q</button>
                        <button style={{borderRight: "none"}} disabled={this.state.disabled[1]} onClick={e=> {e.preventDefault(); this.sendLetter(1,"W")}} className={styles.keyBoardButton}>W</button>
                        <button style={{borderRight: "none"}} disabled={this.state.disabled[2]} onClick={e=> {e.preventDefault(); this.sendLetter(2,"E")}} className={styles.keyBoardButton}>E</button>
                        <button style={{borderRight: "none"}} disabled={this.state.disabled[3]} onClick={e=> {e.preventDefault(); this.sendLetter(3,"R")}} className={styles.keyBoardButton}>R</button>
                        <button style={{borderRight: "none"}} disabled={this.state.disabled[4]} onClick={e=> {e.preventDefault(); this.sendLetter(4,"T")}} className={styles.keyBoardButton}>T</button>
                        <button style={{borderRight: "none"}} disabled={this.state.disabled[5]} onClick={e=> {e.preventDefault(); this.sendLetter(5,"Y")}} className={styles.keyBoardButton}>Y</button>
                        <button style={{ borderRight: "none"}} disabled={this.state.disabled[6]} onClick={e=> {e.preventDefault(); this.sendLetter(6,"U")}} className={styles.keyBoardButton}>U</button>
                        <button style={{borderRight: "none"}} disabled={this.state.disabled[7]} onClick={e=> {e.preventDefault(); this.sendLetter(7,"I")}} className={styles.keyBoardButton}>I</button>
                        <button style={{borderRight: "none"}} disabled={this.state.disabled[8]} onClick={e=> {e.preventDefault(); this.sendLetter(8,"O")}} className={styles.keyBoardButton}>O</button>
                        <button style={{}} disabled={this.state.disabled[9]} onClick={e=> {e.preventDefault(); this.sendLetter(9,"P")}} className={styles.keyBoardButton}>P</button>
                    </Col>
                </Row>
                <Row style={{ }}>
                    <Col style={{}}>
                        <button style={{borderTop: "none", borderRight: "none"}} disabled={this.state.disabled[10]} onClick={e=> {e.preventDefault(); this.sendLetter(10,"A")}} className={styles.keyBoardButton}>A</button>
                        <button style={{borderTop: "none", borderRight: "none"}} disabled={this.state.disabled[11]} onClick={e=> {e.preventDefault(); this.sendLetter(11,"S")}} className={styles.keyBoardButton}>S</button>
                        <button style={{borderTop: "none", borderRight: "none"}} disabled={this.state.disabled[12]} onClick={e=> {e.preventDefault(); this.sendLetter(12,"D")}} className={styles.keyBoardButton}>D</button>
                        <button style={{borderTop: "none", borderRight: "none"}} disabled={this.state.disabled[13]} onClick={e=> {e.preventDefault(); this.sendLetter(13,"F")}} className={styles.keyBoardButton}>F</button>
                        <button style={{borderTop: "none", borderRight: "none"}} disabled={this.state.disabled[14]} onClick={e=> {e.preventDefault(); this.sendLetter(14,"G")}} className={styles.keyBoardButton}>G</button>
                        <button style={{borderTop: "none", borderRight: "none"}} disabled={this.state.disabled[15]} onClick={e=> {e.preventDefault(); this.sendLetter(15,"H")}} className={styles.keyBoardButton}>H</button>
                        <button style={{borderTop: "none", borderRight: "none"}} disabled={this.state.disabled[16]} onClick={e=> {e.preventDefault(); this.sendLetter(16,"J")}} className={styles.keyBoardButton}>J</button>
                        <button style={{borderTop: "none", borderRight: "none"}} disabled={this.state.disabled[17]} onClick={e=> {e.preventDefault(); this.sendLetter(17,"K")}} className={styles.keyBoardButton}>K</button>
                        <button style={{borderTop: "none"}} disabled={this.state.disabled[18]} onClick={e=> {e.preventDefault(); this.sendLetter(18,"L")}} className={styles.keyBoardButton}>L</button>
                    </Col>
                </Row>
                <Row style={{}}>
                    <Col>
                        <button style={{borderTop: "none", borderRight: "none"}} disabled={this.state.disabled[19]} onClick={e=> {e.preventDefault(); this.sendLetter(19,"Z")}} className={styles.keyBoardButton}>Z</button>
                        <button style={{borderTop: "none", borderRight: "none"}} disabled={this.state.disabled[20]} onClick={e=> {e.preventDefault(); this.sendLetter(20,"X")}} className={styles.keyBoardButton}>X</button>
                        <button style={{borderTop: "none", borderRight: "none"}} disabled={this.state.disabled[21]} onClick={e=> {e.preventDefault(); this.sendLetter(21,"C")}} className={styles.keyBoardButton}>C</button>
                        <button style={{borderTop: "none", borderRight: "none"}} disabled={this.state.disabled[22]} onClick={e=> {e.preventDefault(); this.sendLetter(22,"V")}} className={styles.keyBoardButton}>V</button>
                        <button style={{borderTop: "none", borderRight: "none"}} disabled={this.state.disabled[23]} onClick={e=> {e.preventDefault(); this.sendLetter(23,"B")}} className={styles.keyBoardButton}>B</button>
                        <button style={{borderTop: "none", borderRight: "none"}} disabled={this.state.disabled[24]} onClick={e=> {e.preventDefault(); this.sendLetter(24,"N")}} className={styles.keyBoardButton}>N</button>
                        <button style={{borderTop: "none", textAlign: "center"}} disabled={this.state.disabled[25]} onClick={e=> {e.preventDefault(); this.sendLetter(25,"M")}} className={styles.keyBoardButton}>M</button> 
                    </Col>
                </Row>

               
                 
            </Container>
        )
    }
}
