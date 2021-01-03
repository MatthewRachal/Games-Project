import React, { Component } from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import styles from '../gamestyles.module.css';



export default class Battleship extends Component {
    
    state = {
        board: [
            ["Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty"],
            ["Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty"],
            ["Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty"],
            ["Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty"],
            ["Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty"],
            ["Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty"],
            ["Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty"],
            ["Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty"],
            ["Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty"],
            ["Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty"],
            ["Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty"],
            ["Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty"],
        ],
        gameStart: false,
        playerTurn: true,
        selectedShip: "Battleship",
        heading: "North",
        ships: [false, false],
        board2: [
            ["Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty"],
            ["Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty"],
            ["Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty"],
            ["Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty"],
            ["Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty"],
            ["Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty"],
            ["Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty"],
            ["Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty"],
            ["Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty"],
            ["Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty"],
            ["Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty"],
            ["Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty"],
        ], 


    }

    componentDidMount = () => {
        this.generateSpaces();
        this.generateCPUBoard();
    }

    fireSquare = (index, pos) => {
        var board = this.state.board
        var selectedShip = this.state.selectedShip;
        var gameStart = this.state.gameStart;

        if(this.state.gameStart === false)
        {
            if(this.state.selectedShip === "Battleship")
            {
                if(this.state.heading === "North" && index <= 7)
                {
                    board[index][pos] = "Ship";
                    board[index+1][pos] = "Ship";
                    board[index+2][pos] = "Ship";
                    board[index+3][pos] = "Ship";
                    board[index+4][pos] = "Ship";
                    selectedShip = "Submarine";
                }
                else if(this.state.heading === "South" && index >= 4)
                {
                    board[index][pos] = "Ship";
                    board[index-1][pos] = "Ship";
                    board[index-2][pos] = "Ship";
                    board[index-3][pos] = "Ship";
                    board[index-4][pos] = "Ship";
                    selectedShip = "Submarine";
                }
                else if(this.state.heading === "East"  && pos <= 7)
                {
                    board[index][pos] = "Ship";
                    board[index][pos+1] = "Ship";
                    board[index][pos+2] = "Ship";
                    board[index][pos+3] = "Ship";
                    board[index][pos+4] = "Ship";
                    selectedShip = "Submarine";
                }
                else if(this.state.heading === "West" && pos >= 4)
                {
                    board[index][pos] = "Ship";
                    board[index][pos-1] = "Ship";
                    board[index][pos-2] = "Ship";
                    board[index][pos-3] = "Ship";
                    board[index][pos-4] = "Ship";
                    selectedShip = "Submarine";
                }
            }

            if(this.state.selectedShip === "Submarine")
            {
                if(this.state.heading === "North" && index <= 10 && board[index][pos] !== "Ship" && board[index+1][pos] !== "Ship")
                {
                    board[index][pos] = "Ship";
                    board[index+1][pos] = "Ship";
                
                    selectedShip = "Cruiser";
                }
                else if(this.state.heading === "South" && index >= 1 && board[index][pos] !== "Ship" && board[index-1][pos] !== "Ship")
                {
                    board[index][pos] = "Ship";
                    board[index-1][pos] = "Ship";
                  
                    selectedShip = "Cruiser";
                }
                else if(this.state.heading === "East"  && pos <= 10 && board[index][pos] !== "Ship" && board[index][pos+1] !== "Ship")
                {
                    board[index][pos] = "Ship";
                    board[index][pos+1] = "Ship";
                
                    selectedShip = "Cruiser";
                }
                else if(this.state.heading === "West" && pos >= 1 && board[index][pos] !== "Ship" && board[index][pos-1] !== "Ship")
                {
                    board[index][pos] = "Ship";
                    board[index][pos-1] = "Ship";
                    selectedShip = "Cruiser";
                }
                console.log(board);

            }
            
            if(this.state.selectedShip === "Cruiser")
            {
                if(this.state.heading === "North" && index <= 9  && board[index][pos] !== "Ship" && board[index+1][pos] !== "Ship" && board[index+2][pos] !== "Ship" && board[index+3][pos] !== "Ship")
                {
                    board[index][pos] = "Ship";
                    board[index+1][pos] = "Ship";
                    board[index+2][pos] = "Ship";
                    board[index+3][pos] = "Ship";


                    selectedShip = "Destroyer";
                }
                else if(this.state.heading === "South" && index >= 3 && board[index][pos] !== "Ship" && board[index-1][pos] !== "Ship" && board[index-2][pos] !== "Ship" && board[index-3][pos] !== "Ship")
                {
                    board[index][pos] = "Ship";
                    board[index-1][pos] = "Ship";
                    board[index-2][pos] = "Ship";
                    board[index-3][pos] = "Ship";

                    selectedShip = "Destroyer";
                }
                else if(this.state.heading === "East"  && pos <= 9 && board[index][pos] !== "Ship" && board[index][pos+1] !== "Ship" && board[index][pos+2] !== "Ship" && board[index][pos+3] !== "Ship")
                {
                    board[index][pos] = "Ship";
                    board[index][pos+1] = "Ship";
                    board[index][pos+2] = "Ship";
                    board[index][pos+3] = "Ship";

                    selectedShip = "Destroyer";
                }
                else if(this.state.heading === "West" && pos >= 3 && board[index][pos] !== "Ship" && board[index][pos-1] !== "Ship" && board[index][pos-2] !== "Ship" && board[index][pos-3] !== "Ship")
                {
                    board[index][pos] = "Ship";
                    board[index][pos-1] = "Ship";
                    board[index][pos-2] = "Ship";
                    board[index][pos-3] = "Ship";
                    selectedShip = "Destroyer";
                }
            } 
            
            if(this.state.selectedShip === "Destroyer")
            {
                if(this.state.heading === "North" && index <= 8 && board[index][pos] !== "Ship" && board[index+1][pos] !== "Ship" && board[index+2][pos] !== "Ship")
                {
                    board[index][pos] = "Ship";
                    board[index+1][pos] = "Ship";
                    board[index+2][pos] = "Ship";

                    selectedShip = "";
                    gameStart = true;
                }
                else if(this.state.heading === "South" && index >= 2 && board[index][pos] !== "Ship" && board[index-1][pos] !== "Ship" && board[index-2][pos] !== "Ship")
                {
                    board[index][pos] = "Ship";
                    board[index-1][pos] = "Ship";
                    board[index-2][pos] = "Ship";
                    board[index-3][pos] = "Ship";

                    selectedShip = "";
                    gameStart = true;
                }
                else if(this.state.heading === "East"  && pos <= 8 && board[index][pos] !== "Ship" && board[index][pos+1] !== "Ship" && board[index][pos+2] !== "Ship")
                {
                    board[index][pos] = "Ship";
                    board[index][pos+1] = "Ship";
                    board[index][pos+2] = "Ship";
                    board[index][pos+3] = "Ship";

                    selectedShip = "";
                    gameStart = true;
                }
                else if(this.state.heading === "West" && pos >= 2 && board[index][pos] !== "Ship" && board[index][pos-1] !== "Ship" && board[index][pos-2] !== "Ship")
                {
                    board[index][pos] = "Ship";
                    board[index][pos-1] = "Ship";
                    board[index][pos-2] = "Ship";
                    board[index][pos-3] = "Ship";

                    selectedShip = "";
                    gameStart = true;
                }
            }
        }

        //The Game has Started
        if(board[index][pos] === "Empty" && this.state.gameStart === true)
        {
            board[index][pos] = "Fired"
        }
        this.setState({board: board, selectedShip: selectedShip, gameStart: gameStart});

    }
    
