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
    this.#bridgeGameModel.move();

    if (!isMoveCorrect) {
      OutputView.printWrongMap(this.#bridgeGameModel.getCurrentCrossState());
      return this.inputRestart();
    }
    if (this.#bridgeGameModel.getIsLast()) return this.handleGameEnd(true);

    OutputView.printMap(this.#bridgeGameModel.getCurrentCrossState());
    return this.inputMoving();
  }

  handleRestart(input) {
    if (input === StaticValue.RESTART) {
      this.#bridgeGameModel.retry();
      return this.inputMoving();
    }
    return this.handleGameEnd(false);
  }

  handleGameEnd(status) {
    OutputView.printResult(
      status,
      this.#bridgeGameModel.getCurrentCrossState()
    );
    OutputView.printTotalTrial(this.#bridgeGameModel.getTotalTrial());
  }
}

module.exports = BridgeGameController;
