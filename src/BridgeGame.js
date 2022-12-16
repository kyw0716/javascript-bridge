const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const { StaticValue } = require("./static/Static");

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #currentPosition = StaticValue.CURRENT_POSITION_INIT_VALUE;
  #totalTrial = StaticValue.TOTAL_TRIAL_INIT_VALUE;
  #answerBridge;

  constructor(input) {
    const bridgeSize = parseInt(input, 10);

    this.validateBridgeSize(input);
    this.#answerBridge = BridgeMaker.makeBridge(
      bridgeSize,
      BridgeRandomNumberGenerator.generate
    );
  }

  validateBridgeSize(input) {}

  validateMoving(input) {}

  validateRestart(input) {}

  move() {
    this.#currentPosition += 1;
  }

  retry() {
    this.#totalTrial += 1;
    this.#currentPosition = 0;
  }

  getTotalTrial() {
    return this.#totalTrial;
  }

  getIsMovingCorrect(moving) {
    return moving === this.#answerBridge[this.#currentPosition];
  }

  getCurrentCrossState() {
    return this.#answerBridge.slice(0, this.#currentPosition);
  }

  getIsLast() {
    return this.#currentPosition === this.#answerBridge.length;
  }
}

module.exports = BridgeGame;
