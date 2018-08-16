function main() {
    var favNum = prompt("What is your favorite number?");
    alert(favNum);
    aboveOrBelow(favNum);
}
function aboveOrBelow(favNum){
    if (favNum > 100) {
        alert("Above 100");
    }
    else if (favNum < 100) {
        alert("Below 100");
    }
    else {
        alert("Equal to 100");
    }
}

main();