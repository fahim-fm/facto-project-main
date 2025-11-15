import React from "react";

// ✅ Import your images here
import salesIcon from "~/assets/icon/sales-icon.png";
import infoIcon from "~/assets/icon/Icon info.svg";
import saleBadge from "~/assets/icon/sale.svg";
import averageSale from "~/assets/icon/average-sale.png";
import icon1 from "~/assets/icon/Icon.svg";
import dollarIcon from "~/assets/icon/doller.svg";
import icon2 from "~/assets/icon/Icon (1).svg";
// import plusIcon from "../assets/img/plus-01.svg";
import avt from "~/assets/icon/avt.jpg";
import img1 from "~/assets/icon/img-1.jpg";
import img2 from "~/assets/icon/img-2.jpg";
import img3 from "~/assets/icon/img-3.jpg";
import img4 from "~/assets/icon/img-4.jpg";
import img5 from "~/assets/icon/img-5.jpg";

const CardSection: React.FC = () => {
  return (
    <div className="mt-[130px] w-[1440px] h-[665px] flex gap-9">

      {/* ✅ Card 1 */}
      <div className="w-[457px] h-[665px] flex flex-col p-[46px_28px] rounded-[24px] bg-[#E0F0E5] opacity-100">
        <div className="w-[401px] h-[62px] bg-[#E0F0E5] flex gap-[24px] opacity-100">
          <img src={salesIcon} alt="Sales Icon" className="w-[40px] h-[40px]" />
          <span className="w-[334px] h-[62px] font-roboto font-semibold text-[32px] leading-[40px] text-[#141414] flex items-center">
            Sales overview from Previous Day
          </span>
        </div>

        <div className="w-[400px] h-[361px] bg-white rounded-[25px] flex flex-col mt-[50px]">
          <div className="w-[308px] h-[40px] flex items-center gap-4 mt-[32px] ml-[32.5px] mr-[59.5px]">
            <img src={infoIcon} alt="Info Icon" className="w-[32px] h-[32px]" />
            <div className="flex items-center gap-2 w-[260px] h-[40px]">
              <p className="w-[133px] font-manrope font-medium text-[24px] leading-[36px] text-[#686868]">
                Total sales:
              </p>
              <p className="w-[119px] font-roboto font-bold text-[32px] leading-[40px] text-[#686868]">
                $12,500
              </p>
            </div>
          </div>

          {/* Bar Chart */}
          <div className="w-[334px] h-[179px] flex flex-row items-end mt-[83px] mb-[27px] mx-[33px] gap-4">
            {[
              { day: "Sun", height: "68px" },
              { day: "Mon", height: "45px" },
              { day: "Tue", height: "88px" },
              { day: "Wed", height: "71px" },
            ].map((bar, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-end gap-3 w-[34px]"
              >
                <div
                  className={`w-full h-[${bar.height}] bg-[#E0F0E5] rounded-t-[2px]`}
                ></div>
                <span className="text-center text-[14px] font-semibold leading-6 text-[#686868] font-roboto">
                  {bar.day}
                </span>
              </div>
            ))}

            {/* Thu - Highest */}
            <div className="relative flex flex-col items-center justify-end gap-3 w-[34px] h-[179px]">
              <div className="w-full h-[143px] bg-[#0F4E23] rounded-t-[2px]"></div>
              <span className="text-center text-[14px] font-semibold leading-6 text-[#686868] font-roboto">
                Thu
              </span>

              <div className="absolute w-[135px] h-[87px] -top-[78px] left-1/2 transform -translate-x-1/2 bg-[#F1F68E] rounded-xl p-[12px_16px] flex flex-col gap-2 shadow-md z-10">
                <p className="text-[18px] font-roboto leading-[30px] text-[#686868]">
                  Highest sale
                </p>
                <div className="flex items-center justify-center gap-2">
                  <img src={saleBadge} alt="Highest sale" className="w-5 h-5" />
                  <span className="text-[24px] font-bold font-roboto leading-[34px] text-[#141414]">
                    $2,450
                  </span>
                </div>
              </div>
            </div>

            {/* Fri */}
            <div className="flex flex-col items-center justify-end gap-3 w-[34px]">
              <div className="w-full h-[57px] bg-[#DAFFC2] rounded-t-[2px]"></div>
              <span className="text-center text-[14px] font-semibold leading-6 text-[#686868] font-roboto">
                Fri
              </span>
            </div>

            {/* Sat */}
            <div className="flex flex-col items-center justify-end gap-3 w-[34px]">
              <div className="w-full h-[106px] bg-[#E0F0E5] rounded-t-[2px]"></div>
              <span className="text-center text-[14px] font-semibold leading-6 text-[#686868] font-roboto">
                Sat
              </span>
            </div>
          </div>

          {/* Bottom - Average */}
          <div className="w-[400px] h-16 bg-[#BFE5A6] rounded-full flex items-center justify-center mt-[50px] px-6 py-4 gap-2">
            <div className="w-[355px] flex items-center justify-center gap-4">
              <div className="w-6 h-6 bg-[#0F4E23] rounded-full flex items-center justify-center">
                <img src={averageSale} alt="Average" className="w-4 h-4" />
              </div>
              <p className="text-[20px] font-roboto text-[#141414]">
                Avg. sale: $104.16 / per transaction
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Card 2 */}
      <div className="w-[456px] h-[665px] flex flex-col p-[46px_28px] rounded-[25px] bg-[#DAFFC2]">
        <div className="w-[388px] h-[77px] flex gap-[24px]">
          <img src={icon1} alt="Factoring Icon" className="w-[48px] h-[48px]" />
          <span className="w-[316px] font-roboto font-semibold text-[32px] leading-[40px] text-[#141414] flex items-center">
            Factoring Possible Amount.
          </span>
        </div>

        <div className="w-[400px] h-[442px] rounded-[25px] flex flex-col mt-[54px]">
          <div className="flex flex-col items-center p-6 gap-4 mx-[77.5px] w-[245px] h-[125px] bg-white rounded-[25px]">
            <p className="font-manrope text-[24px] leading-[36px] text-[#686868] text-center">
              Available amount
            </p>
            <div className="flex justify-center items-center gap-6">
              <h2 className="font-roboto font-semibold text-[32px] text-[#141414]">
                $15,375
              </h2>
              <h6 className="font-roboto font-semibold text-[18px] text-[#141414]">
                USD
              </h6>
            </div>
          </div>

          {/* Progress Card */}
          <div className="flex flex-col items-center p-6 gap-[30px] w-[400px] h-[281px] bg-white rounded-[25px] mt-[36px]">
            <div className="flex items-start gap-4 w-[348px]">
              <div className="w-[32px] h-[32px] flex items-center justify-center bg-[#E0F0E5] rounded-full">
                <img src={dollarIcon} alt="Dollar" />
              </div>
              <h3 className="w-[300px] font-roboto font-medium text-[24px] text-[#141414]">
                Factored amount vs. remaining balance
              </h3>
            </div>

            <div className="flex flex-col items-start p-6 gap-16 w-[374px] h-[141px] bg-[#E0F0E5] rounded-[24px]">
              <div className="flex items-center gap-12 w-[326px]">
                <p className="font-roboto font-semibold text-[20px] text-[#686868]">
                  Factored balance
                </p>
                <p className="font-roboto font-bold text-[24px] text-[#141414]">
                  $11,531.25
                </p>
              </div>
              <div className="relative w-[305px] h-[15px] bg-[#F2F2F2] rounded-[25px]">
                <div className="absolute left-0 top-0 w-[234px] h-[15px] bg-[#0F4E23] rounded-[25px]"></div>
                <span className="absolute left-[206.5px] -top-[26px] font-roboto font-semibold text-[18px] text-[#141414]">
                  75%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Card 3 */}
      <div className="w-[455.25px] h-[665px] flex flex-col p-[46px_24px] rounded-[25px] bg-[#F1F68E]">
        <div className="w-[390.86px] flex gap-[24px]">
          <img src={icon2} alt="Workflow Icon" className="w-[48px] h-[48px]" />
          <span className="w-[318px] font-roboto font-semibold text-[32px] text-[#141414] flex items-center">
            Secure & Streamlined Workflow
          </span>
        </div>

        {/* User Avatars */}
        <div className="flex justify-center mt-[30px]">
          <div className="flex items-center space-x-[-8px]">
            {[img1, img2, img3, img4, img5].map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`User ${i + 1}`}
                className="w-9 h-9 border-[3px] border-white rounded-full object-cover"
              />
            ))}
            <div className="w-9 h-9 bg-[#DAFFC2] border-[3px] border-white rounded-full flex items-center justify-center">
              <span className="text-[18px] font-roboto font-semibold text-[#0F4E23]">
                9+
              </span>
            </div>
          </div>
        </div>

        {/* Profile Card */}
        <div className="w-[373.23px] h-24 mt-[10px] bg-white rounded-[25px] p-[16px_24px] flex items-center gap-[26px] rotate-[6.36deg]">
          <div className="w-[56px] h-[56px] border-[6px] border-white rounded-full overflow-hidden">
            <img src={avt} alt="User" className="w-full h-full object-cover" />
          </div>

          <div className="flex justify-between w-full">
            <div className="flex flex-col">
              <span className="text-[24px] font-roboto font-bold text-[#141414]">
                Online
              </span>
              <span className="text-[16px] font-manrope text-[#686868]">
                Tomy Restaurant
              </span>
            </div>

            <div className="flex flex-col items-end gap-2">
              <span className="text-[20px] font-roboto font-semibold text-[#141414]">
                +$10K
              </span>
              <button className="w-[83px] h-8 bg-[#E0F0E5] rounded-full flex justify-center items-center text-[#0F4E23] font-roboto font-semibold text-[14px]">
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSection;
