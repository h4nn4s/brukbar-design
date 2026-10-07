import pari from "../assets/images/products/pari.jpg";
import kolme from "../assets/images/products/kolme/kolme.jpg";
import kolme2 from "../assets/images/products/kolme/kolme2.jpg";
import kolme3 from "../assets/images/products/kolme/kolme3.jpg";
import kolme4 from "../assets/images/products/kolme/kolme4.jpg";
import embla from "../assets/images/products/embla/embla.jpg";
import embla2 from "../assets/images/products/embla/embla2.jpg";
import embla3 from "../assets/images/products/embla/embla3.jpg";
import mullbaret from "../assets/images/products/mullbaret.jpg";
import optimal from "../assets/images/products/optimal/optimal.jpg";
import optimal2 from "../assets/images/products/optimal/optimal2.jpg";
import optimal3 from "../assets/images/products/optimal/optimal3.jpg";
import optimal4 from "../assets/images/products/optimal/optimal4.jpg";
import optimal5 from "../assets/images/products/optimal/optimal5.jpg";


// produktinfo ligger lokalt pga sidan i nuläget inte behöver en databas eller ett backend
const products = [
  {
    id: 1,
    name: "Kolme",
    image: kolme,
    images: [kolme, kolme2, kolme3, kolme4],
    description: "Kolme är en av våra stora framgångar. I serien ingår också Yksi och Pari. Tanken med Kolme är att formen följer ljuspunkterna. Vi utgick från Lyktans standardlamphållare för plafonder och då blev formen given. Kolme var vår första lampa på marknaden och kom hösten 2006. Lampan finns i storlekarna 50 och 70 cm och du kan ha så mycket som tre 60 watts lampor i den.",
  },
  {
    id: 2,
    name: "Pari",
    image: pari,
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
    description: "Uteplatsen tillhör bostadsrättsföreningen Mullbäret på Henrik Gjutares gata i Skövde. Kraven som fanns på hur den skulle vara utformad var bland annat att den skulle vara lättskött, passa både gammal och ung i föreningen och tillåta flera sällskap samtidigt för olika aktiviteter. Uteplatsen blev mycket populär och bidrog till att höja värdet på lägenheterna."
  },
  {
    id: 5,
    name: "Optimal",
    image: optimal,
    images: [optimal, optimal2, optimal3, optimal4, optimal5],
    description: "Optimal är ett hjälpmedel som höjer upp möbler. Benhöjaren passar till många olika storlekar på möbelben, medar och sockel, tack vare det stora innermåttet på 8x10,5 cm. Optimal går att använda i tre olika höjder 6-7,5-9 cm. Benhöjaren Optimal produceras och säljs av Gula Rehab www.gulare.com",
 },
  {
    id: 6,
    name: "Pari",
    image: pari,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 7,
    name: "Embla",
    image: embla,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 8,
    name: "Mullbäret",
    image: mullbaret,
    description: "Kommer senare.",
  },
  {
    id: 9,
    name: "Kolme",
    image: kolme,
    description: "Kommer senare.",
  },
  {
    id: 10,
    name: "Pari",
    image: pari,
    description: "Kommer senare.",
  },
  {
    id: 11,
    name: "Embla",
    image: embla,
    description: "Kommer senare.",
  },
  {
    id: 12,
    name: "Mullbäret",
    image: mullbaret,
    description: "Kommer senare.",
  },
  {
    id: 13,
    name: "Kolme",
    image: kolme,
    description: "Kommer senare.",
  },
  {
    id: 14,
    name: "Pari",
    image: pari,
    description: "Kommer senare.",
  },
  {
    id: 15,
    name: "Embla",
    image: embla,
    description: "Kommer senare.",
  },
  {
    id: 16,
    name: "Mullbäret",
    image: mullbaret,
    description: "Kommer senare.",
  },
  {
    id: 17,
    name: "Mullbäret",
    image: mullbaret,
    description: "Kommer senare.",
  },
  {
    id: 18,
    name: "Kolme",
    image: kolme,
    description: "Kommer senare.",
  },
  {
    id: 19,
    name: "Pari",
    image: pari,
    description: "Kommer senare.",
  },
  {
    id: 20,
    name: "Embla",
    image: embla,
    description: "Kommer senare.",
  },
  {
    id: 21,
    name: "Mullbäret",
    image: mullbaret,
    description: "Kommer senare.",
  },
];

export default products;