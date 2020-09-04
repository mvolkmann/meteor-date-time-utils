import {Tinytest} from 'meteor/tinytest';

import {
  name,
  nextHourString,
  nowDateString,
  time24to12,
  timeStringFromMs
} from 'meteor/mvolkmann:date-time-utils';

Tinytest.add('date-time-utils - name', test => {
  test.equal(name, 'date-time-utils');
});

Tinytest.add('date-time-utils - nextHourString', test => {
  const [hours, minutes] = nextHourString().split(':');
  const now = new Date();
  test.equal(Number(hours), now.getHours() + 1);
  test.equal(Number(minutes), 0);
});

Tinytest.add('date-time-utils - nowDateString', test => {
  const [year, month, date] = nowDateString().split('-');
  const now = new Date();
  test.equal(Number(year), now.getFullYear());
  test.equal(Number(month), now.getMonth() + 1);
  test.equal(Number(date), now.getDate());
});

Tinytest.add('date-time-utils - time24to12', test => {
  test.equal(time24to12('1:02'), '1:02 AM');
  test.equal(time24to12('13:04'), '1:04 PM');
});

Tinytest.add('date-time-utils - timeStringFromMs', test => {
  test.equal(timeStringFromMs(0), '0:00');

  const hours = 15;
  const seconds = 19;
  const ms = (hours * 60 + seconds) * 1000;
  test.equal(timeStringFromMs(ms), hours + ':' + seconds);
});
