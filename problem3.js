function isLGSeven(num){
    const subsTracTion = (num-7);
    if(typeof num != 'number'){
        return 'plz enter a number';
    }
    else if(subsTracTion<7){
        return subsTracTion;
    }
    else{
        return num*2;
    }
}

const result = isLGSeven();
console.log(result);