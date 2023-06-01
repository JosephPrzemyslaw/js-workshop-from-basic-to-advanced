
# Zadanie 1
## Opis
Pozbądź się wewnętrznej instrukcji warunkowej `if-else` korzystając z `ternary operator`

```javascript
const x = parseFloat(prompt("x="));
if (x < 0) {
    console.log("Negative value");
} else {
    console.log("Positive value");
    if (x % 2 === 0) {
        console.log("Is even");
    } else {
        console.log("Is odd");
    }
}
```
<br/>

# Zadanie 2
## Opis
Pozbądź się `if-else` korzystając z `ternary operator`

```javascript
const a = parseFloat(prompt("a= "));
const b = parseFloat(prompt("b= "));
const c = parseFloat(prompt("c= "));

if (a > b && b > c) {
    console.log("yes");
} else {
    console.log("no");
}
```
<br/>
