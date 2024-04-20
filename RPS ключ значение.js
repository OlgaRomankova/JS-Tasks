const rps = (p1, p2) => {
    const rules = {
      'scissors': 'paper',
      'rock': 'scissors',
      'paper': 'rock'
    };
    return rules[p1] === p2 ? 'Player 1 won!' : p1 === p2 ? 'Draw!' : 'Player 2 won!';
  };
console.log(rps("scissors", "paper"))  
console.log(rps("scissors", "rock"))   
console.log(rps("paper", "scissors"))  
console.log(rps("rock", "scissors"))   
console.log(rps("paper", "rock"))  
console.log(rps("rock", "paper"))
console.log(rps("rock", "rock"))   
console.log(rps("scissors", "scissors"))  
console.log(rps("paper", "paper"))