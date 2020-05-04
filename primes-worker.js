
onmessage = function(event){
    let count = 0;
    let numPrimes = event.data;
    let text = "";
    let number = 0;

    function isPrime(number){
        //0, 1 or negative numbers are not prime  
        if (number < 2){
            return false;
        }
        //2 is a prime number 
        if (number == 2){
            return true;
        }
        //square root of prime numbers are irrational
        //no need to check divisors greater than sqrt x
        //any number divisible by 2 is not a prime number 

        let sqrt = Math.sqrt(number);
        for (let div =2; div <=sqrt; div++){
            if (number % div == 0) //if its perfectly divisible its not a prime number 
                return false;
        }
    
        return true;
    }

    //do while loop because we dont know how many times we will iterate depends on the value user provides 
    do {
        if (isPrime(number)){
        count++;
        text += number + " ";
        }

        //post message every 100 iteration instead of 1 iteration takes more computing power but faster
        if (number % 100 === 0)
        this.postMessage(text);

        number++;

    } while (count < numPrimes); //iterating until count is less then user data provided

    text += `<h4><h4> First ${numPrimes} Number of Primes presented`;
    this.postMessage(text);


}