class Cell{
    /**
     * @param {*} movie_object; a JSON object which contains information about the movie which is stored in the current cell.
     * @param {Cell} previous; a cell object which indicates the cell which is prior to the current cell in the list.
     * @param {Cell} next; a cell object which indicates the cell which is next to the current cell in the list.
     * 
     * This here class models a cell object which is capable of holding information about a pointer to the previous value in the list, 
     * the next value in the list and the content of the current cell.
     * 
     * @author Andrei-Paul Ionescu.
     */

    // Constructor of the class.
    constructor(movie_object, previous, next){
        
        // If no previous value was specified when the object was instantiated then make sure the pointer points to null.
        if(previous === undefined) this.previous = null;
        else this.previous   = previous;

        this.content    = movie_object;
        
        // If no previous value was specified when the object was instantiated then make sure the pointer points to null.
        if(next === undefined) this.next = null;
        else this.next       = next;
    }

    // Getter methods of the class.
    getNext(none) {return this.next;} // Return the value to which the next field attribute points to.

    // Setter methods of the class.
    setNext(next) {this.next = next;} // Set the next attribute of the current cell to the one specified in the argument.
    setPrevious(previous) {this.previous = previous;} // Set the previous attribute of the current cell to the one specified in the argument.

    // Public/ non static methods of the class.
    print(none) {console.log(this.content + " ");} // Print the content of the current cell.

    length(none){
        /**
         *  @param none; this here method takes no formal arguments upon invocation.
         * 
         *  Compute the length of the circular list in a linear fashion with the aid of an iterative algorithm which yields the result
         *  in O(n) time where n represents the list of the current list.
         *  
         *  @return {number} the length of the list.
         * 
         *  @author Andrei-Paul Ionescu.
         */

        let current = this;
        let numberOfCells = 0;

        do{
            current = current.next;
            ++numberOfCells;
        } while(current !== this);

        return numberOfCells;
    }
}

class List{
    /**
     * @param {Cell} head; a pointer to the current cell to which this structure points.
     * 
     * @author Andrei-Paul Ionescu.
     */

    // Constructor of the class.
    constructor(head){
        
        // If the value for the formal argument is omitted then make the header pointer point to null thus representing the empty list.
        if(head === undefined) this.head = null;
        else this.head = head;
    }

    // Getter methods of the class.
    getHead(none) {return this.head} // Retrieve the value to which the head pointer points to.

    // Setter methods of the class.
    setHead(head) {this.head = head;} // Set the value of the head field to the one specified in the formal argument of the routine.

    // Public/ non static methods of the class.
    print(none){
        /**
         * @param none; this routine takes no formal arguments upon invocation.
         * 
         * This is an iterative linear printing algorithm which takes O(n) time to execute, where n is the length of the current list, 
         * and it performs the printing operation with the aid of the print method which is encapsulated in each Cell object.
         * 
         * @returns undefined; this method does not return any particular value or object.
         * 
         * @author Andrei-Paul Ionescu.
         */

        // Instantiate a variable which points to the stored value of the current header object.
        let current = this.head;
        do{

            current.print(); // Invoke the print method of the current Cell object.
            current = current.getNext(); // Move to the next item in the list.
        } while(this.head !== current); // If one cycle was performed then we had transversed through all the elements within the list.
    }

    length(none) {return this.head.length();} // Invoke the length method of the current head so as to receive the length of the current list.

    insert(newCell){
        /**
         *  @param {Cell} newCell; a Cell object.
         * 
         *  This here routine inserts a new Cell object into the list whilst making sure that the overall cyclical quaility of the structure
         *  is being perserved.
         * 
         *  @return undefined; this here method does not return any particular value or object.
         *  
         *  @author Andrei-Paul Ionescu.
         */
        
        // If the list is empty than make the newCell the current head of the list.
        if(this.head == null){

            this.head = newCell;
            return ; // And exit the block of the function.
        } 

        // If the list contains but one element then make sure that the new element is inserted on the left of the current one.

    }
}

// Constants used throughout the current script.
const MAXIMUM_NUMBER_OF_CARDS_DISPLAYED_AT_ONCE = 3;

// Retrieve the movie-selection carousel div.
let movieSelection = document.getElementById('movie-selection-carousel');
let wasViewInitialised = false;

// Initialise a variable which will hold all the information about the movies and which is accessible by all function belonging to this script
// whose definitions are below the declarations of the variable.
let movieInfromation;

// Methods of the script.
function readMoviesData(none){
    /**
     *  @param {none} none; this here method takes no formal arguments upon invocation.
     * 
     *  This here method reads the JSON package containing the array of information regarding the movies which are currently running in 
     *  the theatres or are about to be released in the theatre.
     * 
     *  @return undefined; this method does not return any particular values.
     * 
     *  @author Andrei-Paul Ionescu.
     */

    /// TODO: Fix the forEach error.

    // Fetch the file from the server which contains the json data and then utilising the promise scheme retreieve each movie object and
    // store it within the movieInformation array.
    fetch("./static/movie-theatre-app/metadata/json/movies/movies.json").then((response) => {

        response.json().then((movies) => {

            movies.forEach(function(movie){

                console.log(movie.movie-title);
            });
        });
    }).catch(error => console.log(error));
}

function displayMovies(){

    for(let i = 0 ; i < MAXIMUM_NUMBER_OF_CARDS_DISPLAYED_AT_ONCE ; ++i){

        
    }
}

function initialiseView(){


    readMoviesData();
    displayMovies();
    wasViewInitialised = true; // To be stored in local storage.
}

function updateUI(){

    if(!wasViewInitialised) initialiseView();
}

// Event listeners.
movieSelection.addEventListener('click', (event) => {

    if(event.target.id === "left-arrow") console.log("We are going left.");
    if(event.target.id === "right-arrow") console.log("We are going to the right");

    updateUI();
});


// Call the methods which need to be invoked every time the view is either accessed or reloaded.

if(!wasViewInitialised) initialiseView();

updateUI();
