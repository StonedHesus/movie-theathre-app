// Global variables and constants are initialised here.

const body = document.body; // Retrieve the body element of the current view and store it in a constant variable.

let seatsContainer = document.getElementById('seats-container'); // Retrieve the seats container element.


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
});