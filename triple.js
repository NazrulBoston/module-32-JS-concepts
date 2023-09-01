const first = 2;
const second = '2'

if(first === second){
    console.log('Values are equal');
}
else{
    console.log('Values are not equal')
}



// non primitives array othoba object jodi same value take reference hisebe use kare then
// values are equla hobe otherwise equal hobe na 


// 2 ta alada value declare kara hoese, values are not equal
// const third = [];
// const fourth = [];


//same value take reference kara hoese, 2tar value same
const third = [];
const fourth = third;

if( third === fourth){
    console.log('Values are equal')
}else{
    console.log('Values are not equal')
}
 