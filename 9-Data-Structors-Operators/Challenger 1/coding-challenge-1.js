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

// 1) Tạo 2 mảng gồm players của 2 đội
//const players1 = game.players[0]; // players1 is an object
//console.log(players1);
//const players2 = game.players[1]; //
//console.log(players2);

const [players1, players2] = game.players;
console.log(players1, players2);

// 2) Tạo tên gk cho player đầu tiên và fieldPlayers cho những player còn lại
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// 3) Tạo mảng chứa tất cả players của 2 đội
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4) Thêm 3 cầu thủ dự bị
const subtitles = ["Thiago", "Coutinho", "Perisic"];
const finalPlayers = [...subtitles, ...allPlayers];
console.log(finalPlayers);

// 5) Dựa vào game.odds, tạo 1 biến cho từng tỷ lệ cược
// const team1 = game.odds.team1;
// const draw = game.odds.x;
// const team2 = game.odds.team2;
// console.log(team1);
// console.log(draw);
// console.log(team2);
const {
  odds: { team1, x: draw, team2 }, // Destructuring
} = game;
console.log(team1, draw, team2);

// 6) Tạo funcion printGoals

const printGoals = function (players) {
  console.log(`${players.length} goals were scored!`);
};

// printGoals("Davies", "Muller", "Lewandowski", "Kimmich");

printGoals(game.scored);
//console.log(game.scored); // game.scored = mảng chứa tất cả các giá trị;
//console.log(...game.scored); //...game.scored = tất cả giá trị của mảng;

// 7) Đội có tỉ lệ cược nhỏ hơn sẽ chiến thắng, in ra mà ko sử dụng IF/ELSE hoặc

team1 < team2 && console.log("Team 1 is more likely to win!"); // team1 và team2 đã được lấy giá trị từ bài 5
team1 > team2 && console.log("Team 2 is more likely to win!");

// Vì team1 < team2 = true nên && tiếp tục đến với câu lệnh tiếp theo
// Vì team1 > team2 = false nên && kết thúc ở false và ko in ra giá trị
//console.log(team1 > team2 && "Team 1");
