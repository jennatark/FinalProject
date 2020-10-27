//Things we need to do:
//javascript code to randomize workouts
//index page that shows title, instructions and list of all
var randRep = 0;
var randInt = 0;

function randExer() {
    var listExercise = ["Push-Ups" , "Sit-Ups", "Jumping Jacks", "Plank", "Side Plank", "V-Ups", "Burpees", "Lunges",
                      "Side Lunges", "High Knees", "Donkey Kicks", "Inchworm", "Tuck Jumps","Mountain Climber", "Wall Sit",
                      "Calf Raise", "Superman", "Arm Circles", "Russian Twist", "Bicycles", "Crunches", "Downward Dog",
                      "Single Leg Dead Lifts", "Sprints", "Pump Squats"];
    randInt = Math.floor(Math.random() * 25);
    randRep = Math.floor(Math.random() + 1 * 60);
    result = "Do " + listExercise[randInt] + " for " + randRep + " seconds";
    document.getElementById("result").innerHTML = result;

}
