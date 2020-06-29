(function(){
    const youtubeLink = 'I9JIVpu3osg',
        youtubeLinkTitle = 'Tautiška giesmė aplink pasaulį 2020',
        timerDate = 'Jul 6, 2020 21:00';

    /*********************************
     * H2 UPDATE
     ********************************/
    const DOMh2 = document.querySelectorAll('h2');
    const h2Count = DOMh2.length;
    for ( let i=0; i<h2Count; i++ ) {
        DOMh2[i].insertAdjacentHTML('afterbegin', '<span class="start"></span>');
        DOMh2[i].insertAdjacentHTML('beforeend', '<span class="end"></span>');
    }

    /*********************************
     * BUTTONS UPDATE
     ********************************/
    const DOMbtn = document.querySelectorAll('.btn');
    const btnCount = DOMbtn.length;
    for ( let i=0; i<btnCount; i++ ) {
        DOMbtn[i].insertAdjacentHTML('beforeend', '<span class="corner"></span>');
    }

    /*********************************
     * PARTNERS UPDATE
     ********************************/
    const partners = [
        ['lrt.png', 'https://www.lrt.lt/'],
        ['lnk-grupe-2.PNG', 'https://lnk.lt/', 2],
        ['lr-grupe.png', 'https://www.lrytas.lt/'],
        ['15min.png', 'https://www.15min.lt/'],
        ['delfi.png', 'https://www.delfi.lt/'],
        ['rc.png', 'https://www.rc.lt/'],
        ['relax-fm.png', 'https://relaxfm.lt/'],
        ['rusradio-lt.png', 'https://rusradio.lt/'],
        ['rock-fm.png', 'https://rockfm.lt/'],
        ['zip-fm.png', 'https://www.zipfm.lt/'],
        ['susisiekimo-paslaugos.png', 'https://www.vilniaus-susisiekimo-paslaugos.lt'],
        ['vilnius.png', 'https://vilnius.lt/'],
        ['lsa.png', 'https://www.savivaldybiu-asociacija.lt/'],
        ['lk.png', 'https://www.lietuvos-kariuomene.lt/'],
        ['global-lithuanian-leaders.png', 'https://www.global-lithunian-leaders.lt/'],
        ['plb.png', 'http://plbe.org/'],
        ['sauliu-sajunga.png', 'https://www.sauliu-sajunga.lt/'],
        ['maxima.png', 'https://www.maxima.lt'],
        ['eurovaistine.png', 'https://www.eurovaistine.lt/'],
        ['akropolis.png', 'http://akropolis.lt'],
        ['PANORAMA.png', 'https://www.panorama.lt'],
        ['outlet-park.png', 'https://www.outlet-park.lt'],
        ['sportland.png', '#'],
        ['caffeine-zaibas.png', 'https://www.coffe-inn.lt'],
        ['RIMI.png', 'https://www.rimi.lt/'],
        ['citybee.png', 'https://www.citybee.lt/'],
        ['IKI.png', 'https://www.iki.lt/'],
    ];

    function renderPartners() {
        const DOMpartners = document.querySelector('#giedoti_kviecia .content');
        const partnersCount = partners.length;
        let partnersHTML = '';
        let size = '';
        for ( let i=0; i<partnersCount; i++ ) {
            const partner = partners[i];
            size = '';
            if ( partner[2] && partner[2] > 1 ) {
                size = ' double';
            }
            partnersHTML += '<div class="partner' + size + '">\
                                <a href="' + partner[1] + '" target="_blank" rel="noreferrer">\
                                    <img src="./img/sponsors/min/' + partner[0] + '" alt="Kviečia giedoti Tautišką giesmę">\
                                </a>\
                            </div>';
        }
        DOMpartners.innerHTML = partnersHTML;
    }

    /*********************************
     * ON PAGE LOAD
     ********************************/

    window.addEventListener('load', function(){
        insertYoutube();
        renderPartners();
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

        if ( diff > 0 ) {
            updateClock( diff );

            let clock = setInterval(() => {
                now = Date.now();
                diff = (end - now) / 1000;
                updateClock( diff );
                if ( diff <= 0 ) {
                    clearInterval(clock);
                }
            }, 60000);
        }
    }

    function updateClock( diff ) {
        const clock = document.querySelectorAll('#laikrodis .clock > .time'),
            days = clock[0].querySelector('.value'),
            hours = clock[1].querySelector('.value'),
            minutes = clock[2].querySelector('.value'),
            daysLeft = Math.floor(diff / 86400),
            hoursLeft = Math.floor((diff - daysLeft * 86400) / 3600),
            minutesLeft = Math.floor(diff % 3600 / 60);

            days.innerText = daysLeft < 10 ? '0'+daysLeft : daysLeft;
            hours.innerText = hoursLeft < 10 ? '0'+hoursLeft : hoursLeft;
            minutes.innerText = minutesLeft < 10 ? '0'+minutesLeft : minutesLeft;
    }

})();