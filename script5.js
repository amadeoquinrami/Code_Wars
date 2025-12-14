//Implement a function that computes the difference between two lists. 
// The function should remove all occurrences of elements from the first list (a) that are present in the second list (b).
//  The order of elements in the first list should be preserved in the result.
const listA = [1,2,2,3];
const listB = [2,2,5,7];
function arrayDiff(listA, listB) {
  return listA.filter(function(item) {
    return !listB.includes(item);// include is incharge of keeping an element or removing if true or false. 
});
}
console.log(arrayDiff(listA, listB))


                // my inital process of solving this.
        // 1) I understand that I am comparing the two list(array)
        // 2) When I do compare the list b then I need to filter out the ELEMENTS AND compare it to list a.
    // finding the next method to use was a bit tedius because. 
// However, when it comes to certain methos such as the .filter method i had to be remindided that the 
//RETURN needs to be on the same line as the .filter method because we need it to return that item and see filtering from listA.
// once we return that items we compare it the listB. 
// learning to use the .includes method however; we are comparing to see if list b does not match "!".  