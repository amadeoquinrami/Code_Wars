//In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
function filter_list(l) {
  // Return a new array with the strings filtered out
  return l.filter(function(item) { // this filter method removes if the function returns false
    return typeof item === 'number'; //typeof returns the type of value . since i set it equal to number it will come out to the number type 
  });
}
// 1) when working on this problem my way of thinking of is create the filter function because it returns the array not just a single one.
// 2) The problem comes when I forget that I need to utilize the return.  