const BridgeMaker = require("./BridgeMaker");
const { StaticValue } = require("./static/static");
const BridgeRandomNumberGenerator = require("./utils/BridgeRandomNumberGenerator");

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #currentPosition = StaticValue.START_POSITION;
  #totalTrial = StaticValue.FIRST_TRIAL_COUNT;
  #answer;

  constructor(size) {
    this.#answer = BridgeMaker.makeBridge(
      size,
      BridgeRandomNumberGenerator.generate
    );
    console.log(this.#answer);
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move() {
    const lastPosition = this.#answer.length - 1;
    if (this.#currentPosition < lastPosition) this.#currentPosition++;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.#currentPosition = 0;
    this.#totalTrial++;
  }

  getCurrentMovingCorrect(moving) {
    return moving === this.#answer[this.#currentPosition];
  }

  getCurrentMap() {
    return this.#answer.filter((v, i) => i <= this.#currentPosition);
  }

  getIsLastPosition() {
    return this.#answer.length - 1 === this.#currentPosition;
  }

  getTotalTrial() {
    return this.#totalTrial;
  }
}

module.exports = BridgeGame;
