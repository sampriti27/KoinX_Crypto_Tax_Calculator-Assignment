import React, { useState } from "react";
import SelectYearCountry from "./form/yearAndCountry/SelectYearCountry";
import IncomeAndInvestment from "./form/userInput/IncomeAndInvestment";
import AnnualIncomeAndTaxRate from "./form/userInput/AnnualIncomeAndTaxRate";
import Price from "./form/userInput/Price";
import GainsAndDiscount from "./form/gainAndDiscount/GainsAndDiscount";
import NetGainAndTaxDisplay from "./form/netGainAndTaxDisplay/NetGainAndTaxDisplay";

const Calculator = () => {
  const [investmentType, setInvestmentType] = useState("Lt");
  const [costPrice, setCostPrice] = useState();
  const [sellPrice, setSellPrice] = useState();
  const [expense, setExpense] = useState();
  // console.log("cost price:", costPrice, "sellPrice: ", sellPrice);
  return (
    <div className="bg-white rounded-lg  mt-5 flex flex-col items-center text-[#0F1629] border p-16 container">
      <h3 className="font-bold text-center text-2xl w-full mb-2">
        Free Crypto Tax Calculator Australia
      </h3>
      <div className="flex flex-col justify-center items-center">
        <SelectYearCountry />
        <hr className="border-1 border-solid border-[#C9CFDD99] w-full" />
        <Price
          costPrice={costPrice}
          setCostPrice={setCostPrice}
          sellPrice={sellPrice}
          setSellPrice={setSellPrice}
        />
        <IncomeAndInvestment
          expense={expense}
          setExpense={setExpense}
          investmentType={investmentType}
          setInvestmentType={setInvestmentType}
        />
        <AnnualIncomeAndTaxRate />
        {investmentType === "Lt" && <GainsAndDiscount />}
        <NetGainAndTaxDisplay />
      </div>
    </div>
  );
};

export default Calculator;
