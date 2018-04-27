import React, { Component } from 'react';
import '../imagine.css';

class Imagine extends Component {
    constructor(props){
        super(props);
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);
    }
    handleScroll=() => {
        let scroll_utilisateur = 0;
        let ticking = false;
        let top = document.querySelector("#top");
        let left = document.querySelector("#left");
        let right = document.querySelector("#right");
        let text1 = document.querySelector("#text1");
        let text2 = document.querySelector("#text2");
        let text3 = document.querySelector("#text3");
        let text4 = document.querySelector("#text4");
        function faitQuelquechose(position_scroll) {
            if(scroll_utilisateur > 1600){
                top.className ='bulletcenter animate',
                left.className = 'bulletcenter animate',
                right.className = 'bulletcenter animate',
                text1.className = 'text1 imagineFunction',
                text2.className = 'text2 imagineFunction',
                text3.className = 'text3 imagineFunction',
                text4.className = 'text4 imagineFunction';
            }
        }
        window.addEventListener('scroll', (e) => {
            scroll_utilisateur = window.scrollY;
        if (!ticking) {
            window.requestAnimationFrame(() => {
            faitQuelquechose(scroll_utilisateur);
            ticking = false;
            });
        }
        ticking = true;
        });
    }
    render() {
        return(
            <div className='color' id="expertises">
                <div className='size'>
                    <ul className='el'>
                        <li className="bulletcenter" id="top"></li>
                        <li id="text1">
                            <span className='text imaginer'>Imaginer</span>
                            
                        </li>
                        <li className="bulletcenter" id="right"></li>
                        <li id="text2">
                            <span className='text innover'>Innover</span>
                        
                        </li>
                        <li className="bulletcenter" id="left"></li>
                        <li id="text3">
                            <span className='text accompagner'>Accompagner</span>
                            
                        </li>
                        <li id="text4">
                            <p className="accroche">+ rapide, malin, économique</p>
                        </li>
                    </ul>
                </div>
            </div> 
            
        )
    }
}

export default Imagine;

/*<span className='smallText-imaginer'>Parce que vous voulez intensifier vos relations avec vos clients<br/>
Créatifs tous terrains, nous imaginons tous les dispositifs qui renforceront vos liens avec vos prospects et clients :
contenu éditorial, web marketing, marketing direct, management de communautés, événementiel...</span>*/

/*<span className='smallText-innover'>Parce que vous voulez vous démarquer de vos concurrents<br/>
Nous créons pour vous des dispositifs malins pour cibler finement et faire émerger votre offre. Et quand un moyen n’existe pas,
nous innovons ! Exemple : les salons virtuels pour lesquels l’agence a développé un savoir-faire unique.</span>*/

/*<span className='smallText-accompagner'>Parce que votre temps est compté et votre budget aussi<br/>
Nous vous accompagnons en nous adaptant en souplesse<br/> à vos contraintes. Nous travaillons en coproduction avec<br/> vous pour
faire éclore plus vite les solutions efficaces et les idées créatives.</span>*/