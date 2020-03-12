/***** Beginning of Starter Code ****/

const playerContainer = document.querySelector(".player-container")

// render one player to the DOM
function renderPlayer(player) {
  // create an element for the outer div
  const playerDiv = document.createElement("div")

  // set attributes on the outer div
  playerDiv.className = "player"
  playerDiv.dataset.number = player.number

  // use innerHTML to create any child elements of the div
  playerDiv.innerHTML = `
    <h3>${player.name} (<em>${player.nickname}</em>)</h3>
    <img src="${player.photo}" alt="${player.name}">
    <p class="likes">${player.likes} likes</p>
    <button class="like-button">❤️</button>
  `

  // append the element to the container
  playerContainer.append(playerDiv)
}

// for each player in the array, render to the DOM
PLAYERS.forEach(renderPlayer)

/***** End of Starter Code ****/




/***** Deliverable 1 *****/
function toggleColor(e) {
  element = e.target
  if (element.style.color === "red") {
    element.style.color = "black"
  } else {
    element.style.color = "red"
  }
}
const header = document.querySelector("h1#header")
header.addEventListener("click", toggleColor)

/***** Deliverable 2 *****/
const playerForm = document.querySelector("#new-player-form")

playerForm.addEventListener("submit", handleFormSubmit)

function handleFormSubmit(event) {
  // always prevent the default action
  event.preventDefault()
  const form = event.target
  // get the user input from the input fields
  const playerNumber = form.number.value
  const playerName = form.name.value
  const playerNickName = form.nickname.value
  const playerPhoto = form.photo.value

  const newPlayer = {
    number: playerNumber,
    name: playerName,
    nickname: playerNickName,
    photo: playerPhoto,
    likes: 0
  }

  renderPlayer(newPlayer)
}

/***** Deliverable 3 *****/
listenForLikes = playerContainer.addEventListener("click", injectLikes)

function injectLikes(e) {
    likeButton = e.target
    if (likeButton.className === "like-button") {
      const likes = likeButton.previousSibling.previousSibling
      const strLikes = likes.innerHTML
      const re = /(\d+)/
      re.test(likes.innerHTML);
      let numberLikes = RegExp.lastMatch
      likes.innerHTML = `${parseInt(numberLikes)+1} likes`
    }
}