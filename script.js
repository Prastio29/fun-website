const body = document.body;
const info1 = document.querySelector(".info1");
const eidolons = document.getElementById("eidolons");
const e1 = document.getElementById("e1");
const e2 = document.getElementById("e2");
const e3 = document.getElementById("e3");
const e4 = document.getElementById("e4");
const e5 = document.getElementById("e5");
const e6 = document.getElementById("e6");
const topazInfo = document.getElementById("topazInfo");

topazInfo.addEventListener("click", () => {
  const sound = document.getElementById("sound");
  sound.play();
})

info1.addEventListener("click", () => {
  info1.classList.toggle("active");
})

e1.addEventListener("click", () => {
  e1.classList.toggle("active");
  info1.classList.add("active");
  e2.classList.remove("active");
    e3.classList.remove("active");
    e4.classList.remove("active");
    e5.classList.remove("active");
    e6.classList.remove("active");

  e1.classList.remove("inactive");
  e2.classList.add("inactive");
    e3.classList.add("inactive");
    e4.classList.add("inactive");
    e5.classList.add("inactive");
    e6.classList.add("inactive");
})

e2.addEventListener("click", () => {
  e2.classList.toggle("active");
  info1.classList.add("active");
  e1.classList.remove("active");
    e3.classList.remove("active");
    e4.classList.remove("active");
    e5.classList.remove("active");
    e6.classList.remove("active");

  e1.classList.add("inactive");
  e2.classList.remove("inactive");
    e3.classList.add("inactive");
    e4.classList.add("inactive");
    e5.classList.add("inactive");
    e6.classList.add("inactive");
})

e3.addEventListener("click", () => {
  e3.classList.toggle("active");
  info1.classList.add("active");
  e1.classList.remove("active");
  e2.classList.remove("active");
    e4.classList.remove("active");
    e5.classList.remove("active");
    e6.classList.remove("active");

  e1.classList.add("inactive");
  e2.classList.add("inactive");
    e3.classList.remove("inactive");
    e4.classList.add("inactive");
    e5.classList.add("inactive");
    e6.classList.add("inactive");
})

e4.addEventListener("click", () => {
  e4.classList.toggle("active");
  info1.classList.add("active");
  e1.classList.remove("active");
  e2.classList.remove("active");
    e3.classList.remove("active");
    e5.classList.remove("active");
    e6.classList.remove("active");

  e1.classList.add("inactive");
  e2.classList.add("inactive");
    e3.classList.add("inactive");
    e4.classList.remove("inactive");
    e5.classList.add("inactive");
    e6.classList.add("inactive");
})

e5.addEventListener("click", () => {
  e5.classList.toggle("active");
  info1.classList.add("active");
  e1.classList.remove("active");
  e2.classList.remove("active");
    e3.classList.remove("active");
    e4.classList.remove("active");
    e6.classList.remove("active");

  e1.classList.add("inactive");
  e2.classList.add("inactive");
    e3.classList.add("inactive");
    e4.classList.add("inactive");
    e5.classList.remove("inactive");
    e6.classList.add("inactive");
})

e6.addEventListener("click", () => {
  e6.classList.toggle("active");
  info1.classList.add("active");
  e1.classList.remove("active");
  e2.classList.remove("active");
    e3.classList.remove("active");
    e4.classList.remove("active");
    e5.classList.remove("active");

  e1.classList.add("inactive");
  e2.classList.add("inactive");
    e3.classList.add("inactive");
    e4.classList.add("inactive");
    e5.classList.add("inactive");
    e6.classList.remove("inactive");
})