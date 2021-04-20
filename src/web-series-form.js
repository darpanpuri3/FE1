import { html, LitElement, css } from 'lit-element';

export class WebSeriesForm extends LitElement {

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

  render() {
    return html`
      <div class="userinput">
        <form action="" method="post" class="form">
          <div class="entry">
            <div class="labels">
              <label for="title">Title:</label>
              <label for="directors">Directors:</label>
              <label for="stars">Stars:</label>
              <label for="streaming">Streaming on:</label>
            </div>
            <div class="inputs">
              <input type="text" class="user" name="title" id="tit" required />
              <input
                type="text"
                class="user"
                name="directors"
                id="dir"
                required
              />
              <input type="text" class="user" name="stars" id="str" required />
              <select name="streaming" id="srm" class="user">
                <option value="netflix">Netflix</option>
                <option value="amazon">Amazon</option>
                <option value="zee5">ZEE 5</option>
                <option value="hotstar">Hotstar</option>
              </select>
            </div>
          </div>
          <div class="button">
            <button
              type="submit"
              form="form"
              value="Submit"
              class="b"
              onclick="access()"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    `;
  }
}

customElements.define('web-series-form', WebSeriesForm);
