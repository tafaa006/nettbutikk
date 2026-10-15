let produkter = [
    {
        id: 1,
        navn: "Logitech G PRO X TKL Lightspeed",
        pris: 1790,
        forpris: 2290,
        lager: 5,
        vurdering: "4.8 (42 vurderinger)",
        stjerner: "★★★★★",
        bilde: "bilder/tastatur.jpg",
        beskrivelse: "Logitech G PRO X TKL Lightspeed er et trådløst gamingtastatur designet for esport-utøvere. Det har rask LIGHTSPEED-tilkobling, pålitelige mekaniske taster og stilig RGB-belysning.",
        spesifikasjoner: [
            "LIGHTSPEED trådløs teknologi",
            "GX Brown taktile mekaniske taster",
            "RGB-belysning med LIGHTSYNC"
        ]
    },
    {
        id: 2,
        navn: "Logitech G PRO X Superlight 2",
        pris: 1590,
        forpris: 1890,
        lager: 8,
        vurdering: "4.9 (68 vurderinger)",
        stjerner: "★★★★★",
        bilde: "bilder/mus.jpg",
        beskrivelse: "Logitech G PRO X Superlight 2 er en av verdens letteste og mest presise gamingmus. Med HERO 2-sensor og lav vekt gir den lynraske reaksjoner.",
        spesifikasjoner: [
            "Ultralett vekt på kun 60 g",
            "HERO 2-sensor opptil 32 000 DPI",
            "Opptil 95 timers batteritid"
        ]
    },
    {
        id: 3,
        navn: "Samsung Odyssey G5 27\" WQHD",
        pris: 2490,
        forpris: 3290,
        lager: 3,
        vurdering: "4.7 (53 vurderinger)",
        stjerner: "★★★★★",
        bilde: "bilder/skjerm.jpg",
        beskrivelse: "Samsung Odyssey G5 gir deg krystallklare bilder i 1440p-oppløsning kombinert med superrask 165 Hz oppdatering for flytende spilling.",
        spesifikasjoner: [
            "27\" WQHD (2560x1440) IPS-panel",
            "165 Hz oppdateringsfrekvens",
            "1 ms responstid og G-Sync kompatibel"
        ]
    },
    {
        id: 4,
        navn: "HyperX Cloud III Wireless",
        pris: 1490,
        forpris: 1999,
        lager: 4,
        vurdering: "4.6 (37 vurderinger)",
        stjerner: "★★★★★",
        bilde: "bilder/headset.jpg",
        beskrivelse: "HyperX Cloud III Wireless leverer legendarisk komfort med minneskum og opptil 120 timers batteritid for lange spilløkter uten avbrudd.",
        spesifikasjoner: [
            "Opptil 120 timers batteritid",
            "53 mm vinklede lydelementer",
            "Avtakbar 10 mm mikrofon med LED-indikator"
        ]
    },
    {
        id: 5,
        navn: "Corsair Vengeance RGB 32GB DDR5 RAM 6000 MT/s CL38",
        pris: 6289,
        forpris: 2499,
        lager: 5,
        vurdering: "2.4 (10 vurderinger)",
        stjerner: "★★☆☆☆",
        bilde: "bilder/ram.jpg",
        beskrivelse: "Corsair Vengeance RGB DDR5 leverer høy ytelse og optimal båndbredde for krevende oppgaver og gaming. Utstyrt med dynamisk ti-soners RGB-belysning og solid aluminiums-varmespreder.",
        spesifikasjoner: [
            "32GB DDR5 RAM",
            "6000 MT/s CL38",
            "Intel XMP- og AMD EXPO-profiler"
        ]
    }
];

let parametere = new URLSearchParams(window.location.search);
let valgtId = Number(parametere.get("id"));

let valgtProdukt = null;
for (let i = 0; i < produkter.length; i++) {
    if (produkter[i].id === valgtId) {
        valgtProdukt = produkter[i];
    }
}

let visning = document.getElementById("produktVisning");
let ikkeFunnet = document.getElementById("ikkeFunnet");
let bilde = document.getElementById("produktBilde");
let navn = document.getElementById("produktNavn");
let stjerner = document.getElementById("produktStjerner");
let vurdering = document.getElementById("produktVurdering");
let spar = document.getElementById("produktSpar");
let pris = document.getElementById("produktPris");
let forpris = document.getElementById("produktForpris");
let lager = document.getElementById("produktLager");
let beskrivelse = document.getElementById("produktBeskrivelse");
let spesifikasjoner = document.getElementById("produktSpesifikasjoner");

if (valgtProdukt) {
    bilde.src = valgtProdukt.bilde;
    bilde.alt = valgtProdukt.navn;
    navn.textContent = valgtProdukt.navn;
    stjerner.textContent = valgtProdukt.stjerner;
    vurdering.textContent = valgtProdukt.vurdering;

    let sparBelop = valgtProdukt.forpris - valgtProdukt.pris;
    spar.textContent = "SPAR " + sparBelop + " kr";

    pris.textContent = valgtProdukt.pris;
    forpris.textContent = valgtProdukt.forpris;
    lager.textContent = "✓ På lager (" + valgtProdukt.lager + " stk)";
    beskrivelse.textContent = valgtProdukt.beskrivelse;

    spesifikasjoner.textContent = "";
    for (let i = 0; i < valgtProdukt.spesifikasjoner.length; i++) {
        let punkt = document.createElement("li");
        punkt.textContent = valgtProdukt.spesifikasjoner[i];
        spesifikasjoner.appendChild(punkt);
    }
} else {
    visning.style.display = "none";
    ikkeFunnet.style.display = "block";
}
