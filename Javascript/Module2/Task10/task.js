const numCandidates = parseInt(prompt("Enter the number of candidates:"), 10);
const candidates = [];

for (let i = 0; i < numCandidates; i++) {
    const name = prompt(`Enter the name for candidate ${i + 1}:`);
    candidates.push({ name: name, votes: 0 });
}

const numVoters = parseInt(prompt("Enter the number of voters:"), 10);

for (let i = 0; i < numVoters; i++) {
    const vote = prompt(`Voter ${i + 1}, who do you vote for? (Leave empty for no vote)`);

    if (vote) {
        const candidate = candidates.find(c => c.name.toLowerCase() === vote.toLowerCase());
        if (candidate) {
            candidate.votes++;
        } else {
            alert("No such candidate. Vote not counted.");
        }
    } else {
        console.log(`Voter ${i + 1} cast an empty vote.`);
    }
}

candidates.sort((a, b) => b.votes - a.votes);

const winner = candidates[0];

console.log(`The winner is ${winner.name} with ${winner.votes} votes.`);
console.log("Results:");
candidates.forEach(c => {
    console.log(`${c.name}: ${c.votes} votes`);
});