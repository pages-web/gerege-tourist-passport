import React from "react";

export default function AboutHowToUse() {
  return (
    <div className="w-[850px] h-fit flex justify-between ">
      <div className="w-[480px] h-full flex flex-col gap-5 justify-between ">
        <div>
          <div className="text-[#0087FF] font-bold text-[30px]">
            How to use:
          </div>
          <div className="text-gray-800 text-[21px] font-normal">
            Just show your GEREGE
          </div>
        </div>
        <div className="w-full h-fit flex flex-col gap-4 justify-between ">
          <div className=" text-gray-800 font-bold text-base">
            Free Featured Tours Include:
          </div>
          <ul className="list-disc pl-5 flex flex-col gap-[10px]">
            <li className="text-[#0087FF] text-base font-semibold">
              Museums in Mongolia:
              <ul className="list-disc pl-5 text-gray-600 text-[14px] leading-[18px] font-medium">
                <li>Chinggis Khaan National Museum</li>
                <li>National Museum of Mongolia</li>
                <li>Choijin Lama Temple Museum</li>
                <li>Bogd Khaan Palace Museum</li>
                <li>The Fine Arts Zanabazar Museum</li>
                <li>The Natural History Museum of Mongolia</li>
              </ul>
            </li>
            <li className="text-[#0087FF] text-base font-semibold">
              Cultural Experiences:
              <ul className="list-disc pl-5 text-gray-600 text-[14px] leading-[18px] font-medium">
                <li>Tumen Ekh Folk Song and Dance Ensemble Performance</li>
                <li>Gandantegchilen Monastery</li>
                <li>Genghis Khan Equestrian Statue</li>
              </ul>
            </li>
            <li className="text-[#0087FF] text-base font-semibold">
              Exclusive Offers:
              <ul className="list-disc pl-5 text-gray-600 text-[14px] leading-[18px] font-medium">
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
        className="w-[340px] h-[550px]"
        style={{
          backgroundImage: "url(image/how-to-use.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
    </div>
  );
}
