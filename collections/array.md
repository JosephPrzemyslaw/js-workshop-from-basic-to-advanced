
# Zadanie 
## Opis

Stwórz tablicę zawierającą różne typy danych. Posłuż się składnią:

**a)**
```javascript
const someArray = [item1, item2, ..., itemN];
```
**b)**
```javascript
const someArray = [];
someArray[0] = item1;
someArray[1] = item2;
...
someArray[N-1] = itemN;
```
**c)**
```javascript
const someArray = new Array(item1, item2, ..., itemN);
```
**d)**
```javascript
const someArray = Array.of(item1, item2, ..., itemN);
```

Która metoda jest dla Ciebie najbardziej odpowiednia ?

<br/>

# Zadanie
## Opis
Korzystając z poniższego kodu zbadaj maksymalny rozmiar tablicy jaki może zostać utworzony
```javascript
const SIZE = 10_000_000;
const arr = new Array(SIZE);
```

<br/>

# Zadanie
## Opis
Wyciągnij klucze oraz odpowiadające wartości poniższej tablicy posługując się `Object.keys` obraz `Object.values`

```javascript
const numArray = [10, -10, 3.14, NaN, Infinitive];
```
<br/>

# Zadanie
## Opis
Przeanalizuj działanie funkcji `push`, `pop`, `shift` oraz `unshift`.

**Dokumentacja:**
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift

## Przykłady
```javascript
const someArray = ['Jenny', 'Tom', 'Anny', 'Chris', 'Agnes'];

const popped = someArray.pop();

someArray.push('Jorge');

const shifted = someArray.shift('Jorge');

someArray.unshift('Marry', 'Jose');
```

<br/>

# Zadanie
## Opis
Napisz własną implementację `pop` oraz `push`.

**a)** Ogranicz implementację `push` do dodawania jednej wartości

**b)** Rozszerz implementację o dodawawnie wielu wartości

## Przykłady
```javascript
const arr = [10, 0, 20, 30];
const popped = pop(arr); // popped = 30, arr = [10, 0, 20]
const newSize = push(arr, 10); // newSize = 4, arr = [10, 0, 20, 10];

push(arr, 100, 200, -10); // arr = [10, 0, 20, 10, 100, 200, -10];
```

<br/>


# Zadanie
## Opis
Napisz dwie funkcje, z których jedna zwraca ostatni a druga przedostatni element tablicy.
```javascript
/**
 * Returns the last element of an array
 * @param {Array} ref - the reference array
 * @return {number} - the last element
 */
function getLast(ref) {
 //...
}

/**
 * Returns the last but one element of an array
 * @param {Array} ref - the reference array
 * @return {number} - the last element
 */
function getLastButOne(ref) {
 //...
}
```
**Uwaga**
Rozwiąż zadanie na dwa sposoby:
- odnosząc się do długości tablicy przez `arr.length`
- używając funkcji `Array.prototype.at`, tj. `arr.at(...)`

**b)**
Zmodyfikuj kod tak by rzucany był wyjątek gdy element nie może być zwrócony (zbyt krótka tablica)

<br/>

# Zadanie
## Opis
Dane jest tablica owoców
```javascript
const fruits = ['pearl', 'cherry', 'apple', 'plum', 'kiwi', 'grapefruit', 'blackberry', 'pearl'];
```
**a)**
Znajdź pierwszy i drugi indeks wystąpienia gruszki korzystając z  `Array.prototype.indexOf`

**b)** Zapoznaj się z działaniem `Array.prototype.lastIndexOf`

**c**) korzystając z funkcji `Array.prototype.includes` sprawdź wystąpienie w tablicy jabłka oraz melona

<br/>

# Zadanie
## Opis
Dana jest ponizsza tablica opisująca owoce:
```javascript
const fruitDescr = [
    {name: 'apple', price: '0.5$', amount: 'single'},
    {name: 'banana' price: 'O.25$', amount: 'single'},
    {name: 'grapes', price: '5$', amount: '1kg'},
    {name: 'plum', price: '0.25$', amount: 'single'},
    {name: 'peach' , price: '3$' , amount: '1kg'},
    {name: 'apricot', price: '0.75$', amount: 'single'},
    {name: 'cherry', price: '6$', amount: '1kg'},
];
const plumIndex = fruitDescr.indexof({name: 'plum', price: '0.25$', amount: 'single'}); // -1
```

**a)** Wyjaśnij dlaczego poniższy kod zwraca -1

**b)** Korzystając z funkcji `Array.prototype.findIndex` odnajdź indeks śliwki. Zaproponuj rozwiązanie używając:
-   zwyczajnej funkcji
-   anonimowej
-   strzałkowej

**c)** Posługując się `findIndex`, odnajdź indeks pierwszego owocu, którego cena za 1kg jest większa ni 5$

# Zadanie
## Opis
**a)** Posortuje tablicę wyrazów na podstawie `Array.prototype.sort`

```javascript
const words = ['mail', 'cat', 'pineapple', 'computer', 'anchor', 'display'];
```

**b)** Rozwiąż problem sortowania liczb:
```javascript
const nums = [7, 10, 123, 20, -89];
const sorted = nums.sort();
```

Podpowiedź znajdziesz tutaj (sekcja opis)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

**c)** posortuj tablicę wg wieku
```javascript
const people = [{
    name: 'Sandra', age: 24,
}, {
	name: 'John', age: 30,
}, {
	name: 'Steph', age: 70,
}, {
	name: 'Stacy', age: 45,
}];
```
<br>

# Zadanie
## Opis
Spójrz na poniższy iteracyjny kod. Usuń pętle korzystając z funkcji `Array.prototype.filter`

```javascript
const sides = [4, 3, 9, 10, 15, 14, 21, 100, 1000];
const filtered = [];
for (let i = 0; i < sides.length; ++i) {
	if (sides [i] % 2) {
		filtered.push(sides [i]);
	}
}
```
<br>

# Zadanie
## Opis
W oaprciu o `Array.prototype.filter` stwórz tablicę zawierająca tylko takie wpisy, dla których pojemność silnika jest większa niż 2.5l

```javascript
const cars = [{
	type: 'Audi',
    motor: '3.0',
},
	type: 'Fiat',
    motor: '1.1',
}, {
	type: 'citroen', 
    motor: '2.0',
};
```