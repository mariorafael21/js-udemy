// decimal oara binario

function dec2Bin(decNumber){
    var restStack = [],
    restStack,
    binaryString = ''

    while(decNumber > 0){
        rest = Math.floor(decNumber % 2)
        restStack.push(rest)
        decNumber = Math.floor(decNumber / 2)
    }

    while(restStack.length > 0){
        binaryString += restStack.pop().toString()
    }
    return binaryString
}

console.log(dec2Bin(23))