import React from "react";
import saleBadge from "~/assets/icon/sale.svg"; // adjust your path

type Bar = {
  day: string;
  height: string;
  bg: string;
};

type HighestSale = {
  day: string;
  height: string;
  amount: string;
};

interface BarChartProps {
  bars: Bar[];
  highestSale: HighestSale;
}

const BarChart: React.FC<BarChartProps> = ({ bars, highestSale }) => {
  return (
    <div className="flex justify-center items-end gap-3 mt-6 mb-4 px-6 2xl:mt-[83px] 2xl:mb-[27px]">
      <div className="flex items-end gap-3 sm:gap-4">
        {/* Regular Bars */}
        {bars.map((bar, i) => (
          <div key={i} className="flex flex-col items-center">
            <div
              style={{ height: bar.height, background: bar.bg }}
              className="rounded-t-[2px] w-[22px] sm:w-[28px] 2xl:w-[34px]"
            />
            <span className="text-[12px] sm:text-[14px] font-semibold text-[#686868] font-roboto mt-2">
              {bar.day}
            </span>
          </div>
        ))}

        {/* Highest Sale Bar */}
        <div className="relative flex flex-col items-center">
          <div
            style={{ height: highestSale.height, background: "#0F4E23" }}
            className="rounded-t-[2px] w-[22px] sm:w-[28px] 2xl:w-[34px]"
          />
          <span className="text-[12px] sm:text-[14px] font-semibold text-[#686868] font-roboto mt-2">
            {highestSale.day}
          </span>

          {/* Tooltip */}
          <div className="absolute left-1/2 transform -translate-x-1/2 p-3 rounded-xl flex flex-col gap-2 shadow-md z-10 w-[110px] sm:w-[130px] bg-[#F1F68E] -top-[38px] sm:-top-[45px] 2xl:w-[135px] 2xl:h-[87px] md:-top-[45px] lg:-top-[40px] xl:-top-[40px] 2xl:-top-[74px]">
            <p className="text-[13px] sm:text-[16px] font-roboto text-[#686868]">
              Highest sale
            </p>
            <div className="flex items-center justify-center gap-2">
              <img src={saleBadge} alt="Highest sale" className="w-4 h-4" />
              <span className="text-[16px] sm:text-[20px] font-bold font-roboto text-[#141414]">
                {highestSale.amount}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BarChart;
