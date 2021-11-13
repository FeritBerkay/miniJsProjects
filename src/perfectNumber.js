function perfectNumber(number) {
    let numbers = []
    let counter = 0
    while (number<1000) {
        let total  = 0
        for (let i = 1; i <= number; i++) {
            if(number % i == 0){
                total += i
            }
        }
        if(total==(number+number)){
            console.log(number)
            numbers[counter] = number
            counter +=1
        }
        number += 1
    }
    console.log(numbers)    
}

perfectNumber(1)