var winner = "";
var userP = "";
var compP = "";
var compInput;
var userInput;

//INPUT
function input(id) {
    userInput = parseInt(prompt("Type 1 for Rock, 2 for Paper and 3 for Scissors"));
    if (id == "compute") { //CHECK THE BUTTONS ID
        compInput = (Math.floor(Math.random() * 3) + 1); //PLAY WITH COMPUTER RANDOM CHOICE
        pvc("PLAYER", "COMPUTER");

    } else {
        compInput = parseInt(prompt("Type 1 for Rock, 2 for Paper and 3 for Scissors"));
        pvc("PLAYER 1", "PLAYER 2");
    }
}

//COMPUTE
function pvc(p1, p2) {

    this.p1 = p1;
    this.p2 = p2;

    //1. Rock 2. Paper 3. Scissors

    if (userInput == 1) {
        userP = "1 ROCK";
    } else if (userInput == 2) {
        userP = "2 PAPER";
    } else if (userInput == 3) {
        userP = "3 SCISSORS";
    }

    if (compInput == 1) {
        compP = "1 ROCK";
    } else if (compInput == 2) {
        compP = "2 PAPER";
    } else if (compInput == 3) {
        compP = "3 SCISSORS";
    }

    if (compInput == userInput) {
        winner = "DRAW";
        printC(p1, p2);

    } else if (compInput == 1 && userInput == 2) {
        winner = p1;  //"PLAYER";
        printC(p1, p2);

    } else if (compInput == 1 && userInput == 3) {
        winner = p2;  //"COMPUTER";
        printC(p1, p2);

    } else if (compInput == 2 && userInput == 1) {
        winner = p2;  //"COMPUTER";
        printC(p1, p2);

    } else if (compInput == 2 && userInput == 3) {
        winner = p1; //"PLAYER";
        printC(p1, p2);

    } else if (compInput == 3 && userInput == 1) {
        winner = p1;  //"PLAYER";
        printC(p1, p2);

    } else if (compInput == 3 && userInput == 2) {
        winner = p2;  //"COMPUTER";
        printC(p1, p2);

    } else {
        document.getElementById("inst").innerHTML = "RESULT";
        document.getElementById("plc").innerHTML = "WRONG ENTRY, TRY AGAIN";
        document.getElementById("cmc").innerHTML = "";
        document.getElementById("decision").innerHTML = "";
    }
}
//PRINT THE RESULT
function printC(p1, p2) {

    document.getElementById("inst").innerHTML = "RESULT";
    document.getElementById("plc").innerHTML = p1 + " choice: " + userP;
    document.getElementById("cmc").innerHTML = p2 + " choice: " + compP;
    document.getElementById("decision").innerHTML = "The winner is: " + winner;
}

//---------------------QUESTION 3 -------------------------------
function q3() {

    var myArray = [];
    var myNumber = document.getElementById("numberToCheck").value
    var count = 0;
    for (i = 0; i < 5; i++) {

        myArray[i] = Math.floor(Math.random() * 10) + 1;

        if (myNumber == myArray[i]) {

            count = count + 1;
        }
    }
    document.getElementById("num3").innerHTML = "The number: " + myNumber;
    document.getElementById("n3").innerHTML = "is " + count + " times in the Array";

    document.getElementById("a3").innerHTML = myArray;

}

//---------------------QUESTION 3 -------------------------------
function q4() {

    var myArray = [10, 25, 14, 98, 41, 63, 78, 1, 3, -1, 982, 1];
    var myNumber = myArray[0];
    var count = 0;
    for (i = 0; i < myArray.length; i++) {

        if (myNumber <= myArray[i]) {

            myNumber = myArray[i];
        }
    }
    document.getElementById("num3").innerHTML = "The number: " + myNumber;
    document.getElementById("n3").innerHTML = "is " + count + " times in the Array";
    document.getElementById("text3").innerHTML = "my Random Array";
    document.getElementById("a3").innerHTML = myArray;




}
