import RRule from 'rrule';

import computeMonthlyOn from './computeMonthlyOn';
import computeMonthlyOnThe from './computeMonthlyOnThe';

const computeMonthly = ({
  mode,
  interval,
  on,
  onThe,
}) => ({
  freq: RRule.MONTHLY,
  interval: interval > 0 ? interval : undefined,
  ...(mode === 'on' ? computeMonthlyOn(on) : computeMonthlyOnThe(onThe)),
});

export default computeMonthly;
