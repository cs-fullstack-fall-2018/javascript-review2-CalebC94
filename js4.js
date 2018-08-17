function main() {
    var array= [10,22,94,24,13];
    var myArray =prompt("Choose a number between 1-5: ");
    var counter = 0;
    if (myArray > array.length){
        alert("Error")
    }
    else{
        while (counter < myArray){
            console.log(array[counter]);
            counter++
        }
    }

}

main();