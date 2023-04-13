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

            let topValue = parseInt(rocket.style.top);

            topValue -= 10;

            rocket.style.top = `${topValue}px`;  
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

    leftButton.addEventListener('click', alertNotInFlight);
    rightButton.addEventListener('click', alertNotInFlight);
    upButton.addEventListener('click', alertNotInFlight);
    downButton.addEventListener('click', alertNotInFlight);

    rightButton.addEventListener('click', () => {
        if (flightStatus.textContent === "Shuttle in flight") {
            if (parseInt(rocket.style.right) > -((shuttleBackground.clientWidth/2) - (rocket.clientWidth/2))) {
                let rightValue = parseInt(rocket.style.right);
    
                rightValue -= 10;
    
                rocket.style.right = `${rightValue}px`;
    
            }
        }
    });

    leftButton.addEventListener('click', () => {
        if (flightStatus.textContent === "Shuttle in flight") {
            if (parseInt(rocket.style.right) < ((shuttleBackground.clientWidth/2) - (rocket.clientWidth/2))) {
                let leftValue = parseInt(rocket.style.right);
    
                leftValue += 10;
    
                rocket.style.right = `${leftValue}px`;
    
            }
        }
    });

    upButton.addEventListener('click', () => {
        if (flightStatus.textContent === "Shuttle in flight") {
            if (parseInt(rocket.style.top) > 0) {
                let topValue = parseInt(rocket.style.top);

                topValue -= 10;

                rocket.style.top = `${topValue}px`;

                let height = parseInt(spaceShuttleHeight.textContent);
    
                height += 10000;
    
                spaceShuttleHeight.textContent = height;
            }
        }
    });

    downButton.addEventListener('click', () => {
        if (flightStatus.textContent === "Shuttle in flight") {
            if (parseInt(rocket.style.top) < shuttleBackground.clientHeight - rocket.clientHeight) {
                let topValue = parseInt(rocket.style.top);

                topValue += 10;

                rocket.style.top = `${topValue}px`;

                let height = parseInt(spaceShuttleHeight.textContent);
    
                height -= 10000;
    
                spaceShuttleHeight.textContent = height;
            }
        }
    });

    function alertNotInFlight() {
        if (flightStatus.textContent !== "Shuttle in flight") {
            alert("Shuttle must be in flight to move.");
        }
    }

    function updateShuttle(status, background, height) {
        flightStatus.textContent = status;
        shuttleBackground.style.backgroundColor = background;
        spaceShuttleHeight.textContent = height;
    }

    function returnRocketToOriginalPosition() {
        rocket.style.top = `${shuttleBackground.clientHeight - rocket.clientHeight}px`;
        rocket.style.right = `${(shuttleBackground.clientWidth/2) - (rocket.clientWidth/2)}px`;
    }

    function moveRocket(direction) {
        if (flightStatus.textContent === "Shuttle in flight") {
            
        }
    }

});