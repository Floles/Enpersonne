import React, { Component } from 'react';
import {Image, Row, Col} from 'react-bootstrap';
import '../References.css';
import fav from '../images/favicon.png';

class References extends Component {
        constructor() {
            super();
            this.state= {
                visuels:[]
            }
        }
        componentDidMount(){
            let pagesURL = "http://localhost/testReactWordpress/RW/wordpress/wp-json/wp/v2/media";
            fetch(pagesURL)
            .then(response => response.json())
            .then(response =>{
            this.setState(  
                {
                    visuels:response
                })
            })
            .catch(error => {
            if (error) throw error;
            })
        }
        shouldComponentUpdate(newState){
                return newState.visuels !== this.state.visuels
        }
        render(){
                return(
                        <div className='bg_refs' id="references">
                        
                                <Row>
                                        <Col xs={12}>
                                        <h2 className="refs_color"><Image src={fav} rounded /> NOS REFERENCES</h2>
                                        </Col>
                                </Row> 
                        {/*LIGNE 1*/}               
                                <Row className="refs">
                                        <Col xs={6} sm={2} >
                                        {this.state.visuels
                                        .filter(visuel => visuel.id === 72)
                                        .map((visuel, id) => {
                                                return(<Image key={id} src={visuel.source_url} responsive alt={visuel.alt_text} />)})} 
                                        </Col>
                                        <Col xs={6} sm={2} >    
                                        {this.state.visuels
                                        .filter(visuel => visuel.id === 73)
                                        .map((visuel, id) => {
                                                return(<Image key={id} src={visuel.source_url} responsive alt={visuel.alt_text} />)})}   
                                        </Col>
                                        <Col xs={6} sm={2} >
                                        {this.state.visuels
                                        .filter(visuel => visuel.id === 74)
                                        .map((visuel, id) => {
                                                return(<Image key={id} src={visuel.source_url} responsive alt={visuel.alt_text} />)})} 
                                        </Col>
                                        <Col xs={6} sm={2} >
                                        {this.state.visuels
                                        .filter(visuel => visuel.id === 75)
                                        .map((visuel, id) => {
                                                return(<Image key={id} src={visuel.source_url} responsive alt={visuel.alt_text} />)})}   
                                        </Col>
                                        <Col xs={6} sm={2} >   
                                        {this.state.visuels
                                        .filter(visuel => visuel.id === 76)
                                        .map((visuel, id) => {
                                                return(<Image key={id} src={visuel.source_url} responsive alt={visuel.alt_text} />)})}   
                                        </Col>
                                        <Col xs={6} sm={2} >   
                                        {this.state.visuels
                                        .filter(visuel => visuel.id === 77)
                                        .map((visuel, id) => {
                                                return(<Image key={id} src={visuel.source_url} responsive alt={visuel.alt_text} />)})}     
                                        </Col>
                                </Row>
                        {/*LIGNE 2*/}        
                                <Row className="refs">
                                        <Col xs={6} sm={2} >    
                                        {this.state.visuels
                                        .filter(visuel => visuel.id === 78)
                                        .map((visuel, id) => {
                                                return(<Image key={id} src={visuel.source_url} responsive alt={visuel.alt_text} />)})}     
                                        </Col>
                                        <Col xs={6} sm={2} >    
                                        {this.state.visuels
                                        .filter(visuel => visuel.id === 79)
                                        .map((visuel, id) => {
                                                return(<Image key={id} src={visuel.source_url} responsive alt={visuel.alt_text} />)})}     
                                        </Col>
                                        <Col xs={6} sm={2} >    
                                        {this.state.visuels
                                        .filter(visuel => visuel.id === 80)
                                        .map((visuel, id) => {
                                                return(<Image key={id} src={visuel.source_url} responsive alt={visuel.alt_text} />)})}     
                                        </Col>
                                        <Col xs={6} sm={2} >    
                                        {this.state.visuels
                                        .filter(visuel => visuel.id === 81)
                                        .map((visuel, id) => {
                                                return(<Image key={id} src={visuel.source_url} responsive alt={visuel.alt_text} />)})}      
                                        </Col>
                                        <Col xs={6} sm={2} >     
                                        {this.state.visuels
                                        .filter(visuel => visuel.id === 82)
                                        .map((visuel, id) => {
                                                return(<Image key={id} src={visuel.source_url} responsive alt={visuel.alt_text} />)})}    
                                        </Col>
                                        <Col xs={6} sm={2} >    
                                        {this.state.visuels
                                        .filter(visuel => visuel.id === 83)
                                        .map((visuel, id) => {
                                                return(<Image key={id} src={visuel.source_url} responsive alt={visuel.alt_text} />)})}    
                                        </Col>
                                </Row>
                        {/*LIGNE 3*/}
                                <Row className="refs">
                                        <Col xs={6} sm={2} >    
                                        {this.state.visuels
                                        .filter(visuel => visuel.id === 84)
                                        .map((visuel, id) => {
                                                return(<Image key={id} src={visuel.source_url} responsive alt={visuel.alt_text} />)})}     
                                        </Col>
                                        <Col xs={6} sm={2} >     
                                        {this.state.visuels
                                        .filter(visuel => visuel.id === 85)
                                        .map((visuel, id) => {
                                                return(<Image key={id} src={visuel.source_url} responsive alt={visuel.alt_text} />)})}     
                                        </Col>
                                        <Col xs={6} sm={2} >     
                                        {this.state.visuels
                                        .filter(visuel => visuel.id === 86)
                                        .map((visuel, id) => {
                                                return(<Image key={id} src={visuel.source_url} responsive alt={visuel.alt_text} />)})}   
                                        </Col>
                                        <Col xs={6} sm={2} >    
                                        {this.state.visuels
                                        .filter(visuel => visuel.id === 87)
                                        .map((visuel, id) => {
                                                return(<Image key={id} src={visuel.source_url} responsive alt={visuel.alt_text} />)})}    
                                        </Col>
                                        <Col xs={6} sm={2} >     
                                        {this.state.visuels
                                        .filter(visuel => visuel.id === 88)
                                        .map((visuel, id) => {
                                                return(<Image key={id} src={visuel.source_url} responsive alt={visuel.alt_text} />)})}     
                                        </Col>
                                        <Col xs={6} sm={2} >    
                                        {this.state.visuels
                                        .filter(visuel => visuel.id === 89)
                                        .map((visuel, id) => {
                                                return(<Image key={id} src={visuel.source_url} responsive alt={visuel.alt_text} />)})}     
                                        </Col>
                                </Row>
                        {/*LIGNE 4*/}
                                <Row className="refs">
                                        <Col xs={6} sm={2} >    
                                        {this.state.visuels
                                        .filter(visuel => visuel.id === 90)
                                        .map((visuel, id) => {
                                                return(<Image key={id} src={visuel.source_url} responsive alt={visuel.alt_text} />)})}    
                                        </Col>
                                        <Col xs={6} sm={2} >    
                                        {this.state.visuels
                                        .filter(visuel => visuel.id === 91)
                                        .map((visuel, id) => {
                                                return(<Image key={id} src={visuel.source_url} responsive alt={visuel.alt_text} />)})}   
                                        </Col>
                                        <Col xs={6} sm={2} >    
                                        {this.state.visuels
                                        .filter(visuel => visuel.id === 92)
                                        .map((visuel, id) => {
                                                return(<Image key={id} src={visuel.source_url} responsive alt={visuel.alt_text} />)})}    
                                        </Col>
                                        <Col xs={6} sm={2} >     
                                        {this.state.visuels
                                        .filter(visuel => visuel.id === 93)
                                        .map((visuel, id) => {
                                                return(<Image key={id} src={visuel.source_url} responsive alt={visuel.alt_text} />)})}    
                                        </Col>
                                        <Col xs={6} sm={2} > 
                                        {this.state.visuels
                                        .filter(visuel => visuel.id === 94)
                                        .map((visuel, id) => {
                                                return(<Image key={id} src={visuel.source_url} responsive alt={visuel.alt_text} />)})}       
                                        </Col>
                                        <Col xs={6} sm={2} >    
                                        {this.state.visuels
                                        .filter(visuel => visuel.id === 95)
                                        .map((visuel, id) => {
                                                return(<Image key={id} src={visuel.source_url} responsive alt={visuel.alt_text}/>)})}       
                                        </Col>
                                </Row>
                        {/*LIGNE 5*/}
                                <Row className="refs">
                                        <Col xs={6} sm={2} >  
                                        {this.state.visuels
                                        .filter(visuel => visuel.id === 96)
                                        .map((visuel, id) => {
                                                return (<Image key={id} src={visuel.source_url} responsive alt={visuel.alt_text} />)})}   
                                        </Col>
                                </Row>
                        </div>
                )
        }
}

export default References;