# Zadanie 1
## Opis

Pobierz liczbę (`prompt`, `parseFloat`) i wyświetl wiadomość czy jest ujemna lub dodatnia. W przypadku tej drugiej, policz jej kwadrat oraz sprawdź parzystość

## Przykład
```
 input: x = 8
 output: Dodatnia, parzysta liczba. Kwadrat wynosi 64

 input: x = -90
 output: Ujemna
 ```

<br/>

# Zadanie 2
## Opis

Zaimplementuj program, który oblicza pole trójkąta. Potrzebne dane pobierz od uytkownika
korzystając z `prompt`. Wykorzystaj `parseFloat` by skonwertować `string` na reprezentację zmiennoprzecinkową

```
input: a = 0.5, h =10
output: Pole trójkąta wynosi 2.5
```
<br/>

# Zadanie 3
## Opis

Wyświetl w konsoli `tak` / `nie` jeżeli podane liczby spełniają poniszą nierówność
```
a < b < c
```

## Przykłady
```
input: a = 145, b = 49, c = 20
output: tak

input: a = 45, b = 49, c = 45
output: nie
```
<br/>

# Zadanie 4
## Opis
Zaimplementuj program, który odpowiada na pytanie czy z danych boków `a`, `b`, `c` można zbudować trójkąt

Jeżeli tak, to znaczy, że poniższe nierówności są spełnione:
```
a + b > c
a + c > b
b + c > a
```

## Przykłady
```
input: a = 3, b = 6, c = 12
output: nie

input: a = 13, b = 15, c = 22 
output: tak
```

<br/>

# Zadanie 5
## Opis
Wskaż największą spośród pięciu liczb

## Notka
Załóż, że liczby są 'shardkodowane'
```javascript
const a = 3, b = 23, c = 100, d = 12, e = -90;
```

## Przykłady
```
input: a = 3, b = 23, c = 100, d = 12, e = -90
output: max = 100

input: a = -3, b = -23, c = -100, d = -12, e = -90
output: max = -3
```

<br/>

# Zadanie 6
## Opis
Biorąc pod uwagę wysokość [`m`] i masę [`kg`] danej osoby, określ kategorię, do której należy waga licząc parametr `BMI`

| Kategoria | BMI |
| --- | ----------- |
| Niedowaga| < 18.5 |
| Normalna | <18.5; 24.9> 
| Potencjalna nadwaga | > 24.9 |

```javascript
const BMI = weight / (height ^ 2); // 'height' do kwadratu
```

## Przykłady
```
input: m = 66 kg, h = 1.75
output: Normalna

input: m = 36 kg, h = 1.75
output: Niedowaga
```

<br/>

# Zadanie 7
## Opis
Wyświetl w rosnącym porządku liczby podane przez użytkownika

## Przykłady
```
input: a = 45, b = 12, c = 90
output: 12, 45, 90

input: a = 45, b = -90, c = -90
output: -90, -90, 45
```

<br/>
