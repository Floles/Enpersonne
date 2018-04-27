import React, { Component } from 'react';
import {Image, Row, Col} from 'react-bootstrap';
import logo360 from '../images/logo_ep_360.png';
import fav from '../images/favicon.png';
import '../Ep360.css';
import Gallery from './Gallery';

class Ep360 extends Component {
    constructor(){
        super();
        this.state= {
          pages: []
        }
      }
      componentDidMount(){
        let pagesURL = "http://localhost/testReactWordpress/RW/wordpress/wp-json/wp/v2/pages/";
        fetch(pagesURL)
        .then(response => response.json())
        .then(response =>{
          this.setState(  
            {
                pages:response
          })
        })
        .catch(error => {
          if (error) throw error;
        })
      }
    render() {
        return(
            <div className="bg_Ep360">
                <Row>
                    <Col xs={12} mdOffset={1} md={3} id="agence">
                        <a href="http://enpersonne360.com"><Image src={logo360} alt='logo360' className="logo360" responsive rounded/></a>
                    </Col>
                    <Col xs={12} mdOffset={2} md={5} className="color_ep360">
                    {this.state.pages
                        .filter(page => page.id === 2)
                        .map((page, id) => {
                            return (<h1 key={id}>{(page.title.rendered).replace(/p{L}<.*?>/gmi, '')}</h1>)})}
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} mdOffset={6} md={5}>
                    {this.state.pages
                        .filter(page => page.id === 2)
                        .map((page, id) => {
                            return (<p key={id}>{(page.content.rendered).replace(/<.*?>/gmi, '')}</p>)})}
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={12} className="color_ep360">
                        <h2><Image src={fav} rounded /> Quelques une des nos réalisations</h2>
                    </Col>
                </Row>
                <Gallery />
                
            </div>
        )
    }
}

export default Ep360;