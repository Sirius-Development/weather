//Param var
var param = window.location.href.split('#')[1] == undefined ? '' : window.location.href.split('#')[1];

// Navkeys
var navKeys = {
    left: document.getElementById('left'),
    right: document.getElementById('right'),
    down: document.getElementById('down'),
    up: document.getElementById('up')
}
var translation = 0;

navKeys.left.addEventListener('click', e => {
    if (translation < 0) {
        translation = translation + 16.35;
        for(var i = 1; i < document.getElementsByClassName('forecast-card').length; i++) {
            document.getElementsByClassName('forecast-card')[i].style.transform = `translateX(${translation}rem)`
        }
    }
})
navKeys.right.addEventListener('click', e => {
    if (translation > -130) {
        translation = translation - 16.35;
        for(var i = 1; i < document.getElementsByClassName('forecast-card').length; i++) {
            document.getElementsByClassName('forecast-card')[i].style.transform = `translateX(${translation}rem)`
        }
    }
})
navKeys.up.addEventListener('click', e => {
    if (translation < 0) {
        translation = translation + 18.35;
        for(var i = 1; i < document.getElementsByClassName('forecast-card').length; i++) {
            document.getElementsByClassName('forecast-card')[i].style.transform = `translateY(${translation}rem)`
        }
    }
})
navKeys.down.addEventListener('click', e => {
    if (translation > -130) {
        translation = translation - 18.35;
        for(var i = 1; i < document.getElementsByClassName('forecast-card').length; i++) {
            document.getElementsByClassName('forecast-card')[i].style.transform = `translateY(${translation}rem)`
        }
    }
})

// Loading screen
setTimeout(() => {
    if(document.getElementById('loading').style.opacity != '0') {
        document.getElementById('loading_text-wrapper').innerHTML +=
        '<p>Experiencing delays? Wait a few more seconds then reload the page!' +
        '<br>Make sure to click "Allow" when prompted for your location as well!</p>'
    }
}, 7000)

//Load page
var loadStatus = 0;
function loadPage() {
    if(loadStatus == 2) {
        console.log('Loading page...')
        var loading = document.getElementById('loading');
        loading.style.opacity = '0';
        setTimeout(() =>
            loading.style.display = 'none'
        ,1500)
        console.log("Loaded!")
        details(document.getElementById('detail_card1').innerText)
    } else {
        console.log('Awaiting two load confirmations')
    }
}

// Event listeners on forecast cards
var cards = {
    daily: document.getElementsByClassName('daily')
}

for(var i = 0; i < cards.daily.length; i++) {
    cards.daily[i].addEventListener('click', cardClick)
}

var t;
function cardClick(e) {
    t = e.target;
    details(document.getElementById(`detail_${t.id}`).innerText)
}