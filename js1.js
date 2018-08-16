function main() {
    var rndmNum = prompt("Choose a number:");
    alert(rndmNum);
    positiveOrNegative(rndmNum);
}
function positiveOrNegative(rndmNum){
    if (rndmNum > 0) {
        alert("positive");
    }
    else if (rndmNum < 0) {
        alert("negative");
    }
    else if (rndmNum == 0) {
        alert("zero")
    }
    else {
        alert("error")
    }
}

main();