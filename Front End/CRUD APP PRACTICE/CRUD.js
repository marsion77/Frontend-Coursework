function submitForm(){

var Name = document.getElementById("name").value
var Age = document.getElementById("age").value
var Gender = document.getElementById("gender").value
var Email = document.getElementById("email").value
var Phone = document.getElementById("phone").value

var valid = true

  document.getElementById("name-error").innerHTML = "";
  document.getElementById("age-error").innerHTML = "";
  document.getElementById("gender-error").innerHTML = "";
  document.getElementById("email-error").innerHTML = "";
  document.getElementById("phone-error").innerHTML = "";

if (Name === ""){
    document.getElementById("name-error").innerHTML = "Please Enter the Name"
    valid = false;
}

if(Age === ""){
    document.getElementById("age-error").innerHTML = "Please Enter the Age"
     valid = false;
}


if(Gender === ""){
    document.getElementById("gender-error").innerHTML = "Please Enter the Gender"
     valid = false;
}

if(Email === ""){
    document.getElementById("email-error").innerHTML = "Please Enter the Email"
     valid = false;
}


if(Phone === ""){
    document.getElementById("phone-error").innerHTML = "Please Enter the Phone"
     valid = false;
}
    
}
