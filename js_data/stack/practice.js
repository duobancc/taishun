function divideBy2(decNumber) {
  let remStack = new Stack(),
    rem,
    binaryString = '';
  while (decNumber > 0) { //{1} 
    rem = Math.floor(decNumber % 2); //{2} 
    remStack.push(rem); //{3} 
    decNumber = Math.floor(decNumber / 2); //{4} 
  }
  while (!remStack.isEmpty()) { //{5} 
    binaryString += remStack.pop().toString();
  }
  return binaryString;
}


function baseConverter(decNumber, base) {
  let remStack = new Stack(),
    rem,
    baseString = '',
    digits = '0123456789ABCDEF'; //{6} 
  while (decNumber > 0) {
    rem = Math.floor(decNumber % base);
    remStack.push(rem);
    decNumber = Math.floor(decNumber / base);
  }
  while (!remStack.isEmpty()) {
    baseString += digits[remStack.pop()]; //{7} 
  }
  return baseString;
}