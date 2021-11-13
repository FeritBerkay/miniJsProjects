function primeNumberUntil1000(number) {
    let primeNumbers = []
    while (number<1000) {
        let counter = 0
        for (let i = 0; i < number; i++) {
            if (i%2!=0 && i%3!=0 && i%5!=0 && i!=1&& i%7!=0 && i%11!=0) {
                primeNumbers[counter] = i
                counter+=1
            }   
        }
        number += 1
    }
    console.log(primeNumbers)
    
}
primeNumberUntil1000(1)