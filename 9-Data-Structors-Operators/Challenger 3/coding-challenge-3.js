const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
const gameEvents = new Map([
  [17, "⚽️ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽️ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽️ GOAL"],
  [80, "⚽️ GOAL"],
  [92, "🔶 Yellow card"],
]);

// 1) Tạo mảng event chứa tất cả các sự kiện xảy ra
console.log("-- Bai 1 --");

// let events = [];

// for (const [key] of gameEvents) {
//   events += gameEvents.get(key);
// }
// console.log(events);
const events = new Set(gameEvents.values());
console.log(events);

// 2) Xoá sự kiện phút 64
console.log("-- Bai 2 --");
gameEvents.delete(64);
console.log(gameEvents.entries());

// 3) Tính xem trung bình bao nhiêu sự kiện xảy ra mỗi phút
console.log("-- Bai 3 --");
const time = [...gameEvents.keys()].pop();
console.log(`1 event happens in average ${time / gameEvents.size} minutes`);

// 4) Chia 2 hiệp
console.log("-- Bai 4 --");
for (const [key, event] of gameEvents) {
  const eventStr = key <= 45 ? "[FIRST HALF]" : "[SECOND HALF]"; // key <= 45 (true: FIRST, false: SECOND)
  console.log(` ${eventStr} ${key}: ${event}`);
}
