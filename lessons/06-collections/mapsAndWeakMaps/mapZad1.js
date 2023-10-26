const fruitArr = [
    ['apple', {'price': '0.5$', amount: 'single'}],
    ['banana', {'price': '2.5$', amount: '1kg'}],
    ['grapes', {'price': '5.2$', amount: '1kg'}],
    ['plum', {'price': '10.0$', amount: '1kg'}],
    ['peach', {'price': '0.75$', amount: 'single'}],
    ['apricot', {'price': '0.55$', amount: 'single'}],
];

const fruitMap = new Map(fruitArr);
const plumDescr = fruitMap.get('plum');

// iteracja po mapie
for(let el of fruitMap.values()) {
    console.log(el);
}

debugger