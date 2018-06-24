class QToggle{
    constructor(state){
        this.state = state;
    }

    flip(){
        
        if (this.state === 'question'){
            this.state = 'check';
            } else if (this.state === 'check'){
            this.state = 'cross';
            }
            else {
             this.state = 'question';
            }
            
            let $elem = this.render();
            this.$element.replaceWith($elem);
            this.$element = $elem;
         };
        
    
    // Creates the HTML of the component  
    render() {
      return $('<div/>')
      .addClass('qtogl ' + this.state)
      .click(this.flip.bind(this));
    }

   
    // Appends the component's HTML code into the parent element
    mount(parent) { 
        this.$element = this.render();
      $(parent).append(this.$element);
    }
   
    // The $element variable holds the HTML of our 
    // component as a JQuery object.
    //this.$element = this.render();
}