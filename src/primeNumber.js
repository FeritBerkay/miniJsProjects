function primeNumber(...numbers) {
    let primeNumbers = []
    for (let i = 0; i < numbers.length; i++) {
        let sayi = numbers[i];
        if (sayi%2!=0 && sayi%3!=0 && sayi%5!=0 && sayi!=1) {
            primeNumbers[i] = sayi
        }
    }
    console.log(primeNumbers)
}
primeNumber(1,7,8,11)