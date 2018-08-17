class book {

    constructor(bookName, rating, yearReleased) {
        this.bookName = bookName;
        this.rating = rating;
        this.yearReleased = yearReleased;
    }
    printAllAttributes(){
        return(this.bookName + ", " + this.rating + " stars, " + this.yearReleased);
    }

}
function main() {
    var newBook = new book("The Fourth Closet(Five Nights at Freddy's)", 4, 2018);
    var anotherBook = new book("Children of Blood and Bone", 4, 2018);

    console.log(newBook.printAllAttributes());
    console.log(anotherBook.printAllAttributes());
}

main();