//Return the number (count) of vowels in the given string.
//We will consider a, e, i, o, u as vowels for this Kata (but not y).
//The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  let count = 0; // had to create a count 
  const vowels = 'aeiou' // the best way to find the missing vowel is to decalare a variable string.
  for (let i = 0; i < str.length; i++) { //for loop because it goes through the index and it goes through every string charcter and 
    if(vowels.includes(str[i])) { // since i declared the vowels variable using the includes method checks for the vowels within the str starting at 0.
        count++ // this makes sure it goes throug everyone to came sure it checks for the vowels.
    }
  }
  return count;
}
                    // intial thought process
            // 1) I know from the prompt that the charcters will all be lower cases with only spaces and letters. 
            // 2) with that information I understand that i need to write a conditional that helps with grabbing the vowels
            // 3) I also need it to RETURN the vowels that it catches. 
            // 4) since I have to check the string I need to loop through it.