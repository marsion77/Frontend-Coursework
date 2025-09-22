function f1(){
    return new Promise((resolve, reject)=>{

        let there = true;
        if(there){
            resolve("Mate Its There")
        }else{
            reject("Mate Its Not There")
        }

    })
}


f1()
.then(msg=>{
    console.log(msg);   
})
.catch(error=>{
    console.log(error);
    
})