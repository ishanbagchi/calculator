var keys = document.querySelectorAll('#calc span');
var operators = ['+', '-', 'x', '÷'];
var decimalAdded = false;

for (var i = 0; i < keys.length; i++) {
    keys[i].onclick = function(e) {
        var input = document.querySelector('.display');
        inputVal = input.innerHTML;
        
        var btnVal = this.innerHTML;
        
        if (btnVal == 'C' && inputVal.length<15 ) {
            input.innerHTML = '';
            decimalAdded = false;
        } else if (btnVal == '=' && inputVal.length<15) {
            var equation = inputVal;
            var lastChar = equation[equation.length - 1];

            equation = equation.replace(/x/g, '*').replace(/÷/g, '/');

            if (operators.indexOf(lastChar) > -1 || lastChar == '.')
                equation = equation.replace(/.$/, '');

            if (equation)
                input.innerHTML = eval(equation);
            decimalAdded = false;
        } else if (operators.indexOf(btnVal) > -1 && inputVal.length<14) {
            var lastChar = inputVal[inputVal.length - 1];

            if (inputVal != '' && operators.indexOf(lastChar) == -1)
                input.innerHTML += btnVal;

            else if (inputVal == '' && btnVal == '-')
                input.innerHTML += btnVal;


            if (operators.indexOf(lastChar) > -1 && inputVal.length > 1) {
                input.innerHTML = inputVal.replace(/.$/, btnVal);
            }

            decimalAdded = false;
        } else if (btnVal == '.' && inputVal.length<14) {
            if (decimalAdded) {
                input.innerHTML += btnVal;
                decimalAdded = true;
            }
        } else if (btnVal == '+/-') {
            if (inputVal[0] != '-' && inputVal[0] != '+') {
                if (inputVal.length<14){
                input.innerHTML = '-' + inputVal;}
            }
            else if (inputVal[0] == '+'  && inputVal.length<15){
                input.innerHTML = inputVal.replace(inputVal[0],'-');
            }
            else {
                if(inputVal.length<15)
                input.innerHTML = inputVal.replace(inputVal[0],'+');
            }
        } else{
            if(inputVal.length<14) {
            input.innerHTML = inputVal + btnVal;     
            }      
        }
    

        // prevent page jumps
        e.preventDefault();
    }
}

