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
       }
    });


    landButton.addEventListener('click', () => {
        alert("The shuttle is landing. Landing gear engaged.");

        updateShuttle("The shuttle has landed.", "green", 0);
    });

    abortButton.addEventListener('click', () => {
        let abortResponse = confirm("Confirm that you want to abort the mission.");

        if (abortResponse) {
            updateShuttle("Mission aborted", "green", 0);
        }
    });

    rightButton.addEventListener('click', () => {
        if (rocket.style.left !== "") {
            let value = rocket.style.left;
            
            value = parseInt(value);

            value += 10;

            rocket.style.left = `${value}px`;

        } else {
            rocket.style.left = '10px';
        }
    });

    leftButton.addEventListener('click', () => {
        if (rocket.style.left !== "") {
            let value = rocket.style.left;
            
            value = parseInt(value);

            value -= 10;

            rocket.style.left = `${value}px`;

        } else {
            rocket.style.right = '10px';
        }
    });

    upButton.addEventListener('click', () => {
        if (rocket.style.bottom !== "") {
            let value = rocket.style.bottom;
            
            value = parseInt(value);

            value += 10;

            rocket.style.bottom = `${value}px`;

        } else {
            rocket.style.bottom = '10px';
        }

        let height = parseInt(spaceShuttleHeight.textContent);

        height += 10000;

        spaceShuttleHeight.textContent = height;
    });

    downButton.addEventListener('click', () => {
        if (rocket.style.bottom !== "") {
            let value = rocket.style.bottom;
            
            value = parseInt(value);

            value -= 10;

            rocket.style.bottom = `${value}px`;

        } else {
            rocket.style.top = '10px';
        }

        let height = parseInt(spaceShuttleHeight.textContent);

        height -= 10000;

        spaceShuttleHeight.textContent = height;
    });

    // function moveRocket(direction) {
    //     if (rocket.style.direction !== "") {
    //         let value = rocket.style.direction;
            
    //         value = parseInt(value);

    //         value += 10;

    //         rocket.style.direction = `${value}px`;

    //     } else {
    //         rocket.style.direction = '10px';
    //     }
    // }

    function updateShuttle(status, background, height) {
        flightStatus.textContent = status;
        shuttleBackground.style.backgroundColor = background;
        spaceShuttleHeight.textContent = height;
    }

});