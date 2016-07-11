var questions = [{
    question: "What is Cersei Lannister's daughter's name?",
    answer: "myrcella"
  }, {
    question: "What is the name of the stronghold of House Lannister?",
    answer: "casterly rock"
  }, {
    question: "What is the name of Arya Stark's sword?",
    answer: "needle"
  }, {
    question: "What type of bird is present on the banner of House Arryn?",
    answer: "falcon"
  }, {
    question: "Who is Sansa Stark married to first?",
    answer: "tyrion"
  }, {
    question: "What is the name of Jon Snow's Valyrian steel sword?",
    answer: "longclaw"
  }, {
    question: "How many Direwolves do the Starks find?",
    answer: 6
  }, {
    question: "What is the name of Eddard Stark youngest child?",
    answer: "rickon"
  }, {
    question: "R + L =",
    answer: "j"
  }, {
    question: "What is the name of Jon Snow's Direwolf?",
    answer: "ghost"
  }

]

for (i = 0; i < questions.length; i++) {
  q = questions[i].question
  document.getElementById('question' + [i]).textContent = q
}

function testResults() {
  var correct = 0;
  var incorrect = 0;
  for (i = 0; i < questions.length; i++) {
    var answer = questions[i].answer
    var guess = document.getElementById('answer' + [i]).value
    var questionSpot = document.getElementById('question' + [i])
    if (answer == guess) {
      questionSpot.className = 'correct'
      correct++
    } else {
      questionSpot.className = 'incorrect'
      incorrect++
    }
  }
  document.getElementById('correct').textContent = correct
  document.getElementById('incorrect').textContent = incorrect
}