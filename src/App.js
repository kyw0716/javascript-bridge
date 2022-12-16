const BridgeGameController = require("./controller/BridgeGameController");

class App {
  play() {
    const bridgeGame = new BridgeGameController();
    bridgeGame.startGame();
  }
}

module.exports = App;

new App().play();
