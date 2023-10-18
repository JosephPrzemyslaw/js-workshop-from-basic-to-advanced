# Zadanie
## Opis
Napisz funkcję, która loguje do konsoli informacje czy wszystkie trzy przesłane parametry są parzyste

```javascript
/**
 * Sprawdza czy przesłane liczby są parzyste
 * @param {number} a - pierwsza liczba
 * @param {number} b - druga liczba
 * @param {number} c - trzecia liczba
 * @return {boolean} - true jeżeli wszystkie są
 */
function areEven(a, b, c) {
    //...
}
```

## Przykłady
```javascript
const a = 90, b = 100, c = 200;
console.log(areEven(a, b, c)); // true

const e = 9, f = 10, g = 20
console.log(areEven(e, f, g)); // false
```

# Zadanie
## Opis
Napisz funkcję, która konwertuje temperaturę w stopniach Celsiusza na skalę Fahrenheita

```
farhenheit = 32 +  9/5 * celsius
```

```js
/**
 * Konwertuje temperaturę podaną w Celsiuszach na Fahrenheity
 * 
 * @param {number} temp - temperatura w stopniach Celsiusza
 * @return {number} - temperatura w Fahrenheitach
 *
 **/
function convertTemp(temp) {
    //...
}
```
## Zastosowanie
```js
const fahrenTemp1 = convertTemp(30);
const fahrenTemp2 = convertTemp(-20);
```

# Zadanie
## Opis

**a)**

Zaimplementuj funkcję, która symuluje rzut monetą, zwraca orzeł / reszka

```javascript
/**
 * Symuluje losowy rzut monetą. Funkcja losuje równomiernie, z jednakowym rozkładem prawdopodobieństwa
 * 
 * @return {string} 'head' lub 'tail'
 */
function getHeadOrTail() {
    //...
}
```

## Przykłady
```javascript
console.log(getHeadOrTail()); // 'head'
console.log(getHeadOrTail()); // 'tail'
console.log(getHeadOrTail()); // 'tail'
console.log(getHeadOrTail()); // 'head'
```

**b)**
Zbadaj jak często pada orzeł i reszka w zależności od liczby rzutów

<br>


# Zadanie
## Opis
Napisz funkcję, która pobiera trzy współczynniki `a`, `b`, `c` i zwraca pierwiastki paraboli
```javascript
/**
 * Liczy pierwiastki paraboli danej wzorem
 * y = ax^2 + bx + c
 * 
 * @param {number} a - pierwszy pierwiastek
 * @param {number} b - drugi pierwiastek
 * @param {number} c - trzeci pierwiastek
 * 
 * @return {Array} - zero, jedno lub dwuelementowa tablica pierwiastków 
*/
function getRoots(a, b, c) {
    //...
}
```

## Przykłady
```javascript
const solution1 = getRoots(1, -3, 2);   // [1, 2]
const solution2 = getRoots(1, -2, 1);   // [1]
const solution3 = getRoots(10, 0.5, 1); // []
```

# Zadanie
## Opis
Zaimplementuj funkcję, która zwraca losową liczbę z określonego zakresu. Jeżeli żaden parametr nie zostanie przesłany, załóż `min = 0`, `max = 100`

```javascript
/**
 * Zwraca liczbę losową z przedziału <min, max>
 * min = 0, max = 100 gdy parametry nie zostaną przesłane
 * 
 * @param {number} min - wartość minimalna
 * @param {number} max - wartość maksymalna
 * @return {number} - liczba z przedziału <min, max>
 */
function getRandom(min, max) {
    //...
}
```

## Przykłady

```javascript
const rand1 = getRandom(5, 10); // 7
const rand2 = getRandom(); // 54
```

# Zadanie
## Opis
Co zostałoby wyświetlone w konsoli gdyby poniższy kod został odkomentowany ?

**a)**
```javascript
// console.log(PI);
function getCircleArea(radius) {
    // console.log(PI);
    const PI = 3.14;
    const area = PI * radius * radius;

    // console.log(PI);
    return area;
}

const area = getCircleArea(10.5);
// console.log(PI);

```
**b)**
```javascript
// console.log(PI);
function getCircleArea(radius) {
    // console.log(PI);
    var PI = 3.14;
    const area = PI * radius * radius;

    // console.log(PI);
    return area;
}

const area = getCircleArea(10.5);
// console.log(PI);
```
**c)**
```javascript
function getTriangleArea(a, h) {
    area = 0.5 * a * h;

    return area;
}

// console.log(area);
const area = getTriangleArea(10.5);
// console.log(area);
```
