let produktliste = document.getElementById("produktliste");
let kategoriValg = document.getElementById("kategori");
let sorteringValg = document.getElementById("sortering");
let sokFelt = document.getElementById("sok");
let ingenTreff = document.getElementById("ingenTreff");
let kortListe = Array.from(document.querySelectorAll(".produkt"));

function visProdukter() {
    let valgtKategori = kategoriValg.value;
    let sok = sokFelt.value.toLowerCase();
    let sortering = sorteringValg.value;
    let antall = 0;

    for (let i = 0; i < kortListe.length; i++) {
        let kort = kortListe[i];
        let kategori = kort.dataset.kategori;
        let tittel = kort.querySelector("h3").textContent.toLowerCase();

        let riktigKategori = (valgtKategori === "alle" || kategori === valgtKategori);
        let riktigSok = tittel.includes(sok);

        if (riktigKategori && riktigSok) {
            kort.style.display = "flex";
            antall++;
        } else {
            kort.style.display = "none";
        }
    }

    if (antall === 0) {
        ingenTreff.style.display = "block";
    } else {
        ingenTreff.style.display = "none";
    }

    if (sortering === "lav") {
        kortListe.sort(function (a, b) {
            return Number(a.dataset.pris) - Number(b.dataset.pris);
        });
    } else if (sortering === "høy") {
        kortListe.sort(function (a, b) {
            return Number(b.dataset.pris) - Number(a.dataset.pris);
        });
    } else {
        kortListe.sort(function (a, b) {
            return Number(a.dataset.id) - Number(b.dataset.id);
        });
    }

    for (let i = 0; i < kortListe.length; i++) {
        produktliste.appendChild(kortListe[i]);
    }
}

kategoriValg.addEventListener("change", visProdukter);
sorteringValg.addEventListener("change", visProdukter);
sokFelt.addEventListener("input", visProdukter);

visProdukter();