// const box = {
//     width: 272,
//     marginLeft: 70,
//     marginRight: 70,
//     borderLeft: 90,
//     borderRight: 90,
//     paddingLeft: 0,
//     paddingRight: 0,

//     height: 200,
//     marginTop: 70,
//     marginBottom: 70,
//     borderTop: 90,
//     borderBottom: 90,
//     paddingTop: 0,
//     paddingBottom: 10,
// }

const box = {
    width: 272,
    margin: 70,
    border: 90,
    paddingLeft: 0,
    paddingRight: 0,
    height: 200,
    paddingTop: 0,
    paddingBottom: 10,

    getWidth () {
        return this.width;
    },
    getTotalWidth() {
        return 2 * this.margin + 2 * this.border + this. width + this.paddingLeft + this.paddingRight;
    },
    getHeight() {
        return this.height;
    },
    getTotalHeight() {
        return 2 * this.margin + 2 * this.border + this. height + this.paddingTop + this.paddingBottom;
    }
}
