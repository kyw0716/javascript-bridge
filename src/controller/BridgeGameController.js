const BridgeGame = require("../BridgeGame");
const { RestartCommand, ResultState } = require("../static/static");
const InputView = require("../views/InputView");
const OutputView = require("../views/OutputView");

class BridgeGameController {
  #gameModel;

  constructor() {}

  startGame() {
    this.inputBridgeSize();
  }

  inputBridgeSize() {
    InputView.readBridgeSize((size) => {
      this.#gameModel = new BridgeGame(size);
      this.inputMoving();
    });
  }

  inputMoving() {
    InputView.readMoving((moving) => {
      this.printMoving(moving);
      this.progressGame(moving);
    });
  }

  inputRestart() {
    InputView.readGameCommand((command) => {
      if (command === RestartCommand.RESTART) {
        this.#gameModel.retry();
        return this.inputMoving();
      }
      if (command === RestartCommand.QUIT)
        return this.printResult(ResultState.GAME_FAILED);
    });
  }

  progressGame(moving) {
    if (this.#gameModel.getCurrentMovingCorrect(moving)) {
      if (this.#gameModel.getIsLastPosition())
        return this.printResult(ResultState.GAME_SUCCESSED);
      this.#gameModel.move();

      return this.inputMoving();
    }
    return this.inputRestart();
  }

  printMoving(moving) {
    if (this.#gameModel.getCurrentMovingCorrect(moving))
      return OutputView.printMap(this.#gameModel.getCurrentMap());
    return OutputView.printWrongMap(this.#gameModel.getCurrentMap());
  }

  printResult(resultState) {
    OutputView.printResult(
      this.#gameModel.getCurrentMap(),
      resultState,
      this.#gameModel.getTotalTrial()
    );
  }
}

module.exports = BridgeGameController;
