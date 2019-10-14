const computeEndOnDate = (data, { until }) => {
  if (!until) {
    return data.end.onDate.date;
  }

  return new Date(until.getUTCFullYear(), until.getUTCMonth(), until.getUTCDate());
};

export default computeEndOnDate;
