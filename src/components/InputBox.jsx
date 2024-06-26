import React, { useId } from "react";
function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
}) {
  const amountInputId = useId();
  return (
    <>
      <div className="bg-white p-3 mx-auto  text-sm flex rounded-xl my-2">
        <div className="w-1/2">
          <label htmlFor={amountInputId} className="text-zinc-500">
            {label}
          </label>
          <input
            type="number"
            id={amountInputId}
            className="outline-none w-full py-1.5"
            placeholder="amount"
            value={amount}
            onChange={(e) => {
              onAmountChange && onAmountChange(Number(e.target.value));
            }}
          />
        </div>
        <div className="w-1/2 flex flex-wrap justify-end text-right">
          <p className="text-black/40 mb-2 w-full">Currency Type</p>
          <select
            className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
            value={selectCurrency}
            onChange={(e) => {
              onCurrencyChange && onCurrencyChange(e.target.value);
            }}
          >
            {currencyOptions.map((currency) => (
              <option value={currency} key={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
}

export default InputBox;
