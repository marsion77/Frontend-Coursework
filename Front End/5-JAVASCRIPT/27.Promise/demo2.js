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


async function check() {
    try{
        let a = await f1();
        console.log(a);
    }catch(error){
        console.log(error);
        
    }
}

check();