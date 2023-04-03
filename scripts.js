// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener('load', () => {

    const takeoffButton = document.getElementById("takeoff");
    const flightStatus = document.getElementById("flightStatus");

    takeoffButton.addEventListener('click', () => {
       let response = confirm("Confirm that the shuttle is ready for takeoff.");

       if (response) {
        flightStatus.textContent = "Shuttle in flight."
       }
    });







});