suma = 0
i = 3
while (i<=10000) {
    h= i%3
    if (h==0) {
        suma= suma+i
        i= i + 3
    }
}
console.log ( suma)
alert (suma)

suma = 0
a = 5
while (a<=10000) {
    b = a%5
    if (b==0) {
        suma = suma + a
        a = a + 5
    }
    
}
console.log (suma)
alert (suma)

suma = 0
m = 3 
n = 5
do {
    if (m<n) {
        suma= suma + m
        m = m + 3
    }
    else {
        suma = suma + n
        n = n + 5 
    }
} while (n+m<10000)
console.log ( suma )
alert (suma)

suma = 0
p = 3
q = 5
do {
    if (p==q) {
        p = p+ 3
        q = q + 5 
    }
    else {
        if (p < q){
            suma = suma + p
            p = p + 3
        }
        else {
            suma = suma + q
            q = q + 5
        }
    }
} while (q <= 10000)
console.log (suma)
alert (suma)

