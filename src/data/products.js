import pari from "../assets/images/products/pari.jpg";
import kolme from "../assets/images/products/kolme.jpg";
import kolme2 from "../assets/images/products/kolme2.jpg";
import kolme3 from "../assets/images/products/kolme3.jpg";
import kolme4 from "../assets/images/products/kolme4.jpg";
import embla from "../assets/images/products/embla.jpg";
import mullbaret from "../assets/images/products/mullbaret.jpg";


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
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 3,
    name: "Embla",
    image: embla,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 4,
    name: "Mullbäret",
    image: mullbaret,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 5,
    name: "Kolme",
    image: kolme,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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