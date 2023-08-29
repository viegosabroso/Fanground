class HeaderComp extends HTMLElement{
    
    
    connectedCallback(){
        this.render()
    } 


    constructor(){
    super();
    this.attachShadow({mode:"open"})
}

}