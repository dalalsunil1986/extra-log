const chalk = require('chalk');
const cowsay = require('cowsay');

const { log } = global.console;

const cowSay = (msg, color = 'green') =>
  log(chalk[color](cowsay.say({ text: msg })));
const colorArgs = (color, params) => params.map((param) => {
  if ('object' === typeof param) {
    return param;
  }
  return chalk[color](param);
});

const maxLevel = 3;
let activeLevel = maxLevel;
const levels = {
  info: 3,

  msg: 2,
  success: 2,
  warn: 2,

  error: 1,
};

module.exports = {

  setLevel(level) {
    activeLevel = parseInt(level, 10);
    if (Number.isNaN(activeLevel) || activeLevel > maxLevel) {
      activeLevel = maxLevel;
    } if (0 > activeLevel) {
      activeLevel = 0;
    }
  },


  getLevel() {
    return activeLevel;
  },


  info: (...args) => {
    if (levels.info <= activeLevel) {
      log(...colorArgs('grey', args));
    }
  },


  msg: (...args) => {
    if (levels.msg <= activeLevel) {
      log(...colorArgs('green', args));
    }
  },


  success: (msg) => {
    if (levels.success <= activeLevel) {
      cowSay(msg);
    }
  },


  warn: (msg) => {
    if (levels.warn <= activeLevel) {
      cowSay(msg, 'yellow');
    }
  },


  error: (msg) => {
    if (levels.error <= activeLevel) {
      cowSay(`ERROR: ${msg}`, 'red');
    }
  },

};
