function placeholderNum() {
    const pNum = document.getElementById("pNum");
    pNum.placeholder="+xx(xxx)-xxx-xx-xx";
    if (pNum.value.length < 2) {pNum.value=`+38`;}
};

const isNumericInput = (event) => {
    const key = event.keyCode;
    return ((key >= 48 && key <= 57)
        (key >= 96 && key <= 105) || (key === 43)
    );
};

const isModifierKey = (event) => {
    const key = event.keyCode;
    return (event.shiftKey === true || key === 35 || key === 36 || key === 43) ||
        (key === 8 || key === 9 || key === 13 || key === 46 || key === 61) ||
        (key > 36 && key < 41) ||
        ((event.ctrlKey === true || event.metaKey === true) &&
            (key === 65 || key === 67 || key === 86 || key === 88 || key === 90)
        )
};

const enforceFormat = (event) => {
    if(!isNumericInput(event) && !isModifierKey(event)){
        event.preventDefault();
    }
};

const formatToPhone = (event) => {
    if(isModifierKey(event)) {return;}

    const input = event.target.value.replace(/\D/g,'').substring(0,13);
    const countryCode = input.substring(0,2);
    const operatorCode = input.substring(2,5);
    const middleThree = input.substring(5,8);
    const middleTwo = input.substring(8,10);
    const lastTwo = input.substring(10,12);

    if(input.length > 8){event.target.value = `+${countryCode}(${operatorCode}) ${middleThree}-${middleTwo}-${lastTwo}`;}
    else if(input.length > 5){event.target.value = `+${countryCode}(${operatorCode}) ${middleThree}`;}
    else if(input.length > 2){event.target.value = `+${countryCode}(${operatorCode}`;}
    else if(input.length > 0){event.target.value = `+${countryCode}`;}
};

const inputElement = document.getElementById("pNum");
inputElement.addEventListener('keydown',enforceFormat);
inputElement.addEventListener('keyup',formatToPhone);
const emailInput = document.getElementById("emailForm");

function valField() {
    const inputs = Array.from(document.querySelectorAll('input[name=emailForm], input[name=phoneNumber]'));

    const inputListener = e => {
    inputs
      .filter(i => i !== e.target)
      .forEach(i => (i.required = !e.target.value.length));
    };
    inputs.forEach(i => i.addEventListener('input', inputListener));
}

inputElement.addEventListener('focusout', valField());
emailInput.addEventListener('focusout', valField());