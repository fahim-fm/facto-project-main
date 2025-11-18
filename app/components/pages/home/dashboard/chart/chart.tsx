import React from "react";

const chartData = [
  { day: "Sun", height: 68, color: "#E0F0E5" },
  { day: "Mon", height: 45, color: "#E0F0E5" },
  { day: "Tue", height: 88, color: "#E0F0E5" },
  { day: "Wed", height: 71, color: "#E0F0E5" },
  { day: "Thu", height: 143, color: "#0F4E23" },
  { day: "Fri", height: 57, color: "#DAFFC2" },
  { day: "Sat", height: 106, color: "#E0F0E5" },
];

const SalesChart: React.FC = () => {
  return (
    <div className="relative w-[400px] h-[361px]">
      {/* Background */}
      <div className="absolute w-[400px] h-[361px] bg-white rounded-[24px] top-[144px]" />

      {/* Sales Text Info */}
      <div className="absolute flex items-center gap-4 left-[32.5px] top-[176px]">
        {/* Icon */}
        <div className="relative w-[32px] h-[32px]">
          <div className="absolute bg-[#0F4E23] rounded-full w-[32px] h-[32px]" />
          <div className="absolute bg-white left-[8px] top-[12px] w-[16px] h-[15px]" />
        </div>

        {/* Text */}
        <div className="flex items-center gap-2">
          <span className="text-[#686868] font-manrope font-medium text-[24px] leading-[36px]">
            Total sales :
          </span>
          <span className="text-[#686868] font-roboto font-bold text-[32px] leading-[40px]">
            $12,500
          </span>
        </div>
      </div>

      {/* Chart Bars */}
      <div className="absolute left-[33px] top-[246px]">
        <div className="flex items-end gap-4 h-[179px]">
          {chartData.map((item, i) => (
            <div
              key={i}
              className="flex flex-col justify-end items-center gap-3"
              style={{ height: item.height + 36 }}
            >
              <div
                className="w-[34px] rounded-[2px]"
                style={{ background: item.color, height: item.height }}
              />
              <span className="text-[#686868] text-[14px] font-semibold font-roboto leading-[24px] text-center">
                {item.day}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Highest Sale Badge */}
      <div className="absolute left-[173px] top-[246px] bg-[#F1F68E] rounded-[12px] p-[12px_16px] flex flex-col gap-2">
        <span className="text-[#686868] font-roboto text-[18px]">Highest sale</span>

        <div className="flex items-center gap-2">
          <div className="relative w-[20px] h-[20px]">
            <div className="absolute w-[20px] h-[20px] bg-[#F1F68E] rounded-full" />
            <div className="absolute w-[10px] h-[10px] left-[5px] top-[12px] border-[1.5px] border-[#0F4E23]" />
          </div>

          <span className="font-roboto text-[24px] font-bold text-[#141414] leading-[34px]">
            $2,450
          </span>
        </div>
      </div>
    </div>
  );
};

export default SalesChart;
