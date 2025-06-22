function average(scores) {
    // code to calculate the average
  const sum = (scores.reduce((a,b)=> a+b))/scores.length
  return Math.round(sum)
}