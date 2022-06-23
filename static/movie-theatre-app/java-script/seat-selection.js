// Global variables and constants are initialised here.

const body = document.body; // Retrieve the body element of the current view and store it in a constant variable.

let seatsContainer = document.getElementById('seats-container'); // Retrieve the seats container element.


// Call the updateUI method so as to ensure that after each reload the page still contains the already made selection.
updateUI();

// Functions are declared and implemented here.
function getSelectedSeats(none){
    /**
     * @param none; this method takes no formal arguments upon invocation.
     * 
     * This method selects all the div which belong to the seatsContainer and maps them to an array of indexes which indicates which seats
     * are currently selected then it returns this array to the caller.
     * 
     * @returns an array of indexes which represent the currently selected seats.
     * 
     * @author Andrei-Paul Ionescu.
     */

    // Retrieve the divs which contain both the .seat class and the .selected class.
    let selectedSeats = seatsContainer.querySelector('.seat.selected');

    console.log(selectedSeats);
}

function updateUI(none){
    /**
     * @param none; this here method takes no formal arguments upon invocation.
     * 
     * This here method updates the view after the page had been reloaded so as to ensure that the selected seats remain selected whilst
     * the seat-selection view is active, in the future this view will also update if another user had bought certain seats prior to 
     * the current's user order hence letting the user know what seats are still available and what are not, but this is either a .NET or 
     * Node matter, neverthless this method achieves what it is supposed to do with the aid of local storage.
     * 
     * @author Andrei-Paul Ionescu;
     */


}

// Event listeners are instantiated and allocated/ linked to their specific elements here.
seatsContainer.addEventListener('click', (event) => {
    /**
     * @param event; an event object.
     * 
     * This here event listener intercepts any click events which the user might produce in the container whose id is seats-container;
     * after intercepting these events we then discern whether or not the right type of object was selected by the user, those being 
     * seat object which are not occupied, and then we alter the state of the clicked item based on whether they were previously selected or not
     * in the current state of the layout; we perform a seamless and effortless transition with the aid of the toggle property which belongs 
     * to the classList object.
     * 
     * @author Andrei-Paul Ionescu
     */

    // If the targetted object contains the class seat and does not contain the occupied class than it is a valid object with which 
    // the user might interact.
    if(event.target.classList.contains('seat') && !event.target.classList.contains('occupied')){

        event.target.classList.toggle('selected'); // Use the toggle method of the classList so as to alter between the selected and unselected states.
    }
    getSelectedSeats();
});