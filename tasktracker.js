const seatingChart = [
    ['Kristen', 'Erik', 'Namita'],
    ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
    ['Yuma', 'Sakura', 'Jack', 'Erika']
]

for (let i = 0; i < seatingChart.length; i++) {
    const row = seatingChart[i];
    console.log(`ROW #${i + 1}`)
    for (let j = 0; j < row.length; j++) {
        console.log(row[j])
    }
}

//i = start at first item in array

//seating chart of i is the first line, next time through is the second line, then the third line

//save seatingChart[i] as a row --> const row

//j is less than row

//add "ROW #" before each row

//nested arrays practice

//------------------------while loop
//easy to make infinite loop if you dont pay attention


let num = 0;
while (num < 10) {
    console.log(num);
    num++;
}

//initial value
//while some part/ a condition is true
//do this and add one each time

//for loops are preferred for set # of iterations

//while loop is more useful when things are truely variables - user inputs, game loops
//continue looping as long as nobody has won the game

const SECRET = "BabyHippo";

//ask user to enter secret code and as long as it isn't right repeats the question

let guess = prompt("enter the secret code...");
while (guess !== SECRET) {
    guess = prompt("enter the secret code...");
}

console.log("CONGRATS")


//break keyword

let input = prompt("Hey, say something!")
while (true) {
    input = prompt(input);
    if(input.toLowerCase() === "stop copying me") {
        break;
    }
}
console.log("OK YOU WIN")

//

for (let i = 0; i <1000; i++) {
    console.log(i);
    if(i === 100) break;
}

//