
function Voting(votes){
    let countA = 0, countB = 0, countC = 0;

    // Step 1: Count votes
    for(let i = 0; i < votes.length; i++){
        if(votes[i] == 'A'){
            countA++;
        }
        if(votes[i] == 'B'){
            countB++;
        }
        if(votes[i] == 'C'){
            countC++;
        }
    }

    // Step 2: Check if there are no votes
    if(votes.length == 0){
        return "There is not vote yet";
    }

    // Step 3: Find the highest number of votes
    let max = Math.max(countA, countB, countC);

    // Step 4: Find the winner(s)
    let winner = [];

    if(countA == max){
        winner.push('A');
    }
    if(countB == max){
        winner.push('B');
    }
    if(countC == max){
        winner.push('C');
    }

    // Step 5: Display the result
    if(winner.length == 1){
        return winner[0] + " is the winner";
    }
    else{
        return winner.join(" and ") + " are both winners";
    }
}

console.log(Voting(['A', 'B', 'A', 'C', 'A']));
console.log(Voting(['A', 'B', 'B', 'C', 'A']));
console.log(Voting([]));