    changeDirection = () => {
        var heading = this.state.heading;
        if(heading === "North")
        {
            heading = "South"
        }
        else if(heading === "South")
        {
            heading = "East"
        }
        else if(heading === "East")
        {
            heading = "West"
        }
        else 
        {
            heading = "North"
        }
        this.setState({heading: heading});
    }

    generateSpaces = () => {
        var test = ["Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty"]

        //Generate 12 by 12 board, with indexs defined by Letters and a 0-11 index 
        return  (test.map((square, index) => {
            return (
            <Col style={{margin: "0px 0px 0px 0px", padding: "0px 0px 0px 0px", }} xs={12} sm={12} md={12} lg={12} key={index+"Z"}>
                <button onClick={e => {e.preventDefault(); this.fireSquare(index, 0)}} className={this.state.board[index][0] === "Empty" ? styles.boardSquare : this.state.board[index][0] === "Ship" ? styles.boardSquareShip : styles.boardSquareMiss} key={index+"A"}>{index}A</button>
                <button onClick={e => {e.preventDefault(); this.fireSquare(index, 1)}} className={this.state.board[index][1] === "Empty" ? styles.boardSquare : this.state.board[index][1] === "Ship" ? styles.boardSquareShip : styles.boardSquareMiss} key={index+"B"}>{index}B</button>
                <button onClick={e => {e.preventDefault(); this.fireSquare(index, 2)}} className={this.state.board[index][2] === "Empty" ? styles.boardSquare : this.state.board[index][2] === "Ship" ? styles.boardSquareShip : styles.boardSquareMiss} key={index+"C"}>{index}C</button>
                <button onClick={e => {e.preventDefault(); this.fireSquare(index, 3)}} className={this.state.board[index][3] === "Empty" ? styles.boardSquare : this.state.board[index][3] === "Ship" ? styles.boardSquareShip : styles.boardSquareMiss} key={index+"D"}>{index}D</button>
                <button onClick={e => {e.preventDefault(); this.fireSquare(index, 4)}} className={this.state.board[index][4] === "Empty" ? styles.boardSquare : this.state.board[index][4] === "Ship" ? styles.boardSquareShip : styles.boardSquareMiss} key={index+"E"}>{index}E</button>
                <button onClick={e => {e.preventDefault(); this.fireSquare(index, 5)}} className={this.state.board[index][5] === "Empty" ? styles.boardSquare : this.state.board[index][5] === "Ship" ? styles.boardSquareShip : styles.boardSquareMiss} key={index+"F"}>{index}F</button>
                <button onClick={e => {e.preventDefault(); this.fireSquare(index, 6)}} className={this.state.board[index][6] === "Empty" ? styles.boardSquare : this.state.board[index][6] === "Ship" ? styles.boardSquareShip : styles.boardSquareMiss} key={index+"G"}>{index}G</button>
                <button onClick={e => {e.preventDefault(); this.fireSquare(index, 7)}} className={this.state.board[index][7] === "Empty" ? styles.boardSquare : this.state.board[index][7] === "Ship" ? styles.boardSquareShip : styles.boardSquareMiss} key={index+"H"}>{index}H</button>
                <button onClick={e => {e.preventDefault(); this.fireSquare(index, 8)}} className={this.state.board[index][8] === "Empty" ? styles.boardSquare : this.state.board[index][8] === "Ship" ? styles.boardSquareShip : styles.boardSquareMiss} key={index+"I"}>{index}I</button>
                <button onClick={e => {e.preventDefault(); this.fireSquare(index, 9)}} className={this.state.board[index][9] === "Empty" ?  styles.boardSquare : this.state.board[index][9] === "Ship" ? styles.boardSquareShip : styles.boardSquareMiss} key={index+"J"}>{index}J</button>
                <button onClick={e => {e.preventDefault(); this.fireSquare(index, 10)}}className={this.state.board[index][10] === "Empty" ?  styles.boardSquare : this.state.board[index][10] === "Ship" ? styles.boardSquareShip : styles.boardSquareMiss} key={index+"K"}>{index}K</button>
                <button onClick={e => {e.preventDefault(); this.fireSquare(index, 11)}}className={this.state.board[index][11] === "Empty" ?  styles.boardSquare : this.state.board[index][11] === "Ship" ? styles.boardSquareShip : styles.boardSquareMiss} key={index+"L"}>{index}L</button>
            </Col>)
         }))

      }

