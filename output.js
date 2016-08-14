var questions = [
  "what is your name ?",
  "what is the city ?",
  "what is the state ?"
];

var answers = [];

function ask(i) {
  process.stdout.write(`\n\n${questions[i]}`);
  process.stdout.write(" > ");
}

process.stdin.on('data', function(data) {
  answers.push(data.toString().trim());
  if(answers.length < questions.length)
    ask(answers.length);
  else
    process.exit();
  //process.stdout.write('\n' +  data.toString().trim() + '\n');
});

process.on('exit', function() {
  process.stdout.write("\n\n\n ");
  process.stdout.write(`Go ${answers[1]} ${answers[0]} ${answers[2]} late`);
  process.stdout.write("\n\n\n ");
});

ask(0);
