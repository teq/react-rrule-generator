import RRule from 'rrule';

const computeHourly = ({ interval }) => ({
  freq: RRule.HOURLY,
  interval: interval > 0 ? interval : undefined,
});

export default computeHourly;
