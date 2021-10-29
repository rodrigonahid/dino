const Game = {
  dino: document.querySelector("#dino"),
  background: document.querySelector(".background"),
  isJumping: false,
  handleSpacebar: function () {
    document.addEventListener("keydown", (event) => {
      if (event.code === "Space") {
        this.jump();
      }
    });
  },
  jump: function () {
    if (!this.isJumping) {
      this.isJumping = true;
      this.dino.style.bottom = "120px";
      setTimeout(() => {
        this.dino.style.bottom = "20px";
        this.isJumping = false;
      }, 500);
    }
  },
  createCactus: function () {
    const cactus = document.createElement("div");
    cactus.classList.add("cactus");
    cactus.style.left = "1000px";
    this.background.appendChild(cactus);
    console.log(cactus);
  },
};
Game.handleSpacebar();
Game.createCactus();
