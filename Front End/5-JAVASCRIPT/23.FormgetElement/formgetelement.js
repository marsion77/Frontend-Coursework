


function submit() {
    var getname = document.getElementById("name").value
    var getage = document.getElementById("age").value
    var getgender = document.getElementById("gender").value
    var getemail = document.getElementById("email").value
    var getmobile = document.getElementById("mobile").value


    var allusers = []

    const users = {
        Name: getname,
        Age: getage,
        Gender: getgender,
        Email: getemail,
        Mobile: getmobile
    }

    localStorage.setItem("Userss", JSON.stringify(users))

   
    var a = localStorage.getItem("Userss")
    // console.log(a);

    var changethedata = JSON.parse(a)
    console.log(changethedata);

    allusers.push(...Object.values(users));
    console.log(allusers);
    

}

