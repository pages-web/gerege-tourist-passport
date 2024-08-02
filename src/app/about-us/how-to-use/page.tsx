import React from "react";

export default function AboutHowToUse() {
  return (
    <div className="lg:w-[850px] w-[389px] h-fit flex justify-between">
      <div className="lg:w-[480px] w-3/5 lg:h-full h-fit flex flex-col lg:gap-5 gap-3 lg:pl-0 pl-1 justify-between">
        <div>
          <div className="text-[#0087FF] font-bold lg:text-[30px] text-[20px]">
            How to use:
          </div>
          <div className="text-gray-800 lg:text-[21px] text-[14px] font-normal">
            Just show your GEREGE
          </div>
        </div>
        <div className="w-full h-fit flex flex-col lg:gap-4 gap-2 justify-between ">
          <div className=" text-gray-800 font-bold lg:text-base text-[15px]">
            Free Featured Tours Include:
          </div>
          <ul className="list-disc pl-5 flex flex-col gap-[10px]">
            <li className="text-[#0087FF] lg:text-base text-[14px] font-semibold">
              Museums in Mongolia:
              <ul className="list-disc pl-5 text-gray-600 lg:text-[14px] text-[11px] lg:leading-[18px] leading-4 font-medium">
                <li>Chinggis Khaan National Museum</li>
                <li>National Museum of Mongolia</li>
                <li>Choijin Lama Temple Museum</li>
                <li>Bogd Khaan Palace Museum</li>
                <li>The Fine Arts Zanabazar Museum</li>
                <li>The Natural History Museum of Mongolia</li>
              </ul>
            </li>
            <li className="text-[#0087FF] lg:text-base text-[14px] font-semibold">
              Cultural Experiences:
              <ul className="list-disc pl-5 text-gray-600 lg:text-[14px] text-[11px] lg:leading-[18px] leading-4 font-medium">
                <li>Tumen Ekh Folk Song and Dance Ensemble Performance</li>
                <li>Gandantegchilen Monastery</li>
                <li>Genghis Khan Equestrian Statue</li>
              </ul>
            </li>
            <li className="text-[#0087FF] lg:text-base text-[14px] font-semibold">
              Exclusive Offers:
              <ul className="list-disc pl-5 text-gray-600 lg:text-[14px] text-[11px] lg:leading-[18px] leading-4 font-medium">
                <li>
                  Mongolian Traditional Costume Rental at Mongolia Last King’s
                  Palace Museum 
                </li>
                <li>Unlimited Data SIM with 20GB 7000₮ units</li>
                <li>
                  Multiple free entries to &quot;ZU&quot; Nightclub, UB’s
                  premier nightlife spot *entry fee required at all nightclubs
                  in UB\
                </li>
                <li>5000₮ voucher for Jet Scooter rental</li>
                <li>Complimentary YANMAL Mongolian Camel Wool Socks </li>
                <li>Free coffee (1) at CU convenience stores</li>
                <li>Complimentary HUSHKHAN Mongolian Natural Pine Nuts</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div
        className="lg:w-[340px] w-2/5 lg:h-[550px]"
        style={{
          backgroundImage: "url(image/how-to-use.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
    </div>
  );
}
