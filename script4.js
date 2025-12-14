//Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

//Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

//If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

function order(words){
  // ...
  if (words === "")
     return "";
    return words.split(' ').sort((a, b)=> { // learned about the chaining method, I knew I had to utilize theses methods and I decided to use the split because it breaks it down. then the sort goes through and sorts with the stored variables. 
      const numA = a.match (/\d/)[0];//regex "/\d/" finds all digits and "[0" is telling it where to begin to find.
      
      const numB = b.match(/\d/)[0];
      return numA - numB;
    })
  .join(" ");
  
    }
    //Working with this problem was difficult because I know I had to utulize methods. 
    // Knowing that I had to utilize methods the next part was, Which method do I use and which one do I do first.
    // I started first by writing an if statement because I would need to have conditionals. 
    // the first conditonal is to check if the string is empty to avoid errors if it is empty to return.
    // after the conditonal if there is words then it would travel to the next part of the scope where I knew where I had to impliment a method.
    // doing reserch I decided to use the split method because it breaks up the string into words.
    // .split(" ") helped with doing that and then after the sort() helps me sort it individually. 
    // the join made it go back in a string. it was all a pattern. 
    //one thing that I have to remember is learning what would be the best way to start and for this paticualr problem 
    // I had to break it down and piece it together in the end. 



