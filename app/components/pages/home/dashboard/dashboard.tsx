import React from "react";
import salesIcon from "~/assets/icon/sales-icon.png";
import infoIcon from "~/assets/icon/Icon info.svg";
import saleBadge from "~/assets/icon/sale.svg";
import averageSale from "~/assets/icon/average-sale.png";
import icon1 from "~/assets/icon/Icon.svg";
import dollarIcon from "~/assets/icon/doller.svg";
import Icon1 from "~/assets/icon/Icon (1).svg";
import PlusIcon from "~/assets/icon/plus-01.svg";
import Avt from "~/assets/icon/avt.jpg";
import Img1 from "~/assets/icon/img-1.jpg";
import Img2 from "~/assets/icon/img-2.jpg";
import Img3 from "~/assets/icon/img-3.jpg";
import Img4 from "~/assets/icon/img-4.jpg";
import Img5 from "~/assets/icon/img-5.jpg";

const Dashboard: React.FC = () => {
  const bars = [
    { day: "Sun", height: "68px", bg: "#E0F0E5" },
    { day: "Mon", height: "45px", bg: "#E0F0E5" },
    { day: "Tue", height: "88px", bg: "#E0F0E5" },
    { day: "Wed", height: "71px", bg: "#E0F0E5" },
  ];

  return (
    <section className="pb-[4px] pt-[70px] lg:pt-[120px]">
      <div className="container container-pad">
        {/* grid: 1 / 2 / 3 columns responsive */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-9 xl:gap-[36px]">
          {/* Card 1 */}
          <div
            className="
              w-full h-auto rounded-[20px] bg-[#E0F0E5] 
              p-6 sm:p-8 lg:p-10
              2xl:w-[457px] 2xl:h-[665px]  xl:py-[46px] 2xl:py-[46px] xl:px-[28px] 2xl:px-[28px] 2xl:rounded-[24px]
              flex flex-col
            "
          >
            {/* header */}
            <div className="flex items-center gap-4 2xl:w-[401px] 2xl:h-[62px]">
              <img
                src={salesIcon}
                alt="Sales Icon"
                className="w-8 h-8 sm:w-10 sm:h-10 2xl:w-[40px] 2xl:h-[40px]"
              />
              <h4 className="font-roboto font-semibold text-[20px] sm:text-[24px] 2xl:text-[32px] leading-[1.1] text-[#141414]">
                Sales overview from Previous Day
              </h4>
            </div>

            {/* white inner card */}
            <div
              className="
                mt-6 sm:mt-8 lg:mt-10 bg-white rounded-[16px] 
                w-full flex flex-col
                2xl:w-[400px] 2xl:h-[361px] 2xl:rounded-[25px] 2xl:mt-[50px]
              "
            >
              <div className="flex items-center gap-3 px-5 py-4">
                <img
                  src={infoIcon}
                  alt="Info Icon"
                  className="w-7 h-7 sm:w-8 sm:h-8 2xl:w-[32px] 2xl:h-[32px]"
                />
                <div className="flex items-center gap-2">
                  <p className="font-manrope font-medium text-[16px] sm:text-[18px] 2xl:text-[24px] text-[#686868]">
                    Total sales:
                  </p>
                  <p className="font-roboto font-bold text-[20px] sm:text-[24px] 2xl:text-[32px] text-[#686868]">
                    $12,500
                  </p>
                </div>
              </div>

              {/* Bar Chart */}
              <div className="flex justify-center items-end gap-3 mt-6 mb-4 px-6 2xl:mt-[83px] 2xl:mb-[27px]">
                {/* dynamic bars */}
              <div className="flex items-end gap-3 sm:gap-4">
  {bars.map((bar, i) => (
    <div key={i} className="flex flex-col items-center">
      <div
        style={{ height: bar.height, background: bar.bg }}
        className="
          rounded-t-[2px]
          w-[22px] sm:w-[28px] 
          2xl:w-[34px]
        "
      />
      <span className="
        text-[12px] sm:text-[14px] 
        font-semibold text-[#686868] font-roboto mt-2
      ">
        {bar.day}
      </span>
    </div>
  ))}

  {/* Thu - highest */}
  <div className="relative flex flex-col items-center">
    <div
      className="
        bg-[#0F4E23] rounded-t-[2px] 
        w-[22px] sm:w-[28px] 
        2xl:w-[34px]
      "
      style={{ height: "143px" }}
    />
    <span className="text-[12px] sm:text-[14px] font-semibold text-[#686868] font-roboto mt-2">
      Thu
    </span>

    {/* Tooltip */}
    <div
      className="
        absolute left-1/2 transform -translate-x-1/2 
        p-3 rounded-xl flex flex-col gap-2 shadow-md z-10
        w-[110px] sm:w-[130px] bg-[#F1F68E]
        
        -top-[38px] sm:-top-[45px]
        2xl:w-[135px] 2xl:h-[87px] md:-top-[45px] lg:-top-[40px] xl:-top-[40px] 2xl:-top-[74px]
      "
    >
      <p className="text-[13px] sm:text-[16px] font-roboto text-[#686868]">
        Highest sale
      </p>

      <div className="flex items-center justify-center gap-2">
        <img src={saleBadge} alt="Highest sale" className="w-4 h-4" />
        <span className="text-[16px] sm:text-[20px] font-bold font-roboto text-[#141414]">
          $2,450
        </span>
      </div>
    </div>
  </div>

  {/* Fri */}
  <div className="flex flex-col items-center">
    <div
      className="
        bg-[#DAFFC2] rounded-t-[2px]
        w-[22px] sm:w-[28px]
        2xl:w-[34px]
      "
      style={{ height: "57px" }}
    />
    <span className="text-[12px] sm:text-[14px] font-semibold text-[#686868] font-roboto mt-2">
      Fri
    </span>
  </div>

  {/* Sat */}
  <div className="flex flex-col items-center">
    <div
      className="
        bg-[#E0F0E5] rounded-t-[2px]
        w-[22px] sm:w-[28px]
        2xl:w-[34px]
      "
      style={{ height: "106px" }}
    />
    <span className="text-[12px] sm:text-[14px] font-semibold text-[#686868] font-roboto mt-2">
      Sat
    </span>
  </div>
</div>

              </div>

              {/* Bottom average */}
              <div
                className="
                  mx-4 my-6 rounded-full flex items-center justify-center px-4 py-3
                  bg-[#BFE5A6]
                  2xl:w-[400px] 2xl:h-16 2xl:mt-[50px]
                "
              >
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center bg-[#0F4E23]">
                    <img src={averageSale} alt="Average" className="w-4 h-4" />
                  </div>
                  <p className="text-[14px] sm:text-[16px] 2xl:text-[20px] font-roboto text-[#141414]">
                    Avg. sale: $104.16 / per transaction
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className="
              w-full h-auto rounded-[20px] bg-[#DAFFC2] p-6 sm:p-8 lg:p-10
              flex flex-col
              2xl:w-[456px] 2xl:h-[665px] 2xl:py-[46px] 2xl:px-[28px] 2xl:rounded-[25px]
            "
          >
            <div className="flex items-center gap-4 2xl:w-[388px] 2xl:h-[77px]">
              <img
                src={icon1}
                alt="Factoring Icon"
                className="w-10 h-10 sm:w-[48px] sm:h-[48px] 2xl:w-[48px] 2xl:h-[48px]"
              />
              <span className="font-roboto font-semibold text-[20px] sm:text-[24px] 2xl:text-[32px] leading-[1.1] text-[#141414]">
                Factoring Possible Amount.
              </span>
            </div>

            <div
              className="
                mt-6 sm:mt-8 lg:mt-10 w-full flex flex-col gap-4
                2xl:w-[400px] 2xl:h-[442px] 2xl:rounded-[25px] 2xl:mt-[54px]
              "
            >
              <div
                className="
                  mx-auto flex flex-col items-center p-6 gap-4 rounded-[16px] bg-white
                  w-full max-w-[280px]
                  2xl:mx-[77.5px] 2xl:w-[245px] 2xl:h-[125px] 2xl:rounded-[25px]
                "
              >
                <p className="font-manrope text-[16px] sm:text-[20px] 2xl:text-[24px] leading-[1.4] text-[#686868] text-center">
                  Available amount
                </p>
                <div className="flex items-center gap-6">
                  <h2 className="font-roboto font-semibold text-[22px] sm:text-[28px] 2xl:text-[32px] text-[#141414]">
                    $15,375
                  </h2>
                  <h6 className="font-roboto font-semibold text-[14px] sm:text-[16px] 2xl:text-[18px]">
                    USD
                  </h6>
                </div>
              </div>

              {/* Progress Card */}
              <div
                className="
                  mx-auto flex flex-col items-center p-4 gap-6 rounded-[16px] bg-white w-full
                  max-w-[420px]
                  2xl:w-[400px] 2xl:h-[281px] 2xl:rounded-[25px] 2xl:mt-[36px]
                "
              >
                <div className="flex items-start gap-4 w-full">
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#E0F0E5]">
                    <img src={dollarIcon} alt="Dollar" className="w-4 h-4" />
                  </div>
                  <h3 className="font-roboto font-medium text-[16px] sm:text-[20px] 2xl:text-[24px] text-[#141414]">
                    Factored amount vs. remaining balance
                  </h3>
                </div>

                <div
                  className="
                    w-full p-4 rounded-[12px] bg-[#E0F0E5] flex flex-col gap-4
                    2xl:w-[374px] 2xl:h-[141px] 2xl:rounded-[24px]
                  "
                >
                  <div className="flex items-center justify-between w-full">
                    <p className="font-roboto font-semibold text-[16px] 2xl:text-[20px] text-[#686868]">
                      Factored balance
                    </p>
                    <p className="font-roboto font-bold text-[18px] 2xl:text-[24px] text-[#141414]">
                      $11,531.25
                    </p>
                  </div>

                  <div className="relative w-full max-w-[360px] h-3 bg-[#F2F2F2] rounded-full">
                    <div className="absolute left-0 top-0 h-3 rounded-full" style={{ width: "75%", background: "#0F4E23" }} />
                    <span className="absolute left-[65%] -top-6 font-roboto font-semibold text-[14px] 2xl:text-[18px] text-[#141414]">
                      75%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div
            className="
              w-full h-auto rounded-[20px] bg-[#F1F68E] p-6 sm:p-8 lg:p-10
              flex flex-col
              2xl:w-[455.25px] 2xl:h-[665px] 2xl:py-[46px] 2xl:px-[24px] 2xl:rounded-[25px]
            "
          >
            {/* Top */}
            <div className="flex items-center gap-4 2xl:w-[390.86px] 2xl:h-[99.97px]">
              <img src={Icon1} alt="Icon" className="w-10 h-10 sm:w-[48px] sm:h-[48px] 2xl:w-[48px] 2xl:h-[48px]" />
              <span className="font-roboto font-semibold text-[20px] sm:text-[24px] 2xl:text-[32px] leading-[1.1] text-[#141414]">
                Secure & Streamlined Workflow
              </span>
            </div>

            <div className="mt-4 2xl:mt-[15px] flex flex-col">
              {/* recent user (rotated card) */}
              <div
                className="
                  mx-auto bg-white rounded-[16px] p-4 flex flex-col items-center gap-4
                  max-w-[300px]
                  transform -rotate-3
                  2xl:ml-[54.89px] 2xl:mr-[48.43px] 2xl:w-[266.49px] 2xl:h-[124.69px] 2xl:rounded-[25px] 2xl:-rotate-[12.89deg] 2xl:mt-[30px]
                "
              >
                <div className="flex justify-center items-center gap-4 w-full">
                  <h4 className="font-roboto font-bold text-[18px] 2xl:text-[24px] text-[#141414]">Recent User</h4>
                  <span className="text-[12px] text-[#686868]">View All</span>
                </div>

                <div className="flex items-center -space-x-2">
                  {[Img1, Img2, Img3, Img4, Img5].map((img, i) => (
                    <div key={i} className="w-9 h-9 border-2 border-white rounded-full overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={img} alt={`User ${i}`} className="w-full h-full object-cover rounded-full" />
                    </div>
                  ))}

                  <div className="w-9 h-9 bg-[#DAFFC2] border-2 border-white rounded-full flex items-center justify-center">
                    <span className="text-[14px] font-roboto font-semibold text-[#0F4E23]">9+</span>
                  </div>
                </div>
              </div>

              {/* total balance rotated */}
              <div
                className="
                  relative bg-white rounded-[16px] p-4 mt-4 mx-auto
                  max-w-[240px]
                  transform rotate-1
                  2xl:ml-[208.59px] 2xl:mt-[15px] 2xl:w-[195.61px] 2xl:h-[165.95px] 2xl:rounded-[25px] 2xl:rotate-[2.5deg]
                "
              >
                <div className="flex flex-col gap-2">
                  <h6 className="font-roboto font-semibold text-[14px] text-[#686868]">Total Balance</h6>
                  <h3 className="font-roboto font-bold text-[22px] 2xl:text-[32px] text-[#141414]">23,576.00</h3>
                </div>

                <div className="flex items-center gap-3 mt-4">
                  <div className="w-5 h-5 bg-[#E0F0E5] rounded-full flex items-center justify-center">
                    <img src={PlusIcon} alt="Plus" className="w-3 h-3" />
                  </div>
                  <span className="font-manrope font-semibold text-[14px] text-[#686868]">Add Number</span>
                </div>
              </div>

              {/* profile card rotated */}
              <div
  className="
    bg-white rounded-[16px] p-4 mt-4 mx-auto
    flex items-center gap-4 w-full max-w-[360px]
    transform rotate-2

    /* Bigger screens */
    sm:max-w-[380px]
    md:max-w-[400px]
    xl:max-w-[420px]

    /* 2XL Styles */
    2xl:mt-[10px] 
    2xl:max-w-[420px]
    2xl:rounded-[25px]
    2xl:px-6 2xl:py-4
    2xl:rotate-[6.36deg]
  "
>

  {/* Avatar */}
  <div className="w-[50px] h-[50px] sm:w-[56px] sm:h-[56px] min-w-[50px] sm:min-w-[56px] rounded-full overflow-hidden border-[5px] sm:border-[6px] border-white">
    <img
      src={Avt}
      alt="User"
      className="w-full h-full object-cover rounded-full"
    />
  </div>

  {/* Text Content */}
  <div className="flex-1 flex items-center justify-between gap-3">

    {/* Left Side */}
    <div className="flex flex-col min-w-0">
      <span className="text-[16px] sm:text-[18px] font-roboto font-bold text-[#141414] truncate">
        Online
      </span>
      <span className="text-[12px] sm:text-[14px] font-manrope text-[#686868] truncate">
        Tomy Restaurant
      </span>
    </div>

    {/* Right Side */}
    <div className="flex flex-col items-end">
      <span className="text-[14px] sm:text-[16px] font-roboto font-semibold">
        +$10K
      </span>

      <div className="mt-1 sm:mt-2 bg-[#E0F0E5] rounded-full px-2 sm:px-3 py-1">
        <span className="text-[10px] sm:text-[12px] font-roboto font-semibold text-[#0F4E23]">
          Confirm
        </span>
      </div>
    </div>

  </div>
</div>

            </div>
          </div>
        </div>
      </div> {/* container */}
    </section>
  );
};

export default Dashboard;
