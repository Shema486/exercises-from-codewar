function prod2sum(a, b, c, d) {
    // your code
  // (a² + b²)(c² + d²) = (ac - bd)² + (ad + bc)²
                 //  = (ac + bd)² + (ad - bc)²
​
  let x1 = a * c - b * d;
  let y1 = a * d + b * c;
​
  let x2 = a * c + b * d;
  let y2 = a * d - b * c;
  
  let p1 = [Math.abs(x1), Math.abs(y1)].sort((a, b) => a - b);
  let p2 = [Math.abs(x2), Math.abs(y2)].sort((a, b) => a - b);
  
  const pairs = [p1];
  if (p1[0] !== p2[0] || p1[1] !== p2[1]) {
    pairs.push(p2);
  }
​
  return pairs.sort((a, b) => a[0] - b[0]);
​
}