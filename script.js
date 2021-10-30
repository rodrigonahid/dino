const Game = {
  dino: document.querySelector("#dino"),
  background: document.querySelector(".background"),
  randomTime: Math.random() * 6000,
  position: 20,
  handleSpacebar: function () {
    document.addEventListener("keydown", (event) => {
      if (event.code === "Space") {
        this.jump();
      }
    });
  },
  jump: function () {
    if (this.position <= 120) {
      this.position = 120;
      this.dino.style.bottom = `${this.position}px`;
      setTimeout(() => {
        this.position = 20;
        this.dino.style.bottom = `${this.position}px`;
      }, 500);
    }
  },
  createCactus: function () {
    const Background = document.querySelector(".background");
    const Cactus = document.createElement("div");
    let cactusPosition = 1000;
    Cactus.classList.add("cactus");
    Cactus.style.left = `${cactusPosition}px`;
    console.log(this.background, Background, Cactus);
    Background.appendChild(Cactus);

    let leftInterval = setInterval(() => {
      if (cactusPosition < -60) {
        clearInterval(leftInterval);
      } else if (
        cactusPosition >= 100 &&
        cactusPosition <= 180 &&
        this.position < 30
      ) {
        window.alert("AAAOOOPAAA");
        clearInterval(leftInterval);

        return;
      } else {
        cactusPosition -= 10;
        Cactus.style.left = `${cactusPosition}px`;
      }
    }, 20);
    setTimeout(this.createCactus, this.randomTime);
  },
};

Game.handleSpacebar();
Game.createCactus();
