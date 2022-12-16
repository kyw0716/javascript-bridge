const { Console } = require("@woowacourse/mission-utils");
const { StaticValue } = require("../static/Static");

const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(map) {
    const upMap = this.getUpMap(map);
    const downMap = this.getDownMap(map);

    Console.print(`[${upMap.join("|")}]`);
    Console.print(`[${downMap.join("|")}]`);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult() {},

  print(string) {
    Console.print(string);
  },

  getUpMap(map) {
    const upMap = [];

    for (let i = 0; i < map.length; i++) {
      if (map[i] === StaticValue.UP_BRIDGE) upMap.push(StaticValue.CORRECT_MAP);
      if (map[i] === StaticValue.DOWN_BRIDGE) upMap.push(StaticValue.EMPTY_MAP);
    }

    return upMap;
  },

  getDownMap(map) {
    const downMap = [];

    for (let i = 0; i < map.length; i++) {
      if (map[i] === StaticValue.DOWN_BRIDGE)
        downMap.push(StaticValue.CORRECT_MAP);
      if (map[i] === StaticValue.UP_BRIDGE) downMap.push(StaticValue.EMPTY_MAP);
    }

    return downMap;
  },
};

module.exports = OutputView;
