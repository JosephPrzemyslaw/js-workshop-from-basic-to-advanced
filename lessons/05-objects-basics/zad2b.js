const refObj = {
  name: 'Jan',
  surname: 'Kowalski',
  age: 65,
  occupation: 'worker',
  children: ['Sandra', 'Damian', 'Maja'],
  address: {
     street: 'Poznanska',
     homeNumber: '34',
     city: 'Warsaw',
  },
};

let kowalski = Object.assign({}, refObj);
// kowalski = {}
// kowalski.name = refObj.name; // "Jan"
// kowalski.surname = refObj.surname; // "Kowalski"
// kowalski.age = refObj.age; // 65
// kowalski.occupation = refObj.occupation; // "worker"
// kowalski.children = refObj.children; // [0x346235]
// kowalski.address = refObj.address; // [0xAC62DD]
// kowalski.children = [refObj.children[0], refObj.children[1], refObj.children[2]];
kowalski.children = refObj.children.slice();
// kowalski.address = {
//   street: refObj.address.street,
//   homeNumber: refObj.address.homeNumber,
//   city: refObj.address.city,
// };
kowalski.address = Object.assign({}, refObj.address)

kowalski.address.city = "Poznan";
kowalski.name = "Tomasz";
console.log(kowalski.name, refObj.name);
kowalski.children[1] = "Radosław";
console.log(kowalski.children, refObj.children);
console.log(kowalski.address.city, refObj.address.city);
