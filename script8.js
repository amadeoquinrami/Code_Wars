//In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
function highAndLow(numbers){
  // ...
  const nums = numbers.split(' ').map(Number); // initall we split the string into an array then with the map method we transform it into numbers
  const highest = Math.max(... nums); // i had trouble here because I knew I can decalre variables I secound guess myself and do not usually set it equal to a method.
  const lowest = Math.min(... nums);// I had come to realize that I had to use spread operators "..." because it unpacks the arrays in indivdual values and if not it would combine it.
  return highest + ' ' + lowest;
}
                            // Initial thought process
                    // 1)  reading the problem I know that I do not have to convert it because they are numbers already.
                    // 2)  so I have to finish the function that uses the add or minus operators 
                    // 3) I need to compare the number and check to see how far way it is from zero and return the way it was given if it is a negative.
   // when doing this code I found out about other methods that help find the Math.max() high number and Math.min() number.                 