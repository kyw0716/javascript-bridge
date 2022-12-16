const BridgeGame = require("../BridgeGame");
const { GuideString, StaticValue } = require("../static/Static");
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
      this.inputMoving();
    });
  }

  inputMoving() {
    InputView.readMoving((input) => {
      this.#bridgeGameModel.validateMoving(input);

      this.handleGameProcess(this.#bridgeGameModel.getIsMovingCorrect(input));
    });
  }

  inputRestart() {
    InputView.readGameCommand((input) => {
      this.#bridgeGameModel.validateRestart(input);

      this.handleRestart(input);
    });
  }

  handleGameProcess(isMoveCorrect) {
    if (isMoveCorrect) {
      this.#bridgeGameModel.move();
      OutputView.printMap(this.#bridgeGameModel.getCurrentCrossState());

      return this.inputMoving();
    }
    return this.inputRestart();
  }

  handleRestart(input) {
    if (input === StaticValue.RESTART) {
      this.#bridgeGameModel.retry();
      return this.inputMoving();
    }
    return this.handleGameEnd();
  }

  handleGameEnd() {}
}

module.exports = BridgeGameController;
