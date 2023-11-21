let string = "";
let newval = false;
let buttons = document.querySelectorAll('.button');
let operators = document.querySelectorAll('.operator')
// console.log(buttons);

operators.forEach(function(ope){
    console.log(ope);
    ope.addEventListener('click', function(singh){

        if (string === "" && singh.target.innerHTML !== '-') { // Add other operators as needed
            alert("Please enter a number first!");
        }
        
        else {
            string = string + singh.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
})

buttons.forEach(function (value) {
    // console.log(value);
    console.log(value);
    value.addEventListener('click', function(e){
        console.log(e.target);

        if (e.target.innerHTML == '=') {
            string = eval(string);
            document.querySelector('input').value = string;
            
        } 

        else if (e.target.innerHTML == 'C') {
            string = "";
            document.querySelector('input').value = string; 
        }

        else {
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
})

