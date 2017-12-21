const log = require('../src/log');

log.msg('Message');
log.info('Info');
log.success('Success');
log.warn('Warn');
log.error('Error');

for (let i = 4; i >= -1; --i) {
  log.setLevel(i);
  console.log(`****** Run #${i} ******`);

  log.msg(`Message when level ${log.getLevel()}`);
  log.info(`Info when level ${log.getLevel()}`);
  log.success(`Success when level ${log.getLevel()}`);
  log.warn(`Warn when level ${log.getLevel()}`);
  log.error(`Error when level ${log.getLevel()}`);
}
