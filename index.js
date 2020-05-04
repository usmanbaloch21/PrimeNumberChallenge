//function being called by the html 
function showPrimes(){
    //grabbing the value of user input using a simple 2d array value is a string hence why we use parse int
    let numPrimes = parseInt(document.forms["primes"]["numPrimes"].value);
    //process which runs in the background when called 
    let primesWorker = new Worker("primes-worker.js");
    primesWorker.postMessage(numPrimes);
    //event handler to handle when message comes from the worker on main thread
    //outputting whatever we receive from the worker
    primesWorker.onmessage = function(event){
        document.getElementById("output").innerHTML = event.data;
        //incase too many number to generate a scroll
        window.scrollTo(0, document.body.scrollHeight);
    }
}