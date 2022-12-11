const { Console } = require("@woowacourse/mission-utils");
const { GuideMsg } = require("../static/static");
const InputValidator = require("../utils/InputValidator");
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(callback) {
    try {
      this.getUserInput(
        GuideMsg.INPUT_BRIDGE_SIZE,
        callback,
        InputValidator.validateBridgeSize
      );
    } catch (error) {
      Console.print(error);
      this.readBridgeSize(callback);
    }
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(callback) {
    try {
      this.getUserInput(
        GuideMsg.INPUT_MOVING,
        callback,
        InputValidator.validateMoving
      );
    } catch (error) {
      Console.print(error);
      this.readBridgeSize(callback);
    }
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(callback) {
    try {
      this.getUserInput(
        GuideMsg.INPUT_RESTART,
        callback,
        InputValidator.validateRestart
      );
    } catch (error) {
      Console.print(error);
      this.readBridgeSize(callback);
    }
  },

  getUserInput(guide, callback, validate) {
    Console.readLine(guide, (input) => {
      validate(input);
      callback(input);
    });
  },
};

module.exports = InputView;
