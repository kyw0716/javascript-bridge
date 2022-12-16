const { Console } = require("@woowacourse/mission-utils");
const { GuideString } = require("../static/Static");
const OutputView = require("./OutputView");

const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(callback) {
    this.getUserInput(GuideString.BRIDGE_SIZE, callback, this.readBridgeSize);
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(callback) {
    this.getUserInput(GuideString.MOVE_DIRECTION, callback, this.readMoving);
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(callback) {
    this.getUserInput(
      GuideString.RECOMMEND_RESTART,
      callback,
      this.readGameCommand
    );
  },

  getUserInput(guide, callback, redirect) {
    Console.readLine(guide, (input) => {
      try {
        callback(input);
      } catch (error) {
        OutputView.print(error);
        redirect();
      }
    });
  },
};

module.exports = InputView;
