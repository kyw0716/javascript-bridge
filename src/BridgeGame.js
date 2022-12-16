const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const { StaticValue, ErrorString } = require("./static/Static");

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

  validateBridgeSize(input) {
    const bridgeSize = parseInt(input, 10);

    if (input.length === 0) throw new Error(ErrorString.EMPTY_INPUT);
    if (isNaN(input)) throw new Error(ErrorString.BRIDGE_SIZE_NOT_NUMBER);
    if (
      bridgeSize < StaticValue.BRIDGE_RANGE_START ||
      bridgeSize > StaticValue.BRIDGE_RANGE_END
    )
      throw new Error(ErrorString.BRIDGE_SIZE_RANGE);
  }

  validateMoving(input) {
    const moving = ["U", "D"];

    if (!moving.includes(input)) throw new Error(ErrorString.MOVING);
  }

  validateRestart(input) {
    const restart = ["R", "Q"];

    if (!restart.includes(input)) throw new Error(ErrorString.RESTART);
  }

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
