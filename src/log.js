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
let activeLavel = maxLevel;
const levels = {
  info: 3,

  msg: 2,
  success: 2,
  warn: 2,

  error: 1,
};

module.exports = {

  setLevel(level) {
    activeLavel = parseInt(level, 10);
    if (Number.isNaN(activeLavel) || activeLavel > maxLevel) {
      activeLavel = maxLevel;
    } if (0 > activeLavel) {
      activeLavel = 0;
    }
  },


  getLevel() {
    return activeLavel;
  },


  info: (...args) => {
    if (levels.info <= activeLavel) {
      log(...colorArgs('grey', args));
    }
  },


  msg: (...args) => {
    if (levels.msg <= activeLavel) {
      log(...colorArgs('green', args));
    }
  },


  success: (msg) => {
    if (levels.success <= activeLavel) {
      cowSay(msg);
    }
  },


  warn: (msg) => {
    if (levels.warn <= activeLavel) {
      cowSay(msg, 'yellow');
    }
  },


  error: (msg) => {
    if (levels.error <= activeLavel) {
      cowSay(`ERROR: ${msg}`, 'red');
    }
  },

};
