// a function to display the error message
function printError (elemId, hintMsg) {
    document.getElementById (elemId).innerHTML=hintMsg;
}

//The function to validate the form

function validateForm() {
    //get all the form elements 
var name=document.contactForm.name.value;
var email=document.contactForm.email.value;
var mobile=document.contactForm.mobile.value;
var country=document.contactForm.country.value;
var gender= document.contactForm.gender.value;
var hobbies= [];
var checkboxes=document.getElementsByTagName('hobbies[]');
for (let i=0; i<checkboxes.length; i++) {
    if(checkboxes[i].checked) {
        hobbies.push(checkboxes[i].value);
    }
    
}



}

//define error variables with a defaul value
var nameErrr= emailErr= moileErr= countryErr= genderErr=false;


//validate name
if(name==" ") {
    printError("nameErr", "Please Enter a Valid Name")
} else {
    var regex= /^[a-zA-Z\s]+$/;
    if(regex.test(name) === false) {
        printError("nameErr", "Please enter a valid name");
    } else {
        printError("nameErr", "")
nameErr=false;
    }
}

//validate email 
if(email==" ") {
    printError("nameErr", "Please Enter a Valid email ")
} else {
    var regex= /^[a-zA-Z\s]+$/;
    if(regex.test(name) === false) {
        printError("nameErr", "Please enter a valid email");
    } else {
        printError("nameErr", "")
nameErr=false;
    }
}

//validate mobile

if(mobile==" ") {
    printError("mobileErr", "Please Enter a Valid mobile number")
} else {

    // Regular expression for basic email validation
    var regex= /^[a-zA-Z\s]+$/;
    if(regex.test(mobile) === false) {
        printError("mobileErr", "Please enter a valid 10 digit format");
    } else {
        printError("mobileErr", "")
nameErr=false;
    }
}




//validate country
if (country == "Select") {
    printError("countryErr", "Please select your country")
} else {
    var regex = /^\S+@\S+\.\S+$/;
    if (regex.test(country) === false) {
        printError("countryErr", " ")
    } else {
        printError("countryErr", " ")
        countryErr = false;
    }
}




//validategender
if (gender == " ") {
    printError("genderErr", "Please select your gender")
} else {
    var regex = /^\S+@\S+\.\S+$/;
    if (regex.test(gender) === false) {
        printError("genderErr", "Please select your gender")
    } else {
        printError("genderErr", " ")
        genderErr = false;
    }
}


//prevent the form from being submitted if there are any errors

if((nameErr || emailErr || mobileErr || countryErr || genderErr) == true) {
    return false;
 } else {
     // Creating a string from input data for preview
     var dataPreview = "You've entered the following details: \n" +
                       "Full Name: " + name + "\n" +
                       "Email Address: " + email + "\n" +
                       "Mobile Number: " + mobile + "\n" +
                       "Country: " + country + "\n" +
                       "Gender: " + gender + "\n";
     if(hobbies.length) {
         dataPreview += "Hobbies: " + hobbies.join(", ");
     }
     // Display input data in a dialog box before submitting the form
     alert(dataPreview);
 }


 //create a function called for madlibs
 function libIts() {
     //taget the values in the HTML

var storyDiv= document.getElementById('story');
var person= document.getElementById('person');
var adjective= document.getElementById("adjective"); value;
var noun= document.getElementById('noun').value;
storyDiv.innerHTML= (person + "is locked down" + adjective + " " + noun + "Wow this is great");

 }

 var libButton= document.getElementById('lib-button');
 libButton.addEventListener('click', libIts);

 //add an empty div so when you click on it,  the date displays..
 function dateToday () {
     document.getElementsByClassName('time').innterHTML=Date ();
 }

