​
function splitAndAdd(arr, n) { 
  //base case exit condition
  if(n===0 || arr.length<=1)return arr;
  //split the array
  let mid =Math.floor(arr.length/2)
  let left=arr.slice(0,mid)
  let right=arr.slice(mid)
  //padding left array
  while (left.length < right.length){
    left.unshift(0)
  }
  //add corresponding element
  let newArray= right.map((val,i)=> val +left[i] )
  //Recursive call
 return splitAndAdd(newArray,n-1)
}