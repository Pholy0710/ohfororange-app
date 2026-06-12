export interface LetterWord {
  word: string;
  emoji: string;
  audioHint: string;
}

export interface LetterData {
  letter: string;
  uppercase: string;
  lowercase: string;
  color: string;
  bgColor: string;
  phonicSound: string;
  words: LetterWord[];
  funFact: string;
  strokeCount: number;
}

export const ALPHABET_DATA: LetterData[] = [
  {
    letter: "A", uppercase: "A", lowercase: "a", color: "#FF6B2B", bgColor: "#FFF3EE",
    phonicSound: "/æ/ as in Apple",
    words: [
      { word: "Apple", emoji: "🍎", audioHint: "A-pple" },
      { word: "Ant", emoji: "🐜", audioHint: "A-nt" },
      { word: "Axe", emoji: "🪓", audioHint: "A-xe" },
    ],
    funFact: "A is the first letter of the alphabet!", strokeCount: 3,
  },
  {
    letter: "B", uppercase: "B", lowercase: "b", color: "#6BC5F8", bgColor: "#EEF8FF",
    phonicSound: "/b/ as in Ball",
    words: [
      { word: "Ball", emoji: "⚽", audioHint: "B-all" },
      { word: "Bear", emoji: "🐻", audioHint: "B-ear" },
      { word: "Banana", emoji: "🍌", audioHint: "Ba-na-na" },
    ],
    funFact: "B makes a bouncing sound!", strokeCount: 2,
  },
  {
    letter: "C", uppercase: "C", lowercase: "c", color: "#FFD93D", bgColor: "#FFFBEE",
    phonicSound: "/k/ as in Cat",
    words: [
      { word: "Cat", emoji: "🐱", audioHint: "C-at" },
      { word: "Car", emoji: "🚗", audioHint: "C-ar" },
      { word: "Cup", emoji: "☕", audioHint: "C-up" },
    ],
    funFact: "C can make a hard or soft sound!", strokeCount: 1,
  },
  {
    letter: "D", uppercase: "D", lowercase: "d", color: "#6BCFB5", bgColor: "#EEFBF7",
    phonicSound: "/d/ as in Dog",
    words: [
      { word: "Dog", emoji: "🐶", audioHint: "D-og" },
      { word: "Duck", emoji: "🦆", audioHint: "D-uck" },
      { word: "Door", emoji: "🚪", audioHint: "D-oor" },
    ],
    funFact: "D sounds like a drum beat!", strokeCount: 2,
  },
  {
    letter: "E", uppercase: "E", lowercase: "e", color: "#B57BEB", bgColor: "#F5EEFF",
    phonicSound: "/ɛ/ as in Egg",
    words: [
      { word: "Egg", emoji: "🥚", audioHint: "E-gg" },
      { word: "Elephant", emoji: "🐘", audioHint: "E-le-phant" },
      { word: "Elf", emoji: "🧝", audioHint: "E-lf" },
    ],
    funFact: "E is the most common letter in English!", strokeCount: 4,
  },
  {
    letter: "F", uppercase: "F", lowercase: "f", color: "#FF8FAB", bgColor: "#FFF0F5",
    phonicSound: "/f/ as in Fish",
    words: [
      { word: "Fish", emoji: "🐟", audioHint: "F-ish" },
      { word: "Fox", emoji: "🦊", audioHint: "F-ox" },
      { word: "Flower", emoji: "🌸", audioHint: "F-lower" },
    ],
    funFact: "F makes a funny feathery sound!", strokeCount: 3,
  },
  {
    letter: "G", uppercase: "G", lowercase: "g", color: "#52C97A", bgColor: "#EEFBF3",
    phonicSound: "/g/ as in Goat",
    words: [
      { word: "Goat", emoji: "🐐", audioHint: "G-oat" },
      { word: "Grape", emoji: "🍇", audioHint: "G-rape" },
      { word: "Giraffe", emoji: "🦒", audioHint: "Gi-raffe" },
    ],
    funFact: "G can make a hard or gentle sound!", strokeCount: 2,
  },
  {
    letter: "H", uppercase: "H", lowercase: "h", color: "#FF6B2B", bgColor: "#FFF3EE",
    phonicSound: "/h/ as in Hat",
    words: [
      { word: "Hat", emoji: "🎩", audioHint: "H-at" },
      { word: "Horse", emoji: "🐴", audioHint: "H-orse" },
      { word: "House", emoji: "🏠", audioHint: "H-ouse" },
    ],
    funFact: "H sounds like a happy breath!", strokeCount: 3,
  },
  {
    letter: "I", uppercase: "I", lowercase: "i", color: "#6BC5F8", bgColor: "#EEF8FF",
    phonicSound: "/ɪ/ as in Igloo",
    words: [
      { word: "Igloo", emoji: "🏔️", audioHint: "I-gloo" },
      { word: "Insect", emoji: "🦋", audioHint: "In-sect" },
      { word: "Ink", emoji: "🖊️", audioHint: "I-nk" },
    ],
    funFact: "I is a tall, straight letter!", strokeCount: 1,
  },
  {
    letter: "J", uppercase: "J", lowercase: "j", color: "#FFD93D", bgColor: "#FFFBEE",
    phonicSound: "/dʒ/ as in Jam",
    words: [
      { word: "Jam", emoji: "🍓", audioHint: "J-am" },
      { word: "Jug", emoji: "🏺", audioHint: "J-ug" },
      { word: "Jellyfish", emoji: "🪼", audioHint: "Jel-ly-fish" },
    ],
    funFact: "J jumps and jiggles!", strokeCount: 2,
  },
  {
    letter: "K", uppercase: "K", lowercase: "k", color: "#6BCFB5", bgColor: "#EEFBF7",
    phonicSound: "/k/ as in Kite",
    words: [
      { word: "Kite", emoji: "🪁", audioHint: "K-ite" },
      { word: "King", emoji: "👑", audioHint: "K-ing" },
      { word: "Koala", emoji: "🐨", audioHint: "Ko-a-la" },
    ],
    funFact: "K sounds just like C sometimes!", strokeCount: 3,
  },
  {
    letter: "L", uppercase: "L", lowercase: "l", color: "#B57BEB", bgColor: "#F5EEFF",
    phonicSound: "/l/ as in Lion",
    words: [
      { word: "Lion", emoji: "🦁", audioHint: "L-ion" },
      { word: "Lemon", emoji: "🍋", audioHint: "Le-mon" },
      { word: "Lamp", emoji: "💡", audioHint: "L-amp" },
    ],
    funFact: "L is a lovely, long letter!", strokeCount: 2,
  },
  {
    letter: "M", uppercase: "M", lowercase: "m", color: "#FF8FAB", bgColor: "#FFF0F5",
    phonicSound: "/m/ as in Moon",
    words: [
      { word: "Moon", emoji: "🌙", audioHint: "M-oon" },
      { word: "Monkey", emoji: "🐵", audioHint: "Mon-key" },
      { word: "Mushroom", emoji: "🍄", audioHint: "Mush-room" },
    ],
    funFact: "M is like mountains meeting!", strokeCount: 4,
  },
  {
    letter: "N", uppercase: "N", lowercase: "n", color: "#52C97A", bgColor: "#EEFBF3",
    phonicSound: "/n/ as in Net",
    words: [
      { word: "Net", emoji: "🥅", audioHint: "N-et" },
      { word: "Nest", emoji: "🪺", audioHint: "N-est" },
      { word: "Nose", emoji: "👃", audioHint: "N-ose" },
    ],
    funFact: "N is nice and narrow!", strokeCount: 3,
  },
  {
    letter: "O", uppercase: "O", lowercase: "o", color: "#FF6B2B", bgColor: "#FFF3EE",
    phonicSound: "/ɒ/ as in Orange",
    words: [
      { word: "Orange", emoji: "🍊", audioHint: "O-range" },
      { word: "Owl", emoji: "🦉", audioHint: "O-wl" },
      { word: "Otter", emoji: "🦦", audioHint: "Ot-ter" },
    ],
    funFact: "O is perfectly round like an orange!", strokeCount: 1,
  },
  {
    letter: "P", uppercase: "P", lowercase: "p", color: "#6BC5F8", bgColor: "#EEF8FF",
    phonicSound: "/p/ as in Pig",
    words: [
      { word: "Pig", emoji: "🐷", audioHint: "P-ig" },
      { word: "Pizza", emoji: "🍕", audioHint: "Piz-za" },
      { word: "Penguin", emoji: "🐧", audioHint: "Pen-guin" },
    ],
    funFact: "P makes a little puff of air!", strokeCount: 2,
  },
  {
    letter: "Q", uppercase: "Q", lowercase: "q", color: "#FFD93D", bgColor: "#FFFBEE",
    phonicSound: "/kw/ as in Queen",
    words: [
      { word: "Queen", emoji: "👸", audioHint: "Q-ueen" },
      { word: "Quilt", emoji: "🛏️", audioHint: "Q-uilt" },
      { word: "Quack", emoji: "🦆", audioHint: "Q-uack" },
    ],
    funFact: "Q almost always needs the letter U!", strokeCount: 2,
  },
  {
    letter: "R", uppercase: "R", lowercase: "r", color: "#6BCFB5", bgColor: "#EEFBF7",
    phonicSound: "/r/ as in Rainbow",
    words: [
      { word: "Rainbow", emoji: "🌈", audioHint: "Rain-bow" },
      { word: "Rabbit", emoji: "🐰", audioHint: "Rab-bit" },
      { word: "Robot", emoji: "🤖", audioHint: "Ro-bot" },
    ],
    funFact: "R is a really roaring letter!", strokeCount: 3,
  },
  {
    letter: "S", uppercase: "S", lowercase: "s", color: "#B57BEB", bgColor: "#F5EEFF",
    phonicSound: "/s/ as in Sun",
    words: [
      { word: "Sun", emoji: "☀️", audioHint: "S-un" },
      { word: "Snake", emoji: "🐍", audioHint: "Sn-ake" },
      { word: "Star", emoji: "⭐", audioHint: "St-ar" },
    ],
    funFact: "S slithers like a snake!", strokeCount: 1,
  },
  {
    letter: "T", uppercase: "T", lowercase: "t", color: "#FF8FAB", bgColor: "#FFF0F5",
    phonicSound: "/t/ as in Tiger",
    words: [
      { word: "Tiger", emoji: "🐯", audioHint: "Ti-ger" },
      { word: "Tree", emoji: "🌳", audioHint: "Tr-ee" },
      { word: "Train", emoji: "🚂", audioHint: "Tr-ain" },
    ],
    funFact: "T is like a tiny ticking clock!", strokeCount: 2,
  },
  {
    letter: "U", uppercase: "U", lowercase: "u", color: "#52C97A", bgColor: "#EEFBF3",
    phonicSound: "/ʌ/ as in Umbrella",
    words: [
      { word: "Umbrella", emoji: "☂️", audioHint: "Um-brel-la" },
      { word: "Unicorn", emoji: "🦄", audioHint: "U-ni-corn" },
      { word: "Ukulele", emoji: "🎸", audioHint: "U-ku-le-le" },
    ],
    funFact: "U is shaped like an upside-down arch!", strokeCount: 2,
  },
  {
    letter: "V", uppercase: "V", lowercase: "v", color: "#FF6B2B", bgColor: "#FFF3EE",
    phonicSound: "/v/ as in Violin",
    words: [
      { word: "Violin", emoji: "🎻", audioHint: "Vi-o-lin" },
      { word: "Van", emoji: "🚐", audioHint: "V-an" },
      { word: "Volcano", emoji: "🌋", audioHint: "Vol-ca-no" },
    ],
    funFact: "V is shaped like a valley!", strokeCount: 2,
  },
  {
    letter: "W", uppercase: "W", lowercase: "w", color: "#6BC5F8", bgColor: "#EEF8FF",
    phonicSound: "/w/ as in Wolf",
    words: [
      { word: "Wolf", emoji: "🐺", audioHint: "W-olf" },
      { word: "Whale", emoji: "🐋", audioHint: "Wh-ale" },
      { word: "Watermelon", emoji: "🍉", audioHint: "Wa-ter-mel-on" },
    ],
    funFact: "W is like two V's joined together!", strokeCount: 4,
  },
  {
    letter: "X", uppercase: "X", lowercase: "x", color: "#FFD93D", bgColor: "#FFFBEE",
    phonicSound: "/ks/ as in Box",
    words: [
      { word: "X-ray", emoji: "🦴", audioHint: "X-ray" },
      { word: "Xylophone", emoji: "🎵", audioHint: "Xy-lo-phone" },
      { word: "Fox", emoji: "🦊", audioHint: "fo-X" },
    ],
    funFact: "X marks the spot like treasure!", strokeCount: 2,
  },
  {
    letter: "Y", uppercase: "Y", lowercase: "y", color: "#6BCFB5", bgColor: "#EEFBF7",
    phonicSound: "/j/ as in Yellow",
    words: [
      { word: "Yellow", emoji: "💛", audioHint: "Yel-low" },
      { word: "Yak", emoji: "🐃", audioHint: "Y-ak" },
      { word: "Yo-yo", emoji: "🪀", audioHint: "Yo-yo" },
    ],
    funFact: "Y is the fork in the road letter!", strokeCount: 3,
  },
  {
    letter: "Z", uppercase: "Z", lowercase: "z", color: "#B57BEB", bgColor: "#F5EEFF",
    phonicSound: "/z/ as in Zebra",
    words: [
      { word: "Zebra", emoji: "🦓", audioHint: "Ze-bra" },
      { word: "Zoo", emoji: "🦁", audioHint: "Z-oo" },
      { word: "Zip", emoji: "🤐", audioHint: "Z-ip" },
    ],
    funFact: "Z is the last and the zippiest letter!", strokeCount: 3,
  },
];

export const getLetterData = (letter: string): LetterData | undefined =>
  ALPHABET_DATA.find((l) => l.letter.toUpperCase() === letter.toUpperCase());
