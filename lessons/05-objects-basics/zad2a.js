let obj = {
  paddingBottom: "10px",
  borderWidth: "90px",
  margin: "70px",
  borderColor: "black",
  borderStyle: "double",
};

// let objCopy = {
//   paddingBottom: obj.paddingBottom,
//   borderWidth: obj.borderWidth,
//   margin: obj.margin,
//   borderColor: obj.borderColor,
//   borderStyle: obj.borderStyle,
// };

let objCopy = Object.assign({}, obj);

objCopy.paddingBottom = "popsułem";

console.log(obj.paddingBottom);