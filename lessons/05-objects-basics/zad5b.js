// Zaimplementuj fabrykę, która tworzy blok

function createBlock({mL, mR, mT, mB, bL, bR, bT, bB, pL, pR, pT, pB, width, height}) {
    return {
        'margin-left': mL,
        'margin-right': mR,
        'margin-top': mT,
        'margin-bottom': mB,
        'border-left': bL,
        'border-right': bR,
        'border-top': bT,
        'border-bottom': bB,    
        'padding-left': pL,
        'padding-right': pR,
        'padding-top': pT,
        'padding-bottom': pB,   
        width,
        height,
        getWidth() {
            return this.width;
        },
        getHeight() {
            return this.height;
        },
        getTotalWidth() {
            return this.width 
                + this['margin-left']
                + this['margin-right']
                + this['border-left']
                + this['border-right']
                + this['padding-left']
                + this['padding-right'];
        },
        getTotalHeight() {
            return this.height 
                + this['margin-top']
                + this['margin-bottom']
                + this['border-top']
                + this['border-bottom']
                + this['padding-top']
                + this['padding-bottom'];
        }
    }
}
const div = createBlock({
    width: 200, height: 400,
    bL: 20, bR: 20, bT: 20, bB: 20,
    mL: 30, mR: 50, mT: 50, mB: 60,
    pL:10 , pR: 10, pT: 10, pB: 5,
});
console.log(div.getTotalHeight());
console.log(div.getHeight());
console.log(div.getTotalWidth());
console.log(div.getWidth());
