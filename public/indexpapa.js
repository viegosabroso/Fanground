import * as components from "./src/indexhijo.js";

class AppContainer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" }); // encapsulation, mode open means this is reachable for js on your web
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
    <custom-message message="Hellooooo guys"></custom-message>
    <background-use></background-use>
    `;
  }
}

customElements.define("app-container", AppContainer);