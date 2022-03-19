// MILESTONE 1

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");

    } else if (i % 3 === 0) {
        console.log("Fizz");

    } else if (i % 5 === 0) {
        console.log("Buzz")

    } else {
        console.log(i);
    }

}


// MILESTONE 2


let containerNumeri = document.querySelector(`.contenitore_numeri`)

for (let i = 1; i <= 100; i++) {


    if (i % 3 === 0 && i % 5 === 0) {
        containerNumeri.innerHTML += `<div class="quadrato fizzbuzz">fizzbuzz</div>`;

    } else if (i % 3 === 0) {
        containerNumeri.innerHTML += `<div class="quadrato fizz">fizz</div>`;


    } else if (i % 5 === 0) {
        containerNumeri.innerHTML += `<div class="quadrato buzz">buzz</div>`;
        

    } else {
        
        containerNumeri.innerHTML += `<div class="quadrato">${i}</div>`;
    }





}