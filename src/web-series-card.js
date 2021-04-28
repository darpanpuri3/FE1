import {html, css, LitElement} from 'lit-element';

export class WebCard extends LitElement {

    static get properties(){
        return {
        title : {type:String},
        dir : {type : String},
        stars : {type : String},
        streaming : {type : String}
        }
    }

    constructor(){
        super();
        this.title="";
        this.dir="";
        this.stars="";
        this.streaming="";
    }

    static get styles(){
        return css `
        .card {
            display:grid;
            grid-template-rows:1fr 1fr 1fr 1fr 1fr;
            border: 1px solid #000;
            background-color:#ebb734;
          }
          
          .cardelement {
            height: 15%;
            margin-top: 2.5%;
            margin-bottom: 2%;
            text-align: center;
          }
        `;
    }

    _clearInfo(){
        console.log("This method is working bitch!");
        this.title="";
        this.dir="";
        this.stars="";
        this.streaming="";
    }

    render(){
        return html `
        <div class="card">
            <div class="cardelement">Title : ${this.title}</div>
            <div class="cardelement">Directors : ${this.dir}</div>
            <div class="cardelement">Stars : ${this.stars}</div>
            <div class="cardelement">Streaming on : ${this.streaming}</div>
            <div class="cardelement"><button class="del" id="b1" @click="${this._clearInfo}">Remove</button></div>
        </div>
        `;
    }

}

customElements.define('web-series-card',WebCard);