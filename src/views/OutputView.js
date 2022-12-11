const { Console } = require("@woowacourse/mission-utils");
const { BridgeDirection, MoveState } = require("../static/static");
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
    Console.print(`[${downMap.join("|")}]\n`);
  },

  printWrongMap(map) {
    const [upMap, downMap] = [this.makeUpMap(map), this.makeDownMap(map)];
    let wrongMap = [];

    if (map[map.length - 1] === BridgeDirection.UP)
      [...wrongMap] = this.makeUpWrongMap(upMap, downMap);
    if (map[map.length - 1] === BridgeDirection.DOWN)
      [...wrongMap] = this.makeUpWrongMap(upMap, downMap);

    Console.print(`[${wrongMap[0].join("|")}]`);
    Console.print(`[${wrongMap[1].join("|")}]\n`);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(map, resultState, totalTrial) {
    Console.print("\n최종 게임 결과");
    this.printMap(map);
    Console.print(`게임 성공 여부: ${resultState}`);
    Console.print(`총 시도한 횟수: ${totalTrial}`);
  },

  makeUpMap(map) {
    const upMap = [];

    for (let i = 0; i < map.length; i++) {
      if (map[i] === BridgeDirection.UP) upMap.push(MoveState.SUCCESS);
      if (map[i] === BridgeDirection.DOWN) upMap.push(MoveState.NOTHING);
    }

    return upMap;
  },

  makeDownMap(map) {
    const downMap = [];

    for (let i = 0; i < map.length; i++) {
      if (map[i] === BridgeDirection.DOWN) downMap.push(MoveState.SUCCESS);
      if (map[i] === BridgeDirection.UP) downMap.push(MoveState.NOTHING);
    }

    return downMap;
  },

  makeUpWrongMap(upMap, downMap) {
    downMap.pop();
    downMap.push(MoveState.FAILED);
    upMap.pop();
    upMap.push(MoveState.NOTHING);
    return [upMap, downMap];
  },

  makedownWrongMap(upMap, downMap) {
    upMap.pop();
    upMap.push(MoveState.FAILED);
    downMap.pop();
    downMap.push(MoveState.NOTHING);
    return [upMap, downMap];
  },
};

module.exports = OutputView;
