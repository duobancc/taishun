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

/*平衡圆括号*/
function isBracketBalanced(str) {
	/*
		@str:圆括号字符串，比如
			"()()"  "(()()())"  平衡
			"(()"  非平衡, 左括号较多
			"(()))))" 非平衡，右括号较多
	*/
	const pattern = /^(\(|\))*$/;
	if(!pattern.test(str)) {
		throw new Error("Your parameter can only include () character");
	}
  debugger
	const stack = new Stack();
	for(let i=0; i<str.length; ++i) {
		if(str[i] === "(") {
			stack.push("(");
		}else {
			if(!stack.pop()){
				return false;
			}
		}
	}
 
	return stack.isEmpty();
}
 
console.log(isBracketBalanced("()()")); //true
// console.log(isBracketBalanced("()())")); // false
// console.log(isBracketBalanced("((()")); // false
// console.log(isBracketBalanced("fafa"));  // throw error