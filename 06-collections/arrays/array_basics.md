
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
Stwórz tablicę z dowolną zawartością. Obserwuj jak zmienia się zawartość tablicy modyfikując wartość właściwości `length`.

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
Wykonaj kopie tablic korzystając z operatora `spread`. Jakie problemy zauważasz ?

```javascript
const regularArr = [10, Infinity, 'test', null, undefined, 3.14, ''];
const complexArr = [{}, {age:40}, 'test', 'some sentence', [1, 2, 3, 4, 5]];
```

<br/>

# Zadanie
## Opis
Połącz kilka tablic w jedną
```javascript
const regularArr = [10, Infinity, 'test', null, undefined, 3.14, ''];
const complexArr = [{}, {age:40}, 'test', 'some sentence', [1, 2, 3, 4, 5]];
const onlyNums = [-10, -20, -30];
const onlyStrings = ['a', 'b', 'c', 'd'];
```
<br>

# Zadanie
## Opis
Korzytając z pętli `for` wydrukuj ocenę z egzaminu biorąc pod uwagę następujące kryteria:
```
<90-100> 5
<80-89>  4
<70-79>  3
<60-69>  2
< 60     1
```
Wynika ma być sformatowany wg schematu:
```
<osoba>: <ocena>
```
Tablica wejściowa:
```javascript
const students = [{
   name: 'Sabina', points: 59,
},{
   name: 'Paulina', points: 69,
},{
   name: 'Marry', points: 75,
},{
   name: 'Grazyna', points: 81,
},{
   name: 'Chris', points: 91,
},];
```
## Oczekiwany wynik

**a)**
```
Sabina:  1
Paulina: 2
Marry:   3
Grazyna: 4
Chris:   5
```
**b)**
```
Chris:   5
Grazyna: 4
Marry:   3
Paulina: 2
Sabina:  1
```
<br/>

# Zadanie
## Opis
Korzsytając z pętli `for` wydrukuj osoby wg schematu

**a)** 
```
I am <imie>, <wiek> years old, I am a/an <zawod>
```

**b)** 
```
I am <imie>, <wiek> years old, I am <rodzajnik> <wiek>
```


Tablica osób ma postać:
```javascript
const people = [{
   name: 'Joseph', age: 42, occupation: 'Trainer',
   name: 'John', age: 32, occupation: 'Programmer',
   name: 'Steph', age: 40, occupation: 'English Teacher',
   name: 'Anny', age: 35, occupation: 'German Teacher',
}]
```
## Oczekiwany output
**a)**
```
I am Joseph, 42 years old. I am a/an trainer
I am John, 32 years old. I am a/an programmer
I am Steph, 40 years old. I am a/an english trainer
I am Anny, 35 years old. I am a/an german teacher
```

**b)**
```
I am Joseph, 42 years old. I am a trainer
I am John, 32 years old. I am a programmer
I am Steph, 40 years old. I am an english trainer
I am Anny, 35 years old. I am a german teacher
```

<br>

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
```javascript
/**
 * Dodaje pojedynczy element na koniec tablicy 
 * @param {Array} arr - tablica
 * @params {number} num - element przeznaczony do dodania
 */
 function push(arr, num) {
    //...
 }
```
**b)** Rozszerz implementację o dodawawnie wielu wartości. Skorzystaj z operatora `rest`
```javascript
/**
 * Dodaje elementy na koniec tablicy 
 * @param {Array} arr - tablica
 * @params {...number} nums - elementy przeznaczone do dodania
 */
 function push(arr, nums) {
    //...
 }
```

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
 * Zwraca ostatni element tablicy
 * @param {Array} ref - tablica
 * @return {number} - ostatni element
 */
function getLast(ref) {
 //...
}

/**
 * Zwraca przedostatni element tablicy
 * @param {Array} ref - tablica
 * @return {number} - przedostatni element
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

