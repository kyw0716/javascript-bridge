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

module.exports = { StaticValue, GuideString };
