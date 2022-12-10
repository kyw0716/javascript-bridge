const InputValidator = {
  validateBridgeSize(input) {
    if (input.replace(/\d/g, "").length > 0) throw new Error("[ERROR]");
    if (parseInt(input) > 20 || parseInt(input) < 3) throw new Error("[ERROR]");
  },
  validateMoving(input) {
    const movingCommand = ["U", "D"];
    if (!movingCommand.includes(input)) throw new Error("[ERROR]");
  },
  validateRestart(input) {
    const restartCommand = ["R", "Q"];
    if (!restartCommand.includes(input)) throw new Error("[ERROR]");
  },
};

module.exports = InputValidator;
