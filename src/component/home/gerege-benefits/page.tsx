import React from "react";
import Image from "next/image";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import Link from "next/link";

export default function Benefits() {
  return (
    <div
      id="benefit"
      className="w-full h-[730px] mb-[60px] flex flex-col justify-between"
    >
      <div className="flex flex-col items-center justify-between gap-3">
        <div className="text-black text-[26px] font-bold ">
          GEREGE TOUR CARD Benefits
        </div>
        <div className="text-[#475467] text-[18px] font-normal">
          Transportation card with discounts for shopping, attractions,
          performances and more
        </div>
      </div>

      {/* start cards */}

      <div className="w-full h-[600px] flex items-center justify-center gap-8 px-[50px]">
        {/* start left cards */}

        <div className="w-[480px] h-full flex justify-between">
          <div className="w-[225px] h-[520px] flex flex-col justify-between mt-[30px]">
            <Link href="/" className="hover:scale-105">
              <div className="w-[225px] h-[235px] bg-gray-100">
                <div className="w-full h-[200px] p-[24px] flex flex-col items-center gap-3">
                  <Image alt="" src="/image/flag.png" width={32} height={32} />
                  <div className="text-gray-800 text-[16px] font-semibold">
                    CULTURE
                  </div>
                  <div className="w-[204px] h-[47px] text-xs text-gray-600 overflow-hidden">
                    &quot;Их Чөлөө&quot; гэдэг нэртэй байсан тус талбайг 1921
                    оны Ардын хувьсгалын дараагаас “Индрийн талбай” хэмээн
                    нэрлэж байгаад 1946 оны АИХ-ын тогтоолоор Дамдины
                    Сүхбаатарын талбай гэж албан ёсоор нэрийдэж хөшөө босгосон
                    байна.
                  </div>
                </div>
                <div
                  className="w-[225px] h-[52px] flex items-center justify-center"
                  style={{
                    backgroundImage: "url(/image/culture-bg.png)",
                    backgroundPositionY: "50%",
                    backgroundRepeat: "no-repeat",
                    overflow: "hidden",
                    backgroundSize: "cover",
                  }}
                >
                  <div className="w-full h-full text-xs text-gray-300 font-medium flex items-center justify-center bg-black/[0.5]">
                    ABOUT CULTURE <ArrowForwardIosIcon />
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/" className="hover:scale-105">
              <div className="w-[225px] h-[235px] bg-gray-100 ">
                <div className="w-full h-[200px] p-[24px] flex flex-col items-center gap-3">
                  <Image
                    alt=""
                    src="/image/museum.png"
                    width={32}
                    height={32}
                  />
                  <div className="text-gray-800 text-[16px] font-semibold">
                    MUSEUM
                  </div>
                  <div className="w-[204px] h-[47px] text-xs text-gray-600 overflow-hidden">
                    &quot;Их Чөлөө&quot; гэдэг нэртэй байсан тус талбайг 1921
                    оны Ардын хувьсгалын дараагаас “Индрийн талбай” хэмээн
                    нэрлэж байгаад 1946 оны АИХ-ын тогтоолоор Дамдины
                    Сүхбаатарын талбай гэж албан ёсоор нэрийдэж хөшөө босгосон
                    байна.
                  </div>
                </div>
                <div
                  className="w-[225px] h-[52px] flex items-center justify-center"
                  style={{
                    backgroundImage: "url(/image/musuem-bg.png)",
                    backgroundPositionY: "50%",
                    backgroundRepeat: "no-repeat",
                    overflow: "hidden",
                    backgroundSize: "cover",
                  }}
                >
                  <div className="w-full h-full text-xs text-gray-300 font-medium flex items-center justify-center bg-black/[0.5]">
                    ABOUT MUSEUM <ArrowForwardIosIcon />
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="w-[225px] h-[582px] flex flex-col justify-between">
            <Link href="/" className="hover:scale-105">
              <div className="w-[225px] h-[235px] bg-gray-100 ">
                <div className="w-full h-[200px] p-[24px] flex flex-col items-center gap-3">
                  <Image
                    alt=""
                    src="/image/museum.png"
                    width={32}
                    height={32}
                  />
                  <div className="text-gray-800 text-[16px] font-semibold">
                    MUSEUM
                  </div>
                  <div className="w-[204px] h-[47px] text-xs text-gray-600 overflow-hidden">
                    &quot;Их Чөлөө&quot; гэдэг нэртэй байсан тус талбайг 1921
                    оны Ардын хувьсгалын дараагаас “Индрийн талбай” хэмээн
                    нэрлэж байгаад 1946 оны АИХ-ын тогтоолоор Дамдины
                    Сүхбаатарын талбай гэж албан ёсоор нэрийдэж хөшөө босгосон
                    байна.
                  </div>
                </div>
                <div
                  className="w-[225px] h-[52px] flex items-center justify-center"
                  style={{
                    backgroundImage: "url(/image/musuem-bg.png)",
                    backgroundPositionY: "50%",
                    backgroundRepeat: "no-repeat",
                    overflow: "hidden",
                    backgroundSize: "cover",
                  }}
                >
                  <div className="w-full h-full text-xs text-gray-300 font-medium flex items-center justify-center bg-black/[0.5]">
                    ABOUT MUSEUM <ArrowForwardIosIcon />
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/" className="hover:scale-105">
              <div className="w-[225px] h-[235px] bg-gray-100 ">
                <div className="w-full h-[200px] p-[24px] flex flex-col items-center gap-3">
                  <Image
                    alt=""
                    src="/image/museum.png"
                    width={32}
                    height={32}
                  />
                  <div className="text-gray-800 text-[16px] font-semibold">
                    MUSEUM
                  </div>
                  <div className="w-[204px] h-[47px] text-xs text-gray-600 overflow-hidden">
                    &quot;Их Чөлөө&quot; гэдэг нэртэй байсан тус талбайг 1921
                    оны Ардын хувьсгалын дараагаас “Индрийн талбай” хэмээн
                    нэрлэж байгаад 1946 оны АИХ-ын тогтоолоор Дамдины
                    Сүхбаатарын талбай гэж албан ёсоор нэрийдэж хөшөө босгосон
                    байна.
                  </div>
                </div>
                <div
                  className="w-[225px] h-[52px] flex items-center justify-center"
                  style={{
                    backgroundImage: "url(/image/musuem-bg.png)",
                    backgroundPositionY: "50%",
                    backgroundRepeat: "no-repeat",
                    overflow: "hidden",
                    backgroundSize: "cover",
                  }}
                >
                  <div className="w-full h-full text-xs text-gray-300 font-medium flex items-center justify-center bg-black/[0.5]">
                    ABOUT MUSEUM <ArrowForwardIosIcon />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* end left cards */}

        {/* Start center image */}

        <div
          className="w-[280px] h-[370px] flex items-center justify-center"
          style={{
            backgroundImage: "url(image/benefit-spin-1.png)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="w-[192px] h-[330px]">
            {" "}
            <Image
              alt=""
              src="/image/paiz-1.png"
              width={190}
              height={350}
              className="w-[190px] h-[350px]"
            />
          </div>
        </div>

        {/* End center image */}

        {/* start right cards */}

        <div className="w-[480px] h-full flex justify-between">
          <div className="w-[225px] h-[582px] flex flex-col justify-between">
            <Link href="/" className="hover:scale-105">
              <div className="w-[225px] h-[235px] bg-gray-100">
                <div className="w-full h-[200px] p-[24px] flex flex-col items-center gap-3">
                  <Image
                    alt=""
                    src="/image/hotel-icon.png"
                    width={32}
                    height={32}
                  />
                  <div className="text-gray-800 text-[16px] font-semibold">
                    HOTEL
                  </div>
                  <div className="w-[204px] h-[47px] text-xs text-gray-600 overflow-hidden">
                    &quot;Их Чөлөө&quot; гэдэг нэртэй байсан тус талбайг 1921
                    оны Ардын хувьсгалын дараагаас “Индрийн талбай” хэмээн
                    нэрлэж байгаад 1946 оны АИХ-ын тогтоолоор Дамдины
                    Сүхбаатарын талбай гэж албан ёсоор нэрийдэж хөшөө босгосон
                    байна.
                  </div>
                </div>
                <div
                  className="w-[225px] h-[52px] flex items-center justify-center"
                  style={{
                    backgroundImage: "url(/image/musuem-bg.png)",
                    backgroundPositionY: "50%",
                    backgroundRepeat: "no-repeat",
                    overflow: "hidden",
                    backgroundSize: "cover",
                  }}
                >
                  <div className="w-full h-full text-xs text-gray-300 font-medium flex items-center justify-center bg-black/[0.5]">
                    ABOUT HOTEL <ArrowForwardIosIcon />
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/" className="hover:scale-105">
              <div className="w-[225px] h-[235px] bg-gray-100 border">
                <div className="w-full h-[200px] p-[24px] flex flex-col items-center gap-3">
                  <Image
                    alt=""
                    src="/image/restaurant-icon.png"
                    width={32}
                    height={32}
                  />
                  <div className="text-gray-800 text-[16px] font-semibold">
                    RESTAURANT
                  </div>
                  <div className="w-[204px] h-[47px] text-xs text-gray-600 overflow-hidden">
                    &quot;Их Чөлөө&quot; гэдэг нэртэй байсан тус талбайг 1921
                    оны Ардын хувьсгалын дараагаас “Индрийн талбай” хэмээн
                    нэрлэж байгаад 1946 оны АИХ-ын тогтоолоор Дамдины
                    Сүхбаатарын талбай гэж албан ёсоор нэрийдэж хөшөө босгосон
                    байна.
                  </div>
                </div>
                <div
                  className="w-[225px] h-[52px] flex items-center justify-center"
                  style={{
                    backgroundImage: "url(/image/musuem-bg.png)",
                    backgroundPositionY: "50%",
                    backgroundRepeat: "no-repeat",
                    overflow: "hidden",
                    backgroundSize: "cover",
                  }}
                >
                  <div className="w-full h-full text-xs text-gray-300 font-medium flex items-center justify-center bg-black/[0.5]">
                    ABOUT RESTAURANT <ArrowForwardIosIcon />
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="w-[225px] h-[520px] flex flex-col justify-between mt-[30px]">
            <Link href="/" className="hover:scale-105">
              <div className="w-[225px] h-[235px] bg-gray-100 border">
                <div className="w-full h-[200px] p-[24px] flex flex-col items-center gap-3">
                  <Image
                    alt=""
                    src="/image/museum.png"
                    width={32}
                    height={32}
                  />
                  <div className="text-gray-800 text-[16px] font-semibold">
                    MUSEUM
                  </div>
                  <div className="w-[204px] h-[47px] text-xs text-gray-600 overflow-hidden">
                    &quot;Их Чөлөө&quot; гэдэг нэртэй байсан тус талбайг 1921
                    оны Ардын хувьсгалын дараагаас “Индрийн талбай” хэмээн
                    нэрлэж байгаад 1946 оны АИХ-ын тогтоолоор Дамдины
                    Сүхбаатарын талбай гэж албан ёсоор нэрийдэж хөшөө босгосон
                    байна.
                  </div>
                </div>
                <div
                  className="w-[225px] h-[52px] flex items-center justify-center"
                  style={{
                    backgroundImage: "url(/image/musuem-bg.png)",
                    backgroundPositionY: "50%",
                    backgroundRepeat: "no-repeat",
                    overflow: "hidden",
                    backgroundSize: "cover",
                  }}
                >
                  <div className="w-full h-full text-xs text-gray-300 font-medium flex items-center justify-center bg-black/[0.5]">
                    ABOUT MUSEUM <ArrowForwardIosIcon />
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/" className="hover:scale-105">
              <div className="w-[225px] h-[235px] bg-gray-100 border">
                <div className="w-full h-[200px] p-[24px] flex flex-col items-center gap-3">
                  <Image
                    alt=""
                    src="/image/museum.png"
                    width={32}
                    height={32}
                  />
                  <div className="text-gray-800 text-[16px] font-semibold">
                    MUSEUM
                  </div>
                  <div className="w-[204px] h-[47px] text-xs text-gray-600 overflow-hidden">
                    &quot;Их Чөлөө&quot; гэдэг нэртэй байсан тус талбайг 1921
                    оны Ардын хувьсгалын дараагаас “Индрийн талбай” хэмээн
                    нэрлэж байгаад 1946 оны АИХ-ын тогтоолоор Дамдины
                    Сүхбаатарын талбай гэж албан ёсоор нэрийдэж хөшөө босгосон
                    байна.
                  </div>
                </div>
                <div
                  className="w-[225px] h-[52px] flex items-center justify-center"
                  style={{
                    backgroundImage: "url(/image/musuem-bg.png)",
                    backgroundPositionY: "50%",
                    backgroundRepeat: "no-repeat",
                    overflow: "hidden",
                    backgroundSize: "cover",
                  }}
                >
                  <div className="w-full h-full text-xs text-gray-300 font-medium flex items-center justify-center bg-black/[0.5]">
                    ABOUT MUSEUM <ArrowForwardIosIcon />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
