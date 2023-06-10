# Zadanie
## Opis

Na podstawie tablicy linków napisz kod, który otworzy automatycznie w przeglądarce nowe karty z podanymi adresami internetowymi (uzyj `forEach`). Wynik sprawdź w Firefoxie. Aby otworzyć nowe okno użyj:
```javascript
window.open(URL, '_blank', 'noopener, noreferrer');
```

Tablica z linkami:
```javascript
const links = [
    {url: "http://www.google.pl",}
    {url: "http://www.stackoverflow.com",}
    {url: "http://www.medium.com",}
];
```
# Zadanie
## Opis
Dana jest tablica opisująca owoce:
```javascript
const fruitDescr = [
    {name: 'apple', price: '0.5$', amount: 'single'},
    {name: 'banana', price: 'O.25$', amount: 'single'},
    {name: 'grapes', price: '5$', amount: '1kg'},
    {name: 'plum', price: '0.25$', amount: 'single'},
    {name: 'peach' , price: '3$' , amount: '1kg'},
    {name: 'apricot', price: '0.75$', amount: 'single'},
    {name: 'cherry', price: '6$', amount: '1kg'},
];
const plumIndex = fruitDescr.indexOf({name: 'plum', price: '0.25$', amount: 'single'}); // -1
```

**a)** Wyjaśnij dlaczego poniższy kod zwraca -1

**b)** Korzystając z funkcji `Array.prototype.findIndex` odnajdź indeks śliwki. Zaproponuj rozwiązanie używając:
-   zwyczajnej funkcji
-   anonimowej
-   strzałkowej

**c)** Posługując się `findIndex`, odnajdź indeks pierwszego owocu, którego cena za 1kg jest większa ni 5$

<br>

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
Spójrz na poniższy kod iteracyjny. Usuń pętle korzystając z funkcji `Array.prototype.filter` zachowując funkcjonalność

```javascript
const sides = [4, 3, 9, 10, 15, 14, 21, 100, 1000];
const filtered = [];
for (let i = 0; i < sides.length; ++i) {
	if (sides [i] % 2) {
		filtered.push(sides[i]);
	}
}
```
<br>

# Zadanie
## Opis
W oparciu o `Array.prototype.filter` stwórz tablicę zawierająca tylko takie wpisy, dla których pojemność silnika jest większa niż 2.5l

```javascript
const cars = [{
	type: 'Audi',
    motor: '3.0',
}, {
	type: 'Fiat',
    motor: '1.1',
}, {
	type: 'Citroen', 
    motor: '2.0',
};
```

<br>

# Zadanie
## Opis
Korzystając z `Array.protototype.filter` przefiltruj `items` tak aby nowo utworzona tablica zawierała tylko wartości liczbowe
```javascript
const items = ['pinapple', 56, 'apple', 12.9, 'water', 1, 0];
```
<br>

# Zadanie
## Opis
Korzystając z `Array.prototype.filter`

**a)** Odfiltruj elementy dla których wiek osoby jest jednocześenie > 40 i < 20

**b)** Pozostaw tylko te obiekty, których pole name rozpoczyna się od „A”, „B” lub „C”

**c)** Stwórz tablicę, która zawiera elementy odpowiadające żeńskim imionom

```javascript
const people = [{
	name: 'Pol',
    age: 41,
}, { 
	name: 'Anny',
    age: 35,
}, {
	name: 'Chris',
    age: 32,
}, {
	name: 'Anthony',
    age: 70,
}, {
	name: 'Julia',
    age: 25,
}, {
	name: 'Brian',
    age: 18,
}, {
	name: 'Sindy',
    age: 29,
};
```
<br>

# Zadanie
## Opis

Korzystając z `Array.prototype.map` napisz kod, który na podstawie tablicy `names` stworzy tablicę z losowym tekstem `<name> likes <fruit>`. Zapoznaj się z przykładowym wynikiem poniżej

**Tablice:**
```javascript
const fruits = ['apple', 'pineapple', 'plum', 'cherry'];
const names = ['Paul', 'Adam', 'Joseph', 'Anny', 'Frank'];
```

## Przykład
![](../images/collections/mapRandomLikes.png )

<br>

# Zadanie
## Opis

Potraktuj elementy poniższej tablicy jako boki kwadratu.

```javascript
const sides = [2, 4, 10, 100, 1];
```

Policz pola obraz obwody zapisując wyniki w formie obiektów.
```javascript
{
    area: someValue,
    perimeter: someValue,
}
```
Skorzystaj z `Array.prototype.map`.

## Oczekiwany wynik:
```javascript
const areasAndPerims = [{
    area: 4, perimeter: 8,
}, {
    area: 16, perimeter: 16,
}, {
    area: 100, perimeter: 40,
}, {
    area: 10000, perimeter: 400,
}, {
    area: 1, perimeter: 4,
}]
```

<br>

# Zadanie
## Opis

Stwórz tablicę stu elementów, których każdy reprezentuje losową liczbę (`min = 0`, `max = 1000`). Skrzystaj z `Array.prototype.map`. Spróbuj stworzyć onelinera.

## Podpowiedź
```javascript
const N = 100;
const randomArr = new Array(N)...
```

<br>

# Zadanie
## Opis
Policz całkowity koszt zakupu. Zrealizuj zadanie na dwa sposoby:

**a)** implementacja w formie iteracyjnej (pętla `for`)

**b)** korzystając z `Array.prototype.reduce`

```javascript
const items = [{
	name: 'psx', price: 300, items: 4,
}, {
	name: 'Nintendo', price: 400, items: 2,
}, {
	name: 'box', price: 500, items: 10, 
}, {
	name: 'Wii', price: 40, items: 100,
}];
```

<br>

# Zadanie
## Opis
Policz sumę wszystkich elementów tablicy korzystając z `Array.prototype.reduce`
```javascript
const N = 100;
const MAX_VALUE = 1000;
const nums = new Array(N).fill().map(() => Math.random() * MAX_VALUE);
```
