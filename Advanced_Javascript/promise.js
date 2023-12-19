//What is callback hell ?

/* Callback hell is that we have multiple callback one, after the other so it will make the code complicated */

//What is Inversion of Control ?

/* Inversion of control is that we are giving full control of the function callback
so we are 
not sure whether callback will be called multiple times, whether it will happen twice  */ 

//What is promise ?

/* Promise is an object which is eventually completion or failure of an asynchronous operation */

//Advantages of Promise

/* Promise chaining, we will oversome the issue of the callback hell by doing .then and also it will solve the issue of inversion of control */ 

//Syntax:

/*const cart = ["shoes","racket", "mat"]; 

createOrder(cart)
.then(function (orderId) {
    return processToPaymet(orderId)
})
.then (function(paymentInfo){
    return showOrderSummary(paymentInfo);
});*/

//Creation of Promise

const cart = ["shoes","racket", "mat"]; 

createOrder(cart)
.then(function(orderId){
    console.log('orderId', orderId); //12345
    return orderId;
})
.catch(function (err) {
    console.log('message', err.message);
})
.then(function(orderId){
    return proceedToPayment(orderId);
})
.then(function(paymentInfo){
    console.log('paymentInfo', paymentInfo); 
    //return paymentInfo(paymentInfo);
})
.catch(function (err) {
    console.log('message', err.message);
});


function createOrder (){
    const pr = new Promise(function (resolve,reject){
        if(!validateCart(cart)){
            const err = new Error("Cart is not valid");
            reject(err);
        }
        //logic for createOrder
        const orderId = "12345";
        if(orderId){
            setTimeout(function () {
                resolve(orderId);
            }, 5000)
            
        }
    })

    return pr;
}

function proceedToPayment (orderId){
    return new Promise(function (resolve,reject){
       resolve(`payment successful ${orderId} `);
    })
}

// function paymentInfo (paymentInfo){
//     console.log('paymentInfo', paymentInfo);
//     return new Promise(function (resolve,reject){
//        resolve("payment successful");
//     })
// }

function validateCart(cart){
    return true;
}

