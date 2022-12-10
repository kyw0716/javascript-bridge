const BridgeGame = require("../BridgeGame");
const InputView = require("../views/InputView");

class BridgeGameController {
  #gameModel;

  constructor() {}

  startGame() {
    this.inputBridgeSize();
  }

  inputBridgeSize() {
    InputView.readBridgeSize((size) => {
      this.#gameModel = new BridgeGame(size);
    });
  }

  inputMoving() {
    InputView.readMoving((moving) => {
      if (this.#gameModel.getCurrentMovingCorrect(moving))
        this.#gameModel.move();
    });
  }
}

module.exports = BridgeGameController;
