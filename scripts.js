// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener('load', () => {

    const takeoffButton = document.getElementById("takeoff");
    const landButton = document.getElementById("landing");
    const abortButton = document.getElementById("missionAbort");
    const flightStatus = document.getElementById("flightStatus");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");

    takeoffButton.addEventListener('click', () => {
       let takeOffResponse = confirm("Confirm that the shuttle is ready for takeoff.");

       if (takeOffResponse) {
        flightStatus.textContent = "Shuttle in flight."

        shuttleBackground.style.backgroundColor = "blue";

        spaceShuttleHeight.textContent = "10,000";
       }
    });


    landButton.addEventListener('click', () => {
        alert("The shuttle is landing. Landing gear engaged.");
        
        flightStatus.textContent = "The shuttle has landed.";

        shuttleBackground.style.backgroundColor = "green";

        spaceShuttleHeight.textContent = "0";
    });

    abortButton.addEventListener('click', () => {
        let abortResponse = confirm("Confirm that you want to abort the mission.");
    });


});