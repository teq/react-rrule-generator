import RRule from 'rrule';

const computeDaily = ({ interval }) => ({
  freq: RRule.DAILY,
  interval: interval > 0 ? interval : undefined,
});

export default computeDaily;
