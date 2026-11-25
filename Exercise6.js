function challenge6(votes) {
  if (votes.length === 0) {
    return "There is not vote yet";
  }
  let countA = 0;
  let countB = 0;
  let countC = 0;
  for (let i = 0; i < votes.length; i++) {
    if (votes[i] === 'A') {
      countA++;
    } else if (votes[i] === 'B') {
      countB++;
    } else if (votes[i] === 'C') {
      countC++;
    }
  }
  let maxVotes = countA;
  if (countB > maxVotes) {
    maxVotes = countB;
  }
  if (countC > maxVotes) {
    maxVotes = countC;
  }
  let winners = [];
  if (countA === maxVotes) {
    winners.push('A');
  }
  if (countB === maxVotes) {
    winners.push('B');
  }
  if (countC === maxVotes) {
    winners.push('C');
  }
  if (winners.length === 1) {
    return winners[0] + " is the winner";
  } else {
    return winners.join(" and ") + " are both winners";
  }
}
console.log(challenge6(['A', 'B', 'A', 'C', 'A']));
console.log(challenge6(['A', 'B', 'B', 'C', 'A']));
console.log(challenge6([]));
