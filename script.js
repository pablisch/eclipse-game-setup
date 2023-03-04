const allPlayers = ["Pablo", "Orrin", "Alex", "Tim", "Barney"]
console.log('i am ${players[0]}')

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const players = shuffleArray(allPlayers)

if (players.includes('Pablo')) {
  let index = players.indexOf("Pablo");
  if (index !== -1) {
    let removed = players.splice(index, 1);
    players.unshift(removed[0]);
  }
}

if (players.length == 4) {
  if (Math.floor(Math.random()*(2-1+1)+1) == 1) {
    document.querySelector(".image").src="images/playTableFourV1.png";
    console.log("version 1");
  } else {
    document.querySelector(".image").src="images/playTableFourV2.png";
    console.log("mk 2");
  }
}

if (players.length == 5) {
  var randomNumber = (Math.floor(Math.random()*(5-1+1)+1))
  console.log(randomNumber)
  switch(randomNumber) {
    case 1:
      document.querySelector(".image").src="images/playTableFiveV1b.png";
      break;
    case 2:
      document.querySelector(".image").src="images/playTableFiveV2b.png";
      break;
    case 3:
      document.querySelector(".image").src="images/playTableFiveV3b.png";
      break;
    case 4:
      document.querySelector(".image").src="images/playTableFiveV4b.png";
      break;
    case 5:
      document.querySelector(".image").src="images/playTableFiveV5b.png";
      break;
    default:
      document.querySelector(".image").src="images/playTable.png";
      break;
  }
}



if (players.length < 6) {
  document.querySelector(".six").classList.add("hidden");
}
if (players.length < 5) {
  document.querySelector(".five").classList.add("hidden");
}
if (players.length < 4) {
  document.querySelector(".four").classList.add("hidden");
}
if (players.length < 3) {
  document.querySelector(".three").classList.add("hidden");
}

if(document.querySelector('.one')) {
  document.querySelector('h2').innerHTML = players[0];
}

document.getElementById("one").innerHTML = '<i class=\"fa-solid fa-ghost\"></i>' + players[0]
document.getElementById("two").innerHTML = '<i class=\"fa-solid fa-ghost\"></i>' + players[1]
document.getElementById("three").innerHTML = '<i class=\"fa-solid fa-ghost\"></i>' + players[2]
document.getElementById("four").innerHTML = '<i class=\"fa-solid fa-ghost\"></i>' + players[3]
document.getElementById("five").innerHTML = '<i class=\"fa-solid fa-ghost\"></i>' + players[4]
document.getElementById("six").innerHTML = '<i class=\"fa-solid fa-ghost\"></i>' + players[5]

// const elements = document.querySelectorAll('.one');

// const array = ['value1', 'value2', 'value3'];

// elements.forEach( (element) => {
//   if(element.classList.contains('one')) {
//     element.innerHTML = array[1];
//   }
// });

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const originalArray = [1, 2, 3, 4, 5];
const shuffledArray = shuffleArray(originalArray);
