import productImages from "./productImages";

// produktinfo ligger lokalt pga sidan i nuläget inte behöver en databas eller ett backend
const products = [
  {
    id: 1,
    name: "Kolme",
    image: productImages.kolme3,
    images: [
      productImages.kolme3,
      productImages.kolme5,
      productImages.kolme2,
      productImages.kolme4,
      productImages.kolme,
    ],
    description:
      "Kolme är en av våra stora framgångar. I serien ingår också Yksi och Pari. Tanken med Kolme är att formen följer ljuspunkterna. Vi utgick från Lyktans standardlamphållare för plafonder och då blev formen given. Kolme var vår första lampa på marknaden och kom hösten 2006. Lampan finns i storlekarna 50 och 70 cm och du kan ha så mycket som tre 60-watts lampor i den.\n\n Kolme produceras och säljs av Lyktan Bankeryd AB\nwww.lyktan-bankeryd.se",
  },
  {
    id: 2,
    name: "Pari",
    image: productImages.pari,
    images: [
      productImages.pari,
      productImages.pari2,
      productImages.pari3,
    ],
    description:
      "Pari ingår i samma serie som vår populära Kolme och Yksi. Denna har som namnet antyder två lampor och formen följer de två ljuspunkterna.\n\n Pari produceras och säljs av Lyktan Bankeryd AB\nwww.lyktan-bankeryd.se",
  },
  {
    id: 3,
    name: "Embla",
    image: productImages.embla,
    images: [
      productImages.embla,
      productImages.embla2,
      productImages.embla3,
    ],
    description:
      "En klassisk form med nya detaljer. Skärm av linnetyg med tryckknappar. Överdelen har perforerade hål vilket ger ett vacker ljusspel i taket.",
  },
  {
    id: 4,
    name: "Mullbäret",
    image: productImages.mullbaret,
    images: [
      productImages.mullbaret,
      productImages.mullbaret2,
      productImages.mullbaret3,
    ],
    description:
      "Uteplatsen tillhör bostadsrättsföreningen Mullbäret på Henrik Gjutares gata i Skövde. Kraven som fanns på hur den skulle vara utformad var bland annat att den skulle vara lättskött, passa både gammal och ung i föreningen och tillåta flera sällskap samtidigt för olika aktiviteter. Uteplatsen blev mycket populär och bidrog till att höja värdet på lägenheterna.",
  },
  {
    id: 5,
    name: "Optimal",
    image: productImages.optimal,
    images: [
      productImages.optimal,
      productImages.optimal2,
      productImages.optimal3,
      productImages.optimal4,
      productImages.optimal5,
    ],
    description:
      "Optimal är ett hjälpmedel som höjer upp möbler. Benhöjaren passar till många olika storlekar på möbelben, medar och sockel, tack vare det stora innermåttet på 8x10,5 cm. Optimal går att använda i tre olika höjder 6-7, 5-9 cm. \n\n Benhöjaren Optimal produceras och säljs av Gula Rehab www.gulare.com",
  },
  {
    id: 6,
    name: "Kompass",
    image: productImages.kompass,
    images: [
      productImages.kompass,
      productImages.kompass2,
    ],
    description:
      "När vi skapade Kompass ville vi inte bara göra en lampa, utan även en vädersträcksvisare. Med i kartongen finns en liten kompass, ställ in lampans glas så att nordpilen pekar åt norr. En perfekt inflyttningspresent så att man enkelt vet åt vilket håll man har norr.",
  },
  {
    id: 7,
    name: "Brum",
    image: productImages.brum,
    description:
      "Barnlampan Brum finns som bordslampa och fönsterlampa.",
  },
  {
    id: 8,
    name: "Kokong",
    image: productImages.kokong,
    images: [
      productImages.kokong,
      productImages.kokong2,
      productImages.kokong3,
    ],
    description:
      "Ett textilt mönster som är inspirerat av naturens former.\n\nFinns i tre olika utföranden; kukong i grått, kukong kulör och kukong på rad.",
  },
  {
    id: 9,
    name: "Nötkreaturstiftelsen Skaraborg",
    image: productImages.notkreatur,
    description:
      "Loggan är gjord till Nötkreaturstiftelsen Skaraborg 2012.",
  },
  {
    id: 10,
    name: "Plank",
    image: productImages.favicon,
    description:
      "En privatperson i Särö, Göteborg ville under planeringen av sitt bullerplanksbygge ha förslag på hur planket skulle se ut. Vi gjorde tre förslag som vi presenterade genom fotomontage. \n \n (Bild på projektet kommer)",
  },
  {
    id: 11,
    name: "Polly",
    image: productImages.polly,
    images: [productImages.polly, productImages.polly2],
    description: "Tre lampor i en. Denna taklampa har utbytbar skärm. Tre olika mönster följer med när du köper den här lampan som du bara hittar hos Mio."
  },
  {
    id: 12,
    name: "Optoskand",
    image: productImages.optoskand,
    images: [
      productImages.optoskand,
      productImages.optoskand2,
      productImages.optoskand3,
    ],
    description:
      "Design av sommarpresent till företaget Optoskand (2008). Nyckelband med tillhörande usb-minne med tryck av typiskt svenska motiv."
  },
  {
    id: 13,
    name: "LVI",
    image: productImages.lvi,
    images: [
      productImages.lvi,
      productImages.lvi2,
      productImages.lvi3,
      productImages.lvi4,
      productImages.lvi5,
      productImages.lvi6,
    ],
    description:
      ["Ett projekt genom Design med Omtanke (Västra Götalandsregionen) som utfördes tillsammans med LVI Rettig ICC med tanke att användas i väntrum, entréer och lounger. Möbeln består av moduler som kan byggas ihop. De är både en sittplats, klädavhängning och rumsavdelare. En av sektionerna är tänkt att hänga på väggen.",
        " På båda modulerna finns unika funktioner med inbyggd värme, och stöden fungerar inte bara som stöd utan är även behagligt varma för kalla fingrar. Den roliga bysten är varm och gör därmed kläderna behagligare att ta på. Är du kall om ryggen fungerar den bra att luta sig mot."],
  },
  {
    id: 14,
    name: "Parant",
    image: productImages.parant,
    description:
      "Pendel med skärm av tyg.\n\nProduceras och  säljs av Lyktan Bankeryd AB\nwww.lyktan-bankeryd.se"
  },
  {
    id: 15,
    name: "Spira",
    image: productImages.spira,
    images: [productImages.spira, productImages.spira2],
    description:
      "Pendel med skärm av tyg. Spira har förekommit i flera annonser bland annat i Drömhem och trädgård, se bild 2.\n\nProduceras och  säljs av Lyktan Bankeryd AB\nwww.lyktan-bankeryd.se"
  },
  {
    id: 16,
    name: "Tygplafonder",
    image: productImages.ida,
    images: [
      productImages.ida,
      productImages.stina,

    ],
    description:
      "Dark och Soft är plafonder med skärm av tyg och undersida av glas. Det finns i flertal olika tyger så som: Spira, Parant, Ida och Stina. De finns i diametrarna 40 och 50 cm. \n \nDe produceras och  säljs av Lyktan Bankeryd AB\nwww.lyktan-bankeryd.se"
  },
  {
    id: 17,
    name: "Sydpolen",
    image: productImages.sydpolen,
    description:
      "Tanken med plafonden Sydpolen var att avbilda sydpolen så som den ser ut idag, hur den ser ut om 10 år vet ingen. Brukbar Design skänker all royalty från lampan Sydpolen till Naturskyddsföreningen.\n\nSydpolen produceras och  säljs av Lyktan Bankeryd AB\nwww.lyktan-bankeryd.se"
  },
  {
    id: 18,
    name: "Spår i rad",
    image: productImages.spar,
    description:
      "Detta tygmönster tillkom genom när vi en dag promenerade i snön och såg alla djurspår, vi fick då idéen om att sätta samman spår från många olika djur på ett tyg."
  },
  {
    id: 19,
    name: "Tellus",
    image: productImages.tellus,
    description:
      "Mönstret på plafonden Tellus är inspirerat av planeterna Tellus och Venus omloppsbanor kring solen. Venus är vår planet Tellus närmaste granne och bortser man från solen och månen är Venus den ljusaste punkten på himlen, morgon- och aftonstjärnan.\n\nTellus produceras och säljs av Lyktan Bankeryd AB\nwww.lyktan-bankeryd.se"
  },
  {
    id: 20,
    name: "Terass Samvetet",
    image: productImages.terass,
    images: [productImages.terass,
    productImages.terass2,
    productImages.terass3,
    productImages.terass4],
    description:
      "Den här terrassen har vi ritat åt Akademiska Hus. Den tillhör Göteborgs universitet och ligger på Sprängkullsgatan i Göteborg. Kravet från Akademiska hus var att den skulle vara väldigt lättskött, nästan helt underhållsfri. Vår lösning var att använda mossedum, marktäckare, gräs och pipranka som är tåliga växter, med nergrävd droppslang som bevattningssystem. Mossedum är väldigt trevligt att jobba med eftersom det kräver så lite näring att det är svårt för ogräs att få fäste. Allt eftersom årstiden ändras skiftar också mossans färg vilket är trevligt på innegårdar där det inte finns så mycket träd."
  },
  {
    id: 21,
    name: "Projekt Sydafrika",
    image: productImages.sydafrika,
    description:
      "Loggan gjordes 2010 till Mbekweni Sweden Empowerment Program, ett ideellt projekt drivet av Centerkvinnorna i Halland tillsammans med organisationer i kåkstaden Mbekweni i Västra Kapprovincen, Sydafrika."
  },

  {
    id: 22,
    name: "Wall-it",
    image: productImages.wallit,
    images: [
      productImages.wallit,
      productImages.wallit2,
      productImages.wallit3,
      productImages.wallit4,
    ],
    description:
      "En vägglampa i linnetyg med utskuret mönster i två varianter. Den har en fiffig lösning som gör det oerhört enkelt att byta lampan i den.\n\nProduceras och säljs av Lyktan Bankeryd AB\nwww.lyktan-bankeryd.se"
  },



];

export default products;