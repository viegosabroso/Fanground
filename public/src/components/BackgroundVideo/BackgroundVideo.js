export class BackgroundVideo extends HTMLElement{
    constructor(){
    super();
    this.attachShadow({mode:"open"})
}
    
    static get observedAttributes(){
        return["videoD","imgD","textD"]
    }

    connectedCallback(){
        this.render();
    }
    
    attributeChangedCallback(propName, oldValue, newValue) {
        this[propName] = newValue;
        this.render();
    }
    render(){
        this.shadowRoot.innerHTML= `
        <link rel="stylesheet" href="./public/src/components/BackgroundVideo/BackgroundVideo.css">
        <div class="container"></div>
        <video autoplay loop src="${this.video}}" type="video/mp4"></video>
        <img src="${this.img}"></img>
        <h1>${this.text}</h1>
        <button>Ya disponible</button>
        `
    }
}

customElements.define("background-use",BackgroundVideo)