console.log("hooked up")
let player = {
  // name: "Buttercup",
  health: 100,
  attacks: [],
  hits: 0,
  itemModifier: 0
}
let powerPuffGirls = [
  {
    name: "Buttercup",
    img: "assets/buttercup.png",
    class: "btn-buttercup"
  },
  {
    name: "Bubbles",
    img: "assets/bubbles.png",
    class: "btn-bubbles"
  },
  {
    name: "Blossom",
    img: "assets/blossom.png",
    class: "btn-blossom"
  }
]
let currentPowerPuff = powerPuffGirls[0]

let opponent = {
  name: "Mojo-jojo",
  health: 100,
  hits: 0,
}
let items = {
  lightning: {
    name: "A powered up punch!",
    modifier: 3,
    description: "Throw an extra powerful punch"
  },
  car: {
    name: "Cars",
    modifier: 6,
    description: "Throw a car at your opponent!"
  },
  bomb: {
    name: "Bombs",
    modifier: 4,
    description: "Throw a bomb at your opponent!"
  }
}

function takeItem(item) {
  player.itemModifier = items[item].modifier
  document.getElementById('activeItem').innerHTML = items[item].name
}
function damageOpponent(num) {
  opponent.health -= player["itemModifier"] + num
  player.hits += 1
  delayStrikeBack()
  isGameOver()
  drawChanges()
}
function delayStrikeBack() {

  let strikeback = setTimeout(damagePlayer, 1000)
}
function damagePlayer() {
  player.health -= Math.floor(Math.random() * (12 - 4)) + 4
  opponent.hits += 1
  drawOpponentAttack()
}
function drawOpponentAttack() {
  document.getElementById('playerHealth').innerHTML = player.health.toString()
  document.getElementById('playerHealth').setAttribute('style', `width: ${player.health.toString()}%`)
  document.getElementById('opponentHits').innerHTML = opponent.hits.toString()
}
function isGameOver() {
  if (player.health <= 0) {
    player.health = 0
    document.getElementById('gameOver').innerHTML = "Game Over"
    return
  } else if (opponent.health <= 0) {
    opponent.health = 0
    document.getElementById('gameOver').innerHTML = 'You Win!'
    return
  } return
}
function resetGame() {
  player.health = 100;
  opponent.health = 100;
  player.itemModifier = 0;
  player.hits = 0;
  opponent.hits = 0;
  drawOpponentAttack()
  drawChanges()
}


function drawChanges() {
  document.getElementById('playerHits').innerHTML = player.hits.toString()
  document.getElementById('opponentHealth').setAttribute('style', `width: ${opponent.health.toString()}%`)
  document.getElementById('opponentHealth').innerHTML = opponent.health.toString()
}

function drawPage() {
  document.getElementById('playerName').innerHTML = currentPowerPuff.name
  document.getElementById('opponentName').innerHTML = opponent.name

}
function changePlayer(powerPuffIndex) {

  let buttons = Array.from(document.getElementsByClassName(currentPowerPuff.class))
  for (let i = 0; i < buttons.length; i++) {
    let button = buttons[i]
    button.classList.remove(currentPowerPuff.class)
    button.classList.add(powerPuffGirls[powerPuffIndex].class)
  }

  document.getElementById('playerHealth').classList.remove(currentPowerPuff.class)
  document.getElementById('playerHealth').classList.add(powerPuffGirls[powerPuffIndex].class)

  currentPowerPuff = powerPuffGirls[powerPuffIndex]
  document.getElementById('player-image').setAttribute('src', `${currentPowerPuff.img}`)
  document.getElementById('playerName').innerHTML = currentPowerPuff.name

  resetGame()
}

drawPage()
