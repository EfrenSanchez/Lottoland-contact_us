Evergage.safeClick(".evg__mainCTA", function(e) {
    var phoneNumberInput = ajq("#eg_Phone_number_X5KCD").first().val().replace(/\s|-|\(|\)/gi, '');
    var isValid = /^(0|\+44)\d{10}$/.test(phoneNumberInput);
    
    if (!isValid) {
        alert("The phone number you've entered is incorrect. Please try again.");
        e.preventDefault();
    } else {
        alert("You will be approach by our team in the time slot you have selected and on provided phone number");
        // e.preventDefault();
    }
    return isValid;
})