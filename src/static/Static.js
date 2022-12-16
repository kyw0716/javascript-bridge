const StaticValue = Object.freeze({
  UP_BRIDGE: "U",
  DOWN_BRIDGE: "D",
});

const GuideString = Object.freeze({
  START_GAME: "다리 건너기 게임을 시작합니다.\n",
  BRIDGE_SIZE: "다리의 길이를 입력해주세요.\n",
  MOVE_DIRECTION: "이동할 칸을 선택해주세요. (위: U, 아래: D)\n",
  RECOMMEND_RESTART:
    "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)",
});

module.exports = { StaticValue, GuideString };