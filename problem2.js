// const stRing = 'boy';

// console.log(stRing.length);

function evenOdd(str){
    const totalChracters = str.length;
    if(typeof str !== 'string'){
        console.log("warning: plz enter a string");
    }
    else if(totalChracters % 2 == 0){
        console.log('even');
    }
    else{
        console.log('odd');
    }
}
const result = evenOdd();

