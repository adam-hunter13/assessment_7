function pangrams(s) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let regex = /\s/g;
    let lowercase = s.toLowerCase().replace(regex, "");
   
    for(let i = 0; i < alphabet.length; i++){
     if(lowercase.indexOf(alphabet[i]) === -1){
       return "not pangram";
     }
    }
   
   return "pangram";
 }

 console.log(pangrams("The quick brown fox jumps over the lazy dog")) //Sentence test
 console.log(pangrams("abcdefghijklmnopqrstuvwxyz")) //alphabet test
 console.log(pangrams("abcdefghijklmnopqrstuvwxy")) //alphabet test without "z"
 console.log(pangrams("a b c d e f g h i j k l m n o p q r s t u v w x y z")) // alphabet test with spaces bewteen letters



 function findLongestWordLength(str) {
    let words = str.split(' ');
    let maxLength = 0;
  
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > maxLength) {
        maxLength = words[i].length;
      }
    }
    return maxLength;
  }
  
  
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog")); //should return 6
console.log(findLongestWordLength("The longest word is the second word in here")); //should return 7