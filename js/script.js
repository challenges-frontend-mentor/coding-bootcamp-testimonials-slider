const cards = document.querySelectorAll(".card")
const slideArrows = document.getElementById("slider-arrows")

const moveSlide = direction =>{
  if(direction === "right"){
    cards[0].classList.add("card-hidden")
    cards[1].classList.remove("card-hidden")
    cards[1].classList.add("card-opacity")
  }

  if(direction === "left"){
    cards[0].classList.remove("card-hidden")
    cards[0].classList.add("card-opacity")
    cards[1].classList.add("card-hidden")
  }
}

slideArrows.addEventListener("click", e => {
  moveSlide(e.target.dataset.direction)
})

window.addEventListener("keyup" , e =>{
  if(e.key === "ArrowLeft" || e.key === "ArrowRight"){
    const direction = e.key === "ArrowLeft" ? "left" : "right";
    moveSlide(direction) 
  }
})