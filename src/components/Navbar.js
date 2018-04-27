import React, { Component } from 'react';
import {Image} from 'react-bootstrap';
import linkedIn from '../images/linkedin.png';
import youtube from '../images/icons8-youtube-48.png';
import "../navbar.css";

class Menu extends Component {
    constructor(props){
        super(props); 
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = () =>{
            let hamburger = document.querySelector(".hamburger");
            hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("is-active");
            });
            let openNav = () => {
                document.getElementById("sidenav").style.display = "block";
            };
            let closeNav = () => {
                document.getElementById("sidenav").style.display = "none";
            };
            if(hamburger.className != "hamburger hamburger--minus is-active"){
                closeNav();
            }else{ openNav();
                };      
    }

    render() {
        return(
            <div>
                <button className="hamburger hamburger--minus" type="button" onClick={this.handleClick}>
                    <span className="hamburger-box">
                        <span className="hamburger-inner"></span>
                    </span>
                </button>
                <nav id="sidenav">
                    <ul id="menu">
                            <li><a href="#agence">Agence</a></li>
                            <li><a href="#realisations">Réalisations</a></li>
                            <li><a href="#expertises">Expertises</a></li>
                            <li><a href="#references">Références</a></li>
                            <li><a href="#contact">Contact</a></li>
                            <li>
                                <a href="#"><Image src={linkedIn} alt="logo linkedin" style={{width:35, marginRight:30}}/></a>
                                <a href="#"><Image src={youtube} alt="logo youtube" style={{width:35}}/></a>
                            </li>
                    </ul>
                </nav>
            </div>
           
        )
    }
}

export default Menu;