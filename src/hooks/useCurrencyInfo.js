import { useEffect, useState } from "react";


function useCurrencyInfo(currency){
    [data, setData] = useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`) //fetching exchange rates for the currency
        .then((res)=>res.json()) //converting returned value to json format
        .then((res)=> setData(res[currency])); // res has 2 key-val pairs, and setting only currency exchange rates to data state variable(will be used as options while choosing to which currency to convert)
    }, [currency]);
    return data;
}

export default useCurrencyInfo;