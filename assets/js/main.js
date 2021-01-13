let clickCount = 0;

window.onload = function () {
    enableGameTetris();
    enableVideoEasterEgg();
};


function enableVideoEasterEgg() {
    var easterEgg = document.getElementsByClassName('avatar-wrapper')[0];
    easterEgg.onclick = function () {
        setTimeout(function () {
            clickCount++;
            document.getElementsByTagName('audio')[0].play();
        }, 500);
        if (clickCount === 2) {
            window.open('https://www.youtube.com/watch?v=0i1RcEHk0f4', '_blank');
        } 
    };
}


function enableGameTetris() {
    let easterEgg = document.getElementById('easterEgg');
    easterEgg.onclick = function () {
        window.open('https://www.min2win.ru/gm.php?id=3336', '_blank');
    };
}