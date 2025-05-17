export const getYearsAndMonths = (start: string, end: string): string => {
  const startDate = new Date(start);
  const endDate = end === "Present" ? new Date() : new Date(end);

  let years = endDate.getFullYear() - startDate.getFullYear();
  let months = endDate.getMonth() - startDate.getMonth();

  months++;

  if (months < 0) {
    years--;
    months += 12;
  }

  let differenceString = "";

  if (years === 1) {
    differenceString += years + " year ";
  }

  if (years > 1) {
    differenceString += years + " years ";
  }

  if (months === 1) {
    differenceString += months + " month";
  }

  if (months > 1) {
    differenceString += months + " months";
  }

  return differenceString;
};
