# Zadanie
## Opis
Przeanalizuj poniższy przykład

```javascript
const ws = new WeakSet;
{
    let obj = {
        age: 42,
    };

    ws.add(obj);
    ws.has(obj); // true
}

// in this place ws should be empty
```

<br>

# Zadanie
## Opis
Zmodyfikuj poniższy kod tak aby funkcja `process` była wołana **tylko** na rzecz obiektów klasy `Fruit`

```javascript
class Fruit {
    //...
    process() {
        // ...
    }
    //...
}
```

<br>

# Zadanie
## Opis
Zmodyfikuj poniższy kod tak aby ten sam obiekt nie był dodawany ponownie.
```javascript
function addToDomContainer(el) {
    $container.appendChild(el);
    console.log(`Element ${el.id} added to the the container`);
}
```

<br>

# Zadanie
## Opis
Napisz funkcję, która sprawdzi czy pola obiektu są unikatowe

## Przykład
```javascript
let computer = {
    ram: '8GB',
    type: 'macBook',
    company: 'Apple',
    graphicCard: {
        company: 'Apple',
        vram: '2GB',
        //...
    }
}

areUniqueFields(computer); // false - company występuje dwukrotnie
```

<br>

# Zadanie (*)
## Opis
Zaimplementuj detekcję `circular reference`
```javascript
let obj = {
    age: 42,
    city: 'sth',
    descr: {
        //...
    }
}
obj.descr.parent = obj;

obj.descr.parent.descr.parent.descr.parent; // 😮😮😮😮😮
```
 