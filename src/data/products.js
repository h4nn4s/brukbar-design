import pari from "../assets/images/products/pari/pari.jpg";
import pari2 from "../assets/images/products/pari/pari2.jpg";
import pari3 from "../assets/images/products/pari/pari3.jpg";
import kolme from "../assets/images/products/kolme/kolme.jpg";
import kolme2 from "../assets/images/products/kolme/kolme2.jpg";
import kolme3 from "../assets/images/products/kolme/kolme3.jpg";
import kolme4 from "../assets/images/products/kolme/kolme4.jpg";
import embla from "../assets/images/products/embla/embla.jpg";
import embla2 from "../assets/images/products/embla/embla2.jpg";
import embla3 from "../assets/images/products/embla/embla3.jpg";
import mullbaret from "../assets/images/products/mullbaret/mullbaret.jpg";
import mullbaret2 from "../assets/images/products/mullbaret/mullbaret2.jpg";
import mullbaret3 from "../assets/images/products/mullbaret/mullbaret3.jpg";
import optimal from "../assets/images/products/optimal/optimal.jpg";
import optimal2 from "../assets/images/products/optimal/optimal2.jpg";
import optimal3 from "../assets/images/products/optimal/optimal3.jpg";
import optimal4 from "../assets/images/products/optimal/optimal4.jpg";
import optimal5 from "../assets/images/products/optimal/optimal5.jpg";
import kompass from "../assets/images/products/kompass/kompass.jpg";
import kompass2 from "../assets/images/products/kompass/kompass2.jpg";
import brum from "../assets/images/products/brum/brum.jpg";
import kokong from "../assets/images/products/kokong/kokong.jpg";
import kokong2 from "../assets/images/products/kokong/kokong2.jpg";
import kokong3 from "../assets/images/products/kokong/kokong3.jpg";
import notkreatur from "../assets/images/products/notkreatur/notkreatur.jpg";


// produktinfo ligger lokalt pga sidan i nuläget inte behöver en databas eller ett backend
const products = [
  {
    id: 1,
    name: "Kolme",
    image: kolme,
    images: [kolme, kolme2, kolme3, kolme4],
    description: "Kolme är en av våra stora framgångar. I serien ingår också Yksi och Pari. Tanken med Kolme är att formen följer ljuspunkterna. Vi utgick från Lyktans standardlamphållare för plafonder och då blev formen given. Kolme var vår första lampa på marknaden och kom hösten 2006. \n\n Lampan finns i storlekarna 50 och 70 cm och du kan ha så mycket som tre 60-watts lampor i den.",
  },
  {
    id: 2,
    name: "Pari",
    image: pari,
    images: [pari, pari2, pari3],
    description: "Pari ingår i samma serie som vår populära Kolme och Yksi. Denna har som namnet antyder två lampor och formen följer de två ljuspunkterna.",
  },
  {
    id: 3,
    name: "Embla",
    image: embla,
    images: [embla, embla2, embla3],
    description: "En klassisk form med nya detaljer. Skärm av linnetyg med tryckknappar. Överdelen har perforerade hål vilket ger ett vacker ljusspel i taket.",
  },
  {
    id: 4,
    name: "Mullbäret",
    image: mullbaret,
    images: [mullbaret, mullbaret2, mullbaret3],
    description: "Uteplatsen tillhör bostadsrättsföreningen Mullbäret på Henrik Gjutares gata i Skövde. Kraven som fanns på hur den skulle vara utformad var bland annat att den skulle vara lättskött, passa både gammal och ung i föreningen och tillåta flera sällskap samtidigt för olika aktiviteter. Uteplatsen blev mycket populär och bidrog till att höja värdet på lägenheterna."
  },
  {
    id: 5,
    name: "Optimal",
    image: optimal,
    images: [optimal, optimal2, optimal3, optimal4, optimal5],
    description: "Optimal är ett hjälpmedel som höjer upp möbler. Benhöjaren passar till många olika storlekar på möbelben, medar och sockel, tack vare det stora innermåttet på 8x10,5 cm. Optimal går att använda i tre olika höjder 6-7, 5-9 cm. \n\n Benhöjaren Optimal produceras och säljs av Gula Rehab, www.gulare.com",
  },
  {
    id: 6,
    name: "Kompass",
    image: kompass,
    images: [kompass, kompass2],
    description: "När vi skapade Kompass ville vi inte bara göra en lampa, utan även en vädersträcksvisare. Med i kartongen finns en liten kompass, ställ in lampans glas så att nordpilen pekar åt norr. En perfekt inflyttningspresent så att man enkelt vet åt vilket håll man har norr."
  },
  {
    id: 7,
    name: "Brum",
    image: brum,
    description: "Barnlampan Brum finns som bordslampa och fönsterlampa.",
  },
  {
    id: 8,
    name: "Kokong",
    image: kokong,
    images: [kokong, kokong2, kokong3],
    description: "Ett textilt mönster som är inspirerat av naturens former.\n\nFinns i tre olika utföranden; kukong i grått, kukong kulör och kukong på rad.",
  },
  {
    id: 9,
    name: "Nötkreaturstiftelsen Skaraborg",
    image: notkreatur,
    description: "Loggan är gjord till Nötkreaturstiftelsen Skaraborg 2012.",
  },
];

export default products;