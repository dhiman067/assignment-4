function findingBadData(arrayOfNumbers){
    
    let count = 0;
    for(let i=0; i<arrayOfNumbers.length; i++){
        const element = arrayOfNumbers[i];
        if(typeof element !== 'number'){
            return 'plz enter numbers'
        }
        else if(element<0){
          count = count+1;          
        }
    }
    return count;
}

const arrayOfNumbers = [];
const result = findingBadData(arrayOfNumbers);
console.log(result);