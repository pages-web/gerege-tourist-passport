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
  name: string;
}

const currencyCountryMapping: Record<
  string,
  { country: string; symbol: string }
> = {
  USD: { country: "US", symbol: "$" },
  EUR: { country: "EU", symbol: "€" },
  JPY: { country: "JP", symbol: "¥" },
  CHF: { country: "CH", symbol: "CHF" },
  SEK: { country: "SE", symbol: "kr" },
  GBP: { country: "GB", symbol: "£" },
  INR: { country: "IN", symbol: "₹" },
  HKD: { country: "HK", symbol: "HK$" },
  RUB: { country: "RU", symbol: "₽" },
  CNY: { country: "CN", symbol: "¥" },
  KRW: { country: "KR", symbol: "₩" },
  CAD: { country: "CA", symbol: "CA$" },
  MNT: { country: "MN", symbol: "₮" },
};

const CurrencyConverter: React.FC<CurrencyConverterProps> = ({ onClose }) => {
  const [currencyData, setCurrencyData] = useState<CurrencyData[]>([]);
  const [amount, setAmount] = useState<number>(0);
  const [convertedAmount, setConvertedAmount] = useState<number>(0);
  const [selectedCurrency, setSelectedCurrency] = useState<string>("USD");
  const [selectedConvertedCurrency, setSelectedConvertedCurrency] =
    useState<string>("MNT");

  const fetchCurrencyData = async () => {
    try {
      const response = await fetch(
        "https://monxansh.appspot.com/xansh.json?currency=USD|EUR|JPY|CHF|SEK|GBP|INR|HKD|RUB|CNY|KRW|CAD|NZD"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      data.push({
        code: "MNT",
        name: "Монгол Төгрөг",
        rate: 1,
        rate_float: 1,
      });

      console.log(data, "asd");

      setCurrencyData(data);
    } catch (error) {
      console.error("Error fetching currency data:", error);
    }
  };

  const handleConversion = () => {
    const selectedCurrencyRate = currencyData?.find(
      (item: any) => item?.code === selectedCurrency
      // @ts-ignore
    )?.rate_float;
    const selectedConvertedCurrencyRate = currencyData?.find(
      (item: any) => item?.code === selectedConvertedCurrency
      // @ts-ignore
    )?.rate_float;
    const convertedAmount =
      (amount / selectedConvertedCurrencyRate) * selectedCurrencyRate;

    // @ts-ignore
    setConvertedAmount(convertedAmount.toFixed(2));
  };

  useEffect(() => {
    fetchCurrencyData();
  }, []);

  useEffect(() => {
    handleConversion();
  }, [amount, selectedCurrency, selectedConvertedCurrency]);

  const formatCurrency = (value: number, symbol: string) => {
    return `${symbol}${new Intl.NumberFormat("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value)}`;
  };

  const getCurrencySymbol = (currency: string) => {
    return currencyCountryMapping[currency]?.symbol || "";
  };

  return (
    <div className="w-[340px] h-[170px] bg-gray-50 rounded-xl px-3 py-2 flex flex-col justify-between">
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
          className="w-4 h-[100px]"
        />
        <div className="w-full h-fit flex flex-col gap-3">
          <div className="w-full h-[50px] border rounded-[8px] overflow-hidden">
            <div className="w-full h-[20px] bg-white flex items-center pl-3 font-semibold text-[13px]">
              Your currency
            </div>
            <div className="w-full h-[30px] flex items-center justify-between px-5 bg-gray-200 ">
              <div className="relative w-[100px] h-fit">
                <input
                  className="w-full font-bold text-[#005AD3] text-[14px] bg-gray-200 pl-[10px]"
                  type="number"
                  value={amount}
                  min={0}
                  onChange={(e) => setAmount(Number(e.target.value))}
                />
                <div className="absolute left-0 top-[51%] z-10 transform -translate-y-1/2 font-bold text-[14px] text-[#005AD3]">
                  {getCurrencySymbol(selectedCurrency)}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Flag
                  code={currencyCountryMapping[selectedCurrency].country}
                  alt={selectedCurrency}
                  width="20"
                  className="w-6 h-6 rounded-full"
                />
                <select
                  value={selectedCurrency}
                  onChange={(e) => setSelectedCurrency(e.target.value)}
                  className="text-[13px] font-bold bg-transparent outline-none"
                >
                  {currencyData.map((currency, index) => (
                    <option key={index} value={currency.code}>
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
            <div className="w-full h-[30px] flex items-center justify-between px-5 bg-gray-200">
              <div className="font-bold text-[#005AD3] text-[14px]">
                {formatCurrency(
                  convertedAmount,
                  currencyCountryMapping[selectedConvertedCurrency].symbol
                )}
              </div>
              <div className="flex items-center gap-2">
                <Flag
                  code={
                    currencyCountryMapping[selectedConvertedCurrency].country
                  }
                  alt={selectedConvertedCurrency}
                  width="20"
                  className="w-6 h-6 rounded-full"
                />
                <select
                  value={selectedConvertedCurrency}
                  onChange={(e) => setSelectedConvertedCurrency(e.target.value)}
                  className="text-[13px] font-bold bg-transparent outline-none"
                >
                  {currencyData.map((currency, index) => (
                    <option key={index} value={currency.code}>
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
