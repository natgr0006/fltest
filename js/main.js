document.getElementById('phone').value = '';
document.getElementById('first-name').value = '';
var contButton = document.getElementById('continue');
var sh = document.getElementById('shipping');
var pay = document.getElementById('payment');
var inf = document.getElementById('info');
sh.disabled = true;
pay.disabled = true;

contButton.disabled = true;

function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

/*function validateName(input) {
    if (input.value.length < 3) {
        input.setCustomValidity("Дайте более развернутый ответ.");
    } else {
        input.setCustomValidity("");
    }
}

function verifyData() {
    let fn = document.getElementById('first-name').value;
    let ph = document.getElementById('phone').value;
    if (fn == '' || ph == '') {
        alert('Enter phone and number');
    }
}*/

function ValidPhone() {
    var re = /^\d[\d\(\)\ -]{4,14}\d$/;
    var myPhone = document.getElementById('phone').value;
    var myPhoneElement = document.getElementById('phone');
    var myName = document.getElementById('first-name').value;
    var output;
    var valid = re.test(myPhone);
    if ((valid) || (myName == '')) {
        output = 'Номер телефона введен правильно!';
        contButton.disabled = false;
        myPhoneElement.style.color = 'black';
        myPhoneElement.style.border = '1px solid #ccc';
    } else {
        output = 'Номер телефона введен неправильно!';
        contButton.disabled = true;
        myPhoneElement.style.border = '1px solid red';
        myPhoneElement.style.color = 'red';
        sh.disabled = true;

    };
    console.log(valid);
    return valid;


}

function ValidName() {
    var re = /^.*[^A-zА-яЁё].*$/;
    var output;
    var myName = document.getElementById('first-name').value;
    var myNameElement = document.getElementById('first-name');
    var myPhone = document.getElementById('phone').value;
    var valid2 = re.test(myName);
    if ((valid2) || (myNameElement.textLength) < 3) {
        output = 'Імя введено неправильно!';
        contButton.disabled = true;
        myNameElement.style.border = '1px solid red';
        myNameElement.style.color = 'red';
        sh.disabled = true;
    } else {
        output = 'Імя введено правильно!';
        contButton.disabled = false;
        myNameElement.style.border = '1px solid #ccc';
        myNameElement.style.color = 'black';
    }
    if (myPhone == '') {
        contButton.disabled = true;
    }
    return valid2;
}

function continueShipping() {
    sh.disabled = false;
    sh.click();
}

function continuePay() {
    pay.disabled = false;
    pay.click();
}


function backToCustomerInfo() {
    inf.click();

}

/*$(function() {
    $("#phone").mask("+38(999) 999-99-99");
});*/