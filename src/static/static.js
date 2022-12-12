const ErrorMsg = Object.freeze({
  INVALID_BRIDGE_SIZE_NOT_NUMBER: "[ERROR] 다리 길이는 숫자만 입력 가능합니다.",
  INVALID_BRIDGE_SIZE_RANGE_ERROR:
    "[ERROR] 다리 길이는 3 ~ 20 범위의 숫자만 입력 가능합니다.",
  INVALID_MOVING_ERROR: "[ERROR] 이동할 칸 선택은 U, D만 가능 합니다.",
  INVALID_RESTART_COMMAND_ERROR: "[ERROR] 재시작 선택은 R, Q만 가능합니다.",
});

const ResultState = Object.freeze({
  GAME_FAILED: "실패",
  GAME_SUCCESSED: "성공",
});

const GuideMsg = Object.freeze({
  INPUT_BRIDGE_SIZE: "다리의 길이를 입력해주세요.\n",
  INPUT_MOVING: "이동할 칸을 선택해주세요. (위: U, 아래: D)\n",
  INPUT_RESTART:
    "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n",
});

const BridgeDirection = Object.freeze({
  UP: "U",
  DOWN: "D",
});

const RestartCommand = Object.freeze({
  RESTART: "R",
  QUIT: "Q",
});

const MoveState = Object.freeze({
  NOTHING: "   ",
  SUCCESS: " O ",
  FAILED: " X ",
});

const StaticValue = Object.freeze({
  START_POSITION: 0,
  FIRST_TRIAL_COUNT: 1,
  BRIDGE_RANGE_END: 20,
  BRIDGE_RANGE_START: 3,
});

module.exports = {
  ErrorMsg,
  ResultState,
  GuideMsg,
  BridgeDirection,
  RestartCommand,
  MoveState,
  StaticValue,
};
