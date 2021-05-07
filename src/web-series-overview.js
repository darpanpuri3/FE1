import { html, LitElement, css } from '@lion/core';

export class WebSeriesOverview extends LitElement {
    static get styles()
    {
        return css `
        .cards {
          display: grid;
          grid-template-rows: 1fr 1fr;
          grid-template-columns : 1fr 1fr 1fr;
          grid-gap: 1% 1%;
          padding-right:1%;
          padding-left:1%;
          align-content: space-around;
          background-color: #ffffcc;
          height:100%;
          border-left: 1px solid #000;
        }
        `;
    }

    render(){
        return html `
        <div class="cards">
          <slot></slot>
      </div>
        `;
    }
}

customElements.define('web-series-overview',WebSeriesOverview);
