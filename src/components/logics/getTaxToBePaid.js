export const getTaxToBePaid = ({ netCapitalGain, annualIncome }) => {
  let taxToBePaid = "";
  switch (annualIncome) {
    case "0":
      taxToBePaid = 0;
      break;
    case "18":
      taxToBePaid = 0.19 * netCapitalGain;
      break;
    case "45":
      taxToBePaid = 5092 + 0.325 * netCapitalGain;
      break;
    case "120":
      taxToBePaid = 29467 + 0.37 * netCapitalGain;
      break;
    case "180":
      taxToBePaid = 51667 + 45 * netCapitalGain;
      break;
    default:
      break;
  }

  return taxToBePaid;
};
