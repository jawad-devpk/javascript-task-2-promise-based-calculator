

let num1 = parseInt(prompt("Enter Number 1"));
let num2 = parseInt(prompt("Enter Number 2"));
let operation = prompt("Operation :-  (   +    -    *    /  )     ")

function computeWithPromise(num1, num2, operation){
    return new Promise((resolve, reject)=>{
        if(operation === "+"){ 
            resolve(num1 + num2)
        } 
        else if(operation === "-"){
            resolve(num1 - num2) 
        } 
        else if(operation === "*"){
            resolve (num1 * num2)
        }
        else if(operation == "/"){
            if(num2  == 0){
                reject("reject with an appropriate error message")
            } else{
                resolve(num1 / num2)
            }
        }
        else{
            reject("Invalid Operation")
        }
    });
};

computeWithPromise(num1 , num2, operation)
     .then((result)=>{
   console.log(`The result of ${num1} ${operation} ${num2} is = ${result}`)
})
.catch((error)=>{
    console.log( error)
})

computeWithPromise(num1, num2 , operation)
.then((result2)=>{
    if(result2 < 0){
        console.log("The result is negative")
    } else if(result2 >= 0 && result2 <= 100){
        console.log("The result is moderate")
    } else if(result2 > 100){
        console.log("Wow, that’s a large result!")
    }
})

.catch((error)=>{
    console.log(error)
})
