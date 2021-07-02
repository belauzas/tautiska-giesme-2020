(function () {
    const youtubeLink = '8ocKUv_GJss',
        youtubeLinkTitle = 'Tautiška giesmė aplink pasaulį 2020',
        timerDate = 'Jul 6, 2021 21:00';

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
     * PARTNERS UPDATE
     ********************************/
    const watchLive = [
        ['lrt.png', 'https://www.lrt.lt/'],
        ['delfi-blue.png', 'https://www.delfi.lt/'],
        ['15min.png', 'https://www.15min.lt/'],
        ['lr-grupe.png', 'https://www.lrytas.lt/'],
    ];
    const partners = [
        ['LRVK_logo_LT.png', 'https://lrvk.lrv.lt/'],
        ['km.png', 'https://lrkm.lrv.lt/lt/'],
        ['urm-naujas.png', 'https://www.urm.lt/default/lt/'],
        ['vilnius.png', 'https://vilnius.lt/'],
        ['lsa.png', 'https://www.savivaldybiu-asociacija.lt/', 2],
        ['global-lithuanian-leaders.png', 'https://www.global-lithunian-leaders.lt/'],
        ['plb.png', 'http://plbe.org/'],
        ['sauliu-sajunga.png', 'https://www.sauliu-sajunga.lt/'],
        ['akropolis.png', 'http://akropolis.lt'],
        ['PANORAMA.png', 'https://www.panorama.lt'],
        ['RIMI.png', 'https://www.rimi.lt/'],
        ['IKI.png', 'https://www.iki.lt/'],
        ['VVT_logo.png', 'http://www.vilniausviesasistransportas.lt/'],
        ['keliautojai.png', 'https://lkakeliautojai.lt/'],
        ['olimpinis.png', 'https://www.ltok.lt/'],
        ['lteam.png', 'https://www.ltok.lt/'],
        ['cup.png', 'https://cupvilnius.lt/'],
        ['makalius.png', 'https://www.makalius.lt/'],
        ['sportland.png', 'https://sportland.lt/'],
    ];

    function renderPartners(selector, list) {
        const DOMlist = document.querySelector(selector);
        const listCount = list.length;
        let listHTML = '';
        let size = '';
        for (let i = 0; i < listCount; i++) {
            const partner = list[i];
            size = '';
            if (partner[2] && partner[2] > 1) {
                size = ' double';
            }
            listHTML += '<div class="partner' + size + '">\
                                <a href="' + partner[1] + '" target="_blank" rel="noreferrer">\
                                    <img src="./img/sponsors/min/' + partner[0] + '" alt="Kviečia giedoti Tautišką giesmę">\
                                </a>\
                            </div>';
        }
        DOMlist.innerHTML = listHTML;
    }

    /*********************************
     * ON PAGE LOAD
     ********************************/

    window.addEventListener('load', function () {
        insertYoutube();
        renderPartners('#stebek_rengini .content', watchLive);
        renderPartners('#giedoti_kviecia .content', partners);
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
            }, 60000);
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