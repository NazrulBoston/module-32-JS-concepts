// programming language a onek jinis ase kokhono true a kokhono false hisebe behave kare


/**
 *  Truthy:
 * 1. true
 * 2. any number (positive, negative) will be except 0
 * 3. any string truthy except empty string. empty sting with space and just koma or dot string 
 * would be truthy even sring ar vitore '0' and 'false' dile truthy hobe
 * . '0' 'false'
 * 5. {} (empty object truthy and vitore kisu thakle to truthy hobei )
 * 6. [] (empty array truthy and vitore kisu thakle to truthy hobei)
 * 
 * 
 * Falsy: 
 * 1. false
 * 2. 0
 * 3. '' (empty string)
 * 4. undefined
 * 5. null
 * 
 */


const x = '0';
if(x){
    console.log('value of x is truthy');
}else{
    console.log('value of x is falsy')
}

// check falsy 
const y = undefined;
if(!y){
    console.log('Value is falsy')
}
// ! aita mane value tar type take change kare fela. if ar por j condition dea hoese bujano hoese j
// just y to falsy, falsy hole to vitore dhukbe na (!y) dear por sorto jodi true hobe then vitore dhukbe 





// check true
const z = '0';
if(!!x){
    console.log('Value is truthy')
}

// !! double dear karon value take akbar negative niba and negative ta ke abr jodi change karo tahole
// positive hobe