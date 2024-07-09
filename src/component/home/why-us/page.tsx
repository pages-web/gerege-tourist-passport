import React from "react";
import Image from "next/image";

export default function WhyUs() {
  return (
    <div
      id="about"
      className="w-[1230px] h-[337px] mt-[60px] mb-[60px] flex flex-col justify-between"
    >
      <div className="flex flex-col items-center gap-3">
        <div className="text-[#1D2939] text-[26px] font-bold">WHY US</div>
        <div className="text-[#475467] text-[16px] font-normal">
          Our services about Hotel, Restaurant and more
        </div>
      </div>

      <div className="w-full h-[205px] flex items-center justify-between">
        <div className="w-[280px] h-[160px] bg-[#D2F3FF] flex flex-col items-center justify-center gap-2">
          <Image alt="" src="/image/why-us-icon-1.png" width={46} height={46} />
          <div className="text-[#1D2939] text-[16px] font-normal">
            Бүгдийг багтаасан{" "}
          </div>
          <div className="text-[#1D2939] text-[16px] font-bold">ЭНГИЙН</div>
        </div>

        <div className="w-[280px] h-[160px] bg-[#D2F3FF] flex flex-col items-center justify-center gap-2">
          <Image alt="" src="/image/why-us-icon-2.png" width={46} height={46} />
          <div className="text-[#1D2939] text-[16px] font-normal">
            Монголд цор ганц
          </div>
          <div className="text-[#1D2939] text-[16px] font-bold">ОНЦГОЙ</div>
        </div>

        <div className="w-[280px] h-[160px] bg-[#D2F3FF] flex flex-col items-center justify-center gap-2">
          <Image alt="" src="/image/why-us-icon-3.png" width={40} height={46} />
          <div className="text-[#1D2939] text-[16px] font-normal">
            Мөнгийг таньд хэмнэнэ
          </div>
          <div className="text-[#1D2939] text-[16px] font-bold">ТУСЧ</div>
        </div>

        <div className="w-[283px] h-[160px] bg-[#D2F3FF] flex flex-col items-center justify-center gap-2 px-5">
          <Image
            alt=""
            src="/image/why-us-icon-4.png"
            width={46}
            height={46}
            className="mb-5"
          />
          <div className="w-[fit] h-[60px] flex flex-col items-center justify-between">
            <div className="text-[#1D2939] text-[16px] font-normal">
              Аялалыг тань улам баяжуулна
            </div>
            <div className="text-[#1D2939] text-[16px] font-bold">
              ХӨГЖИЛТЭЙ
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
