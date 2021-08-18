// pin generation section
function getPin (){
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if(pinString.length == 4){
        return pin;
    }
    else{
        return getPin();
    }
}



function generatePin(){
    const pinCall = getPin();
    document.getElementById('disply-pin').value = pinCall;
}


// calculaton section
document.getElementById('key-pad').addEventListener('click', function(event){
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');

    if(isNaN(number)){
        if (number == 'C'){
            calcInput.value = '';
        }
    }
    else{
    const previousNumber = calcInput.value;
    const newNumber = previousNumber + number;
    calcInput.value = newNumber;
    }
});

// pin mathing
function verifyPin(){
    const pass = document.getElementById('disply-pin').value;
    const clickedNumbers = document.getElementById('typed-numbers').value;
    const successMassage = document.getElementById('notify-succese');
    const failError = document.getElementById('notify-fail');

    if(pass == clickedNumbers){
        successMassage.style.display = 'block';
        failError.style.display = 'none';

    }
    else{
        failError.style.display = 'block';
        successMassage.style.display = 'none';

    }
}

