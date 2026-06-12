import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const db = new PrismaClient();

async function main() {
  console.log("🌱 Seeding OhforOrange database...");

  // Create admin user
  const adminPassword = await bcrypt.hash("admin123", 12);
  const admin = await db.user.upsert({
    where: { email: "admin@ohfororange.com" },
    update: {},
    create: {
      email: "admin@ohfororange.com",
      name: "OhforOrange Admin",
      password: adminPassword,
      role: "ADMIN",
    },
  });
  console.log("✅ Admin user created:", admin.email);

  // Create demo parent
  const parentPassword = await bcrypt.hash("demo123", 12);
  const parent = await db.user.upsert({
    where: { email: "demo@ohfororange.com" },
    update: {},
    create: {
      email: "demo@ohfororange.com",
      name: "Demo Parent",
      password: parentPassword,
      role: "PARENT",
    },
  });

  // Create demo child
  const child = await db.child.upsert({
    where: { id: "demo-child-emma" },
    update: {},
    create: {
      id: "demo-child-emma",
      name: "Emma",
      age: 5,
      avatar: "👧",
      parentId: parent.id,
    },
  });
  console.log("✅ Demo child created:", child.name);

  // Create achievements
  const achievements = [
    { name: "Alphabet Explorer", description: "Learned 10 letters", icon: "🔤", type: "LETTER", criteria: { lettersLearned: 10 }, points: 20 },
    { name: "Sound Master", description: "Mastered all phonics sounds", icon: "🔊", type: "SOUND", criteria: { soundsMastered: 6 }, points: 30 },
    { name: "Blending Hero", description: "Blended 5 CVC words", icon: "🔗", type: "BLENDING", criteria: { wordsBlended: 5 }, points: 25 },
    { name: "Story Reader", description: "Read 2 complete stories", icon: "📖", type: "STORY", criteria: { storiesRead: 2 }, points: 20 },
    { name: "Worksheet Champion", description: "Completed 10 worksheets", icon: "📝", type: "WORKSHEET", criteria: { worksheetsCompleted: 10 }, points: 15 },
    { name: "Streak Hero", description: "7-day reading streak", icon: "🔥", type: "STREAK", criteria: { streakDays: 7 }, points: 35 },
    { name: "Game Master", description: "Played all 5 games", icon: "🎮", type: "GAME", criteria: { gamesPlayed: 5 }, points: 25 },
    { name: "Reading Star", description: "Earned 100 stars total", icon: "⭐", type: "SPECIAL", criteria: { totalStars: 100 }, points: 50 },
  ] as const;

  for (const ach of achievements) {
    await db.achievement.upsert({
      where: { id: `ach-${ach.name.toLowerCase().replace(/ /g, "-")}` },
      update: {},
      create: {
        id: `ach-${ach.name.toLowerCase().replace(/ /g, "-")}`,
        ...ach,
        criteria: ach.criteria,
      },
    });
  }
  console.log("✅ Achievements seeded");

  // Create sample lessons
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  for (const letter of letters.slice(0, 5)) {
    await db.lesson.upsert({
      where: { slug: `letter-${letter.toLowerCase()}` },
      update: {},
      create: {
        type: "LETTER",
        slug: `letter-${letter.toLowerCase()}`,
        title: `Letter ${letter}`,
        description: `Learn the letter ${letter}`,
        order: letters.indexOf(letter) + 1,
        content: { letter, uppercase: letter, lowercase: letter.toLowerCase() },
      },
    });
  }
  console.log("✅ Sample lessons seeded");

  console.log("🎉 Database seeded successfully!");
  console.log("   Admin: admin@ohfororange.com / admin123");
  console.log("   Demo:  demo@ohfororange.com / demo123");
}

main()
  .catch(console.error)
  .finally(() => db.$disconnect());
