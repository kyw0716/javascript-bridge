const BridgeGame = require("../BridgeGame");
const { GuideString } = require("../static/Static");
const InputView = require("../view/InputView");
const OutputView = require("../view/OutputView");

class BridgeGameController {
  #bridgeGameModel;

  constructor() {}

  startGame() {
    OutputView.print(GuideString.START_GAME);

    this.inputBridgeSize();
  }

  inputBridgeSize() {
    InputView.readBridgeSize((input) => {
      this.#bridgeGameModel = new BridgeGame(input);
    });
  }
}

module.exports = BridgeGameController;
