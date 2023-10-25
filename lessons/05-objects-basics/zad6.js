// Zaimplementuj konstruktor tworzący Block

function Block({mL, mR, mT, mB, bL, bR, bT, bB, pL, pR, pT, pB, width, height}) {
    // this = {} 
    this['margin-left']= mL;
    this['margin-right']= mR;
    this['margin-top']= mT;
    this['margin-bottom']= mB;
    this['border-left']= bL;
    this['border-right']= bR;
    this['border-top']= bT;
    this['border-bottom']= bB;    
    this['padding-left']= pL;
    this['padding-right']= pR;
    this['padding-top']= pT;
    this['padding-bottom']= pB;   
    this.width = width;
    this.height = height;
}

Block.prototype.getWidth = function () {
    return this.width;
},
Block.prototype.getHeight= function() {
    return this.height;
},
Block.prototype.getTotalWidth = function() {
    return this.width 
        + this['margin-left']
        + this['margin-right']
        + this['border-left']
        + this['border-right']
        + this['padding-left']
        + this['padding-right'];
},
Block.prototype.getTotalHeight = function() {
    return this.height 
        + this['margin-top']
        + this['margin-bottom']
        + this['border-top']
        + this['border-bottom']
        + this['padding-top']
        + this['padding-bottom'];
}
//return this

const div1 = new Block({
    width: 200, height: 400,
    bL: 20, bR: 20, bT: 20, bB: 20,
    mL: 30, mR: 50, mT: 50, mB: 60,
    pL:10 , pR: 10, pT: 10, pB: 5,
});

const div2 = new Block({
    width: 20, height: 500,
    bL: 20, bR: 20, bT: 200, bB: 20,
    mL: 30, mR: 50, mT: 500, mB: 60,
    pL:10 , pR: 10, pT: 100, pB: 5,
});

