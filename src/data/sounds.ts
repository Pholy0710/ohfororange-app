export interface SoundWord {
  word: string;
  emoji: string;
  syllables: string;
}

export interface PhonicsSound {
  sound: string;
  letter: string;
  color: string;
  bgColor: string;
  description: string;
  mouthShape: string;
  mascotTip: string;
  words: SoundWord[];
  rhymeFamily: string[];
}

export const PHONICS_SOUNDS: PhonicsSound[] = [
  {
    sound: "s", letter: "S", color: "#B57BEB", bgColor: "#F5EEFF",
    description: "The hissing snake sound",
    mouthShape: "teeth together, lips slightly apart",
    mascotTip: "Make a hissing sound like a snake! ssssss",
    words: [
      { word: "sun", emoji: "☀️", syllables: "sun" },
      { word: "sock", emoji: "🧦", syllables: "sock" },
      { word: "snake", emoji: "🐍", syllables: "sn-ake" },
      { word: "star", emoji: "⭐", syllables: "star" },
      { word: "sit", emoji: "🪑", syllables: "sit" },
      { word: "sand", emoji: "🏖️", syllables: "sand" },
    ],
    rhymeFamily: ["sat", "set", "sit", "sip", "sap"],
  },
  {
    sound: "a", letter: "A", color: "#FF6B2B", bgColor: "#FFF3EE",
    description: "The short a sound",
    mouthShape: "mouth wide open",
    mascotTip: "Open your mouth wide like you're at the doctor! ahhhh",
    words: [
      { word: "apple", emoji: "🍎", syllables: "ap-ple" },
      { word: "ant", emoji: "🐜", syllables: "ant" },
      { word: "axe", emoji: "🪓", syllables: "axe" },
      { word: "add", emoji: "➕", syllables: "add" },
      { word: "at", emoji: "📍", syllables: "at" },
      { word: "ask", emoji: "❓", syllables: "ask" },
    ],
    rhymeFamily: ["cat", "bat", "hat", "mat", "rat", "sat"],
  },
  {
    sound: "t", letter: "T", color: "#FF8FAB", bgColor: "#FFF0F5",
    description: "The tapping sound",
    mouthShape: "tongue touches the roof of the mouth",
    mascotTip: "Tap the roof of your mouth with your tongue! t-t-t",
    words: [
      { word: "tap", emoji: "🚰", syllables: "tap" },
      { word: "tiger", emoji: "🐯", syllables: "ti-ger" },
      { word: "top", emoji: "🪀", syllables: "top" },
      { word: "ten", emoji: "🔟", syllables: "ten" },
      { word: "tin", emoji: "🥫", syllables: "tin" },
      { word: "tip", emoji: "👆", syllables: "tip" },
    ],
    rhymeFamily: ["tap", "tip", "tan", "tin", "top"],
  },
  {
    sound: "p", letter: "P", color: "#6BC5F8", bgColor: "#EEF8FF",
    description: "The popping sound",
    mouthShape: "lips together then pop open",
    mascotTip: "Press your lips together and pop them open! p-p-p",
    words: [
      { word: "pig", emoji: "🐷", syllables: "pig" },
      { word: "pan", emoji: "🍳", syllables: "pan" },
      { word: "pin", emoji: "📌", syllables: "pin" },
      { word: "pot", emoji: "🪴", syllables: "pot" },
      { word: "pat", emoji: "🤚", syllables: "pat" },
      { word: "pup", emoji: "🐶", syllables: "pup" },
    ],
    rhymeFamily: ["pan", "pin", "pat", "pit", "pet"],
  },
  {
    sound: "i", letter: "I", color: "#6BC5F8", bgColor: "#EEF8FF",
    description: "The short i sound",
    mouthShape: "lips slightly spread",
    mascotTip: "Your lips should smile a little! ihh",
    words: [
      { word: "ink", emoji: "🖊️", syllables: "ink" },
      { word: "insect", emoji: "🐛", syllables: "in-sect" },
      { word: "in", emoji: "📦", syllables: "in" },
      { word: "it", emoji: "✨", syllables: "it" },
      { word: "if", emoji: "💭", syllables: "if" },
      { word: "igloo", emoji: "🏔️", syllables: "ig-loo" },
    ],
    rhymeFamily: ["sit", "bit", "fit", "hit", "kit", "pit"],
  },
  {
    sound: "n", letter: "N", color: "#52C97A", bgColor: "#EEFBF3",
    description: "The nose hum sound",
    mouthShape: "tongue at the roof, sound comes through nose",
    mascotTip: "Hum through your nose! nnn",
    words: [
      { word: "net", emoji: "🥅", syllables: "net" },
      { word: "nap", emoji: "😴", syllables: "nap" },
      { word: "nut", emoji: "🥜", syllables: "nut" },
      { word: "nose", emoji: "👃", syllables: "nose" },
      { word: "nail", emoji: "🔨", syllables: "nail" },
      { word: "nod", emoji: "🙂", syllables: "nod" },
    ],
    rhymeFamily: ["nap", "nit", "nab", "nag", "nag"],
  },
];

export const getSoundData = (sound: string): PhonicsSound | undefined =>
  PHONICS_SOUNDS.find((s) => s.sound === sound.toLowerCase());
