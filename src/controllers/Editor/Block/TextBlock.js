import Block from "./Block";

export default class TextBlock extends Block { 
    constructor() {
        super("text");
        this.fontSize = 16; //default fontSize
        this.weight = 400; //default weight
        this.color = "#20385C";
        this.textTransform = false;  // false here indicates the default text transform
        this.content = "Type something...";
       
    }
    
    setContent(content) { 
        this.content = content;
    }
    setColor(color) { 
        this.color = color;
    }
    setFontSize(size) { 
        this.fontSize = size;
    }

    setWeight(weight) { 
        this.weight = weight;
    }

    setTextTransform(transform) { 
        this.textTransform = transform;
    }

    editContent(newContent) { 
        this.content = newContent;
    }
}