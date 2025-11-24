
import { saleBadge,Icon1,infoIcon } from "~/utils/images/other.image";

const Different: React.FC = () => {
  const bars = [
    { day: "Sun", height: "68px", bg: "#E0F0E5" },
    { day: "Mon", height: "45px", bg: "#E0F0E5" },
    { day: "Tue", height: "88px", bg: "#E0F0E5" },
    { day: "Wed", height: "71px", bg: "#E0F0E5" },
  ];
  return (
    <section className="py-[120px]  lg:py-[160px]">
      <div className="container container-pad">
        <div className="pb-[100px] lg:pb-[130px]">
          <div className="flex flex-col items-center gap-7 md:gap-8 lg:gap-9 w-full max-w-[878px] mx-auto px-4">
            {/* Sub Head */}
            <div className="flex items-center justify-center px-6 py-2 gap-2 bg-[#DFEDE3] rounded-full w-[227px] h-[42px]">
              <span className="text-[#0F4E23] font-manrope font-semibold text-[20px] leading-[26px]">
                Why casa different
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-roboto font-extrabold text-[36px] sm:text-[44px] md:text-[52px] lg:text-[56px] leading-[46px] sm:leading-[56px] md:leading-[64px] lg:leading-[68px] text-center text-[#141414] max-w-[612px]">
              Why CASA Stands Out from the Rest
            </h2>

            {/* Paragraph */}
            <p className="font-manrope font-normal text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] leading-[24px] sm:leading-[28px] md:leading-[32px] lg:leading-[36px] text-center text-[#686868] max-w-[822px] ">
              Empowering businesses with faster cash access, CASA provides a
              secure, fast, and flexible solution to get early payments for
              credit card sales.
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center p-8 lg:p-[80px_32px] gap-9 lg:gap-14 w-full h-auto lg:h-[766px] bg-[#F8F8F8] rounded-[25px]">
          <div className="flex-none order-0 w-full lg:w-[764px] h-auto lg:h-[598px] relative">
            {/* Card 1 */}
            <div
              className="flex flex-col lg:flex-row items-center p-8 lg:p-[41px_32px] gap-2 lg:gap-8 
                w-full lg:w-[552px] h-auto lg:h-[598px]  bg-[#E0F0E5] rounded-[25px] relative"
            >
              {/* Card Content Wrapper */}
              <div className="flex flex-col items-start p-0 gap-9 w-full lg:w-[400px] h-auto lg:h-[505px]">
                {/* 1: Receive Money from card */}
                <div className="flex flex-row justify-center items-center p-6 gap-6 w-full lg:w-[357px] h-[108px] bg-white rounded-[25px]">
                  <img src={Icon1} alt="ic" />
                  <div className="flex flex-col items-start p-0 gap-2 w-full lg:w-[237px] h-[60px]">
                    <h6 className="font-roboto font-semibold text-lg leading-[30px] text-[#141414]">
                      Receive Money from card
                    </h6>
                    <p className="font-manrope text-base leading-[22px] text-[#686868]">
                      Cash Deposited Within 24 Hours
                    </p>
                  </div>
                </div>
                {/* 2: Sales Report Card */}
                <div
                  className="
               relative w-full lg:w-[400px] h-[361px] bg-white rounded-[24px] mt-4 lg:mt-0
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
                          <span
                            className="
        text-[12px] sm:text-[14px] 
        font-semibold text-[#686868] font-roboto mt-2
      "
                          >
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
                            <img
                              src={saleBadge}
                              alt="Highest sale"
                              className="w-4 h-4"
                            />
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
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Different;
