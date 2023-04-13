// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener('load', () => {

    const takeoffButton = document.getElementById("takeoff");
    const landButton = document.getElementById("landing");
    const abortButton = document.getElementById("missionAbort");

    const upButton = document.getElementById("up");
    const downButton = document.getElementById("down");
    const rightButton = document.getElementById("right");
    const leftButton = document.getElementById("left");

    const flightStatus = document.getElementById("flightStatus");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    const rocket = document.getElementById("rocket");


    takeoffButton.addEventListener('click', () => {
       let takeOffResponse = confirm("Confirm that the shuttle is ready for takeoff.");

       if (takeOffResponse) {
            updateShuttle("Shuttle in flight", "blue", 10000);

            let bottom = parseInt(rocket.style.bottom) || 0;

            bottom += 10;

            rocket.style.bottom = `${bottom}px`;  
       }
    });


    landButton.addEventListener('click', () => {
        alert("The shuttle is landing. Landing gear engaged.");

        updateShuttle("The shuttle has landed.", "green", 0);

        returnRocketToOriginalPosition();

    });

    abortButton.addEventListener('click', () => {
        let abortResponse = confirm("Confirm that you want to abort the mission.");

        if (abortResponse) {
            updateShuttle("Mission aborted", "green", 0);
            
            returnRocketToOriginalPosition();
        }
    });

    leftButton.addEventListener('click', () => moveRocket("left"));
    rightButton.addEventListener('click', () => moveRocket("right"));
    upButton.addEventListener('click', () => moveRocket("up"));
    downButton.addEventListener('click', () => moveRocket("down"));

    function updateShuttle(status, background, height) {
        flightStatus.textContent = status;
        shuttleBackground.style.backgroundColor = background;
        spaceShuttleHeight.textContent = height;
    }

    function returnRocketToOriginalPosition() {
        rocket.style.bottom = 0;
        rocket.style.left = 0;
    }

    function moveRocket(direction) {
        if (flightStatus.textContent === "Shuttle in flight") {
            let bottom = parseInt(rocket.style.bottom) || 0;
            let left = parseInt(rocket.style.left) || 0;

            let backgroundWidth = shuttleBackground.offsetWidth;
            let backgroundHeight = shuttleBackground.offsetHeight;

            if (direction === 'up') {
                bottom += 10;
            } else if (direction === "down") {
                bottom -= 10;
            } else if (direction === "right") {
                left += 10;
            } else {
                left -= 10;
            }

            rocket.style.bottom = `${bottom}px`;
            rocket.style.left = `${left}px`;
        } else {
            alert("Shuttle must be in flight to move.");
        }
    }

});