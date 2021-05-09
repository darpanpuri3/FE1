import { html, LitElement, css, ScopedElementsMixin } from '@lion/core';
import {LionForm} from '@lion/form'
import {LionInput} from '@lion/input';
import {LionSelect} from '@lion/select';
import {LionButton} from '@lion/button';
import { Required } from '@lion/form-core';
import {loadDefaultFeedbackMessages} from '@lion/validate-messages'
import {NoNumbersValidator} from './NoNumbersValidator.js';

loadDefaultFeedbackMessages();


export class WebSeriesForm extends ScopedElementsMixin(LitElement) {

  

  static get scopedElements(){
    return {
      'lion-form':LionForm,
      'lion-input':LionInput,
      'lion-select':LionSelect,
      'lion-button':LionButton
    };
  }

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
    this.stars="";
    this.dir="";
    this.streaming="";
  }

  static get styles(){
    return  css `
    .userinput {
      padding:5%;
      display: flex;
      flex-direction: row;
      height:100%;
      background: linear-gradient(
          rgba(255, 255, 255, 0.8),
          rgba(255, 255, 255, 0.8)
        ),
        url('download.jpg');
      border-right:1px solid #000;
    }

    .form {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
    }
    
    .entry {
      display: flex;
      flex-direction: row;
      margin-bottom: 5%;
    }

    .labels {
      height: 80%;
      width: 50%;
      display: flex;
      flex-direction: column;
      font-size: 110%;
      font-family: sans-serif;
    }
    
    .labels label {
      margin-left: 30%;
      margin-bottom: 5%;
    }
    .inputs {
      height: 80%;
      width: 50%;
      display: flex;
      flex-direction: column;
    }
    
    .inputs .user {
      color: #000;
      background-color: #e0e0eb;
      margin-bottom: 5%;
    }
    
    .button {
      display: flex;
      justify-content: center;
    }
    
    .b:link,
    .b:visited {
      color: #ff8533;
      text-decoration: none;
      border: 1px solid #ff8533;
      border-radius: 30%;
      padding: 2%;
      transition: color 0.5s, background-color 0.5s;
    } 
    
    .b:hover {
      background-color: #8c8b32;
      color: #fff;
    }
    `;
  }

  

  _addInfo(){

      const card=document.querySelector('web-series-overview');
      const n=card.children.length;
      for (let i=0;i<n;i+=1)
      {
        if (card.children[i].title==="")
        {
          card.children[i].title=this.shadowRoot.querySelector('#tit').value;
          card.children[i].dir=this.shadowRoot.querySelector('#dir').value;
          card.children[i].stars=this.shadowRoot.querySelector('#str').value;
          card.children[i].streaming=this.shadowRoot.querySelector('#srm').value;
          break;
        }

      }      
  }

  render() {
    const inputformat = (modelValue) => {
      console.log('I am here');
      return modelValue.charAt(0).toUpperCase();
    };

    return html`
      <div class="userinput">
        <form action="" method="post" idnpm start="form">
          <div class="entry">
            <div class="labels">
              <label for="title">Title:</label>
              <label for="directors">Directors:</label>
              <label for="stars">Stars:</label>
              <label for="streaming">Streaming on:</label>
            </div>
            <div class="inputs">
              <lion-input type="text" class="user" name="title" 
              id="tit" .validators=${[new Required(),new NoNumbersValidator()]}
              .modelValue="${'Enter title'}"
              .formatters="${inputformat}"></lion-input>
              <lion-input type="text" 
              class="user" 
              name="directors" 
              id="dir"
              .validators=${[new Required(),new NoNumbersValidator()]}></lion-input>
              <lion-input type="text" class="user" name="stars" id="str" .validators=${[new Required(),new NoNumbersValidator()]}></lion-input>
              <lion-select name="streaming" id="srm" class="user" .validators=${[new Required(),new NoNumbersValidator()]}>
              <select slot="input">
                <option selected hidden value>Select Web Series</option>
                <option value="netflix">Netflix</option>
                <option value="amazon">Amazon</option>
                <option value="zee5">ZEE 5</option>
                <option value="hotstar">Hotstar</option>
              </select>
              </lion-select>
            </div>
          </div>
          <div class="button">
            <lion-button
              type="button"
              form="form"
              value="Submit"
              class="b"
              @click="${this._addInfo}"
            >
              Add
            </lion-button>
          </div>
        </form>
      </div>
    `;
  }
}

customElements.define('web-series-form', WebSeriesForm);