      generateCPUBoard = () => {
        var test = ["Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty","Empty"]

        //Generate 12 by 12 board, with indexs defined by Letters and a 0-11 index 
        return  (test.map((square, index) => {
            return (
            <Col style={{margin: "0px 0px 0px 0px", padding: "0px 0px 0px 0px", }} xs={12} sm={12} md={12} lg={12} key={index+"Z"}>
                <button onClick={e => {e.preventDefault(); this.fireSquare(index, 0)}} className={this.state.board2[index][0] === "Empty" ? styles.boardSquare : this.state.board2[index][0] === "Ship" ? styles.boardSquareShip : styles.boardSquareMiss} key={index+"A"}>{index}A</button>
                <button onClick={e => {e.preventDefault(); this.fireSquare(index, 1)}} className={this.state.board2[index][1] === "Empty" ? styles.boardSquare : this.state.board2[index][1] === "Ship" ? styles.boardSquareShip : styles.boardSquareMiss} key={index+"B"}>{index}B</button>
                <button onClick={e => {e.preventDefault(); this.fireSquare(index, 2)}} className={this.state.board2[index][2] === "Empty" ? styles.boardSquare : this.state.board2[index][2] === "Ship" ? styles.boardSquareShip : styles.boardSquareMiss} key={index+"C"}>{index}C</button>
                <button onClick={e => {e.preventDefault(); this.fireSquare(index, 3)}} className={this.state.board2[index][3] === "Empty" ? styles.boardSquare : this.state.board2[index][3] === "Ship" ? styles.boardSquareShip : styles.boardSquareMiss} key={index+"D"}>{index}D</button>
                <button onClick={e => {e.preventDefault(); this.fireSquare(index, 4)}} className={this.state.board2[index][4] === "Empty" ? styles.boardSquare : this.state.board2[index][4] === "Ship" ? styles.boardSquareShip : styles.boardSquareMiss} key={index+"E"}>{index}E</button>
                <button onClick={e => {e.preventDefault(); this.fireSquare(index, 5)}} className={this.state.board2[index][5] === "Empty" ? styles.boardSquare : this.state.board2[index][5] === "Ship" ? styles.boardSquareShip : styles.boardSquareMiss} key={index+"F"}>{index}F</button>
                <button onClick={e => {e.preventDefault(); this.fireSquare(index, 6)}} className={this.state.board2[index][6] === "Empty" ? styles.boardSquare : this.state.board2[index][6] === "Ship" ? styles.boardSquareShip : styles.boardSquareMiss} key={index+"G"}>{index}G</button>
                <button onClick={e => {e.preventDefault(); this.fireSquare(index, 7)}} className={this.state.board2[index][7] === "Empty" ? styles.boardSquare : this.state.board2[index][7] === "Ship" ? styles.boardSquareShip : styles.boardSquareMiss} key={index+"H"}>{index}H</button>
                <button onClick={e => {e.preventDefault(); this.fireSquare(index, 8)}} className={this.state.board2[index][8] === "Empty" ? styles.boardSquare : this.state.board2[index][8] === "Ship" ? styles.boardSquareShip : styles.boardSquareMiss} key={index+"I"}>{index}I</button>
                <button onClick={e => {e.preventDefault(); this.fireSquare(index, 9)}} className={this.state.board2[index][9] === "Empty" ?  styles.boardSquare : this.state.board2[index][9] === "Ship" ? styles.boardSquareShip : styles.boardSquareMiss} key={index+"J"}>{index}J</button>
                <button onClick={e => {e.preventDefault(); this.fireSquare(index, 10)}}className={this.state.board2[index][10] === "Empty" ?  styles.boardSquare : this.state.board2[index][10] === "Ship" ? styles.boardSquareShip : styles.boardSquareMiss} key={index+"K"}>{index}K</button>
                <button onClick={e => {e.preventDefault(); this.fireSquare(index, 11)}}className={this.state.board2[index][11] === "Empty" ?  styles.boardSquare : this.state.board2[index][11] === "Ship" ? styles.boardSquareShip : styles.boardSquareMiss} key={index+"L"}>{index}L</button>
            </Col>) 
         })) 

      }

