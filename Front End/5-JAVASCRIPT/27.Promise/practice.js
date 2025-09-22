function f2(){
    return new Promise((resolve,reject)=>{
setTimeout(()=>{
    resolve("Hello");
    reject("Not Hello")
},5000);
    })
}

// f2()
// .then(msg=>{
//     console.log(msg);   
// })
// .catch(error=>{
//     console.log(error);   
// })

async function checking() {
    try{
        let result = await f2();
        console.log(result);
        
    }catch(error){
        console.log(error);     
    }
};

console.log("Maarison");

checking();
