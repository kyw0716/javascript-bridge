const BridgeGameController = require("./controller/BridgeGameController");

class App {
  play() {
    const gameController = new BridgeGameController();
    gameController.startGame();
  }
}

module.exports = App;

new App().play();
