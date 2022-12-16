const StaticValue = Object.freeze({
  UP_BRIDGE: "U",
  DOWN_BRIDGE: "D",
  RESTART: "R",
  QUIT: "Q",
  CORRECT_MAP: " O ",
  WRONG_MAP: " X ",
  EMPTY_MAP: "   ",
  CURRENT_POSITION_INIT_VALUE: 0,
  TOTAL_TRIAL_INIT_VALUE: 1,
  BRIDGE_RANGE_START: 3,
  BRIDGE_RANGE_END: 20,
});

const GuideString = Object.freeze({
  START_GAME: "다리 건너기 게임을 시작합니다.\n",
  BRIDGE_SIZE: "다리의 길이를 입력해주세요.\n",
  MOVE_DIRECTION: "이동할 칸을 선택해주세요. (위: U, 아래: D)\n",
  RECOMMEND_RESTART:
    "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n",
  RESULT: "최종 게임 결과",
  SUCCESS: "게임 성공 여부: 성공",
  FAIL: "게임 성공 여부: 실패",
  TOTAL_TRIAL: "총 시도한 횟수: ",
});

const ErrorString = Object.freeze({
  EMPTY_INPUT: "[ERROR] 입력값이 없습니다.",
  BRIDGE_SIZE_NOT_NUMBER: "[ERROR] 다리 길이는 숫자만 입력 가능합니다.",
  BRIDGE_SIZE_RANGE: "[ERROR] 다리 길이는 3 - 20 범위를 벗어날 수 없습니다.",
  MOVING: "[ERROR] 이동할 칸은 U, D로만 입력 가능합니다.",
  RESTART: "[ERROR] 재시작 여부는 R, Q로만 입력 가능합니다.",
});

module.exports = { StaticValue, GuideString, ErrorString };
