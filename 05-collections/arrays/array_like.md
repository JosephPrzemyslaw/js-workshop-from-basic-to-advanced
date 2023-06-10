# Zadanie
## Opis

Spójrz na obiekt poniżej, który wygląda jak tablica
```javascript
const names = {
    "0": "James",
    "1": "Peter",
    "2": "John",
    "3": "Anny",
    "4": "Marc",
    length: 5,
};
```

**a)** korzystając z `Array.prototype.includes` sprawdź czy obiekt zawiera imię John

**b)** stwórz tablicę z tymi imionami, których długość jest większa niż 4 znaki (`Array.prototype.filter`)

**c)** połącz imiona (`Array.prototype.join`) tworząc tekst postaci:

```
    James -> Peter -> John -> Anny -> Marc
```

# Zadanie
## Opis

Wejdź na `https://stackoverflow.com/` i pobierz wszystkie bloki `<div>` wg:

```javascript
const divs = document.querySelectorAll("div");
```
Otrzymaną kolekcję `NodeList` można nazwać pseudo tablicą gdyż zawiera zarówno pole `length` oraz indeksy numeryczne. Korzystając z `Array.prototype.map` stwórz tablicę odpowiadających identyfikatorów (patrz atrybut `id` na przykładzie poniżej)

![](../images/collections/divExample.png)