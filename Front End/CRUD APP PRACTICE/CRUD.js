

function submitform(Event) {

  Event.preventDefault()

  let name = document.getElementById("name").value
  let age = document.getElementById("age").value
  let gender = document.getElementById("gender").value
  let email = document.getElementById("email").value
  let phone = document.getElementById("phone").value
  let password = document.getElementById("password").value


  var nameerr = document.getElementById("name-error");
  var ageerr = document.getElementById("age-error");
  var gendererr = document.getElementById("gender-error");
  var emailerr = document.getElementById("email-error");
  var phoneerr = document.getElementById("phone-error");
  var passworderror = document.getElementById("password-error")

  nameerr.innerHTML = ""
  ageerr.innerHTML = ""
  gendererr.innerHTML = ""
  emailerr.innerHTML = ""
  phoneerr.innerHTML = ""
  passworderror.innerHTML = ""


  isvalid = true


  var nameagex = /[a-zA-Z_]/
  var ageregex = /[0-9]/
  var genderregex = /^(male|female)$/i
  var emailregex = /^[a-zA-Z0-9._]+@[a-zA-Z0-9]+\.(com)$/
  // var phoneregex = /^ [6 - 9][0 - 9]{ 9}$/
  var phoneregex = /[0-9]/
  var passwordregex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/






  // Name Validation

  if (name === "") {
    nameerr.innerHTML = "Please Enter the Name"
    isvalid = false
  } else if (!nameagex.test(name)) {
    nameerr.innerHTML = "Please Enter Valid Name"
    isvalid = false
  }


  // Age Validation

  if (age === "") {
    ageerr.innerHTML = "Please Enter the Age"
    isvalid = false
  }
  else if (!ageregex.test(age)) {
    ageerr.innerHTML = "Pease Enter the Valid Age"
    isvalid = false
  }


  // Gender Validation

  if (gender === "") {
    gendererr.innerHTML = "Please Enter the Gender"
    isvalid = false
  } else if (!genderregex.test(gender)) {
    gendererr.innerHTML = "Please Enter Valid Gender"
    isvalid = false
  }

  // Email Validation

  if (email === "") {
    emailerr.innerHTML = "Please Enter the Email"
    isvalid = false
  } else if (!emailregex.test(email)) {
    emailerr.innerHTML = "Please Enetr Valid Email"
    isvalid = false
  }


  // Phone Validation

  if (phone === "") {
    phoneerr.innerHTML = "Please Enter the Phone"
    isvalid = false
  } else if (!phoneregex.test(phone)) {
    phoneerr.innerHTML = "Please Enter a Valid Phone Number"
    isvalid = false
  }


  if (password === "") {
    passworderror.innerHTML = "Please Create Your Password"
    isvalid = false
  } else if (!passwordregex.test(password)) {
    passworderror.innerHTML = "Please Enetr a Valid Password"
    isvalid = false
  }



  if (isvalid === false) {
    return false

  } else if (isvalid === true) {
    alert("Form Submitted Succesfully")
    document.getElementById("form").reset()
  }



  let allUsers = JSON.parse(localStorage.getItem("Users")) || [];

  const newUser = {
    Name: name,
    Age: age,
    Gender: gender,
    Email: email,
    Phone: phone
  };

  allUsers.push(newUser);

  localStorage.setItem("Users", JSON.stringify(allUsers));



  displayUsers();
}

function displayUsers() {

  const allUsers = JSON.parse(localStorage.getItem("Users")) || [];

  let rows = "";

  allUsers.forEach(user => {
    rows = rows + `<tr>
    <td>${user.Name}</td>
    <td>${user.Age}</td>
    <td>${user.Gender}</td>
    <td>${user.Email}</td>
    <td>${user.Phone}</td>
    </tr>`;
  });

  document.getElementById("store").innerHTML = rows;


}

window.onload = displayUsers;