const toggleWindowButton = document.getElementById('toggleWindowButton');
const colorWindow = document.getElementById('colorWindow');
const darkModeButton = document.getElementById('darkModeButton');
const colorChangeButton = document.getElementById('colorChangeButton');


toggleWindowButton.addEventListener('click', () => {colorWindow.style.display = colorWindow.style.display === 'none' ? 'block' : 'none';});

    let isDarkMode = false;
    darkModeButton.addEventListener('click', () => {
        isDarkMode = !isDarkMode;
        document.body.style.backgroundColor = isDarkMode ? 'white' : 'black';
        document.body.style.color = isDarkMode ? 'black' : 'white';
        darkModeButton.style.backgroundColor = isDarkMode ? 'black' : 'white';
        darkModeButton.style.color = isDarkMode ? 'white' : 'black';
    });
    
    let isColorChanging = true;
    let currentHue = 0;
    let colorInterval;
    
    const startColorChange = () => {
        colorInterval = setInterval(() => {
            currentHue = (currentHue + 1) % 360;
            const currentColor = `hsl(${currentHue}, 100%, 15%)`;
            colorChangeButton.style.backgroundColor = currentColor;
            colorChangeButton.style.borderColor = 'black';
        }, 20);
    };
    
    const stopColorChange = () => {clearInterval(colorInterval); document.body.style.backgroundColor = `hsl(${currentHue}, 100%, 15%)`;}
    
    colorChangeButton.addEventListener('click', () => {
        if (isColorChanging) { stopColorChange(); }
        else { startColorChange(); } 
        isColorChanging = !isColorChanging;
    });

startColorChange();