const { Console } = require("@woowacourse/mission-utils");
const { StaticValue, GuideString } = require("../static/Static");

const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(map) {
    const upMap = this.getUpMap(map);
    const downMap = this.getDownMap(map);

    this.print(`[${upMap.join("|")}]`);
    this.print(`[${downMap.join("|")}]\n`);
  },

  printWrongMap(map) {
    const upMap = this.getWrongUpMap(this.getUpMap(map), map);
    const downMap = this.getWrongDownMap(this.getDownMap(map), map);

    this.print(`[${upMap.join("|")}]`);
    this.print(`[${downMap.join("|")}]\n`);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(status, map) {
    this.print(GuideString.RESULT);

    if (status) {
      this.printMap(map);
      this.print(GuideString.SUCCESS);
    }
    if (!status) {
      this.printWrongMap(map);
      this.print(GuideString.FAIL);
    }
  },

  printTotalTrial(totalTrial) {
    this.print(GuideString.TOTAL_TRIAL + `${totalTrial}`);
    Console.close();
  },

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

  getWrongUpMap(upMap, map) {
    const wrongUpMap = upMap.filter((v, i) => i !== upMap.length - 1);

    if (map[map.length - 1] === StaticValue.UP_BRIDGE) {
      wrongUpMap.push(StaticValue.EMPTY_MAP);
      return wrongUpMap;
    }

    wrongUpMap.push(StaticValue.WRONG_MAP);
    return wrongUpMap;
  },

  getWrongDownMap(downMap, map) {
    const wrongDownMap = downMap.filter((v, i) => i !== downMap.length - 1);

    if (map[map.length - 1] === StaticValue.UP_BRIDGE) {
      wrongDownMap.push(StaticValue.WRONG_MAP);
      return wrongDownMap;
    }

    wrongDownMap.push(StaticValue.EMPTY_MAP);
    return wrongDownMap;
  },
};

module.exports = OutputView;
