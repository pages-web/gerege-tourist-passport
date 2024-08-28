import React, { useEffect, useState, useRef } from "react";
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
  rate_float?: number;
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

const Currency: React.FC<CurrencyConverterProps> = ({ onClose }) => {
  const currencyRef = useRef<HTMLDivElement | null>(null);
  const [currencyData, setCurrencyData] = useState<CurrencyData[]>([]);
  const [amount, setAmount] = useState<number>(0);
  const [convertedAmount, setConvertedAmount] = useState<number>(0);
  const [selectedCurrency, setSelectedCurrency] = useState<string>("USD");
  const [selectedConvertedCurrency, setSelectedConvertedCurrency] =
    useState<string>("MNT");

  const fetchCurrencyData = async () => {
    try {
      const response = await fetch(
        "https://monxansh.appspot.com/xansh.json?currency=USD|EUR|JPY|CHF|SEK|GBP|INR|HKD|RUB|CNY|KRW|CAD"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      // Add MNT manually
      data.push({
        code: "MNT",
        name: "Монгол Төгрөг",
        rate: 1,
        rate_float: 1,
      });

      setCurrencyData(data);
    } catch (error) {
      console.error("Error fetching currency data:", error);
    }
  };

  const handleConversion = () => {
    const selectedCurrencyRate = currencyData.find(
      (item) => item.code === selectedCurrency
    )?.rate_float;
    const selectedConvertedCurrencyRate = currencyData.find(
      (item) => item.code === selectedConvertedCurrency
    )?.rate_float;

    if (
      selectedCurrencyRate === undefined ||
      selectedConvertedCurrencyRate === undefined
    ) {
      console.error("Currency rate is undefined");
      return;
    }

    const convertedAmount =
      (amount / selectedConvertedCurrencyRate) * selectedCurrencyRate;
    setConvertedAmount(convertedAmount);
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

  // Mouse outside clicked moment component hide
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        currencyRef.current &&
        !currencyRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div
      ref={currencyRef}
      className="lg:w-[340px] w-[290px] lg:h-[170px] h-[150px] bg-gray-100 rounded-xl lg:px-3 px-2 py-2 flex flex-col justify-between"
    >
      <div className="w-full h-fit flex items-center justify-between">
        <div className="w-fit h-fit flex gap-2 items-center">
          <div className="lg:text-[17px] text-[14px] font-bold">
            Exchange currency
          </div>
          <div className="text-[#039855] lg:text-[13px] text-[12px] font-semibold">
            Live data
          </div>
        </div>

        <div className="cursor-pointer" onClick={onClose}>
          <CloseIcon className="lg:w-6 lg:h-6 w-5 h-5" />
        </div>
      </div>
      <div className="flex items-center w-full h-fit gap-3">
        <Image
          alt=""
          src="/image/currency1.png"
          width={15}
          height={80}
          className="lg:w-4 w-3 lg:h-[100px] h-[90px]"
        />
        <div className="w-full h-fit flex flex-col gap-3">
          <div className="w-full h-[50px] border rounded-[8px] overflow-hidden">
            <div className="w-full h-[20px] bg-white flex items-center pl-3 font-semibold text-[13px]">
              Your currency
            </div>
            <div className="w-full h-[30px] flex items-center justify-between px-5 bg-gray-200">
              <div className="w-[100px] h-fit flex items-center gap-[2px]">
                <span className="text-[#005AD3] font-bold text-[14px]">
                  {getCurrencySymbol(selectedCurrency)}
                </span>
                <input
                  className="w-full font-bold text-[#005AD3] text-[14px] bg-gray-200 border-none"
                  type="number"
                  value={amount}
                  min={0}
                  onChange={(e) => setAmount(parseFloat(e.target.value))}
                />
              </div>
              <div className="flex items-center gap-1">
                <Flag
                  code={currencyCountryMapping[selectedCurrency].country}
                  alt={selectedCurrency}
                  width="20"
                  className="lg:w-6 w-5 lg:h-6 h-5 rounded-full"
                />
                <select
                  value={selectedCurrency}
                  onChange={(e) => {
                    setSelectedCurrency(e.target.value);
                  }}
                  className="lg:text-[13px] text-[11px] font-bold bg-transparent outline-none"
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
              <div className="lg:w-[155px] overflow-hidden font-bold text-[#005AD3] text-[14px]">
                {formatCurrency(
                  convertedAmount,
                  currencyCountryMapping[selectedConvertedCurrency].symbol
                )}
              </div>
              <div className="flex items-center gap-1">
                <Flag
                  code={
                    currencyCountryMapping[selectedConvertedCurrency].country
                  }
                  alt={selectedConvertedCurrency}
                  width="20"
                  className="lg:w-6 w-5 lg:h-6 h-5 rounded-full"
                />
                <select
                  value={selectedConvertedCurrency}
                  onChange={(e) => setSelectedConvertedCurrency(e.target.value)}
                  className="lg:text-[13px] text-[11px] font-bold bg-transparent outline-none"
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

export default Currency;
