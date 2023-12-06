class Block {
    constructor(width, height, paddingTop, paddingRight, paddingBottom, paddingLeft, borderTop, borderRight, borderBottom, borderLeft, marginTop, marginRight, marginBottom, marginLeft) {
        this.width = width;
        this.marginLeft = marginLeft;
        this.marginRight = marginRight;
        this.borderLeft = borderLeft;
        this.borderRight = borderRight;
        this.paddingLeft = paddingLeft;
        this.paddingRight = paddingRight;

        this.height = height;
        this.marginTop = marginTop;
        this.marginBottom = marginBottom;
        this.borderTop = borderTop;
        this.borderBottom = borderBottom;
        this.paddingTop = paddingTop;
        this.paddingBottom = paddingBottom;
    }
    getWidth () {
        return this.width;
    }
    getTotalWidth() {
        return this.marginLeft + this.paddingLeft + this.borderLeft + this.width + this.borderRight + this.paddingRight  + this.marginRight;
    }
    getHeight() {
        return this.height;
    }
    getTotalHeight() {
        return this.marginTop + this.paddingTop + this.borderTop + this.height + this.borderBottom + this.paddingBottom + this.marginBottom;
    }
}

const block1 = new Block(200, 300, 10, 5, 10, 5, 20, 20, 20, 20, 1, 2, 3, 4);
const totalWidth = block1.getTotalWidth();
console.log(totalWidth);
