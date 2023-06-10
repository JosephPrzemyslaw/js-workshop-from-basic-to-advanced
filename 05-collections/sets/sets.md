# Zadanie
## Opis
Wygeneruj listę unikatowych użytkowników (użyj `Set`), którzy zalogowali się do systemu.
Listę userów pobierz z pliku `test.txt`. Zadanie wykonaj w środowisku `node.js`

## Fragment kodu
```javascript
const fs = require("fs");
//...
const data = fs.readFileSync('./test.txt', 'utf8');
//...
```


