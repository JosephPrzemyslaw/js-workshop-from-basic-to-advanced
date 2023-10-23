const x = parseFloat(prompt('x='));
if (x < 0) {
    console.log('Negative value');
} else {
    console.log('Positive value');
    const oddOrEven = x % 2 === 0 ? "Is even" : "Is odd";
    console.log(oddOrEven);
}