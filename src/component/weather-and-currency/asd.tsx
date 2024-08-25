import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import Flag from "react-world-flags";

interface CurrencyConverterProps {
  onClose: () => void;
}

interface CurrencyData {
  code: string;
  rate: number;
}

const currencyCountryMapping: Record<string, string> = {
  USD: "US",
  EUR: "EU",
  JPY: "JP",
  CHF: "CH",
  SEK: "SE",
  GBP: "GB",
  INR: "IN",
  HKD: "HK",
  RUB: "RU",
  CNY: "CN",
  KRW: "KR",
  CAD: "CA",
  MNT: "MN",
};

const CurrencyConverter: React.FC<CurrencyConverterProps> = ({ onClose }) => {
  const [currencyData, setCurrencyData] = useState<CurrencyData[]>([]);
  const [amount, setAmount] = useState<number>(1);
  const [convertedAmount, setConvertedAmount] = useState<number>(0);
  const [selectedCurrency, setSelectedCurrency] = useState<string>("USD");
  const [targetCurrency, setTargetCurrency] = useState<string>("MNT");

  const fetchCurrencyData = async () => {
    try {
      const response = await fetch(
        "https://monxansh.appspot.com/xansh.json?currency=USD|EUR|JPY|CHF|SEK|GBP|INR|HKD|RUB|CNY|KRW|CAD|MNT"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();

      console.log("Fetched data:", data);

      setCurrencyData(data);
    } catch (error) {
      console.error("Error fetching currency data:", error);
    }
  };

  const handleConversion = () => {
    const fromCurrency = currencyData.find(
      (cur) => cur.code === selectedCurrency
    );
    const toCurrency = currencyData.find((cur) => cur.code === targetCurrency);

    if (fromCurrency && toCurrency && !isNaN(amount)) {
      setConvertedAmount((amount / fromCurrency.rate) * toCurrency.rate);
    }
  };

  useEffect(() => {
    fetchCurrencyData();
  }, []);

  useEffect(() => {
    handleConversion();
  }, [amount, selectedCurrency, targetCurrency, currencyData]);

  return (
    <div className="w-[340px] h-[160px] bg-gray-50 rounded-xl px-3 py-2 flex flex-col justify-between">
      <div className="w-full h-fit flex items-center justify-between">
        <div className="w-fit h-fit flex gap-2 items-center">
          <div className="text-[17px] font-bold">Exchange currency</div>
          <div className="text-[#039855] text-[13px] font-semibold">
            Live data
          </div>
        </div>

        <div className="cursor-pointer" onClick={onClose}>
          <CloseIcon />
        </div>
      </div>
      <div className="flex items-center w-full h-fit gap-3">
        <Image
          alt=""
          src="/image/currency1.png"
          width={15}
          height={80}
          className="w-4 h-[90px]"
        />
        <div className="w-full h-fit flex flex-col gap-3">
          <div className="w-full h-[50px] border rounded-[8px] overflow-hidden">
            <div className="w-full h-[20px] bg-white flex items-center pl-3 font-semibold text-[13px]">
              Your currency
            </div>
            <div className="w-full h-[30px] flex items-center justify-between px-5 bg-gray-200 ">
              <input
                className="font-bold text-[#005AD3] text-[14px]"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                type="number"
              />
              <div className="flex items-center gap-1">
                <Flag
                  code={currencyCountryMapping[selectedCurrency]}
                  alt={selectedCurrency}
                  width="20"
                />
                <select
                  className="text-[13px] font-bold"
                  value={selectedCurrency}
                  onChange={(e) => setSelectedCurrency(e.target.value)}
                >
                  {currencyData.map((currency) => (
                    <option key={currency.code} value={currency.code}>
                      {currency.code}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="w-full h-[50px] border rounded-[8px] overflow-hidden">
            <div className="w-full h-[20px] bg-white flex items-center pl-3 font-semibold text-[13px]">
              Converted currency
            </div>
            <div className="w-full h-[30px] flex items-center justify-between px-5 bg-gray-200 ">
              <div className="font-bold text-[#005AD3] text-[14px]">
                {convertedAmount.toFixed(2)}
              </div>
              <div className="flex items-center gap-1">
                <Flag
                  code={currencyCountryMapping[targetCurrency]}
                  alt={targetCurrency}
                  width="20"
                />
                <select
                  className="text-[13px] font-bold"
                  value={targetCurrency}
                  onChange={(e) => setTargetCurrency(e.target.value)}
                >
                  {currencyData.map((currency) => (
                    <option key={currency.code} value={currency.code}>
                      {currency.code}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrencyConverter;
