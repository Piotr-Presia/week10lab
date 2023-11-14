
//---------------------QUESTION 1 -------------------------------
function q1() {

    var sub = parseInt(prompt("Enter number of subjects"));
    var resultSubjects = [];
    var sum = 0;
    var average = 0;
    var v = "";

    if (sub > 0 && sub < 100) {


        for (i = 0; i < sub; i++) {
            resultSubjects[i] = parseInt(prompt("Enter result for Subject " + (i + 1) + " (from 0 to 100%)"));
            sum = sum + resultSubjects[i];
            v = v + "<br> - Subject " + (i + 1) + " result: " + resultSubjects[i] + "% " + " Grade: " + q1a(resultSubjects[i]);

            average = parseInt((sum / sub));
        }
    } else {
        v = "Wrong input.";
        average = "Wrong Data";
    }
    document.getElementById("a1").innerHTML = v;
    document.getElementById("average").innerHTML = "Overall average result is: " + average + "% " + " Grade: " + q1a(average);

    function q1a(result) {

        if (result > 80 && result <= 100) {
            return " A";
        } else if (result <= 80 && result > 70) {
            return " B";
        } else if (result <= 70 && result > 60) {
            return " C";
        } else if (result <= 60 && result > 50) {
            return " D";
        } else if (result <= 50 && result > 40) {
            return " E";
        } else if (result <= 40 && result >= 0) {
            return " F";
        } else {
            return " Invalid Number";
        }
    }

}



//---------------------QUESTION 2 -------------------------------
function q2() {
    var winner = "";
    var userP = "";
    var compP = "";
    var compInput;
    var userInput;
    var c2 = 0;
    var myArray = [];
    var compArray = [];
    var v = "";
    var winArray = [];

    while (c2 < 5) {
        input();
        myArray[c2] = userP;
        compArray[c2] = compP;
        winArray[c2] = winner;
        c2++;

        if (winner == p1) {
            c2 = 5;
        }
    }

    for (a = 0; a < myArray.length; a++) {
        var s = document.getElementById("a2").innerHTML = "<br>#" + (a + 1) + "<br>Player choice: " + myArray[a] + "<br>Computer choice: " + compArray[a] + "<br>Winner: " + winArray[a];
        v = v + s;
    }

    document.getElementById("a2").innerHTML = v;

    //INPUT
    function input() {
        userInput = parseInt(prompt("Type 1 for Rock, 2 for Paper and 3 for Scissors"));

        compInput = (Math.floor(Math.random() * 3) + 1); //PLAY WITH COMPUTER RANDOM CHOICE
        pvc("PLAYER", "COMPUTER");
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

        } else if (compInput == 1 && userInput == 2) {
            winner = p1;  //"PLAYER";

        } else if (compInput == 1 && userInput == 3) {
            winner = p2;  //"COMPUTER";

        } else if (compInput == 2 && userInput == 1) {
            winner = p2;  //"COMPUTER";

        } else if (compInput == 2 && userInput == 3) {
            winner = p1; //"PLAYER";

        } else if (compInput == 3 && userInput == 1) {
            winner = p1;  //"PLAYER";

        } else if (compInput == 3 && userInput == 2) {
            winner = p2;  //"COMPUTER";

        } else {

            userP = "WRONG ENTRY, TRY AGAIN";
            winner = "";
        }
    }

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
    document.getElementById("tex3").innerHTML = "My Random Array";
    document.getElementById("a3").innerHTML = myArray;

}

//---------------------QUESTION 4 -------------------------------
function q4() {

    var myArray = [10, 25, 1000, 98, 41, 63, 78, 1, 3, -1, 982, 1];
    var myNumber = myArray[0];
    var count = 0;
    for (i = 0; i < myArray.length; i++) {

        if (myNumber <= myArray[i]) {

            myNumber = myArray[i];
        }
    }
    document.getElementById("lnum4").innerHTML = "is: " + myNumber;
    document.getElementById("t4").innerHTML = "The Pre-set Array";
    document.getElementById("a4").innerHTML = myArray;

}

//---------------------QUESTION 5 -------------------------------
function q5() {

    var myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    var sum = 0;
    var count = 0;

    function q5a() {
        for (i = 0; i < myArray.length; i++) {

            sum = sum + myArray[i];
        }
        return sum;
    }

    function q5b() {

        return mean = (sum / myArray.length);
    }

    document.getElementById("sum5").innerHTML = "The SUM is: " + q5a();
    document.getElementById("mean5").innerHTML = "The MEAN is: " + q5b();
    document.getElementById("t1").innerHTML = "The pre-set Array";
    document.getElementById("a5").innerHTML = myArray;
}

//---------------------QUESTION 6 -------------------------------
{

    var groveryList = ["Butter", "Milk", "Bread"];

    function printUpList() {

        var list = "";
        if (groveryList[0] != null) {

            for (i = 0; i < groveryList.length; i++) {
                list = list + "<li>" + groveryList[i] + "</li>";

            }
        }

        if (groveryList.length == 0) {
            list = "";

        }
        document.getElementById("listUL").innerHTML = list;
    }

    function removeLastElement() {

        if (groveryList.length == 0) {
            document.getElementById("q6p").innerHTML = "There is nothing to remove";
            //document.getElementById("a6").innerHTML = "No groceries on the list";
        } else {
            var rem = groveryList.pop();
            document.getElementById("q6p").innerHTML = "Removed from the list: " + rem;
            printUpList();
        }
    }

    function addLastElement() {
        var rem = prompt("Enter an element to add to the list")
        groveryList.push(rem);
        document.getElementById("q6p").innerHTML = "Added to the list: " + rem;

        printUpList();

    }

    function removeFirstElement() {


        if (groveryList[0] == null) {
            document.getElementById("q6p").innerHTML = "There is nothing to remove";
            //document.getElementById("a6").innerHTML = "No groceries on the list";
        } else {
            var rem = groveryList.shift();
            document.getElementById("q6p").innerHTML = "Removed from the list: " + rem;
            printUpList();
        }
    }

    function addFirstElement() {
        var rem = prompt("Enter an element to add to the front of the list")
        groveryList.unshift(rem);

        document.getElementById("q6p").innerHTML = "Added to the list: " + rem;

        printUpList();

    }




}
