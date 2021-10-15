// Show and hide product
const kawasakoButton = document.getElementById('kawasako-btn');
const vixianButton = document.getElementById('vixian-btn')
const imageKawasako = document.getElementById('image-kawasako');
const imageVixian = document.getElementById('image-vixian');
const inputForm = document.getElementById('input-form');

kawasakoButton.addEventListener('click', showForm);
vixianButton.addEventListener('click', showForm);

function showForm(e) {
    e.preventDefault();
    if(this.id == 'kawasako-btn') {
        imageKawasako.style.display = "block";
    } 
    else {
        imageVixian.style.display = "block";
    }
    kawasakoButton.style.display = "none";
    vixianButton.style.display = "none";
    inputForm.style.display = "block";
}

// Validation of user input

function validation() {
    const errorColorMessage = document.getElementById('error-color-msg');
    var inputColor = document.getElementById('color');
    if(inputColor.value == "") {
        errorColorMessage.style.display = "block";
    } else {
        errorColorMessage.style.display = "none";
    }

    const errorQuantityMessage = document.getElementById('error-quantity-msg');
    const blankQuantityMessage = document.getElementById('blank-quantity-msg');
    var inputQuantity = document.forms["form-input"]["quantity"].value;  
    if (inputQuantity == "") {
        blankQuantityMessage.style.display = "block";
        errorQuantityMessage.style.display = "none";
    } else if (inputQuantity < 1 || inputQuantity > 100) {
        errorQuantityMessage.style.display = "block";
        blankQuantityMessage.style.display = "none";
    } else {
        blankQuantityMessage.style.display = "none";
        errorQuantityMessage.style.display = "none";
    }

    const errorNameMessage = document.getElementById('error-name-msg');
    const errorLengthMessage = document.getElementById('error-length-msg');
    var inputName = document.forms["form-input"]["name"].value;
    if(inputName == "") {
        errorNameMessage.style.display = "block";
        errorLengthMessage.style.display = "none";
    } else if (inputName.length < 5) {
        errorLengthMessage.style.display = "block";
        errorNameMessage.style.display = "none";
    } else {
        errorNameMessage.style.display = "none";
        errorLengthMessage.style.display = "none";
    }

    const errorPhoneNumberMessage = document.getElementById('error-phone-number-msg');
    const blankPhoneMessage = document.getElementById('blank-phone-msg');
    var inputPhoneNumber = document.forms["form-input"]["phone"].value;
    if (inputPhoneNumber == "") {
        blankPhoneMessage.style.display = "block";
        errorPhoneNumberMessage.style.display = "none";
    } else if (inputPhoneNumber.startsWith("+62") == false) {
        errorPhoneNumberMessage.style.display = "block";
        blankPhoneMessage.style.display = "none";
    } else {
        blankPhoneMessage.style.display = "none";
        errorPhoneNumberMessage.style.display = "none";
    }

    const errorAddressMessage = document.getElementById('error-address-msg');
    const blankAddressMessage = document.getElementById('blank-address-msg');
    var inputAddress = document.forms["form-input"]["address"].value;
    if(inputAddress == "") {
        blankAddressMessage.style.display = "block";
        errorAddressMessage.style.display = "none";
    } else if(inputAddress.endsWith("street") == false) {
        errorAddressMessage.style.display = "block";
        blankAddressMessage.style.display = "none";
    } else {
        blankAddressMessage.style.display = "none";
        errorAddressMessage.style.display = "none";
    }

    return false;
}