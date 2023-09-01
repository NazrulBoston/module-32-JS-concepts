// non primitives data type object and array ar value jokhon notun kare assign na 
// kare partially change kara hoi tokhon tara same value reference kare


// let hello = {id: 'web developer'}
// let hi = hello;
// console.log(hi, hello)

//upore akhane hello ar ar value hi variable a rakha hoese, akhane hi and hello 
// ar output same asbe





// akhon jodi abr only hi ar value partially change kara hoi tokhon abr duitar man 
// e change hoe jabe


let hello = {id: 'web developer'}
let hi = hello;
hi.id = 'software developer'
// hello.id = 'software developer'
console.log(hi, hello)
// akhane hi or hello j kono value partially assign karle oi same value both jaigai dekhabe imean reference karbe
// akhon akhane abr both software output dekhabe bcs hi ar man partially change kara hoese



// abr jodi q ar value notun kare assign kara hoi then tokhon r value reference karbe 
let x = {id: 'teacher'}
let y = x;
y = {id: 'doctor'}
console.log(x,y)