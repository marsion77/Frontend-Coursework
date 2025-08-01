
var a = document.getElementById("show")

function display(val){
a.value += val
}

function Clear(){
a.value = ""
}

function elete(){
a.value = a.value.slice(0,-1);
}

function none(){
document.getElementById("div").style.background = "white"
}

function calculate(){
try{
    a.value = eval(a.value)
}
catch(error){
alert("Invalid Input")
console.log(error);

}
}