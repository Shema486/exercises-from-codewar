function printerError(s) {
    // your code'
  let letter = ['a','b','c','d','e','f','g','h','i','j','k','l','m'];
  let count =0;
  for(let i =0;i<s.length;i++){
    if(!letter.includes(s[i])){
      count++;
    }
  }
    return `${count}/${s.length}`;
}