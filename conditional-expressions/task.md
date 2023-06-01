# Task 1
## Description

Get a number (`prompt`, `parseFloat`) and display a message whether it is negative or positive. Compute its square and check parity in case of the postitive number

## Example
```javascript
 input: x = 8
 output: It is a positive, even number. The square is 64

 input: x = -90
 output: Negative number
 ```

<br/>
<br/>

# Task 2
## Description

Implement a program that calculates the triangle area. The necessary data is taken from an user using `prompt` command. Make use of `parseFloat` to convert input into the number representation. Display an error message if the nagative data were entered

```javascript
input: a = 0.5, h =10
output: The triangle area is 2.5
```

# Task 3
## Description

Display `yes` / `no` message if three entered numbers fulfill the following
inequality:
```
a < b < c
```

## Examples
```javascript
input: a = 145, b = 49, c = 20
output: yes

input: a = 45, b = 49, c = 45
output: no
```

# Task 4
## Description
Implement a program that displays in the console a message if the given sides allow you to build a triangle

If so, then the below inequalities are satisfied:
```
a + b > c
a + c > b
b + c > a
```

## Examples
```javascript
input: a = 3, b = 6, c = 12
output: no

input: a = 13, b = 15, c = 22 
output: yes
```


# Task 5
## Description
Pick the highest values among five numbers

## Note
Assume the values are hardcoded like this:
```javascript
const a = 3, b = 23, c = 100, d = 12, e = -90;
```

## Examples
```javascript
input: a = 3, b = 23, c = 100, d = 12, e = -90
output: max = 100

input: a = -3, b = -23, c = -100, d = -12, e = -90
output: max = -3
```


# Task 6
## Description
Given a height [`m`] and weight [`kg`] of an individual,
determine to which category does he or she belong to based on BMI value

| Category | BMI range |
| --- | ----------- |
| Underweight| < 18.5 |
| Normal | <18.5; 24.9> 
| Potential overweight | > 24.9 |

```
BMI = weight / (height ^ 2); // height to square
```

## Examples
```javascript
input: m = 66 kg, h = 1.75
output: Normal

input: m = 36 kg, h = 1.75
output: Underweight
```


