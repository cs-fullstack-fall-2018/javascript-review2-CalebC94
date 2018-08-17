class dog {

    constructor(name, breed, color, gender){
        this.name = name;
        this.breed = breed;
        this.color = color;
        this.gender = gender;
    }

}

function main() {
    var newDog = new dog("Fiddo", "Lab", "brown", "male");
    alert(newDog.name);
    alert(newDog.breed);
    alert(newDog.color);
    alert(newDog.gender);
}

main();