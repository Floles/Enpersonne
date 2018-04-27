import React, {/* Component*/ } from 'react';
import "../Home.css";
import logo360 from '../images/logo_ep_360.png';
import chevron from '../images/icons8-double-bas-filled-50.png';
import {Image, Row, Col} from 'react-bootstrap';

const home = () => {
    return (
        <div className="block">
            <Row>
                <Col xs={12} md={12}>
                    <h1 className="position">Bienvenue chez</h1>
                </Col>
            </Row>
            <Row>
                <Col xs={12} sm={8} smPush={3}>
                    <Image src={logo360} alt="logo enpersonne360" className="logo" responsive rounded/>
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={12}>
                    <p className="line-1 anim-typewriter">Créateur de relations fertiles</p>
                </Col>
            </Row>
            <Row>
                <Col xsOffset={6} xs={6} mdOffset={6} md={6}>
                    <Image id="chevron" src={chevron} alt="chevron"/>
                </Col>
            </Row>
        </div>
    )
}


export default home;