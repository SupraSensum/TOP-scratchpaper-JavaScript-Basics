const button = document.getElementById("console-error-vs-console-warn-button");

button.addEventListener("click", testConsoleError);

function testConsoleError() {
    alert("Some text BEFORE the console.warn() command");
    console.warn("Test warning");
    alert("Some text BEFORE the console.error() command");
    console.error("test error");
    alert("If you see me, console.error doesn't do what TOP lead me to believe it does. See here: https://www.theodinproject.com/lessons/foundations-understanding-errors#errors-vs-warnings");
}