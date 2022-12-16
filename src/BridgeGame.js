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

    console.log(this.#answerBridge);
  }

  validateBridgeSize(input) {}

  validateMoving(input) {}

  validateRestart(input) {}
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move() {
    this.#currentPosition += 1;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.#totalTrial += 1;
    this.#currentPosition = 0;
  }

  getIsMovingCorrect(moving) {
    return moving === this.#answerBridge[this.#currentPosition];
  }

  getCurrentCrossState() {
    return this.#answerBridge.slice(0, this.#currentPosition);
  }
}

module.exports = BridgeGame;
