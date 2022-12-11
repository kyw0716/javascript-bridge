const {
  StaticValue,
  BridgeDirection,
  RestartCommand,
  ErrorMsg,
} = require("../static/static");

const InputValidator = {
  validateBridgeSize(input) {
    if (input.replace(/\d/g, "").length > 0)
      throw new Error(ErrorMsg.INVALID_BRIDGE_SIZE_NOT_NUMBER);
    if (
      parseInt(input) > StaticValue.BRIDGE_RANGE_END ||
      parseInt(input) < StaticValue.BRIDGE_RANGE_START
    )
      throw new Error(ErrorMsg.INVALID_BRIDGE_SIZE_RANGE_ERROR);
  },

  validateMoving(input) {
    const movingCommand = [BridgeDirection.UP, BridgeDirection.DOWN];
    if (!movingCommand.includes(input))
      throw new Error(ErrorMsg.INVALID_MOVING_ERROR);
  },

  validateRestart(input) {
    const restartCommand = [RestartCommand.RESTART, RestartCommand.QUIT];
    if (!restartCommand.includes(input))
      throw new Error(ErrorMsg.INVALID_RESTART_COMMAND_ERROR);
  },
};

module.exports = InputValidator;