      startGame = () => {
          this.setState({gameStart: true})
          this.calculateCPUSetup();
      }

      calculateCPUSetup = () => {
          var board2 =  this.state.board2;
          var posArray = [0,1,2,3,4,5,6,7,8,9,10,11]
          var heading = ["North","South","East","West"];
          var randomHeading = Math.floor(Math.random() * heading.length);
          var index = Math.floor(Math.random() * posArray.length);
          var pos = Math.floor(Math.random() * posArray.length);
          var counter = 0;
          //board2[index][pos] = "Ship";

        while(counter < 4)
        {
            console.log("Iteration Number from start of loop =>", counter);
            randomHeading = Math.floor(Math.random() * heading.length);
            index = Math.floor(Math.random() * posArray.length);
            pos = Math.floor(Math.random() * posArray.length);

            //Battleship generation for CPU
              if(heading[randomHeading] === "North" && index <= 7 && counter === 0)
              {
                  board2[index][pos] = "Ship";
                  board2[index+1][pos] = "Ship";
                  board2[index+2][pos] = "Ship";
                  board2[index+3][pos] = "Ship";
                  board2[index+4][pos] = "Ship";
                  counter=counter+1;
              }
              else if(heading[randomHeading] === "South" && index >= 4 && counter === 0)
              {
                  board2[index][pos] = "Ship";
                  board2[index-1][pos] = "Ship";
                  board2[index-2][pos] = "Ship";
                  board2[index-3][pos] = "Ship";
                  board2[index-4][pos] = "Ship";
                  counter=counter+1;
              }
              else if(heading[randomHeading] === "East" && pos <= 7 && counter === 0) 
              {
                  board2[index][pos] = "Ship";
                  board2[index][pos+1] = "Ship";
                  board2[index][pos+2] = "Ship";
                  board2[index][pos+3] = "Ship";
                  board2[index][pos+4] = "Ship";
                  counter=counter+1;
              }
              else if(heading[randomHeading] === "West" && pos >= 4 && counter === 0)
              {
                  board2[index][pos] = "Ship";
                  board2[index][pos-1] = "Ship";
                  board2[index][pos-2] = "Ship";
                  board2[index][pos-3] = "Ship";
                  board2[index][pos-4] = "Ship";
                  counter=counter+1;
              }
            //Submarine generation for CPU
                if(heading[randomHeading]  === "North" && index <= 10 && board2[index][pos] !== "Ship" && board2[index+1][pos] !== "Ship"  && counter === 1)
                {
                    board2[index][pos] = "Ship";
                    board2[index+1][pos] = "Ship";
                    counter=counter+1;
                
                }
                else if(heading[randomHeading]  === "South" && index >= 1 && board2[index][pos] !== "Ship" && board2[index-1][pos] !== "Ship"  && counter === 1)
                {
                    board2[index][pos] = "Ship";
                    board2[index-1][pos] = "Ship";
                    counter=counter+1;
                
                }
                else if(heading[randomHeading]  === "East"  && pos <= 10 && board2[index][pos] !== "Ship" && board2[index][pos+1] !== "Ship"  && counter === 1)
                {
                    board2[index][pos] = "Ship";
                    board2[index][pos+1] = "Ship";
                    counter=counter+1;
                }
                else if(heading[randomHeading]  === "West" && pos >= 1 && board2[index][pos] !== "Ship" && board2[index][pos-1] !== "Ship" && counter === 1)
                {
                    board2[index][pos] = "Ship";
                    board2[index][pos-1] = "Ship";
                    counter=counter+1;
                }
    
            //Cruiser generation for CPU
                if(heading[randomHeading]  === "North" && index <= 9  && board2[index][pos] !== "Ship" && board2[index+1][pos] !== "Ship" && board2[index+2][pos] !== "Ship" && board2[index+3][pos] !== "Ship"  && counter === 2)
                {
                    board2[index][pos] = "Ship";
                    board2[index+1][pos] = "Ship";
                    board2[index+2][pos] = "Ship";
                    board2[index+3][pos] = "Ship";
                    counter=counter+1;
                }
                else if(heading[randomHeading]  === "South" && index >= 3 && board2[index][pos] !== "Ship" && board2[index-1][pos] !== "Ship" && board2[index-2][pos] !== "Ship" && board2[index-3][pos] !== "Ship" && counter === 2)
                {
                    board2[index][pos] = "Ship";
                    board2[index-1][pos] = "Ship";
                    board2[index-2][pos] = "Ship";
                    board2[index-3][pos] = "Ship";
                    counter=counter+1;
                }
                else if(heading[randomHeading]  === "East"  && pos <= 9 && board2[index][pos] !== "Ship" && board2[index][pos+1] !== "Ship" && board2[index][pos+2] !== "Ship" && board2[index][pos+3] !== "Ship" && counter === 2)
                {
                    board2[index][pos] = "Ship";
                    board2[index][pos+1] = "Ship";
                    board2[index][pos+2] = "Ship";
                    board2[index][pos+3] = "Ship";
                    counter=counter+1;
                }
                else if(heading[randomHeading]  === "West" && pos >= 3 && board2[index][pos] !== "Ship" && board2[index][pos-1] !== "Ship" && board2[index][pos-2] !== "Ship" && board2[index][pos-3] !== "Ship" && counter === 2)
                {
                    board2[index][pos] = "Ship";
                    board2[index][pos-1] = "Ship";
                    board2[index][pos-2] = "Ship";
                    board2[index][pos-3] = "Ship";
                    counter=counter+1;
                }
            
            //Destroyer generation for CPU
                if(heading[randomHeading]  === "North" && index <= 8 && board2[index][pos] !== "Ship" && board2[index+1][pos] !== "Ship" && board2[index+2][pos] !== "Ship" && counter === 3)
                {
                    board2[index][pos] = "Ship";
                    board2[index+1][pos] = "Ship";
                    board2[index+2][pos] = "Ship";
                    counter=counter+1;
                }
                else if(heading[randomHeading]  === "South" && index >= 2 && board2[index][pos] !== "Ship" && board2[index-1][pos] !== "Ship" && board2[index-2][pos] !== "Ship" && counter === 3)
                {
                    board2[index][pos] = "Ship";
                    board2[index-1][pos] = "Ship";
                    board2[index-2][pos] = "Ship";
                    board2[index-3][pos] = "Ship";
                    counter=counter+1; 
                }
                else if(heading[randomHeading]  === "East"  && pos <= 8 && board2[index][pos] !== "Ship" && board2[index][pos+1] !== "Ship" && board2[index][pos+2] !== "Ship" && counter === 3)
                {
                    board2[index][pos] = "Ship";
                    board2[index][pos+1] = "Ship";
                    board2[index][pos+2] = "Ship";
                    board2[index][pos+3] = "Ship";
                    counter=counter+1;
                }
                else if(heading[randomHeading]  === "West" && pos >= 2 && board2[index][pos] !== "Ship" && board2[index][pos-1] !== "Ship" && board2[index][pos-2] !== "Ship" && counter === 3)
                {
                    board2[index][pos] = "Ship";
                    board2[index][pos-1] = "Ship";
                    board2[index][pos-2] = "Ship";
                    board2[index][pos-3] = "Ship";
                    counter=counter+1;
                }

        }
        
      }

    
    render() {
        
        return (
            <Container fluid style={{minWidth: "320px", marginBottom: "10em", maxWidth: "2200px" }}>
                <h1>Welcome to Battleship</h1>
                <Row style={{marginBottom: "2em"}}>
                    <Col>
                        <button onClick={e => {e.preventDefault(); this.startGame();}} disabled={!this.state.gameStart} className={styles.standardButton}>Start Game</button>
                    </Col>
                    
                    <Col>
                        {!this.state.gameStart ? <button disabled={this.state.gameStart} className={styles.standardButton}>Position {this.state.selectedShip}</button> : null}
                    </Col>
                    <Col>
                        {!this.state.gameStart ? <button disabled={this.state.gameStart} onClick={e => {e.preventDefault(); this.changeDirection()}} className={styles.standardButton}>Change Ship Direction [{this.state.heading}]</button> : null}
                    </Col>
                </Row>
                    {this.state.gameStart ? <h6 style={{color: "black"}}>{this.state.playerTurn}</h6> : null}
                
                <h1>Your Board</h1>
                <Row style={{borderStyle: "solid", padding: "0", margin: "0em 0em 1em 0em",}}>{this.generateSpaces()}</Row>

                <h1>CPU's Board [Admin View]</h1>
                <Row style={{borderStyle: "solid", padding: "0", margin: "0em 0em 2em 0em",}}>{this.generateCPUBoard()}</Row>



            </Container>
        )
    }
}
