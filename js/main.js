(function(){
    const youtubeLink = 'I9JIVpu3osg';

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
        ['eurovaistine.png', 'https://www.eurovaistine.lt/'],
        ['rusradio-lt.png', 'https://rusradio.lt/'],
        ['rock-fm.png', 'https://rockfm.lt/'],
        ['zip-fm.png', 'https://www.zipfm.lt/'],
        ['tbwa.png', 'http://tbwa.com/'],
        ['vilnius.png', 'https://vilnius.lt/'],
        ['lsa.png', 'https://www.savivaldybiu-asociacija.lt/'],
        ['lk.png', 'https://www.lietuvos-kariuomene.lt/'],
        ['global-lithuanian-leaders.png', 'https://www.global-lithunian-leaders.lt/'],
        ['plb.png', 'http://plbe.org/'],
        ['sauliu-sajunga.png', 'https://www.sauliu-sajunga.lt/'],
        ['maxima.png', 'https://www.maxima.lt'],
        ['IKI.png', 'https://www.iki.lt/'],
        ['akropolis.png', 'http://akropolis.lt'],
        ['PANORAMA.png', 'https://www.panorama.lt'],
        ['outlet-park.png', 'https://www.outlet-park.lt'],
        ['susisiekimo-paslaugos.png', 'https://www.vilniaus-susisiekimo-paslaugos.lt'],
        ['caffeine-zaibas.png', 'https://www.coffe-inn.lt'],
        ['RIMI.png', 'https://www.rimi.lt/'],
        ['citybee.png', 'https://www.citybee.lt/'],
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
                                <a href="' + partner[1] + '" target="_blank">\
                                    <img src="./img/sponsors/min/' + partner[0] + '">\
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
    });

    function insertYoutube() {
        const DOM = document.querySelector('#ode_giesmei .content');
        return DOM.innerHTML = '<iframe src="https://www.youtube.com/embed/' + youtubeLink + '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>';
    }

})();