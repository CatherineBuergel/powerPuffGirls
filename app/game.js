console.log("hooked up")
let player = {
  name: "Buttercup",
  health: 100,
  attacks: [],
  hits: 0,
  items: []
}
let opponent = {
  name: "Mojo-jojo",
  health: 100,
  hits: 0,
}
let items = {
  lightning: {
    name: "Power Up",
    modifier: 3,
    description: "Throw an extra powerful punch"
  },
  car: {
    name: "Car",
    modifier: 6,
    description: "Throw a car at your opponent!"
  },
  bomb: {
    name: "Bomb",
    modifier: 4,
    description: "Throw a bomb at your opponent!"
  }
}

function takeItem(item) {
  if (player.items.length) {
    player.items.pop()
  }
  player.items.push(items[item].modifier)
}
function damageOpponent(num) {
  opponent.health -= addModifier() + num

}
function addModifier() {
  if (player.items.length) {
    return player.items[0]
  }
  return 0
}
function drawChanges() {
  document.getElementById('')
}
function drawPage() {

}
