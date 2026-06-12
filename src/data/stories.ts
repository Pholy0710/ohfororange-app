export interface StoryPage {
  pageNumber: number;
  text: string;
  illustration: string;
  highlightWords: string[];
  backgroundColor: string;
}

export interface StoryData {
  id: string;
  title: string;
  slug: string;
  description: string;
  coverEmoji: string;
  coverColor: string;
  difficulty: number;
  wordList: string[];
  totalPages: number;
  pages: StoryPage[];
  comprehensionQuestions: { question: string; answer: string }[];
}

export const STORIES: StoryData[] = [
  {
    id: "story-1",
    title: "Sam and the Cat",
    slug: "sam-and-the-cat",
    description: "Sam finds a cat. What will Sam do?",
    coverEmoji: "🐱",
    coverColor: "#FF6B2B",
    difficulty: 1,
    wordList: ["Sam", "cat", "sat", "pat", "tap", "nap", "can", "sit"],
    totalPages: 10,
    pages: [
      {
        pageNumber: 1,
        text: "Sam sat on a mat.",
        illustration: "🧒 sitting on a 🟫",
        highlightWords: ["Sam", "sat", "mat"],
        backgroundColor: "#FFF3EE",
      },
      {
        pageNumber: 2,
        text: "A cat sat near Sam.",
        illustration: "🐱 sitting next to 🧒",
        highlightWords: ["cat", "sat", "Sam"],
        backgroundColor: "#EEF8FF",
      },
      {
        pageNumber: 3,
        text: "Sam can see the cat.",
        illustration: "🧒 looking at 🐱",
        highlightWords: ["Sam", "can", "cat"],
        backgroundColor: "#FFFBEE",
      },
      {
        pageNumber: 4,
        text: "Sam pats the cat.",
        illustration: "🧒 patting 🐱",
        highlightWords: ["Sam", "pats", "cat"],
        backgroundColor: "#EEFBF7",
      },
      {
        pageNumber: 5,
        text: "The cat is tan.",
        illustration: "🟤 colored cat 🐱",
        highlightWords: ["cat", "tan"],
        backgroundColor: "#F5EEFF",
      },
      {
        pageNumber: 6,
        text: "Sam taps the mat.",
        illustration: "🧒 tapping 🟫",
        highlightWords: ["Sam", "taps", "mat"],
        backgroundColor: "#FFF0F5",
      },
      {
        pageNumber: 7,
        text: "The cat sits with Sam.",
        illustration: "🐱 and 🧒 sitting together",
        highlightWords: ["cat", "sits", "Sam"],
        backgroundColor: "#EEFBF3",
      },
      {
        pageNumber: 8,
        text: "Sam and the cat nap.",
        illustration: "😴🧒 and 😴🐱",
        highlightWords: ["Sam", "cat", "nap"],
        backgroundColor: "#FFF3EE",
      },
      {
        pageNumber: 9,
        text: "The cat pats Sam.",
        illustration: "🐱 touching 🧒",
        highlightWords: ["cat", "pats", "Sam"],
        backgroundColor: "#EEF8FF",
      },
      {
        pageNumber: 10,
        text: "Sam is happy! The cat is happy too!",
        illustration: "😊🧒 and 😸🐱",
        highlightWords: ["Sam", "happy", "cat"],
        backgroundColor: "#FFFBEE",
      },
    ],
    comprehensionQuestions: [
      { question: "What is Sam sitting on?", answer: "A mat" },
      { question: "What colour is the cat?", answer: "Tan" },
      { question: "What do Sam and the cat do at the end?", answer: "They nap together" },
    ],
  },
  {
    id: "story-2",
    title: "Pip Can Sit",
    slug: "pip-can-sit",
    description: "Can Pip sit? Can Pip tip? Watch Pip!",
    coverEmoji: "🐸",
    coverColor: "#6BCFB5",
    difficulty: 1,
    wordList: ["Pip", "sit", "tip", "sip", "pin", "pit", "nip", "pip"],
    totalPages: 10,
    pages: [
      {
        pageNumber: 1,
        text: "Pip is a little frog.",
        illustration: "Small 🐸 looking cute",
        highlightWords: ["Pip"],
        backgroundColor: "#EEFBF7",
      },
      {
        pageNumber: 2,
        text: "Pip can sit.",
        illustration: "🐸 sitting still",
        highlightWords: ["Pip", "sit"],
        backgroundColor: "#F5EEFF",
      },
      {
        pageNumber: 3,
        text: "Pip sits on a pin.",
        illustration: "🐸 on a 📌",
        highlightWords: ["Pip", "sits", "pin"],
        backgroundColor: "#EEF8FF",
      },
      {
        pageNumber: 4,
        text: "Pip can tip!",
        illustration: "🐸 tipping over",
        highlightWords: ["Pip", "tip"],
        backgroundColor: "#FFFBEE",
      },
      {
        pageNumber: 5,
        text: "Pip tips into a pit.",
        illustration: "🐸 falling into a hole",
        highlightWords: ["Pip", "tips", "pit"],
        backgroundColor: "#FFF3EE",
      },
      {
        pageNumber: 6,
        text: "Pip sits in the pit.",
        illustration: "🐸 sitting inside a hole",
        highlightWords: ["Pip", "sits", "pit"],
        backgroundColor: "#EEFBF3",
      },
      {
        pageNumber: 7,
        text: "Can Pip sip?",
        illustration: "🐸 near water 💧",
        highlightWords: ["Pip", "sip"],
        backgroundColor: "#FFF0F5",
      },
      {
        pageNumber: 8,
        text: "Pip sips a little tip.",
        illustration: "🐸 drinking a tiny drop",
        highlightWords: ["Pip", "sips", "tip"],
        backgroundColor: "#EEFBF7",
      },
      {
        pageNumber: 9,
        text: "Pip can sit, sip, and tip!",
        illustration: "🐸 doing all three actions",
        highlightWords: ["Pip", "sit", "sip", "tip"],
        backgroundColor: "#F5EEFF",
      },
      {
        pageNumber: 10,
        text: "Good job, Pip!",
        illustration: "🌟🐸🌟",
        highlightWords: ["Pip"],
        backgroundColor: "#FFFBEE",
      },
    ],
    comprehensionQuestions: [
      { question: "What animal is Pip?", answer: "A frog" },
      { question: "Where does Pip tip into?", answer: "A pit" },
      { question: "Name three things Pip can do.", answer: "Sit, sip, and tip" },
    ],
  },
  {
    id: "story-3",
    title: "A Nap for Tan",
    slug: "a-nap-for-tan",
    description: "Tan the dog needs a nap. Where will Tan nap?",
    coverEmoji: "🐕",
    coverColor: "#FFD93D",
    difficulty: 1,
    wordList: ["Tan", "nap", "tap", "pan", "sat", "mat", "can", "nan"],
    totalPages: 10,
    pages: [
      {
        pageNumber: 1,
        text: "Tan is a tan dog.",
        illustration: "🐕 brown/tan coloured",
        highlightWords: ["Tan", "tan"],
        backgroundColor: "#FFFBEE",
      },
      {
        pageNumber: 2,
        text: "Tan is tired. Tan needs a nap.",
        illustration: "😪🐕",
        highlightWords: ["Tan", "nap"],
        backgroundColor: "#FFF3EE",
      },
      {
        pageNumber: 3,
        text: "Can Tan nap on the mat?",
        illustration: "🐕 looking at 🟫",
        highlightWords: ["Tan", "nap", "mat"],
        backgroundColor: "#EEF8FF",
      },
      {
        pageNumber: 4,
        text: "Tan sat on the mat.",
        illustration: "🐕 sitting on 🟫",
        highlightWords: ["Tan", "sat", "mat"],
        backgroundColor: "#EEFBF7",
      },
      {
        pageNumber: 5,
        text: "Tan can hear a tap, tap, tap.",
        illustration: "🐕 with ears up 👂",
        highlightWords: ["Tan", "tap"],
        backgroundColor: "#F5EEFF",
      },
      {
        pageNumber: 6,
        text: "It is Nan with a pan!",
        illustration: "👵 with 🍳",
        highlightWords: ["Nan", "pan"],
        backgroundColor: "#FFF0F5",
      },
      {
        pageNumber: 7,
        text: "Nan taps the pan for Tan.",
        illustration: "👵 tapping 🍳 for 🐕",
        highlightWords: ["Nan", "taps", "pan", "Tan"],
        backgroundColor: "#EEFBF3",
      },
      {
        pageNumber: 8,
        text: "Tan has a snack. Tan is happy.",
        illustration: "😊🐕 eating",
        highlightWords: ["Tan", "happy"],
        backgroundColor: "#FFFBEE",
      },
      {
        pageNumber: 9,
        text: "Tan sat on the mat and had a nap.",
        illustration: "😴🐕 on 🟫",
        highlightWords: ["Tan", "sat", "mat", "nap"],
        backgroundColor: "#FFF3EE",
      },
      {
        pageNumber: 10,
        text: "Nap well, Tan!",
        illustration: "🌙🐕💤",
        highlightWords: ["Tan"],
        backgroundColor: "#EEF8FF",
      },
    ],
    comprehensionQuestions: [
      { question: "What is the dog's name?", answer: "Tan" },
      { question: "Who taps the pan?", answer: "Nan" },
      { question: "Where does Tan take a nap?", answer: "On the mat" },
    ],
  },
  {
    id: "story-4",
    title: "Pat and the Pan",
    slug: "pat-and-the-pan",
    description: "Pat has a pan. What can Pat make?",
    coverEmoji: "🍳",
    coverColor: "#52C97A",
    difficulty: 2,
    wordList: ["Pat", "pan", "tap", "sat", "can", "tin", "tip", "nap"],
    totalPages: 12,
    pages: [
      {
        pageNumber: 1,
        text: "Pat has a pan.",
        illustration: "👩 holding 🍳",
        highlightWords: ["Pat", "pan"],
        backgroundColor: "#EEFBF3",
      },
      {
        pageNumber: 2,
        text: "Pat taps the pan.",
        illustration: "👩 tapping 🍳",
        highlightWords: ["Pat", "taps", "pan"],
        backgroundColor: "#FFF3EE",
      },
      {
        pageNumber: 3,
        text: "Pat sat at the table.",
        illustration: "👩 sitting at 🪑",
        highlightWords: ["Pat", "sat"],
        backgroundColor: "#FFFBEE",
      },
      {
        pageNumber: 4,
        text: "Pat can make a snack in the pan.",
        illustration: "👩 cooking in 🍳",
        highlightWords: ["Pat", "can", "pan"],
        backgroundColor: "#EEF8FF",
      },
      {
        pageNumber: 5,
        text: "A tin sat near the pan.",
        illustration: "🥫 next to 🍳",
        highlightWords: ["tin", "pan"],
        backgroundColor: "#EEFBF7",
      },
      {
        pageNumber: 6,
        text: "Pat tips the tin into the pan.",
        illustration: "👩 pouring 🥫 into 🍳",
        highlightWords: ["Pat", "tips", "tin", "pan"],
        backgroundColor: "#F5EEFF",
      },
      {
        pageNumber: 7,
        text: "Tap, tap, tap! Pat pats the pan.",
        illustration: "👩 patting 🍳",
        highlightWords: ["Tap", "Pat", "pats", "pan"],
        backgroundColor: "#FFF0F5",
      },
      {
        pageNumber: 8,
        text: "It smells good! Pat can smell it.",
        illustration: "😋👩 with swirls 〰️",
        highlightWords: ["Pat", "can"],
        backgroundColor: "#EEFBF3",
      },
      {
        pageNumber: 9,
        text: "Sam and Nan sat to eat.",
        illustration: "🧒 and 👵 sitting at table",
        highlightWords: ["Sam", "Nan", "sat"],
        backgroundColor: "#FFFBEE",
      },
      {
        pageNumber: 10,
        text: "Pat tips the pan and the snack lands on the plate.",
        illustration: "👩 tipping 🍳 onto 🍽️",
        highlightWords: ["Pat", "tips", "pan"],
        backgroundColor: "#FFF3EE",
      },
      {
        pageNumber: 11,
        text: "Sam, Nan, and Pat eat. It is nice!",
        illustration: "😋🧒 😋👵 😋👩",
        highlightWords: ["Sam", "Nan", "Pat"],
        backgroundColor: "#EEF8FF",
      },
      {
        pageNumber: 12,
        text: "Pat has a nap. Pat is happy!",
        illustration: "😴👩 and ⭐",
        highlightWords: ["Pat", "nap", "happy"],
        backgroundColor: "#EEFBF7",
      },
    ],
    comprehensionQuestions: [
      { question: "What does Pat have?", answer: "A pan" },
      { question: "What does Pat tip into the pan?", answer: "A tin" },
      { question: "Who eats the snack?", answer: "Sam, Nan, and Pat" },
      { question: "What does Pat do at the end?", answer: "Has a nap" },
    ],
  },
];

export const getStory = (id: string): StoryData | undefined =>
  STORIES.find((s) => s.id === id || s.slug === id);
