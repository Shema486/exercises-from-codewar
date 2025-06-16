function capitalize(s){
let evencaps= ''
let oddcaps=''
for(let i =0;i<s.length;i++){
  if(i%2===0){
    evencaps += s[i].toUpperCase()
    oddcaps += s[i].toLowerCase()
  }
  else {
    evencaps += s[i].toLowerCase()
    oddcaps += s[i].toUpperCase()
  }
}
   return [evencaps,oddcaps] 
};
​
// function capitalize(s) {
//   const chars = s.split('');
​
//   const evenCaps = chars
//     .map((char, i) => i % 2 === 0 ? char.toUpperCase() : char.toLowerCase())
//     .join('');
​
//   const oddCaps = chars
//     .map((char, i) => i % 2 !== 0 ? char.toUpperCase() : char.toLowerCase())
//     .join('');
​
//   return [evenCaps, oddCaps];
// }