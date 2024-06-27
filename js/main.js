(function () {
    const youtubeLink = 'bhtSNCjRXeQ';
    const youtubeLinkTitle = 'Tautiška giesmė aplink pasaulį 2024';
    const timerDate = 'Jul 6, 2024 21:00';

    /*********************************
     * H2 UPDATE
     ********************************/
    const DOMh2 = document.querySelectorAll('h2');
    const h2Count = DOMh2.length;
    for (let i = 0; i < h2Count; i++) {
        DOMh2[i].insertAdjacentHTML('afterbegin', '<span class="start"></span>');
        DOMh2[i].insertAdjacentHTML('beforeend', '<span class="end"></span>');
    }

    /*********************************
     * BUTTONS UPDATE
     ********************************/
    const DOMbtn = document.querySelectorAll('.btn');
    const btnCount = DOMbtn.length;
    for (let i = 0; i < btnCount; i++) {
        DOMbtn[i].insertAdjacentHTML('beforeend', '<span class="corner"></span>');
    }

    /*********************************
     * ON PAGE LOAD
     ********************************/

    window.addEventListener('load', function () {
        insertYoutube();
        runClock();
    });

    function insertYoutube() {
        const DOM = document.querySelector('#ode_giesmei .content');
        return DOM.innerHTML = '<iframe title="' + youtubeLinkTitle + '" src="https://www.youtube.com/embed/' + youtubeLink + '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>';
    }

    function runClock() {
        const end = Date.parse(timerDate);
        let now = Date.now(),
            diff = (end - now) / 1000;

        if (diff > 0) {
            updateClock(diff);

            let clock = setInterval(() => {
                now = Date.now();
                diff = (end - now) / 1000;
                updateClock(diff);
                if (diff <= 0) {
                    clearInterval(clock);
                }
            }, 1000);
        }
    }

    function updateClock(diff) {
        const clock = document.querySelectorAll('#laikrodis .clock > .time'),
            days = clock[0].querySelector('.value'),
            hours = clock[1].querySelector('.value'),
            minutes = clock[2].querySelector('.value'),
            daysLeft = Math.floor(diff / 86400),
            hoursLeft = Math.floor((diff - daysLeft * 86400) / 3600),
            minutesLeft = Math.floor(diff % 3600 / 60);

        days.innerText = daysLeft < 10 ? '0' + daysLeft : daysLeft;
        hours.innerText = hoursLeft < 10 ? '0' + hoursLeft : hoursLeft;
        minutes.innerText = minutesLeft < 10 ? '0' + minutesLeft : minutesLeft;
    }

})();