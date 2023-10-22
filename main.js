


const messiImage = document.getElementById('messi');
const correctButton = document.getElementById('correct-click');
//messi and diego container
const imagesBlock = document.getElementById('images-block');
//don't click the button warning
const warningMessage = document.getElementById("warning");
// opacity setting for messi's picture
let messiOpacity = 1;

const lineOne = document.getElementById('first-line');
const lineTwo = document.getElementById('second-line');
const lineThree = document.getElementById('third-line');

const makeFunContainer = document.querySelector('.make-fun-container');
const incorrectButton = document.getElementById('incorrect-click');
let incorrectCheck = false;

function messiDisappear() {
    setInterval(() => {
        // decrease the opacity slowly and set it to the css property
        messiOpacity -= 0.03;
        messiImage.style.opacity = messiOpacity.toString();
        // this will repeat every 100 miliseconds
    }, 100);
    // when it the opacity reaches 0, stop the interval and remove the function from button
    if(messiOpacity === 0){
        clearInterval();
        correctButton.removeAttribute('onclick');
    };
}

// this funtion makes messi's picture transition to transparent
correctButton.onclick = function() {
    // when the button is clicked, hide the warning message
    let delay = 1000;
    warningMessage.style.display = 'none';

    if(incorrectCheck) {
        delay = 5000;
        lineOne.style.display = 'block';
        setTimeout(() => {
            lineTwo.style.display = 'block';
        }, 1500);
        setTimeout(() => {
            lineThree.style.display = 'block';
        }, 3000);
        setTimeout(() => {
            imagesBlock.style.display = 'block';
        }, 4500);
        setTimeout(messiDisappear, delay);
    } else {
        imagesBlock.style.display = 'block';
        setTimeout(messiDisappear, delay);
    }
    
}

incorrectButton.onclick = function() {
    makeFunContainer.style.display = 'flex';
    incorrectCheck = true;
}




