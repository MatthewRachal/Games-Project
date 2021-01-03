import React, { Component } from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import styles from '../gamestyles.module.css';
import Keyboard from './Keyboard';
import Man from './Man';

var holdSelectedWords = [];
var holdUserAnswer = [];
var i = 0; //Counter
var counter = 0; //Counter 2
var holdQuestion;

export default class Hangman extends Component {
    
    state = {
        hangedStatus: 0,
        word: "AIRPLANE",
        holdWord: [""], //The Word in an array of each character
        userAnswer: "",
        selectedWords: [],
        body: [false, false, false, false, false, false],
        disableAll: false,

    }

    componentDidMount = () => {
        const words = ["AIRPLANE","PIRATE","OCEAN","DECEMBER","HURRICANE","DRAGON","METROPOLIS","SITUATION","LITERATURE","BOBCAT","MYSTERY","STORM","BUILDING","ANIMAL"];
        var random = Math.floor(Math.random()*words.length);
        this.setState({word: words[random]}, function() {
            this.setState({holdWord: this.state.word.split('')})
            i=0;
            var hold = []
            while(i<this.state.word.length)
            {
                hold.push("")
                i=i+1;
            }
            this.setState({userAnswer: hold});
        });

       
          
        }
    
    generateWord = () => {
        
    }

   


    updateGame = (letter) => {
        console.log()
        i=0;
        holdUserAnswer = this.state.userAnswer;
        while(i < this.state.holdWord.length)
        {
            if(this.state.holdWord[i] === letter)
                {
                    holdUserAnswer[i] = this.state.holdWord[i]
                }
            i=i+1;
        }
        this.setState({userAnswer: holdUserAnswer}, function() {
            this.checkConditions();
        });
    }
     
    selectLetter = (letter) => {
        console.log(letter);
        holdSelectedWords.push(letter);
        this.setState({selectedWords: holdSelectedWords});
        let exists = this.state.word.includes(letter, 0);
        console.log(exists);
        if(exists === true)
        {
            this.updateGame(letter);
        }
        else 
        {
            this.setState({hangedStatus: this.state.hangedStatus + 1}, function() { //Letter is not included
                if(this.state.hangedStatus === 1)
                {
                    this.setState({body: [true,false,false,false,false,false]})
                }
                else if(this.state.hangedStatus === 2)
                {
                    this.setState({body: [true,true,false,false,false,false]})
                }
                else if(this.state.hangedStatus === 3)
                {
                    this.setState({body: [true,true,true,false,false,false]})
                }
                else if(this.state.hangedStatus === 4)
                {
                    this.setState({body: [true,true,true,true,false,false]})
                }
                else if(this.state.hangedStatus === 5)
                {
                    this.setState({body: [true,true,true,true,true,false]})
                }
                else if(this.state.hangedStatus === 6)
                {
                    this.setState({body: [true,true,true,true,true,true]})
                }
                this.checkConditions();

            }); 
        }
    }

    checkConditions = () => {
        if(this.state.hangedStatus === 6) //If Player
        {
            this.setState({disableAll: true});
        }
      
        i = 0;
        counter =  0;
        while(i < this.state.holdWord.length)
        {   
            if(this.state.userAnswer[i] === this.state.holdWord[i]) //If Player Wins
            {
                counter=counter+1;
            }
            i=i+1;
        }
        if(counter === this.state.holdWord.length)
        {
            this.setState({disableAll: true});
        }
    }

    resetGame = () => {
        window.location.reload();
    }

    
    render() {
        holdQuestion = this.state.holdWord.map((letter,index) => (
            <Col>
                <h1 className={styles.letterEntry} style={{}}>{this.state.userAnswer[index]}</h1>
            </Col>
        ))
        
        return (
            <Container fluid style={{minWidth: "320px", marginBottom: "10em", maxWidth: "2200px"}}>
                <Row style={{margin: "1em 0em 0em 0em"}}>
                    <Col>
                        <button onClick={this.resetGame} className={styles.gameButton}>Reset Game</button>
                        <h4 style={{textAlign: "left", marginTop: "0.5em"}}>({this.state.hangedStatus} / 6) Failed Choices Remaining</h4>
                    </Col>
                </Row>

                <Row style={{textAlign: "center"}}>
                    <Col>
                        {this.state.disableAll === true && this.state.hangedStatus !== 6 ? <h1 style={{color: "green", fontWidth: "bold"}}>You Win! The Word was {this.state.word}</h1> : null}
                        {this.state.disableAll === true && this.state.hangedStatus === 6 ? <h1 style={{color: "red", fontWidth: "bold"}}>You Lose... The Word was {this.state.word}</h1> : null}    
    
                    </Col>
                </Row>

                <Row style={{height: "100px"}}>
                    <Col>
                        <Man body={this.state.body} />
                    </Col>
                </Row>

                <Row style={{margin: "250px 0px 0px 0px",}}>                    
                    {holdQuestion}
                </Row>

                <Row>
                    <Col>
                    <Keyboard
                        selectLetter={this.selectLetter}
                        disableAll={this.state.disableAll} />
                    </Col>
                </Row>
                      
                
                 
            </Container>
        )
    }
}
