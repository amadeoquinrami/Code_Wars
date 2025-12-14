//You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

//Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the example
                //code war solution 1

                function likes(names) {
  // TODO
    const count = names.length;
  if (count === 0) {
    return "no one likes this";
  }
  else if  (count === 1) {
    return names[0] + " likes this";
  } 
  else if (count === 2) {
    return names[0] + " and " + names[1] + " like this";
  }
  else if (count === 3) {
    return names[0] + ", " + names[1] + " and " + names[2] + " like this"; 
  }
  else {
    const othersCount = count -2;
    // creating another const to compare was a bit tricky due to the fact that I did not think it would be able to work 
    // when placed here. I only recalled it was able to work because it is within the scope.
    return names[0] + ", " + names[1] + " and " + othersCount + " others like this";
  }
}
// this Paticular problems was a bit difficult to grasp only because there was 
// a lot of checks "else if" I had to grab. 