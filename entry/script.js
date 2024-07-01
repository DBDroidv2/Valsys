const slideDoor = () => {
    // Get all elements with the class "door"
    var doors = document.querySelectorAll(".door");
    
    // Loop through each door element and add a click event listener
    doors.forEach(function(door) {
        // Find the medallion inside this door
        var medallion = door.querySelector(".medallion");
        // Add a class to start the medallion animation        
        // Add a timeout to open the door after the medallion animation completes
        setTimeout(function() {
            medallion.style.transition = "opacity 1s ease";
            medallion.style.opacity = 0;
            door.classList.add("active");
        }, 800); // Adjust timing as needed
        medallion.classList.add("rotate");

    });
}

setTimeout(slideDoor, 800);
