// Get references to the buttons and the moveable object
const moveButton = document.getElementById('moveButton');
const calibrationButton = document.getElementById('calibrationButton');
const moveToMidButton = document.getElementById('moveToMidButton');
const moveUpButton = document.getElementById('moveUpButton');
const moveRightButton = document.getElementById('moveRightButton');
const moveToUpButton = document.getElementById('moveToUpButton');
const moveable = document.querySelector('.moveable');

// Get references to the instruction section and the next button name
const instructionSection = document.getElementById('instructionSection');
const nextButtonName = document.getElementById('nextButtonName');

// Store the initial position of the object
const initialPosition = { x: 295.66, y: 51.75 };

// Track the current step in the sequence
let currentStep = 0;

// Disable all buttons initially except the first one
calibrationButton.disabled = true;
moveToMidButton.disabled = true;
moveUpButton.disabled = true;
moveRightButton.disabled = true;
moveToUpButton.disabled = true;

// Function to highlight the active button and update instructions
function updateUI() {
    // Remove highlight from all buttons
    moveButton.classList.remove('highlighted-button');
    calibrationButton.classList.remove('highlighted-button');
    moveToMidButton.classList.remove('highlighted-button');
    moveUpButton.classList.remove('highlighted-button');
    moveRightButton.classList.remove('highlighted-button');
    moveToUpButton.classList.remove('highlighted-button');

    // Highlight the active button and update instructions
    switch (currentStep) {
        case 0:
            moveButton.classList.add('highlighted-button');
            nextButtonName.textContent = 'Start';
            break;
        case 1:
            calibrationButton.classList.add('highlighted-button');
            nextButtonName.textContent = 'Calibration';
            break;
        case 2:
            moveToMidButton.classList.add('highlighted-button');
            nextButtonName.textContent = 'Position';
            break;
        case 3:
            moveUpButton.classList.add('highlighted-button');
            nextButtonName.textContent = 'Microscope';
            break;
        case 4:
            moveRightButton.classList.add('highlighted-button');
            nextButtonName.textContent = 'Position 2';
            break;
        case 5:
            moveToUpButton.classList.add('highlighted-button');
            nextButtonName.textContent = 'Scratch';
            break;
        default:
            break;
    }
}

// Function to enable the next button in the sequence
function enableNextButton() {
    currentStep++;
    switch (currentStep) {
        case 1:
            calibrationButton.disabled = false;
            break;
        case 2:
            moveToMidButton.disabled = false;
            break;
        case 3:
            moveUpButton.disabled = false;
            break;
        case 4:
            moveRightButton.disabled = false;
            break;
        case 5:
            moveToUpButton.disabled = false;
            break;
        default:
            break;
    }
    updateUI(); // Call updateUI to refresh the button highlights and instructions
}

// Function to move the object to the right
function moveObjectsX() {
    moveable.style.transition = 'transform 5s ease';
    moveable.style.transform = `translateX(-60px) translateY(99px)`; // Move 60px to the right

    // Enable the next button after the animation completes
    moveable.addEventListener('transitionend', enableNextButton, { once: true });
}

// Function to bring the object back to its initial position
function calibrationMovement() {
    moveable.style.transition = 'transform 5s ease';
    moveable.style.transform = `translateX(-200px) translateY(100px)`; // Reset to initial position

    // Enable the next button after the animation completes
    moveable.addEventListener('transitionend', enableNextButton, { once: true });
}

// Function to move the object to the middle
function moveToMid() {
    moveable.style.transition = 'transform 5s ease';
    moveable.style.transform = `translateX(-99px) translateY(100px)`; // Move to the middle of the container

    // Enable the next button after the animation completes
    moveable.addEventListener('transitionend', enableNextButton, { once: true });
}

// Function to move the object slightly upwards
function moveUp() {
    moveable.style.transition = 'transform 5s ease';
    moveable.style.transform = 'translateX(-99px) translateY(70px)'; // Move slightly upwards

    // Enable the next button after the animation completes
    moveable.addEventListener('transitionend', enableNextButton, { once: true });
}

// Function to move the object to the right
function moveRight() {
    moveable.style.transition = 'transform 5s ease';
    moveable.style.transform = `translateX(-135px) translateY(100px)`; // Move to the right

    // Enable the next button after the animation completes
    moveable.addEventListener('transitionend', enableNextButton, { once: true });
}

// Function to move the object slightly upwards
function moveToUp() {
    moveable.style.transition = 'transform 5s ease';
    moveable.style.transform = 'translateX(-135px) translateY(57px)'; // Move slightly upwards

    // Enable the next button after the animation completes
    moveable.addEventListener('transitionend', enableNextButton, { once: true });
}

// Event listeners
moveButton.addEventListener('click', moveObjectsX);
calibrationButton.addEventListener('click', calibrationMovement);
moveToMidButton.addEventListener('click', moveToMid);
moveUpButton.addEventListener('click', moveUp);
moveRightButton.addEventListener('click', moveRight);
moveToUpButton.addEventListener('click', moveToUp);

// Initial UI update
updateUI();