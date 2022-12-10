const { Console } = require("@woowacourse/mission-utils");
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(callback) {
    this.getUserInput("다리의 길이를 입력해주세요.\n", callback);
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(callback) {
    this.getUserInput("이동할 칸을 선택해주세요. (위: U, 아래: D)\n", callback);
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(callback) {
    this.getUserInput(
      "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n",
      callback
    );
  },

  getUserInput(guide, callback) {
    Console.readLine(guide, (input) => {
      callback(input);
    });
  },
};

module.exports = InputView;
