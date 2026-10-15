const produktliste = document.getElementById("produktliste");
const kategoriValg = document.getElementById("kategori");
const sorteringValg = document.getElementById("sortering");
const sokFelt = document.getElementById("sok");
const ingenTreff = document.getElementById("ingenTreff");
const produktKort = Array.from(document.querySelectorAll(".produkt"));

function visProdukter() {
    const kategori = kategoriValg.value;
    const sokTekst = sokFelt.value.trim().toLowerCase();
    const sortering = sorteringValg.value;

    let antallSynlige = 0;

    for (let i = 0; i < produktKort.length; i++) {
        const kort = produktKort[i];
        const kortKategori = kort.dataset.kategori;
        const navn = kort.querySelector("h3").textContent.toLowerCase();

        const matcherKategori = (kategori === "alle" || kortKategori === kategori);
        const matcherSok = (sokTekst === "" || navn.includes(sokTekst));

        if (matcherKategori && matcherSok) {
            kort.style.display = "flex";
            antallSynlige++;
        } else {
            kort.style.display = "none";
        }
    }

    if (ingenTreff) {
        if (antallSynlige === 0) {
            ingenTreff.style.display = "block";
        } else {
            ingenTreff.style.display = "none";
        }
    }

    if (sortering === "lav") {
        produktKort.sort(function (a, b) {
            return Number(a.dataset.pris) - Number(b.dataset.pris);
        });
    } else if (sortering === "høy") {
        produktKort.sort(function (a, b) {
            return Number(b.dataset.pris) - Number(a.dataset.pris);
        });
    } else {
        produktKort.sort(function (a, b) {
            return Number(a.dataset.id) - Number(b.dataset.id);
        });
    }

    for (let i = 0; i < produktKort.length; i++) {
        produktliste.appendChild(produktKort[i]);
    }
}

kategoriValg.addEventListener("change", visProdukter);
sorteringValg.addEventListener("change", visProdukter);
sokFelt.addEventListener("input", visProdukter);

visProdukter();