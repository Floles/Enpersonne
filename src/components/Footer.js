import React from "react";
import {Col, Row, Image} from "react-bootstrap";
import "../Footer.css";
import logo from "../images/logoEP.jpg";
import logoVirtual from "../images/logo_ep_virtual.jpg";
import logoXpo from "../images/logo_ep_xpo.png";
import tel from "../images/icons8-téléphone-50.png";
import email from "../images/icons8-email-50.png";
import Mentions from "./Mentions";

const footer = () => {
    return (
        <div>
            <Row className="footer_space" id="contact">
                <Col xs={12} sm={3} >
                    <a href='http://www.enpersonne.com/' target="_blank" rel="noopener noreferrer"><Image src={logo} alt='logo' rounded responsive /></a>
                    <a href='http://www.enpersonnevirtual.com/' target="_blank" rel="noopener noreferrer"><Image src={logoVirtual} alt='logo Virtual' rounded responsive /></a>
                    <Image src={logoXpo} alt='logo Expo' rounded responsive />
                </Col>
                <Col xs={12} sm={3} smOffset={1}>
                    <Image src={tel} alt="tel" responsive /><p className="footer_color"> 01 47 61 49 00</p>
                    <Image src={email} alt="email" responsive /><p className="footer_color"><a href="mailto:info@enpersonne.com" target="_blank" rel="noopener noreferrer"> info@enpersonne.com</a></p>
                </Col>
                <Col xs={12} sm={4} smOffset={1} >
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2626.0554443404167!2d2.243856515868813!3d48.83808111009017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67ac27623ac49%3A0x59b111eddc1e92a4!2s72+Avenue+Victor+Hugo%2C+92100+Boulogne-Billancourt!5e0!3m2!1sfr!2sfr!4v1521726587216" 
                    style={{width:350, height:300, frameborder:0, border:0}}></iframe>
                </Col>
            </Row>
            <Row>
                <Mentions />
            </Row>
        </div>
    )
}

export default footer;