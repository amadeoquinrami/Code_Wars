//Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
function evenOrOdd(number) {
    if(number % 2 == 0) { // 1) I knew I had to use a modulus (%)
      return "Even";
} else {
  return "Odd";
}
  }
  //1) knowing that I had to use a modulus, my point of confustion was if I put a return within the line 2. 
  // I have trouble deciding when to add the return. 
  // the modulus is set equal to zero because when it is divided it has. no remainder if it divides evenly 
  // the modulus is odd if there is a remainder and the out put is 1. 