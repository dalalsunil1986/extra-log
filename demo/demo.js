const log = require('../src/log');

log.msg('Message');
log.info('Info');
log.success('Success');
log.warn('Warn');
log.error('Error');

for (let i = 4; -1 <= i; --i) {
  log.setLevel(i);
  console.log(`****** Run #${i} ******`);

  log.msg(`Message when level ${log.getLevel()}`);
  log.info(`Info when level ${log.getLevel()}`);
  log.success(`Success when level ${log.getLevel()}`);
  log.warn(`Warn when level ${log.getLevel()}`);
  log.error(`Error when level ${log.getLevel()}`);
}

log.setLevel(3);
log.info('Log string', { key: 1, value: 'value' }, 'including object');
log.info('Log string', 5, 'and number');

log.msg('Log string', { key: 1, value: 'value' }, 'including object');
log.msg('Log string', 5, 'and number');
