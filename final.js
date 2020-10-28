//Things we need to do:
//javascript code to randomize workouts
//index page that shows title, instructions and list of all
function randExer() {
    var listExercise = ["Push-Ups" , "Sit-Ups", "Jumping Jacks", " A Plank", " A Side Plank", "V-Ups", "Burpees", "Lunges",
                      "Side Lunges", "High Knees", "Donkey Kicks", "Inchworms", "Tuck Jumps","Mountain Climbers", "A Wall Sit",
                      "Calf Raise", "Supermans", "Arm Circles", "Russian Twist", "Bicycles", "Crunches", "Downward Dog",
                      "Single Leg Dead Lifts", "Sprints", "Pump Squats"];
    var repsNums = ["10","15","20","25","30","35","40","45","50","55","60","65","70","75","80","85","90"];
    var randInt = Math.floor(Math.random() * 25);
    var randRep = Math.floor(Math.random() * 17);
    var result = "Do " + listExercise[randInt] + " for " + repsNums[randRep] + " seconds";
    document.getElementById("result").innerHTML = result;
}

function randMotiv() {
  var motivations = ["Your limitation - it's only your imagination.", "Push yourself, because no one else is going to do it for you.",
                    "Do something today that your future self will thank you for.", "It's going to be hard, but hard does not mean impossible.",
                    "Sometimes we're tested not to show our weaknesses, but to discover our strengths.",
                    "Today I will do what others won't, so tomorrow I can accomplish what others can't",
                    "No matter how slow you go, you are still lapping everybody on the couch.",
                    "The difference between the impossible and the possible lies in a person's determination.",
                    "To give anything less than your best is to sacrifice the gift.",
                    "You're only one workout away from a good mood.",
                    "The difference between try and triumph is a little 'umph'.",
                    "Don't count the days, make the days count.",
                    "Nothing will work unless you do.",
                    "When you feel like quitting, think about why you started.",
                    "Don't let the scale define you. Be active, be healthy, be happy."];
  var randomNum = Math.floor(Math.random() * 15);
  var quote = motivations[randomNum];
  document.getElementById("motivational").innerHTML = quote;
}