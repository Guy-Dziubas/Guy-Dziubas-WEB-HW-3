// jungle.js


// כל הכפתורים עם class="animal"
var buttons = document.querySelectorAll(".animal");

// מאזין ללחיצות עכבר על כפתורי החיות
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML.toLowerCase();
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}

// מאזין להקשות מקלדת – W A S D J K L
document.addEventListener("keypress", function (event) {
    var key = event.key.toLowerCase();
    makeSound(key);
    buttonAnimation(key);
});

// משתנה שמחזיק את האודיו שמתנגן כרגע
var currentAudio = null;

/**
 * מפעיל צליל בהתאם לאות שנלחצה
 * key = 'w','a','s','d','j','k','l'
 */
function makeSound(key) {

    // עצירת הצליל הקודם אם יש
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }

    switch (key) {
        case "w": // snake
            currentAudio = new Audio("./sounds/snake-hissing-6092.mp3");
            break;
        case "a": // frog
            currentAudio = new Audio("./sounds/frog-1-352709.mp3");
            break;
        case "s": // croc
            currentAudio = new Audio("./sounds/alligator-411864.mp3");
            break;
        case "d": // elephant
            currentAudio = new Audio("./sounds/elephant-trumpets-growls-6047.mp3");
            break;
        case "j": // tiger
            currentAudio = new Audio("./sounds/harimau-220046.mp3"); // תעדכן לשם קובץ הטיגריס שלך
            break;
        case "k": // monkey
            currentAudio = new Audio("./sounds/monkey-sound-295406.mp3");
            break;
        case "l": // parrot
            currentAudio = new Audio("./sounds/parrot-80775.mp3");
            break;
        default:
            // אות שלא מכירים – לא לעשות כלום כדי לא להציף alert
            return;
    }

    currentAudio.play();
}

/**
 * אנימציה לכפתור שנלחץ – מוסיף ומסיר class "pressed"
 */
function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    if (!activeButton) {
        return;
    }
    activeButton.classList.add("pressed");
    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 150);
}


function playRandomAnimal() { // פונקציה שבתוכה יש אלמנט שלא למדנו בשיעור
    var keys = ["w", "a", "s", "d", "j", "k", "l"];
    var randomIndex = Math.floor(Math.random() * keys.length); //שימוש ב random בכפתור.
    var randomKey = keys[randomIndex];
    makeSound(randomKey);
    buttonAnimation(randomKey);
}

var randomBtn = document.getElementById("randomBtn");
randomBtn.addEventListener("click", playRandomAnimal);
