import React, { Component } from 'react';
import {Row, Col} from "react-bootstrap";
import '../gallery.css';

class Gallery extends Component {
    constructor() {
        super();
        this.state= {
            galleries:[]
        }
    }
    componentDidMount(){
        let pagesURL = "http://localhost/testReactWordpress/RW/wordpress/wp-json/wp/v2/media";
        fetch(pagesURL)
        .then(response => response.json())
        .then(response =>{
        this.setState(  
            {
                galleries:response
            })
        })
        .catch(error => {
            if (error) throw error;
        })
    }
    shouldComponentUpdate(newState){
        return newState.galleries !== this.state.galleries
    }
    render(){
        console.log(this.state.galleries); 
        return(
            <div>
                <Row className='pos'>
                        <Col xs={12} sm={3} className="gl" id="realisations">
                        {this.state.galleries
                            .filter(gallerie => gallerie.id === 61)
                            .map((gallerie, id) => {
                                return(<div key={id} className="gallery_first">
                                            <div className="gallery_children bg_1">
                                                <a href="#" className="gallery_a">{gallerie.title.rendered}</a>    
                                            </div></div>)})}
                        
                        </Col>
                        <Col xs={12}  sm={3} className="gl"> 
                        {this.state.galleries
                            .filter(gallerie => gallerie.id === 39)
                            .map((gallerie, id) => {
                                return(<div key={id} className="gallery_first">
                                            <div className="gallery_children bg_2">
                                                <a href="#" className="gallery_a">{gallerie.title.rendered}</a>    
                                            </div></div>)})}
                        
                        </Col>
                        <Col xs={12} sm={3} className="gl">
                        {this.state.galleries
                            .filter(gallerie => gallerie.id === 66)
                            .map((gallerie, id) => {
                                return(<div key={id} className="gallery_first">
                                            <div className="gallery_children bg_3">
                                                <a href="#" className="gallery_a">{gallerie.title.rendered}</a>    
                                            </div></div>)})}
                        
                        </Col>
                        <Col xs={12} sm={3} className="gl">
                        {this.state.galleries
                            .filter(gallerie => gallerie.id === 38)
                            .map((gallerie, id) => {
                                return(<div key={id} className="gallery_first">
                                            <div className="gallery_children bg_4">
                                                <a href="#" className="gallery_a">{gallerie.title.rendered}</a>    
                                            </div></div>)})}
                        
                        </Col>
                    
                </Row>
                <Row className='pos'>
                    
                        <Col xs={12} sm={3} className="gl">
                        {this.state.galleries
                            .filter(gallerie => gallerie.id === 65)
                            .map((gallerie, id) => {
                                return(<div key={id} className="gallery_first">
                                            <div className="gallery_children bg_5">
                                                <a href="#" className="gallery_a">{gallerie.title.rendered}</a>    
                                            </div></div>)})}
                        
                        </Col>
                        <Col xs={12} sm={3} className="gl">
                        {this.state.galleries
                            .filter(gallerie => gallerie.id === 71)
                            .map((gallerie, id) => {
                                return(<div key={id} className="gallery_first">
                                            <div className="gallery_children bg_6">
                                                <a href="#" className="gallery_a">{gallerie.title.rendered}</a>    
                                            </div></div>)})}
                        
                        </Col>
                        <Col xs={12} sm={3} className="gl">
                        {this.state.galleries
                            .filter(gallerie => gallerie.id === 41)
                            .map((gallerie, id) => {
                                return(<div key={id} className="gallery_first">
                                            <div className="gallery_children bg_7">
                                                <a href="#" className="gallery_a">{gallerie.title.rendered}</a>    
                                            </div></div>)})}
                        
                        </Col>
                        <Col xs={12} sm={3} className="gl">
                        {this.state.galleries
                            .filter(gallerie => gallerie.id === 69)
                            .map((gallerie, id) => {
                                return(<div key={id} className="gallery_first">
                                            <div className="gallery_children bg_8">
                                                <a href="#" className="gallery_a">{gallerie.title.rendered}</a>    
                                            </div></div>)})}
                        
                        </Col>
                    
                </Row>
                <Row className='pos'>
                    
                        <Col xs={12} sm={3} className="gl">
                        {this.state.galleries
                            .filter(gallerie => gallerie.id === 62)
                            .map((gallerie, id) => {
                                return(<div key={id} className="gallery_first">
                                            <div className="gallery_children bg_9">
                                                <a href="#" className="gallery_a">{gallerie.title.rendered}</a>    
                                            </div></div>)})}
                        
                        </Col>
                        <Col xs={12} sm={3} className="gl">
                        {this.state.galleries
                            .filter(gallerie => gallerie.id === 48)
                            .map((gallerie, id) => {
                                return(<div key={id} className="gallery_first">
                                            <div className="gallery_children bg_10">
                                                <a href="#" className="gallery_a">{gallerie.title.rendered}</a>    
                                            </div></div>)})}
                        
                        </Col>
                        <Col xs={12} sm={3} className="gl">
                        {this.state.galleries
                            .filter(gallerie => gallerie.id === 67)
                            .map((gallerie, id) => {
                                return(<div key={id} className="gallery_first">
                                            <div className="gallery_children bg_11">
                                                <a href="#" className="gallery_a">{gallerie.title.rendered}</a>    
                                            </div></div>)})}
                        
                        </Col>
                        <Col xs={12} sm={3} className="gl">
                        {this.state.galleries
                            .filter(gallerie => gallerie.id === 54)
                            .map((gallerie, id) => {
                                return(<div key={id} className="gallery_first">
                                            <div className="gallery_children bg_12">
                                                <a href="#" className="gallery_a">{gallerie.title.rendered}</a>    
                                            </div></div>)})}
                        
                        </Col>
                    
                </Row>
                <Row className='pos'>
                    
                        <Col xs={12} sm={3} className="gl">
                        {this.state.galleries
                            .filter(gallerie => gallerie.id === 36)
                            .map((gallerie, id) => {
                                return(<div key={id} className="gallery_first">
                                            <div className="gallery_children bg_13">
                                                <a href="#" className="gallery_a">{gallerie.title.rendered}</a>    
                                            </div></div>)})}
                        
                        </Col>
                        <Col xs={12} sm={3} className="gl">
                        {this.state.galleries
                            .filter(gallerie => gallerie.id === 40)
                            .map((gallerie, id) => {
                                return(<div key={id} className="gallery_first">
                                            <div className="gallery_children bg_14">
                                                <a href="#" className="gallery_a">{gallerie.title.rendered}</a>    
                                            </div></div>)})}
                        
                        </Col>
                        <Col xs={12} sm={3} className="gl">
                        {this.state.galleries
                            .filter(gallerie => gallerie.id === 70)
                            .map((gallerie, id) => {
                                return(<div key={id} className="gallery_first">
                                            <div className="gallery_children bg_15">
                                                <a href="#" className="gallery_a">{gallerie.title.rendered}</a>    
                                            </div></div>)})}
                        
                        </Col>
                        <Col xs={12} sm={3} className="gl">
                        {this.state.galleries
                            .filter(gallerie => gallerie.id === 70)
                            .map((gallerie, id) => {
                                return(<div key={id} className="gallery_first">
                                            <div className="gallery_children bg_16">
                                                <a href="#" className="gallery_a">{gallerie.title.rendered}</a>    
                                            </div></div>)})}
                        
                        </Col>
                    
                </Row>
            </div>
        )
    }
}

export default Gallery;