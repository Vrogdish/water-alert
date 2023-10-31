export const getFirstDate = (nbrOfYears: number) => {
    const date = new Date();
    const year = date.getFullYear();
    const day = date.getDate();
    const month = date.getMonth();

    const formatNumber = (nbr : number) => {
      let result = ""
      if (nbr < 10) {
        result = "0"+ nbr.toString()
      } else {
        result = nbr.toString()
      }
      return result
    }

    const firstDate = `${(
      year - nbrOfYears
    ).toString()}-${formatNumber(month+1)}-${formatNumber(day)}`;

    return firstDate;
  };