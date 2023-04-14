let temp;
let prev_output = document.getElementById("previd");
let current_output = document.getElementById("currentid");
buttons = document.querySelectorAll('button');
let screenValue = "";
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if (buttonText == 'x') {
            buttonText = '*';
            screenValue += buttonText;
            current_output.value = screenValue;
        }
        else if (buttonText == 'AC') {
            screenValue = "";
            current_output.value = screenValue;
        }
        else if (buttonText == '=') {
            current_output.value = parseFloat(eval(screenValue));
            screenValue = current_output.value;

        }
        else if (buttonText == "<") {
            current_output.value = screenValue.slice(0, - 1);
            screenValue = screenValue.slice(0, - 1);
        }

        else {
            screenValue += buttonText;
            current_output.value = screenValue;
        }


    })
}