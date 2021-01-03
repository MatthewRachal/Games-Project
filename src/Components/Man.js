import React, { Component } from 'react'
import {Container, Row, Col} from 'react-bootstrap';


export default class Man extends Component {
    
    state = {

    }
    render() {
        return (
            <Container fluid style={{minWidth: "100%", textAlign: "center", margin: "2em 0em 0em 0em",}}>
                <Row style={{margin: "0em",}}>
                    <Col>
                        {this.props.body[0] ? <button style={{padding: "2em", borderRadius: "100%", borderColor: "black", backgroundColor: "#3D4E94"}}></button> : null}
                    </Col>
                </Row>
                <Row style={{margin: "0em",}}>
                    <Col style={{textAlign: "right", paddingRight: "0em"}}> 
                        {this.props.body[4] ? <button style={{padding: "0.5em", height: "5px", width: "10%", margin: "0em", borderColor: "black", backgroundColor: "#3D4E94"}}></button> : null}
                    </Col>
                    <div sm={1} md={1} lg={1} xl={1} style={{ margin: "0em", padding: "0em", width: "35px"}}> 
                        {this.props.body[1] ? <button style={{padding: "1em", height: "100px", margin: "0em", borderColor: "black", backgroundColor: "#3D4E94"}}></button> : null}
                    </div>
                    <Col style={{textAlign: "left", paddingLeft: "0em"}}>
                        {this.props.body[5] ? <button style={{padding: "0.5em", height: "5px", width: "10%",  borderColor: "black", backgroundColor: "#3D4E94"}}></button> : null}
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {this.props.body[2] ?<button style={{padding: "0.25em", height: "100px", borderColor: "black", backgroundColor: "#3D4E94"}} disabled></button> : null}
                        {this.props.body[3] ? <button style={{padding: "0.25em", height: "100px", borderColor: "black", backgroundColor: "#3D4E94"}} disabled></button> : null}
                    </Col>
                   
                </Row>
               
               
                 
            </Container>
        )
    }
}
