function checkVowel(string, position) {
  const vowel = ["a", "u", "e", "o", "i"];
  if(position <0 || position >=string.length){
    return false
  }
  return vowel.includes(string[position].toLowerCase())
   
  
}
console.log(checkVowel("cat", 2));
​