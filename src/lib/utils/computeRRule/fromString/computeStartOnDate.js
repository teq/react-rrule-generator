const computeStartOnDate = (data, { dtstart }) => {
  if (!dtstart) {
    return data.start.onDate.date;
  }

  return new Date(dtstart.getUTCFullYear(), dtstart.getUTCMonth(), dtstart.getUTCDate());
};
export default computeStartOnDate;
