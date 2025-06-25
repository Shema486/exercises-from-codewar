function zipvalidate(postcode) {
  const Not =['0','5','7','8','9'];
if(postcode.length !==6 || isNaN(postcode)){
  return false
}
  if(Not.includes(postcode[0])){
    return false
  }
  return true
}