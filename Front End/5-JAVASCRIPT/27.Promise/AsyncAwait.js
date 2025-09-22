const a = new Promise((resolve,reject)=>{
setTimeout(()=>{
    let here = true;
    if(here){
        resolve("Its Here Man");
    }else{
        reject("Its Not Here Man");
    }
},3000);
});

async function check() {
    
    try{
        let b = await a
        console.log(b);
        
    }catch(error){
        console.log(error);
        
    }
    
}

check()