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

            rightButton.addEventListener('click', () => {
                if (rocket.style.left !== "") {
                    let rightValue = rocket.style.left;
                    
                    rightValue = parseInt(rightValue);
        
                    rightValue += 10;
        
                    rocket.style.left = `${rightValue}px`;
        
                } else {
                    rocket.style.left = '10px';
                }
            });

            leftButton.addEventListener('click', () => {
                if (rocket.style.left !== "") {
                    let leftValue = rocket.style.left;
                    
                    leftValue = parseInt(leftValue);
        
                    leftValue -= 10;
        
                    rocket.style.left = `${leftValue}px`;
        
                } else {
                    rocket.style.left = '-10px';
                }
            });

            upButton.addEventListener('click', () => {
                if (rocket.style.bottom !== "") {
                    let upValue = rocket.style.bottom;
                    
                    upValue = parseInt(upValue);
        
                    upValue += 10;
        
                    rocket.style.bottom = `${upValue}px`;
        
                } else {
                    rocket.style.bottom = '10px';
                }
        
                let height = parseInt(spaceShuttleHeight.textContent);
        
                height += 10000;
        
                spaceShuttleHeight.textContent = height;
            });

            downButton.addEventListener('click', () => {
                if (rocket.style.bottom !== "") {
                    let downValue = rocket.style.bottom;
                    
                    downValue = parseInt(downValue);
        
                    downValue -= 10;
        
                    rocket.style.bottom = `${downValue}px`;
        
                } else {
                    rocket.style.bottom = '-10px';
                }
        
                let height = parseInt(spaceShuttleHeight.textContent);
        
                height -= 10000;
        
                spaceShuttleHeight.textContent = height;
            });
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

    

    function updateShuttle(status, background, height) {
        flightStatus.textContent = status;
        shuttleBackground.style.backgroundColor = background;
        spaceShuttleHeight.textContent = height;
    }

});