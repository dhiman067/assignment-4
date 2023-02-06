function gemsToDiamond(firstFriendGems,secondFriendGems,thirdFriendGems){
    
    const firstFriendGemsPower = 21;
    const secondFriendGemsPower =32;
    const thirdFriendGemsPower = 43;

    const toTal = (firstFriendGemsPower*firstFriendGems)+(secondFriendGemsPower*secondFriendGems)+(thirdFriendGemsPower*thirdFriendGems);

    if(typeof firstFriendGems !== 'number' || typeof secondFriendGems !== 'number' || typeof thirdFriendGems !== 'number'){
        return 'warning: plz enter numbers'
    }
    else if(toTal > 1000*2){
        return toTal-2000;
    }
    else{
        return toTal;
    }
}
const toTalDiamondCount = gemsToDiamond();
console.log(toTalDiamondCount);