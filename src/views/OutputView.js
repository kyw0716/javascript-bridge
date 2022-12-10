const { Console } = require("@woowacourse/mission-utils");
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(map) {
    const upMap = this.makeUpMap(map);
    const downMap = this.makeDownMap(map);

    Console.print(`[${upMap.join("|")}]`);
    Console.print(`[${downMap.join("|")}]`);
  },

  printWrongMap(map) {
    const [upMap, downMap] = this.makeWrongMap(
      map[map.length - 1],
      this.makeUpMap(map),
      this.makeDownMap(map)
    );

    Console.print(`[${upMap.join("|")}]`);
    Console.print(`[${downMap.join("|")}]`);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult() {},

  makeUpMap(map) {
    const upMap = [];

    for (let i = 0; i < map.length; i++) {
      if (map[i] === "U") upMap.push(" O ");
      if (map[i] === "D") upMap.push("   ");
    }

    return upMap;
  },

  makeDownMap(map) {
    const downMap = [];

    for (let i = 0; i < map.length; i++) {
      if (map[i] === "D") downMap.push(" O ");
      if (map[i] === "U") downMap.push("   ");
    }

    return downMap;
  },

  makeWrongMap(lastDirection, upMap, downMap) {
    if (lastDirection === "U") {
      upMap.pop();
      upMap.push(" X ");
      return [upMap, downMap];
    }
    downMap.pop();
    downMap.push(" X ");
    return [upMap, downMap];
  },
};

module.exports = OutputView;
