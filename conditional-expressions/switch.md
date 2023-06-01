# Zadanie 1
## Opis
Program ma wypisywać angielski odpowiednik miesiąca (nie używaj polskich liter).
<br>

Jak możesz uodpornić skrypt na błędy powstałe podczas wpisywania miesiąca przez użytkownika ?

## Przykłady
```
input:  styczen
output: January

input:  pazdziernik
output: October
```
<br>

# Zadanie 2
## Opis

Napisz program przeliczający wpisaną kwotę pieniężną w złotówkach na odpowiadającą w obcej walucie. Wejściem od użytkownika jest kwota oraz typ waluty (`prompt`)

**Rozważ kilka obcych walut**

## Przykłady
zakładając kurs:
<br>
**1 USD = 4.25 PLN**
<br>
**1 EUR = 4.55 PLN**
```
input:  123, dolar
output: 28.94
input:  2356.4, euro
output: 517,89
```
<br>

# Zadanie 3
## Opis
Zamień poniższy kod na odpowiadający przy użyciu switch

```javascript
if (text === "start") {
    result = "S";
} else {
    if (text === "not ready" || text === "broken") {
        result = "NR";
    } else {
        if (text === "about to start") {
            result = "ATS";
        } else if (text === "working") {
            result = "W";
        }
    }
}
```

# Zadanie 4
## Opis
Napisz prosty kalkulator. Użytkownik korzystając z okienek `prompt` podaje dwie liczby. Dalej wybiera jedną z operacji arytmetycznych, tj. +, -, /, *, **.

## Przykład
```
input:
	Podaj a = 45
	Podaj b = 12
	Podaj operację = *
output: 45 * 12 = 540 
```

# Zadanie 5
## Opis
Wyświetl na ekranie porę roku na podstawie podanego przez użytkownika nazwy miesiąca.

## Przykłady:
```
input:  styczeń
output: zima

input:  listopad
output: jesień
```