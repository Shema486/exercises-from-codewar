function alphabetWar(fight) {
  const leftSide = { w: 4, p: 3, b: 2, s: 1 };
  const rightSide = { m: 4, q: 3, d: 2, z: 1 };
  let leftscore = 0;
  let rightscore = 0;
​
  for (let i = 0; i < fight.length; i++) {
    const char = fight[i];
    if (leftSide[char]) {
      leftscore += leftSide[char];
    } else if (rightSide[char]) {
      rightscore += rightSide[char];
    }
    // else: neutral letter, ignored
  }
​
  if (leftscore > rightscore) {
    return "Left side wins!";
  } else if (rightscore > leftscore) {
    return "Right side wins!";
  } else {
    return "Let's fight again!";
  }
}
​