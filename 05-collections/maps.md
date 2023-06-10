# Zadanie
## Opis
Zaimplementuj mapę `fruits`, która odzwierciedla klucz (nazwę owocu) na opis. Wstępnie stwórz tablicę z danymi a następnie przekaż ją jako parametr konstruktora Map
```javascript
const fruitArr = [
    ["apple", {"price": "0.5$", amount: "single"}],
    ["banana", {"price": "2.5$", amount: "1kg"}],
    //...
];
```
## Przykład
```javascript
const plumDescr = fruits.get("plum");
```

# Zadanie
## Opis
Skonstruuj mapę, która odzwierciedla nazwę nagłówka HTTP na opis. Posłuż się tabelką z strony
`https://en.wikipedia.org/wiki/List_of_HTTP_header_fields`.
Wykorzystaj 5-10 nagłówków dla przykładu

## Przykład
```javascript
const acceptDescr = headers.get("Accept");
// const acceptDescr = {
//   description: "Acceptable instance-manipulations for the request.[11]",
//   example: "A-IM: feed Permanent	RFC 3229",
// }
```

<br>

# Zadanie
## Opis
Dokonaj przemapowania nazw kolorów na odpowiedniki RGB. Posłuż się 5-10 przykładami z `https://www.w3.org/wiki/CSS/Properties/color/keywords`

## Przykład
```javascript
const orange = colors.get("orange"); // #ffa500
```
<br>

# Zadanie
## Opis
Zbuduj słownik mapujący nazwy miesięcy w języku angielskim na odpowiedniki polskie

## Przykład
```javascript
const polishJan = months.get("january"); // styczeń
```
