// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener('load', () => {

    const takeoffButton = document.getElementById("takeoff");
    const flightStatus = document.getElementById("flightStatus");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");

    takeoffButton.addEventListener('click', () => {
       let response = confirm("Confirm that the shuttle is ready for takeoff.");

       if (response) {
        flightStatus.textContent = "Shuttle in flight."

        shuttleBackground.style.backgroundColor = "blue";

        spaceShuttleHeight.textContent = "10,000";
       }
    });







});