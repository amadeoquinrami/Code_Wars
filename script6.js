//Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.
//You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
//The array will always contain letters in only one case.

function findMissingLetter(array)
{ for(let i = 0; i < array.length -1; i++) { // i need it to loop through
    const currentArray = array[i].charCodeAt(0);
    const nextArray = array[i + 1].charCodeAt(0); // add by one in the the index
    if(nextArray - currentArray !== 1) { // this ensure that it is neighbors in the sequence 
        const isMissingArray = currentArray + 1;
        return  String.fromCharCode(isMissingArray);
    }
}
}

                         // initial thought of solving
        // 1) I understand that I have to output the missing piece from the arrray. 
        // 2) I know that it is guareented that the only 1 letter will be missing. 
        // 3) the array will contain letters in the same case so not Capital and lowercase within the same array.
        // 4) The thoughts is I need to create a method that knows the missing order of a sequence. 
        // if it is missing something I need it to out put the 1 missing pieces.
                        // learning
// when doing this problem I found out that there is a unicode that every letter whether Upper case or lower case is assigned.
// with that new information and understanding it makes it clear that javascript understands the order of the alphabet due to the character code.
// New method that i discoverd with this problem is that .fromCharCode does the opposite of .charCodeAt which turns turns the charcter into a number. 
