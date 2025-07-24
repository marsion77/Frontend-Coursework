

function submitUser(Event) {

  Event.preventDefault()

  let name = document.getElementById("name").value 
  let age = document.getElementById("age").value
  let gender = document.getElementById("gender").value
  let email = document.getElementById("email").value
  let phone = document.getElementById("phone").value


  var nameerr = document.getElementById("name-error");
  var ageerr = document.getElementById("age-error");
  var gendererr = document.getElementById("gender-error");
  var emailerr = document.getElementById("email-error");
  var phoneerr = document.getElementById("phone-error");

  nameerr.innerHTML = ""
  ageerr.innerHTML = ""
  gendererr.innerHTML = ""
  emailerr.innerHTML = ""
  phoneerr.innerHTML = ""

  isvalid = true

  if (name === ""){
    nameerr.innerHTML = "Please Enter the Name"
    isvalid = false
  }
   if (age === ""){
    ageerr.innerHTML = "Please Enter the Name"
    isvalid = false
  }
   if (gender === ""){
    gendererr.innerHTML = "Please Enter the Name"
    isvalid = false
  }
   if (email === ""){
    emailerr.innerHTML = "Please Enter the Name"
    isvalid = false
  }
   if (phone === ""){
    phoneerr.innerHTML = "Please Enter the Name"
    isvalid = false
  }
  if(isvalid === false){
    return false
 
  }
  


  let allUsers = JSON.parse(localStorage.getItem("Users")) || [];

  const newUser = { 
    Name: name,
    Age: age,
    Gender: gender,
    Email: email,
    Phone: phone   };

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