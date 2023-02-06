function mindGame(inputNum){
    if(typeof inputNum !== 'number'){
        return 'enter a number'
    }
    const value = (((inputNum*3)+10)/2)-5;
    return value;
}
const result= mindGame();
console.log(result);