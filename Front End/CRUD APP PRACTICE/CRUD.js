let editIndex = null;

function submitForm(event) {
  event.preventDefault();

  let name = document.getElementById("name").value.trim();
  let age = document.getElementById("age").value.trim();
  let gender = document.getElementById("gender").value.trim();
  let email = document.getElementById("email").value.trim();
  let phone = document.getElementById("phone").value.trim();

  let nameerr = document.getElementById("name-error");
  let ageerr = document.getElementById("age-error");
  let gendererr = document.getElementById("gender-error");
  let emailerr = document.getElementById("email-error");
  let phoneerr = document.getElementById("phone-error");

  nameerr.innerHTML = "";
  ageerr.innerHTML = "";
  gendererr.innerHTML = "";
  emailerr.innerHTML = "";
  phoneerr.innerHTML = "";

  let isvalid = true;

  let nameRegex = /^[a-zA-Z\s]+$/;
  let ageRegex = /^[0-9]{1,3}$/;
  let genderRegex = /^(male|female)$/i;
  let emailRegex = /^[a-zA-Z0-9._]+@[a-zA-Z0-9]+\.(com)$/;
  let phoneRegex = /^[6-9][0-9]{9}$/;

  // Validations
  if (name === "") {
    nameerr.innerHTML = "Please enter the name";
    isvalid = false;
  } else if (!nameRegex.test(name)) {
    nameerr.innerHTML = "Enter a valid name";
    isvalid = false;
  }

  if (age === "") {
    ageerr.innerHTML = "Please enter the age";
    isvalid = false;
  } else if (!ageRegex.test(age)) {
    ageerr.innerHTML = "Enter a valid age";
    isvalid = false;
  }

  if (gender === "") {
    gendererr.innerHTML = "Please enter the gender";
    isvalid = false;
  } else if (!genderRegex.test(gender)) {
    gendererr.innerHTML = "Enter either 'Male' or 'Female'";
    isvalid = false;
  }

  if (email === "") {
    emailerr.innerHTML = "Please enter the email";
    isvalid = false;
  } else if (!emailRegex.test(email)) {
    emailerr.innerHTML = "Enter a valid email";
    isvalid = false;
  }

  if (phone === "") {
    phoneerr.innerHTML = "Please enter the phone number";
    isvalid = false;
  } else if (!phoneRegex.test(phone)) {
    phoneerr.innerHTML = "Enter a valid 10-digit phone number starting with 6-9";
    isvalid = false;
  }

  if (isvalid == false) {
    return false;
  }

  let allUsers = JSON.parse(localStorage.getItem("users")) || [];

  const newUser = {
    Name: name,
    Age: age,
    Gender: gender,
    Email: email,
    Phone: phone
  };


  if (editIndex !== null) {
    allUsers[editIndex] = newUser;
    editIndex = null;
    alert("User updated successfully");
  } else {
    allUsers.push(newUser);
    alert("Form submitted successfully");
  }

  localStorage.setItem("users", JSON.stringify(allUsers));
  displayUsers();

  // Clear form
  document.getElementById("name").value = "";
  document.getElementById("age").value = "";
  document.getElementById("gender").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";

  // Hide modal
  let modal = bootstrap.Modal.getInstance(document.getElementById('userModal'));
  modal.hide();

}



function displayUsers() {
  const allUsers = JSON.parse(localStorage.getItem("users")) || [];

  let rows = "";
  allUsers.forEach((user, index) => {
    rows += `
        <tr>
          <td>${index + 1}</td>
          <td>${user.Name}</td>
          <td>${user.Age}</td>
          <td>${user.Gender}</td>
          <td>${user.Email}</td>
          <td>${user.Phone}</td>
<td><button onclick="edituser(${index})">Edit</button></td>
<td><button onclick="deleteUser(${index})">Delete</button></td>

        </tr>
      `;
  });

  document.getElementById("store").innerHTML = rows;

}


// Function To Update Data
function edituser(index) {
  let users = JSON.parse(localStorage.getItem("users")) || [];
  let user = users[index];

  //Editing Data
  document.getElementById("name").value = user.Name;
  document.getElementById("age").value = user.Age;
  document.getElementById("gender").value = user.Gender;
  document.getElementById("email").value = user.Email;
  document.getElementById("phone").value = user.Phone;

  // To Know this a Update not New Data
  editIndex = index;

  // Open the modal
  let modal = new bootstrap.Modal(document.getElementById('userModal'));
  modal.show();
}



// Delete Function
function deleteUser(index) {
  let users = JSON.parse(localStorage.getItem("users")) || [];
  users.splice(index, 1); // Remove 1 item at 'index'
  localStorage.setItem("users", JSON.stringify(users));
  displayUsers();
}



window.onload = displayUsers;
