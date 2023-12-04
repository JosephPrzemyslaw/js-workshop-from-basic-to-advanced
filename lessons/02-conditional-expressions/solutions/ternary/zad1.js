const x = 122; //parseFloat(prompt('x='));
if (x < 0) {
    console.log('Negative value');
} else {
    console.log('Positive value');

    const evenOrOdd = x % 2 === 0 ? "even" : "odd";
    console.log(`Is ${evenOrOdd}`);
    // if (x % 2 === 0) {
    //     console.log('Is even');
    // } else {
    //     console.log('Is odd');
    // }
}