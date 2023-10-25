const div = {
    'margin-left': 70,
    'margin-right': 70,
    'margin-top': 70,
    'margin-bottom': 70,
    'border-left': 90,
    'border-right': 90,
    'border-top': 90,
    'border-bottom': 90,    
    'padding-left': 0,
    'padding-right': 0,
    'padding-top': 0,
    'padding-bottom': 10,   
    width: 272,
    height: 200,
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

console.log(div.getTotalHeight());
console.log(div.getHeight());
console.log(div.getTotalWidth());
console.log(div.getWidth());

// function Block(width,height,
//     mL,mR,mT,mB,
//     bL,bR,bT,bB,
//     pL,pR,pT,pB) {
//     return {
//         'margin-left': mL,
//         'margin-right': mR,
//         'margin-top': mT,
//         'margin-bottom': mB,
//         'border-left': bL,
//         'border-right': bR,
//         'border-top': bT,
//         'border-bottom': bB,    
//         'padding-left': pL,
//         'padding-right': pR,
//         'padding-top': pT,
//         'padding-bottom': pB,   
//         width,
//         height,
//         getWidth() {
//             return this.width;
//         },
//         getHeight() {
//             return this.height;
//         },
//         getTotalWidth() {
//             return this.width 
//                 + this['margin-left']
//                 + this['margin-right']
//                 + this['border-left']
//                 + this['border-right']
//                 + this['padding-left']
//                 + this['padding-right'];
//         },
//         getTotalHeight() {
//             return this.height 
//                 + this['margin-top']
//                 + this['margin-bottom']
//                 + this['border-top']
//                 + this['border-bottom']
//                 + this['padding-top']
//                 + this['padding-bottom'];
//         }

//     }
// }

