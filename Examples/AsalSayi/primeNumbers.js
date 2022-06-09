// Asal Sayı Bulma

function showPrimeNumbers(lowNumber, hightNumber) {
    for (let i = lowNumber; i <= hightNumber; i++) {
        let isPrime = true;
        for (let j = 2; j <= i; j++) {
            if (i % j === 0 && j !== i) {
                isPrime = false;
            }
        }

        if (isPrime) {
            console.log(i);
        }

    }
}

showPrimeNumbers(5, 20);