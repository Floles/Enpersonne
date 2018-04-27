import React, { Component } from "react";
import {Modal, Button} from "react-bootstrap";

class Mentions extends Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleShow = this.handleShow.bind(this);
      this.handleClose = this.handleClose.bind(this);
  
      this.state = {
        show: false
      };
    }
  
    handleClose() {
      this.setState({ show: false });
    }
  
    handleShow() {
      this.setState({ show: true });
    }
  
    render() { 
      return (
        <div>
          <p style={{ color: 'white', textAlign: 'center' }}>
            © .../en Personne 360 | <span onClick={this.handleShow} style={{ cursor: 'pointer' }} >Mentions Légales</span>
          </p>
  
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Mentions Légales</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>
                Le présent site est la propriété de l'agence …/en Personne 360 :<br/>
                S.A.R.L. au capital de 20 000 €<br/>
                SIREN : 408 684 389<br/>
                Code APE : 7311 Z<br/>
                Siège social :<br/>
                72 avenue Victor Hugo<br/>
                92100 Boulogne-Billancourt<br/>
                Directeur de la publication : Alain Bosetti
              </p>
              <p>
                Le site <a href="http://www.enpersonne360.com" target="_blank" rel="noopener noreferrer">www.enpersonne360.com</a> est hébergé par :<br/>
                Kernix - 15 rue Cels 75014 Paris<br/>
                et administré par l'agence .../en Personne 360.
              </p>
              <h4>Accès au site</h4>
              <p>
              L'accès au site nécessite que l'utilisateur dispose d'une connexion Internet opérationnelle. L'accès au site est gratuit, 
              hors coûts du fournisseur d'accès Internet et des opérateurs téléphoniques.<br/>
              …/en Personne 360 ne peut être tenu pour responsable de tout dysfonctionnement du réseau ou des serveurs ou de tout autre 
              événement échappant au contrôle raisonnable, qui empêcherait ou dégraderait l'accès au site.<br/>
              …/en Personne 360 se réserve la possibilité d'interrompre, de suspendre momentanément ou de modifier sans préavis l'accès 
              à tout ou partie du site, afin d'en assurer la maintenance, ou pour toute autre raison, sans que sa responsabilité ne puisse être engagée à quelque titre que ce soit. 
              </p>
              <h4>Conditions générales d'utilisation</h4>
              <p>
              L'utilisation de ce site est réservée à un usage strictement personnel.
              L'utilisateur reconnaît avoir pris connaissance des présentes conditions générales d'utilisation et s'engage à les respecter.<br/>
              …/en Personne 360 se réserve le droit de modifier la présente notice à tout moment. Dans l'hypothèse où vous accéderiez au site 
              internet <a href="http://www.enpersonne360.com" target="_blank" rel="noopener noreferrer">www.enpersonne360.com</a> à partir d'un autre état que la France, vous vous engagez à vous assurer également du respect de la législation localement applicable.
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.handleClose}>Close</Button>
            </Modal.Footer>
          </Modal>
        </div>
      );
    }
  }
  
export default Mentions;