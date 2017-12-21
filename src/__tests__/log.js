/* eslint-disable no-console */
const chalk = require('chalk');
const cowsay = require('cowsay');

jest.mock('chalk', () => ({
  green: jest.fn(),
  grey: jest.fn(),
  red: jest.fn(),
  yellow: jest.fn(),
}));
jest.mock('cowsay', () => ({ say: jest.fn() }));
const logMocked = jest.fn((...args) => [...args]);
console.log = logMocked;

const log = require('../log');

describe('log', () => {
  beforeEach(() => {
    log.setLevel(3);

    chalk.green.mockReset();
    chalk.grey.mockReset();
    chalk.red.mockReset();
    chalk.yellow.mockReset();
    cowsay.say.mockReset();
    logMocked.mockReset();

    chalk.green.mockImplementation((...args) => [...args]);
    chalk.grey.mockImplementation((...args) => [...args]);
    chalk.red.mockImplementation((...args) => [...args]);
    chalk.yellow.mockImplementation((...args) => [...args]);
    cowsay.say.mockImplementation((...args) => [...args]);
    logMocked.mockImplementation((...args) => [...args]);
  });


  it('info', () => {
    log.info('Test info');

    expect(logMocked).toHaveBeenCalledTimes(1);
    expect(logMocked.mock.calls).toMatchSnapshot();
    expect(chalk.grey).toHaveBeenCalledTimes(1);
    expect(chalk.grey.mock.calls).toMatchSnapshot();
  });


  it('info is off when log level < 3', () => {
    log.setLevel(2);
    log.info('Test info');

    expect(logMocked).toHaveBeenCalledTimes(0);
    expect(chalk.grey).toHaveBeenCalledTimes(0);
  });


  it('msg', () => {
    log.msg('Test msg');

    expect(logMocked).toHaveBeenCalledTimes(1);
    expect(logMocked.mock.calls).toMatchSnapshot();
    expect(chalk.green).toHaveBeenCalledTimes(1);
    expect(chalk.green.mock.calls).toMatchSnapshot();
  });


  it('msg is off when log level < 2', () => {
    log.setLevel(1);
    log.msg('Test msg');

    expect(logMocked).toHaveBeenCalledTimes(0);
    expect(chalk.grey).toHaveBeenCalledTimes(0);
  });


  it('success', () => {
    log.success('Test success');

    expect(logMocked).toHaveBeenCalledTimes(1);
    expect(logMocked.mock.calls).toMatchSnapshot();
    expect(chalk.green).toHaveBeenCalledTimes(1);
    expect(chalk.green.mock.calls).toMatchSnapshot();
    expect(cowsay.say).toHaveBeenCalledTimes(1);
    expect(cowsay.say.mock.calls).toMatchSnapshot();
  });


  it('success is off when log level < 2', () => {
    log.setLevel(1);
    log.success('Test success');

    expect(logMocked).toHaveBeenCalledTimes(0);
    expect(chalk.green).toHaveBeenCalledTimes(0);
    expect(cowsay.say).toHaveBeenCalledTimes(0);
  });


  it('warn', () => {
    log.warn('Test warn');

    expect(logMocked).toHaveBeenCalledTimes(1);
    expect(logMocked.mock.calls).toMatchSnapshot();
    expect(chalk.yellow).toHaveBeenCalledTimes(1);
    expect(chalk.yellow.mock.calls).toMatchSnapshot();
    expect(cowsay.say).toHaveBeenCalledTimes(1);
    expect(cowsay.say.mock.calls).toMatchSnapshot();
  });


  it('warn is off when log level < 2', () => {
    log.setLevel(1);
    log.warn('Test warn');

    expect(logMocked).toHaveBeenCalledTimes(0);
    expect(chalk.yellow).toHaveBeenCalledTimes(0);
    expect(cowsay.say).toHaveBeenCalledTimes(0);
  });


  it('error', () => {
    log.error('Test error');

    expect(logMocked).toHaveBeenCalledTimes(1);
    expect(logMocked.mock.calls).toMatchSnapshot();
    expect(chalk.red).toHaveBeenCalledTimes(1);
    expect(chalk.red.mock.calls).toMatchSnapshot();
    expect(cowsay.say).toHaveBeenCalledTimes(1);
    expect(cowsay.say.mock.calls).toMatchSnapshot();
  });


  it('error is off when log level is 0', () => {
    log.setLevel(0);
    log.error('Test error');

    expect(logMocked).toHaveBeenCalledTimes(0);
    expect(chalk.red).toHaveBeenCalledTimes(0);
    expect(cowsay.say).toHaveBeenCalledTimes(0);
  });


  it('set error level', () => {
    // isNaN
    log.setLevel('asasd');
    expect(log.getLevel()).toBe(3);

    // > max
    log.setLevel(10);
    expect(log.getLevel()).toBe(3);

    // < min
    log.setLevel(-10);
    expect(log.getLevel()).toBe(0);
  });
});
