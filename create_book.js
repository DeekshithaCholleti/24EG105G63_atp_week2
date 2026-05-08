/**Objective : Create a Book class and use it to manage a collection of books in a library.

Requirements:
  Create a Book class with the following:

  Properties:
      title (string)
      author (string)
      pages (number)
      isAvailable (boolean, default: true)


  Methods:
      borrow() - Marks the book as not available
      returnBook() - Marks the book as available
      getInfo() - Returns a string with book details (e.g., "The Hobbit by J.R.R. Tolkien (310 pages)")
      isLongBook() - Returns true if pages > 300, false otherwise
 */
class Book{
    title;
    author;
    pages;
    isAvailable;
    constructor(title,author,pages,isAvailable){
        this.title=title;
        this.author=author;
        this.pages=pages;
        this.isAvailable=isAvailable
    }
    borrow(isAvailable){
        
        if(!this.isAvailable){
       console.log("Marks the book as not available")}
    }
    returnBook(isAvailable){
        if(this.isAvailable){
         console.log("Marks the book as available")}}
    getInfo(){
        console.log(`The ${this.title} by ${this.author} (${this.pages} pages)`)
    }
    // Method to check if the book has more than 300 pages
    isLongBook(pages){
 if(this.pages > 300){
    console.log("Long book")
    return true
 }
 console.log("not long book")
 return false
    }
}

// Creating a new Book instance
let b1=new Book("THE LION","AKSHI",350,false)

// Testing the methods
b1.isLongBook()
b1.getInfo()
b1.borrow()
b1.returnBook()