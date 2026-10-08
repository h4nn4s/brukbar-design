import productImages from "./productImages";

// produktinfo ligger lokalt pga sidan i nuläget inte behöver en databas eller ett backend
const products = [
  {
    id: 1,
    name: "Kolme",
    image: productImages.kolme,
    images: [
      productImages.kolme,
      productImages.kolme2,
      productImages.kolme3,
      productImages.kolme4,
    ],
    description:
      "Kolme är en av våra stora framgångar. I serien ingår också Yksi och Pari. Tanken med Kolme är att formen följer ljuspunkterna. Vi utgick från Lyktans standardlamphållare för plafonder och då blev formen given. Kolme var vår första lampa på marknaden och kom hösten 2006. \n\n Lampan finns i storlekarna 50 och 70 cm och du kan ha så mycket som tre 60-watts lampor i den.",
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
      "Pari ingår i samma serie som vår populära Kolme och Yksi. Denna har som namnet antyder två lampor och formen följer de två ljuspunkterna.",
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
      "Optimal är ett hjälpmedel som höjer upp möbler. Benhöjaren passar till många olika storlekar på möbelben, medar och sockel, tack vare det stora innermåttet på 8x10,5 cm. Optimal går att använda i tre olika höjder 6-7, 5-9 cm. \n\n Benhöjaren Optimal produceras och säljs av Gula Rehab, www.gulare.com",
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
];

export default products;