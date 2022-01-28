// №1

// let a = +prompt('Введите целое число')
// if (a > 0) {
//     alert(a + 1)
// } else {
//     alert(a)
// }

// №2

// let a = +prompt('Введите целое число')
// if (a > 0) {
//     alert(a + 1)
// } else {
//     alert(a - 2)
// }

// №3

// let a = +prompt('Введите целое число')
// if (a > 0) {
//     alert(a + 1)
// } else if (a < 0) {
//     alert(a - 2)
// } else {
//     alert(a=10)
// }

// №4

// let a = +prompt('Введите первое число')
// let b = +prompt('Введите второе число')
// let c = +prompt('Введите третье число')
// if (a > 0 && b > 0 && c > 0) {
//     alert('Все числа положительные')
// } else if (a > 0 && b > 0 && c <= 0) {
//     alert('2 числа положительные')
// } else if (a > 0 && b <= 0 && c > 0) {
//     alert('2 числа положительные')
// } else if (a <= 0 && b > 0 && c > 0) {
//     alert('2 числа положительные')
// } else if (a > 0 && b <= 0 && c <= 0) {
//     alert('1 число положительное')
// } else if (a <= 0 && b > 0 && c <= 0) {
//     alert('1 число положительное')
// } else if (a <= 0 && b <= 0 && c > 0) {
//     alert('1 число положительное')
// } else if (a <= 0 && b <= 0 && c <= 0) {
//     alert('0 положительных чисел')
// }

// №5

// let a = +prompt('Введите первое не нулевое число')
// let b = +prompt('Введите второе не нулевое число')
// let c = +prompt('Введите третье не нулевое число')
// if (a > 0 && b > 0 && c > 0) {
//     alert('Все числа положительные')
// } else if (a > 0 && b > 0 && c < 0) {
//     alert('2 числа положительные, 1 отрицательное')
// } else if (a > 0 && b < 0 && c > 0) {
//     alert('2 числа положительные, 1 отрицательное')
// } else if (a < 0 && b > 0 && c > 0) {
//     alert('2 числа положительные, 1 отрицательное')
// } else if (a > 0 && b < 0 && c < 0) {
//     alert('1 число положительное, 2 отрицательных')
// } else if (a < 0 && b > 0 && c < 0) {
//     alert('1 число положительное, 2 отрицательных')
// } else if (a < 0 && b < 0 && c > 0) {
//     alert('1 число положительное, 2 отрицательных')
// } else if (a < 0 && b < 0 && c < 0) {
//     alert('0 положительных чисел, 0 отрицательное')
// }

// №6

// let a = +prompt('Введите первое число')
// let b = +prompt('Введите второе число')
// if (a > b) {
//     alert(a)
// } else if (b > a) {
//     alert(b)
// } else {
//     alert(a)
// }

// №7

// let a = +prompt('Введите первое число')
// let b = +prompt('Введите второе число')
// if (a > b) {
//     alert('II')
// } else if (b > a) {
//     alert('I')
// } else {
//     alert('Числа равные')
// }

// №8

// let a = +prompt('Введите первое число')
// let b = +prompt('Введите второе число')
// if (a > b) {
//     alert(a)
//     alert(b)
// } else if (b > a) {
//     alert(b)
//     alert(a)
// } else {
//     alert('Числа равные')
// }

// №9

// let A = +prompt('Введите первое число')
// let B = +prompt('Введите второе число')
// if (A > B) {
//     alert("A=" + B)
//     alert("B=" + A)
// } else if (B > A) {
//     alert("A=" + A)
//     alert("B=" + B)
// } else {
//     alert('Числа равные')
// }

// №10

// let A = +prompt('Введите первое число')
// let B = +prompt('Введите второе число')
// if (A > B || A < B) {
//     alert("A=" + (A+B))
//     alert("B=" + (A+B))
// } else {    
//     alert("A=0")
//     alert("B=0")
// }

// №11

// let A = +prompt('Введите первое число')
// let B = +prompt('Введите второе число')
// if (A > B) {
//     alert("A=" + A)
//     alert("B=" + A)
// } else if (A < B) {
//     alert("A=" + B)
//     alert("B=" + B)
// } else {    
//     alert("A=0")
//     alert("B=0")
// }

// №12

// let a = +prompt('Введите первое число')
// let b = +prompt('Введите второе число')
// let c = +prompt('Введите третье число')
// if (a <= b && a <= c) {
//     alert(a)
// } else if (b <= a && b <= c){
//     alert(b)
// } else if (c <= a && c <= b){
//     alert(c)
// } else {
//     alert('Числа равные')
// }

// №13

// let a = +prompt('Введите первое число')
// let b = +prompt('Введите второе число')
// let c = +prompt('Введите третье число')
// if (a < b && b < c ) {
//     alert(b)
// } else if (b < a && b > c) {
//     alert(b)
// } else if (b < a && a < c) {
//     alert(a)
// } else if (b > a && a > c) {
//     alert(a)
// } else if (c < a && c > b) {
//     alert(c)
// } else if (c > a && c < b) {
//     alert(c)
// } else {
//     alert('Среднего нет, числа недолжны быть равными')
// }

// №14

// let a = +prompt('Введите первое число')
// let b = +prompt('Введите второе число')
// let c = +prompt('Введите третье число')
// if (a <= b && a <= c) {
//     alert('min=' + a)
// } else if (b <= a && b <= c) {
//     alert('min=' + b)
// } else {
//     alert('min=' + c)
// }
// if (a >= b && a >= c) {
//     alert('max=' + a)
// } else if (b >= a && b >= c) {
//     alert('max=' + b)
// } else {
//     alert('max=' + c)
// }

// №15

// let a = +prompt('Введите первое число')
// let b = +prompt('Введите второе число')
// let c = +prompt('Введите третье число')
// if (a >= b && c >= b) {
//     alert(a+c)
// } else if ( b >= a && c >= a) {
//     alert(b+c)
// } else {
//     alert(a+b)
// }