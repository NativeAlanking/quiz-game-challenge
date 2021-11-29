var gameIsNotPlaying = true;
const sectMain = document.querySelector('#main-content');
var btnStart = document.createElement("button");
var btnText = document.createTextNode("Start Quiz!");


function removeallChildNodes(parent) {
    while(parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}


function myfunction(){
    if (gameIsNotPlaying == true) {

        //var btnStart = document.createElement("button");
        var btnText = document.createTextNode("Start Quiz!");
        var h1MainMenu = document.createElement("H1");
        var h1TC = document.createTextNode("Quiz Game Challenge");
        var pMainMenu = document.createElement("p");
        var pTC = document.createTextNode("Try to answer all the questions in the time limit provided to get points getting answers in correct deducts time form the time limit runs out");

        btnStart.appendChild(btnText);
        h1MainMenu.appendChild(h1TC);
        pMainMenu.appendChild(pTC);

        document.getElementById("main-content").appendChild(h1MainMenu);
        document.getElementById("main-content").appendChild(pMainMenu);
        document.getElementById("main-content").appendChild(btnStart);

        gameIsNotPlaying = false;
    } else {
        
        removeallChildNodes(sectMain);



        var h1MainMenu = document.createElement("H1");
        var h1TC = document.createTextNode("Quiz Game Challenge");

        h1MainMenu.appendChild(h1TC);

        document.getElementById("main-content").appendChild(h1MainMenu);

        btnStart.textContent = "Confirm";
        
        document.getElementById("main-content").appendChild(btnStart);

    }
}

myfunction();

btnStart.addEventListener("click", function () {
    myfunction();
});