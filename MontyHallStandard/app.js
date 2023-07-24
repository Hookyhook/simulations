console.log("Started simulation at " + new Date().toLocaleString())

let runs = 100000;

console.log("Number of runs: " + runs)


TestRun()

function TestRun() {
    let wins = 0
    console.log("Starting Run with changing door at " + new Date().toLocaleString())
    for (let i = 0; i < runs; i++) {
        if (runSimulation(true)) {
            wins++;
        }
    }
    console.log("Finished Run with changing doors" + " Wins: " + wins + " Losses: " + (runs - wins) + " Winrate: " + (wins / runs * 100) + "% at " + new Date().toLocaleString())
    wins = 0
    console.log("Starting Run without changing door at " + new Date().toLocaleString())
    for (let i = 0; i < runs; i++) {
        if (runSimulation(false)) {
            wins++;
        }
    }
    console.log("Finished Run without changing doors" + " Wins: " + wins + " Losses: " + (runs - wins) + " Winrate: " + (wins / runs * 100) + "% at " + new Date().toLocaleString())
}


function runSimulation(changeDoor) {
    let doors = ["win", "lose", "lose"]
    for (let index = 0; index < 10; index++) {
        doors.sort(() => 0.5 - Math.random());
      }
    let Choice = Math.floor(Math.random() * 3)
    for (let i = 0; i < 3; i++) {
        if (i != Choice && doors[i] == "lose") {
            doors.splice(i, 1)
            break
        }
    }
    if (changeDoor) {
        for (let i = 0; i < 2; i++) {
            if (i != Choice) {
                Choice = i
                break
            }
        }
    }
    if (doors[Choice] == "win") {
        return true;
    } else {
        return false;
    }
}
