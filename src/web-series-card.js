import {html, css, LitElement} from 'lit-element';

export class WebCard extends LitElement {

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

    render(){
        return html `
        <div class="card">
            <div class="cardelement">Title : ABC</div>
            <div class="cardelement">Directors : XYZ</div>
            <div class="cardelement">Stars : PQR</div>
            <div class="cardelement">Streaming on : MNO</div>
            <div class="cardelement"><button class="del" id="b1" onclick="remove('1');">Remove</button></div>
        </div>
        `;
    }

}

customElements.define('web-series-card',WebCard);