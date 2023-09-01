// console.log('Hello world');

// const fs = require('fs');
// fs.writeFileSync('hello.txt','hello from Node JS');



const printc = () =>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log('c')
            resolve()
        },3000)
    });
    
}

const printd = () =>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log('d')
            resolve()
        },0)
    });
    
}

async function print(){
    console.log('a');
    console.log('b')
    await printc()
    await printd()
    console.log('e')
}

print()


