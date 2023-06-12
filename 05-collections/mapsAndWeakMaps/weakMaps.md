
# Zadanie
## Opis
Jakie są wady poniższego kodu ? Jaką inną strukturę mógłbyś użyć aby usunąć problem ?

```javascript
const cache = new Map;

function heavyCalculation(heavyObj) {
    if (cache.has(heavyObj)) {
        return cache.get(heavyObj);
    };
    let result;
    //...
    // perform long lasting calculation
    cache.set(heavyObj, result);

    return result;
}
```
<br>

# Zadanie
## Opis

Uzupełnij kod tak aby było wiadome ile razy funkcja jest wołana z danym obiektem 
```javascript
function process(refObj) {
    // ... some processing
}
```

## Przykład
```javascript
const obj = {
    age: 42,
    name: 'Joseph',
};
process(obj);
process(obj);
process(obj);

const item = {
    type: 'wooden',
    price: '450$',
};

process(item);
process(item);

// przechowuj w jakiejś zmiennej informacje, że dla obiektu obj funkcja została zawołana 3 razy a dla item 2 razy
```
