import { html, LitElement, css, ScopedElementsMixin } from '@lion/core';
import {LionTabs} from '@lion/tabs';

export class WebSeriesOverview extends ScopedElementsMixin(LitElement) {
    static get scopedElements(){
      return {
        'lion-tabs':LionTabs
      };
    }

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
        <lion-tabs>
        <button slot="tab">Info</button>
        <div class="cards" slot="panel">
          <slot></slot>
      </div>
      </lion-tabs>
        `;
    }
}

customElements.define('web-series-overview',WebSeriesOverview);
