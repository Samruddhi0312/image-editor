const textInput = document.getElementById('textInput');
const fontSizeInput = document.getElementById('fontSize');
const fontFamilyInput = document.getElementById('fontFamily');
const fontColorInput = document.getElementById('fontColor');
const positionInput = document.getElementById('position');
const heightInput = document.getElementById('height');
const widthInput = document.getElementById('width');
const brightnessInput = document.getElementById('brightness');
const invertInput = document.getElementById('invert');
const grayscaleInput = document.getElementById('grayscale');
const saturateInput = document.getElementById('saturate');
const borderRadiusInput = document.getElementById('borderRadius');

const displayText = document.getElementById('displayText');
const image = document.getElementById('image');

// Update the text content
textInput.addEventListener('input', () => {
    displayText.textContent = textInput.value;
});

// Update font size
fontSizeInput.addEventListener('input', () => {
    displayText.style.fontSize = `${fontSizeInput.value}px`;
});

// Update font family
fontFamilyInput.addEventListener('change', () => {
    displayText.style.fontFamily = fontFamilyInput.value;
});

// Update font color
fontColorInput.addEventListener('input', () => {
    displayText.style.color = fontColorInput.value;
});

// Update position
positionInput.addEventListener('change', () => {
    displayText.style.position = positionInput.value;
});

// Update image height and width
heightInput.addEventListener('input', () => {
    image.style.height = `${heightInput.value}px`;
});

widthInput.addEventListener('input', () => {
    image.style.width = `${widthInput.value}px`;
});

// Update brightness
brightnessInput.addEventListener('input', () => {
    updateFilter();
});

// Update invert
invertInput.addEventListener('input', () => {
    updateFilter();
});

// Update grayscale
grayscaleInput.addEventListener('input', () => {
    updateFilter();
});

// Update saturate
saturateInput.addEventListener('input', () => {
    updateFilter();
});

// Update border radius
borderRadiusInput.addEventListener('input', () => {
    image.style.borderRadius = `${borderRadiusInput.value}px`;
});

// Function to update image filter styles
function updateFilter() {
    image.style.filter = `
        brightness(${brightnessInput.value}) 
        grayscale(${grayscaleInput.value}) 
        saturate(${saturateInput.value}) 
        invert(${invertInput.value})
    `;
}
