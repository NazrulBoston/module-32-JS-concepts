/**
 *  8 ways to get undefined
 1. variable that is not initialized will give undefined
 2. function with no return that will give undefined
 3. parameter that is not passed will be undefined
 4. if return has nothing on the right side will return undefined
 5. property that doesn't exists on an object will give you undefined
 6. accessing array elements outside of the index range
 7. deleting an elements inside an array
 8. set a value directly to undefined

 */

// no: 1 
// let die kono variable declare karle but ar kono man dile na 

let first;
// console.log(first)



//no: 2
// akhane function declare kara hoese but return kara hoinai

function second(a, b) {
    const total = a + b;

}

const result = second(3, 5);
// console.log(result)



// no: 3
// abar jodi kono function ar parameter ase but amra parameter dilam na. niche function k call
// karar somoi sobgulo parameter dia hoini tai prothom 2ta value dibe then baki 2ta undefined dekhabe

function third(a, b, c, d) {
    const total = a + b + c + d;
    console.log(a, b, c, d)
}

// third(1, 4)



// no: 5
//akhane akta function ase noNegative() function k call karar somoi jokhon parameter ar 
// value jodi minus number dea hoi tokhon undefined dekhabe
function noNegative(a, b) {
    if (a < 0 || b < 0) {
        return;
    }
    return a + b;

}

const total = noNegative(-3, 5)
// console.log(total)




// no: 5 
// akhon dhor amdr akta object ase but object ar property exit kare na imean jodi kono property
//object ar moddhe na thake by the default undefined dekhabe

const fifth = { id: 2, name: 'Ponchom', age: 34 }
// console.log(fifth.age, fifth.salary)




// no: 6
// dhori amr akta array ase and oi array theke amra akta index access karte chassi but oi index ta nai
// then undefined dekhabe

const sixth = [2, 5, 7, 34,];
// console.log(sixth[0],sixth[3],sixth[4], sixth[8])


// no: 7
// kono array theke akta element delete kare dile tokhon undefined dekhabe
// jodio array theke aivabe delete kara thik na delete karar jonno splice die karte paro
// aikhane 1 number index undefined dekhabe

const seventh = [2, 5, 7, 34,];
delete seventh[1];
// console.log(seventh[0],seventh[1],seventh[2], seventh[3])


// no: 8 
// value directly undefined set kare dia, aitao amder kara ucit na ar jonno amdr null use karbo

const eight = undefined;
// jemon amdr kono value nai, tumi jodi explicitly set karte chao then you should use null