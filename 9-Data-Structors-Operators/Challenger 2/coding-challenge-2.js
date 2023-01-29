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

// 1) In ra thứ tự bàn thắng và người ghi bàn

console.log("-- Bai 1 --");
const goalPlayers = game.scored.entries(); //.entries trả về giá trị index
console.log(...goalPlayers);
//console.log(Object.entries(game.scored)); //Object.entries trả về chuỗi kí tự

for (const [key, name] of goalPlayers) {
  console.log(`The ${key + 1} goal scored by ${name}!`);
}

// 2) Dùng vòng lặp để tính trung bình cộng odds

console.log("-- Bai 2 --");
const numberAverage = Object.values(game.odds);
let sum = 0;
for (const x of numberAverage) {
  sum += x;
}
console.log(`Average odds: ${sum / numberAverage.length} `);

// 3) In ra tên đội và tỷ lệ đặt cược

console.log("-- Bai 3 --");
for (const [team, odds] of Object.entries(game.odds)) {
  console.log(`Odd of victory ${game[team] || "draw"} :${odds}`);
}
