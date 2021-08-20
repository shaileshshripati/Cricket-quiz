// let's begin

var readlineSync = require("readline-sync")
var chalk = require("chalk")

var username = readlineSync.question("Hey! May I know your name: ")

console.log("Hi "+chalk.yellow(username)+" Let's check how much you know about cricket")

var score = 0
var count = 0
var count1 = 0

var questions = [
  {
    question: " Rohit Sharma is also known as  \n [A] Hitman [B] Cool man [C] Angry man [D] Gentleman \n",
    answer: "A"
  },
  {
    question: " Where did cricket originate? \n  [A] Sri Lanka [B] England [C] India [D] Australia \n",
    answer: "B"
  },
  {
    question: " Captain of Indian team     \n [A] Rohit [B] Virat [C] Raina [D] Dhoni \n",
    answer: "B"
  },
  {
    question: " What do you call a referee in cricket? \n [A] An umpire [B] A vampire [C] A cricketrefree [D] A umpirerefree \n",
    answer: "A"
  },
  {
    question: " Best finisher for india    \n  [A] Rohit [B] Virat [C] Rahul [D] Dhoni \n",
    answer: "D"
  },
  {
    question: " What does LBW stand for?   \n   [A] Long Ball Wide  [B] Leg Beyond Width  [C] Leg Before Wicket  [D] Long Ball Wicket \n",
    answer: "C"
  },
  {
    question: " Best Fielder for India   \n [A] Bumrah [B] Mayank  [C] Jadeja  [D] Deepak \n",
    answer: "C"
  },
  {
    question: " Biggest league in India   \n [A] MPL  [B] IPL [C] PCL [D] KIP \n",
    answer: "B"
  },
  {
    question: " What are the small pieces of wood on top of the stumps called?     \n   [A] Bails [B] Sticks [C] Stumpettes [D] Toothpicks \n",
    answer: "A"
  },
  {
    question: " India won 1st World Cup on     \n [A] 1984 [B] 1985 [C] 1986 [D] 1983 \n",
    answer: "D"
  }
]

// high scroces
var highscore =
  {
    name: "Henry",
    score: 4
  }


function play(question,answer)
{
  var useranswer = readlineSync.question((i+1)+"."+question)

  if(useranswer.toUpperCase() == answer)
  {
    console.log(chalk.green("You're right"))
    score = score + 1
  }
  else
  {
    console.log(chalk.red("You're wrong"))
  }
  console.log("Current Score: "+score)
  console.log("------------------")
  
  
  if(score == 4 && count == 0)
  {
    console.log(chalk.bgCyan("Hippy! You are in level 2"))
    console.log("-----------------")
    count = count + 1
  }
  if(score == 7 && count1 == 0)
  {
    console.log(chalk.bgCyan("Congrats! , You entered in level 3"))
    count1 = count1 + 1
    console.log("-------------------")
  }
}

for (var i=0;i<questions.length;i++)
{
  play(questions[i].question,questions[i].answer)
}

console.log((chalk.bgCyan("Final Score:")) + score)
console.log("---------------")
console.log("High score")
  console.log("Name: "+highscore.name)
  console.log("Score: "+highscore.score)
  console.log("---------------")

if(score > highscore.score)
{
console.log((chalk.green("Hey Congrats"))," you had beaten the high score send a screenshot. We will update it")
}


