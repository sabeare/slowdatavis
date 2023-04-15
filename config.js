var config = {
    style: 'mapbox://styles/sabeare/cjdapwozeb1tg2roervfarft0',
    accessToken: 'pk.eyJ1Ijoic2FiZWFyZSIsImEiOiJjbGdnam12aXMwY2M2M2NwOGQ5YzhuN2FiIn0.XV3OFsZ65Niqc9F5ulg6Ig',
    showMarkers: true,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Slow Stories uit het Soesterkwatier',
    subtitle: 'Waarom subjectieve verhalen beter inzichten geven',
    byline: 'By Baukje Rienks | 12 juni 2023',
    footer: 'gemaakt door Baukje Rienks, met behulp van X. Free en Y. lovely',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'center',
            hidden: false,
            title: 'Slow door het Soesterkwartier',
            image: '',
            description: 'Echte verhalen krijg je te horen met deze slow design research methode, over verbinding met de wijk en verbinding onderling. Het geeft beter inzicht in de complexiteit van de omgeving. Deze methode is niet een quick fix voor een enkelvoudig probleem maar neemt de complexiteit als een geheel. slow design research levert nieuwe informatie omdat de focus ligt op het vertragen, reflectie toelaten van complexiteit en verbinding. Het geeft ruimte voor het menselijke als je data onderzoekt het geeft ruimte aan context. Daarom is deze methode geschikt als je een goed inzicht wil wat er speelt in een buurt. Dat je aannames en bias van zo n buurt wilt onderzoeken, challengen. Dat geeft informatie over de buurt zelf maar is ook breder maatschappelijk te trekken. Dat maakt deze methode goed bruikbaar aan het begin van een veranderingstraject. Het geeft ruimte voor burgers om te participeren maar geeft ook ruimte aan stemmen van organisaties en (semi) overheid in betreffende buurt.Geen consensus of afgerond verhaal, wel een opening in gesprekken waarin kennis en ervaringen gedeeld kunnen worden',
            location: {
                center: [5.36413, 52.15914],
                zoom: 15.36,
                pitch: 45.00,
                bearing: 26.40
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Walk&talk',
            image: './path/to/image/source.png',
            description: 'Deze route liep ik met Sander]',
            location: {
                center: [5.36400, 52.16125],
                zoom: 15.00,
                pitch: 0.00,
                bearing: 0.00
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'tracksSander',
                     opacity: 1,
                     duration: 5000
                 }
            ],
            onChapterExit: [
                 {
                     layer: 'tracksSander',
                     opacity: 0
                 }
            ]
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: '360 test',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [6.15116, 46.20595],
                zoom: 12.52,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'Third Title',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-58.54195, -34.71600],
                zoom: 4,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
