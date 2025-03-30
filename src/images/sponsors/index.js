const empty = { logo: require("./empty.png"), site: "" };
const hoofdSponsors = [
    { site: "", logo: require("./hoofd/Elbo.png"), alt: "Elbo" },
    {
        site: "https://www.facebook.com/T-Gouden-Fritje-790272917985589/",
        logo: require("./hoofd/Gouden fritje.png"),
        alt: "'T gouden fritje",
    },
    { site: "https://ki-music.be/", logo: require("./hoofd/ki-music.jpg"), alt: "KI Music" },
    { site: "https://techsquad.be/", logo: require("./hoofd/Techsquad.png"), alt: "Techsquad" },
    { site: "https://stores.delhaize.be/nl/delhaize-asse", logo: require("./hoofd/logo asse.png"), alt: "Delhaize Asse" },
    {
        site: "https://www.ebikestoreasse.be/nl/",
        logo: require("./hoofd/Premium E-Bike Store_Final 1.jpg"),
        alt: "E-Bike store Asse",
    },
];

const platinumSponsors = [
    {
        site: "https://www.praktijkvitalis.be/",
        logo: require("./platinum/Vitalis-grootv2.jpg"),
        alt: "Vitalis - osteopathie & kenesistherapie",
    },
    { site: "https://www.m-i.be/", logo: require("./platinum/logo_MI.png"), alt: "Mechanic international" },
];

const goldenSponsors = [
    {
        site: "http://www.heyvaert.eu",
        logo: require("./golden/Heyvaert verzekeringen.png"),
        alt: "Heyvaert verzekeringen",
    },
    { site: "https://wijnbar-t.be/", logo: require("./golden/Wijnbart.jpg"), alt: "Wijnbart" },
    { site: "", logo: require("./golden/Belz.jpeg"), alt: "Belz" },
    { site: "https://www.cornetbier.be", logo: require("./golden/cornet.png"), alt: "Cornet" },
    { site: "", logo: require("./golden/SDC Accounting.png"), alt: "SDC Accounting" },
    { site: "", logo: require("./golden/Kopie van Wouter Tistaert.png"), alt: "Wouter Tistaert bvba" },
    { site: "https://www.white4you.be/", logo: require("./golden/Logo white4you kleur.png"), alt: "White4you" },
    {
        site: "https://garage.peugeot.be/nl/vanweyenbergh/?location=Asse%7C0",
        logo: require("./golden/Van Weyenberg Asse_HR.png"),
        alt: "Van Weyenberg Asse",
    },
    { site: "https://jdworks.be", logo: require("./golden/jdworks.jpeg"), alt: "JD Works" },
];

export { hoofdSponsors, platinumSponsors, goldenSponsors, empty };
