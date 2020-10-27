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
