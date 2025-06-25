function squareSum(numbers){
return numbers.map(a=>Math.pow(a,2)).reduce((a,b)=>a+b,0)
}