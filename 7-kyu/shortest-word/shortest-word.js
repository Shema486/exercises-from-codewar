function findShort(s){
  const word =s.split(' ')
 const lengthof= word.map(a=>a.length)
return Math.min(...lengthof)
}