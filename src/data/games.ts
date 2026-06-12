export interface GameLevel {
  level: number;
  targetSound?: string;
  targetLetter?: string;
  words: string[];
  emojis: string[];
  timeLimit?: number;
}

export const SOUND_HUNT_LEVELS: GameLevel[] = [
  { level: 1, targetSound: "s", words: ["sun", "sock", "ball", "cat", "snake", "toy", "star", "hat"], emojis: ["☀️", "🧦", "⚽", "🐱", "🐍", "🪀", "⭐", "🎩"] },
  { level: 2, targetSound: "a", words: ["apple", "ant", "ball", "cat", "axe", "dog", "ant", "sun"], emojis: ["🍎", "🐜", "⚽", "🐱", "🪓", "🐶", "🐜", "☀️"] },
  { level: 3, targetSound: "t", words: ["tap", "tiger", "ball", "cat", "top", "dog", "ten", "sun"], emojis: ["🚰", "🐯", "⚽", "🐱", "🪀", "🐶", "🔟", "☀️"] },
  { level: 4, targetSound: "p", words: ["pig", "pan", "ball", "cat", "pin", "dog", "pot", "sun"], emojis: ["🐷", "🍳", "⚽", "🐱", "📌", "🐶", "🪴", "☀️"] },
  { level: 5, targetSound: "n", words: ["net", "nest", "ball", "cat", "nail", "dog", "nose", "sun"], emojis: ["🥅", "🪺", "⚽", "🐱", "🔨", "🐶", "👃", "☀️"] },
];

export const BUILD_WORD_LEVELS = [
  { level: 1, word: "sat", hint: "To sit down", emoji: "🪑", blanks: ["_", "a", "t"], answer: "s" },
  { level: 2, word: "tap", hint: "Water comes from this", emoji: "🚰", blanks: ["t", "_", "p"], answer: "a" },
  { level: 3, word: "pin", hint: "Holds things together", emoji: "📌", blanks: ["p", "i", "_"], answer: "n" },
  { level: 4, word: "sit", hint: "Rest in a chair", emoji: "🪑", blanks: ["_", "i", "t"], answer: "s" },
  { level: 5, word: "nap", hint: "A short sleep", emoji: "😴", blanks: ["n", "_", "p"], answer: "a" },
  { level: 6, word: "pan", hint: "Used for cooking", emoji: "🍳", blanks: ["p", "_", "n"], answer: "a" },
  { level: 7, word: "tip", hint: "The pointy end", emoji: "👆", blanks: ["t", "_", "p"], answer: "i" },
  { level: 8, word: "sip", hint: "A small drink", emoji: "🥤", blanks: ["s", "_", "p"], answer: "i" },
  { level: 9, word: "tan", hint: "A light brown colour", emoji: "🟤", blanks: ["t", "a", "_"], answer: "n" },
  { level: 10, word: "pat", hint: "To touch gently", emoji: "🤚", blanks: ["_", "a", "t"], answer: "p" },
];

export const RHYME_PAIRS = [
  { word1: "cat", word2: "hat", word3: "bat", wrong: "dog", emoji1: "🐱", emoji2: "🎩", emoji3: "🦇" },
  { word1: "pan", word2: "tan", word3: "can", wrong: "sun", emoji1: "🍳", emoji2: "🟤", emoji3: "🥫" },
  { word1: "sit", word2: "pit", word3: "bit", wrong: "run", emoji1: "🪑", emoji2: "🕳️", emoji3: "🦷" },
  { word1: "tip", word2: "sip", word3: "dip", wrong: "cat", emoji1: "👆", emoji2: "🥤", emoji3: "🏊" },
  { word1: "sat", word2: "mat", word3: "rat", wrong: "top", emoji1: "🪑", emoji2: "🟫", emoji3: "🐭" },
];

export const POP_LETTER_LEVELS = [
  { level: 1, targetLetter: "A", letters: ["A", "B", "A", "C", "D", "A", "E"], timeLimit: 30 },
  { level: 2, targetLetter: "S", letters: ["S", "T", "S", "P", "S", "A", "N", "S"], timeLimit: 25 },
  { level: 3, targetLetter: "T", letters: ["T", "S", "T", "N", "T", "P", "I", "T"], timeLimit: 25 },
  { level: 4, targetLetter: "P", letters: ["P", "S", "A", "P", "T", "P", "I", "N", "P"], timeLimit: 20 },
  { level: 5, targetLetter: "N", letters: ["N", "S", "A", "T", "N", "P", "I", "N", "S"], timeLimit: 20 },
];

export const TREASURE_TRAIL_CLUES = [
  { clue: "Find something beginning with 's'", answer: "sun", emoji: "☀️", hint: "It shines in the sky!" },
  { clue: "Find something beginning with 'a'", answer: "apple", emoji: "🍎", hint: "It's a crunchy fruit!" },
  { clue: "Find something beginning with 't'", answer: "tree", emoji: "🌳", hint: "It has leaves and branches!" },
  { clue: "Find something beginning with 'p'", answer: "penguin", emoji: "🐧", hint: "A black and white bird!" },
  { clue: "Find something beginning with 'n'", answer: "nest", emoji: "🪺", hint: "Birds live in this!" },
  { clue: "Find something beginning with 'i'", answer: "igloo", emoji: "🏔️", hint: "Made of ice and snow!" },
];
