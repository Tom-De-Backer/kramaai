const empty = { logo: require("./empty.png"), site: "" };
const hoofdSponsors = [
    { site: "", logo: require("./hoofd/Elbo.png"), alt: "Elbo" },
    { site: "https://asbesim.be/", logo: require("./hoofd/ASBESIM.jpg"), alt: "Asbesim" },
    {
        site: "https://www.facebook.com/T-Gouden-Fritje-790272917985589/",
        logo: require("./hoofd/Gouden fritje.png"),
        alt: "'T gouden fritje",
    },
    { site: "https://ki-music.be/", logo: require("./hoofd/ki-music.jpg"), alt: "KI Music" },
    { site: "https://techsquad.be/", logo: require("./hoofd/Techsquad.png"), alt: "Techsquad" },
];

const platinumSponsors = [
    {
        site: "https://www.makelaarinverzekeringen.be/makelaar/verzekerings-en-zakenkantoor-heyvaert-bv",
        logo: require("./platinum/Heyvaert verzekeringen.png"),
        alt: "Heyvaert verzekeringen",
    },
];

const goldenSponsors = [
    { site: "https://www.tobounce.be/", logo: require("./golden/To Bounce.png"), alt: "To Bounce" },
    { site: "https://poortcenter.be/", logo: require("./golden/Poortcenter.jpg"), alt: "Poortcenter" },
    { site: "https://wijnbar-t.be/", logo: require("./golden/Wijnbart.jpg"), alt: "Wijnbart" },
    { site: "https://www.ah.nl/", logo: require("./golden/AH MERCHTEM BOSKANT PLAAT.png"), alt: "Albert Heijn" },
    { site: "", logo: require("./golden/Belz.jpeg"), alt: "Belz" },
    { site: "https://www.cornetbier.be", logo: require("./golden/cornet.png"), alt: "Cornet" },
    { site: "", logo: require("./golden/D-SAN.png"), alt: "D-SAN" },
    { site: "https://eleverco.be/", logo: require("./golden/Eleverco.png"), alt: "Eleverco" },
    { site: "", logo: require("./golden/EVS-LOGO.jpg"), alt: "EVS Technics" },
    { site: "", logo: require("./golden/Guna dakwerken.png"), alt: "Guna dakwerken" },
    { site: "", logo: require("./golden/SDC Accounting.png"), alt: "SDC Accounting" },
];

export { hoofdSponsors, platinumSponsors, goldenSponsors, empty };
