const characterTeam = [
  { image: "image/pictfeixiao.png", name: "Feixiao" },
    { image: "image/picttopaz.png", name: "Topaz & Numby" },
    { image: "image/pictrobin.png", name: "Robin" },
    { image: "image/pictaven.png", name: "Aventurine" }
]

const characterTeam3 = [
  { image: "image/pictfeixiao.png", name: "Feixiao" },
    { image: "image/picttopaz.png", name: "Topaz & Numby" },
    { image: "image/pictrobin.png", name: "Robin" },
    { image: "image/pictaven.png", name: "Aventurine" }
]

const characterTeam4 = [
  { image: "image/pictfeixiao.png", name: "Feixiao" },
    { image: "image/picttopaz.png", name: "Topaz & Numby" },
    { image: "image/pictrobin.png", name: "Robin" },
    { image: "image/pictaven.png", name: "Aventurine" }
]

const team = document.querySelector(".team1")

const team3 = document.querySelector(".team3")
const team4 = document.querySelector(".team4")

characterTeam.forEach(character => {
  const div = document.createElement("div")
  div.className = "team";
  div.innerHTML = `
  <img src="${character.image}" alt="${character.name}">
  <h5>${character.name}</h5>
  `
  team.appendChild(div);
})

const characterTeam2 = [
  { image: "image/pictratio.png", name: "Dr. Ratio" },
    { image: "image/picttopaz.png", name: "Topaz & Numby" },
    { image: "image/pictrobin.png", name: "Robin" },
    { image: "image/pictaven.png", name: "Aventurine" }
]

const team2 = document.querySelector(".team2")

characterTeam2.forEach(character => {
  const div = document.createElement("div")
  div.className = "team";
  div.innerHTML = `
  <img src="${character.image}" alt="${character.name}">
  <h5>${character.name}</h5>
  `
  team2.appendChild(div);
})

characterTeam3.forEach(character => {
  const div = document.createElement("div")
  div.className = "team";
  div.innerHTML = `
  <img src="${character.image}" alt="${character.name}">
  <h5>${character.name}</h5>
  `
  team3.appendChild(div);
})

characterTeam4.forEach(character => {
  const div = document.createElement("div")
  div.className = "team";
  div.innerHTML = `
  <img src="${character.image}" alt="${character.name}">
  <h5>${character.name}</h5>
  `
  team4.appendChild(div);
})

