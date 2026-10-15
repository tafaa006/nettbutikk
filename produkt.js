const produkter = [
    {
        id: 1,
        navn: "Logitech G PRO X TKL Lightspeed",
        pris: 1790,
        forpris: 2290,
        lager: 5,
        vurdering: 4.8,
        antallVurderinger: 42,
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
        vurdering: 4.9,
        antallVurderinger: 68,
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
        vurdering: 4.7,
        antallVurderinger: 53,
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
        vurdering: 4.6,
        antallVurderinger: 37,
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
        navn: "Corsair Vengeance RGB 32GB DDR5",
        pris: 6289,
        forpris: 2499,
        lager: 5,
        vurdering: 2.4,
        antallVurderinger: 10,
        bilde: "bilder/ram.jpg",
        beskrivelse: "Corsair Vengeance RGB 32GB DDR5 er en høy ytelse RAM med RGB-belysning og støtte for Intel XMP og AMD EXPO-profiler.",
        spesifikasjoner: [
            "32GB DDR5 RAM",
            "6000 MT/s CL38",
            "Intel XMP- og AMD EXPO-profiler"
        ]
    }
];

const parametere = new URLSearchParams(window.location.search);
const id = Number(parametere.get("id"));

const produkt = produkter.find(function (p) {
    return p.id === id;
});

const visning = document.getElementById("produktVisning");

if (produkt) {
    let spesHtml = "";
    for (let i = 0; i < produkt.spesifikasjoner.length; i++) {
        spesHtml += "<li>" + produkt.spesifikasjoner[i] + "</li>";
    }

    visning.innerHTML = `
        <div class="produkt-side">
            <div class="produkt-side-bilde">
                <img src="${produkt.bilde}" alt="${produkt.navn}">
            </div>
            <div class="produkt-side-info">
                <h2>${produkt.navn}</h2>
                <p class="vurdering"><span class="stjerner">★★★★★</span> ${produkt.vurdering} (${produkt.antallVurderinger} vurderinger)</p>
                <div class="prisboks">
                    <span class="spar">SPAR ${produkt.forpris - produkt.pris} kr</span>
                    <p class="pris">${produkt.pris} kr</p>
                    <p class="forpris">Før ${produkt.forpris} kr</p>
                </div>
                <p class="lagerstatus paa-lager">✓ På lager (${produkt.lager} stk)</p>
                <p class="beskrivelse">${produkt.beskrivelse}</p>
                <h3>Spesifikasjoner</h3>
                <ul class="spesifikasjoner">${spesHtml}</ul>
            </div>
        </div>
    `;
} else {
    visning.innerHTML = "<p>Fant ikke produktet.</p>";
}
