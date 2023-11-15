export const getFirstDate = (nbrOfYears: number) => {
  const date = new Date();
  const year = date.getFullYear();
  const day = date.getDate();
  const month = date.getMonth();
  const oldYear = year - nbrOfYears;

  const formatNumber = (nbr: number) => {
    let result = "";
    if (nbr < 10) {
      result = "0" + nbr.toString();
    } else {
      result = nbr.toString();
    }
    return result;
  };

  const firstDate = `${oldYear.toString()}-${formatNumber(
    month + 1
  )}-${formatNumber(day)}`;

  return firstDate;
};
