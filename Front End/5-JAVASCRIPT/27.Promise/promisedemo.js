const a = new Promise((res,rej)=>{
console.log("Maariosn Prcticing Promises");
setTimeout(()=>{
let vail = true
if(vail){
    res("Its Available")
}else{
    rej("Its Not Available")
}
},5000   
)
});


a.then(msg=>{
    console.log(msg);
})
.catch(error=>{   
    console.log(error);
});