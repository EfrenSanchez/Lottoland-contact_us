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


//Prevent Key pad overlapping the phone input (focus => top:0; blur => top:78.5px;)
// document.getElementById("eg_Phone_number_X5KCD").addEventListener("focus", function(e) {
    // window.scrollTo(0,document.body.scrollHeight);
    // document.getElementById("evergage-tooltip-ambpbEOA").style.top = '-100px';
// });

// document.getElementById("eg_Phone_number_X5KCD").addEventListener("blur", function(e) {
//     document.getElementById("evergage-tooltip-ambpbEOA").style.top = '78.5px';
// });


const ua = navigator.userAgent.toLowerCase();
const isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
if(isAndroid) {
    phoneInput = document.getElementById("eg_Phone_number_X5KCD");
    modal = document.getElementById("evergage-tooltip-ambpbEOA");
    clickHere = document.getElementById("clickHereWrapper");
    
phoneInput.addEventListener("focus", function(e) {
    modal.style.overflow = 'scroll';
    modal.style.height = '300px';
    clickHere.style.display = 'none';
});

phoneInput.addEventListener("blur", function(e) {
    modal.style.overflow = 'initial';
    modal.style.height = '510px';
    clickHere.style.display = 'block';
});
}

