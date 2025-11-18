import TextInfo from "~/components/pages/home/text/textcard";
import Vectors from "~/assets/icons/Vector.svg";
import Double from "~/assets/icons/angle-double-right.svg";
import Maria from "~/assets/icon/img-1.jpg";
import icon1 from "~/assets/icon/Icon (1).svg";
import Img1 from "~/assets/icon/img-1.jpg";
import Img2 from "~/assets/icon/img-2.jpg";
import Img3 from "~/assets/icon/img-3.jpg";
import Img4 from "~/assets/icon/img-4.jpg";
import Img5 from "~/assets/icon/img-5.jpg";
const Work: React.FC = () => {
  return (
    <section className="py-[120px]  lg:py-[160px]  bg-[#F8F8F8]">
      <div className="container container-pad">
        <div className="pb-[100px] lg:pb-[130px]">
          <TextInfo
            subHead="How it works"
            title="Simple & Fast Receive Your Payment in 3 Steps!"
            description="Empowering businesses with faster cash access, CASA provides a secure, fast, and flexible solution to get early payments for credit card sales."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 md:gap-9 items-stretch">
          {/* Box-1 */}
          <div className="bg-white rounded-[25px] w-full  mx-auto py-6 sm:py-8 px-4 sm:px-6 flex flex-col gap-6 sm:gap-8">
            <div className="bg-[#b1df92] rounded-[25px] w-full px-4 sm:px-6 py-6 sm:py-8 flex flex-col gap-4 sm:gap-6">
              <h4 className="font-roboto font-bold text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px]">
                Sign Up
              </h4>

              <input
                type="text"
                placeholder="Name"
                className="font-roboto placeholder:text-[#686868]/50 w-full rounded-[25px] bg-white p-3 sm:p-4 text-[14px] sm:text-[16px] lg:text-[18px]"
              />
              <input
                type="text"
                placeholder="Company Name"
                className="font-roboto placeholder:text-[#686868]/50 w-full rounded-[25px] bg-white p-3 sm:p-4 text-[14px] sm:text-[16px] lg:text-[18px]"
              />
              <input
                type="text"
                placeholder="Email"
                className="font-roboto placeholder:text-[#686868]/50 w-full rounded-[25px] bg-white p-3 sm:p-4 text-[14px] sm:text-[16px] lg:text-[18px]"
              />
            </div>
            <div className="max-w-[380px] mx-auto flex flex-col gap-3 sm:gap-4">
              <h3 className="font-roboto font-bold text-[18px] sm:text-[20px] md:text-[22px] lg:text-[22px]">
                Connect Your Business
              </h3>
              <p className="font-manrope text-[#686868] text-body text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-[24px] sm:leading-[28px] md:leading-[30px]">
                Sign up and link your credit card processor or POS system with
                CASA. We support all major payment providers.
              </p>

              {[
                "Fast approval & easy integration",
                "No impact on your credit score",
              ].map((text, index) => (
                <div key={index} className="flex gap-3 sm:gap-4 items-center">
                  <div className="w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] bg-[#E0F0E5] rounded-full flex items-center justify-center">
                    <img src={Vectors} alt="vec" />
                  </div>
                  <p className="font-roboto text-[#686868] font-semibold text-[14px] sm:text-[16px] md:text-[16px] lg:text-[18px] text-body">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Box-2 */}
          <div className="bg-white rounded-[25px] w-full  mx-auto py-6 sm:py-8 px-4 sm:px-6 flex flex-col gap-6 sm:gap-8">
            <div className="bg-[#F1F68E] rounded-[25px] w-full px-4 sm:px-6 py-6 sm:py-8 flex flex-col gap-4 sm:gap-6">
              <div className="bg-white rounded-[25px] p-3 sm:p-4 flex justify-between items-center gap-3">
                <div className="w-[56px] h-[56px] border-[6px] border-white rounded-full overflow-hidden">
                  <img
                    src={Maria}
                    alt="User"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <h4 className="font-roboto font-bold text-[16px] sm:text-[18px] md:text-[20px]  lg:text-[24px]">
                    Maria Kosta
                  </h4>
                  <p className="font-roboto text-[12px] sm:text-[14px]">
                    Maria@mail.com
                  </p>
                </div>

                <h4 className="font-roboto text-primary font-bold text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] hidden md:block">
                  +$10K
                </h4>
              </div>

              <div className="bg-white rounded-[25px] p-4 sm:p-6 flex flex-col gap-3 sm:gap-4">
                <div className="flex justify-between">
                  <div className="flex flex-col gap-2">
                    <span className="font-roboto text-body text-[12px] text-[#686868]  sm:text-[14px] font-semibold">
                      Total Balance
                    </span>
                    <p className="font-roboto font-semibold text-[16px] sm:text-[18px] md:text-[20px]">
                      +$12000.00
                    </p>
                  </div>

                  <div className="flex flex-col items-center gap-2">
                    <div className="w-[40px] h-[40px] sm:w-[48px] sm:h-[48px] bg-[#F1F68E] rounded-full flex items-center justify-center font-roboto font-bold text-[12px] sm:text-[14px] leading-[20px] text-body">
                      10%
                    </div>
                    <p className="text-body text-[#686868] text-[12px] sm:text-[14px] font-semibold font-roboto">
                      discount rate
                    </p>
                  </div>
                </div>

                <button className="w-full bg-[#DAFFC2] py-2 px-4 rounded-[12px] flex justify-between items-center text-[14px] ">
                  <p className="font-semibold font-roboto">See Details</p>
                  <img src={Double} alt="deb" />
                </button>
              </div>
            </div>

            <div className="max-w-[380px] mx-auto flex flex-col gap-3 sm:gap-4">
              <h3 className="font-roboto font-bold text-[18px] sm:text-[20px] md:text-[22px] lg:text-[22px]">
                Transactions for Early Payment
              </h3>
              <p className="font-manrope text-body text-[#686868]  text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-[24px] sm:leading-[28px] md:leading-[30px] lg:leading-[30px]">
                Every morning, your previous day’s credit card transactions are
                automatically submitted for funding.
              </p>

              {[
                "Fast approval & easy integration",
                "No impact on your credit score",
              ].map((text, index) => (
                <div key={index} className="flex gap-3 sm:gap-4 items-center">
                  <div className="w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] bg-[#E0F0E5] rounded-full flex items-center justify-center">
                    <img src={Vectors} alt="vec" />
                  </div>
                  <p className="font-roboto text-[#686868] text-[14px] font-semibold sm:text-[16px] md:text-[16px] lg:text-[18px] text-body">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
          {/* Box-3 */}
          <div className="bg-white rounded-[25px] w-full  mx-auto py-6 sm:py-8  px-4 sm:px-6 flex flex-col gap-6 sm:gap-8 lg:gap-9">
            <div className="bg-[#DAFFC2] rounded-[25px] w-full px-4 sm:px-6 py-6 sm:py-8 lg:py-[35px] flex flex-col gap-4 sm:gap-6 lg:gap-9">
              <div className="bg-white rounded-[25px] p-4 lg:p-6 flex gap-3 lg:gap-4 items-center">
                <div className="w-[40px] h-[40px] sm:w-[48px] sm:h-[48px] bg-[#DFEDE3] rounded-full flex items-center justify-center">
                  <img src={icon1} />
                </div>

                <div>
                  <h6 className="font-roboto font-semibold text-[16px] sm:text-[18px] md:text-[18px] sm:leading-[28px] md:leading-[30px]">
                    Receive Money from Card
                  </h6>
                  <p className="font-manrope text-[12px] sm:text-[14px] text-[#686868] md:text-[14px] lg:text-[16px] text-body">
                    Cash Deposited Within 24 Hours
                  </p>
                </div>
              </div>

              {/* Avatars */}
              <div className="bg-white rounded-[25px] p-4 sm:p-6 flex flex-col gap-3 sm:gap-4">
                <div className="flex justify-between">
                  <h4 className="font-roboto font-bold text-[18px] sm:leading-[28px] md:leading-[30px] lg:leading-[32px] sm:text-[20px] md:text-[22px] lg:text-[24px]">
                    Recent Users
                  </h4>
                  <button className="font-roboto font-bold text-[#686868] text-body text-[12px] sm:text-[14px] cursor-pointer">
                    View All
                  </button>
                </div>

                <div className="flex items-center -space-x-2">
                  {[Img1, Img2, Img3, Img4, Img5].map((img, i) => (
                    <div
                      key={i}
                      className="w-10 h-10 border-2 border-white rounded-full overflow-hidden"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={img}
                        alt={`User ${i}`}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                  ))}

                  <div className="w-10 h-10 bg-[#DAFFC2] border-2 border-white rounded-full flex items-center justify-center">
                    <span className="text-[14px] font-roboto font-semibold text-[#0F4E23]">
                      9+
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 Text */}
            <div className="max-w-[380px] mx-auto flex flex-col gap-3 sm:gap-4">
              <h3 className="font-roboto font-bold text-[18px] sm:text-[20px] md:text-[22px]">
                Receive Funds & Grow
              </h3>
              <p className="font-manrope text-[#686868] text-body text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-[24px] sm:leading-[28px] md:leading-[30px]">
                Every morning, your previous day’s credit card transactions are
                automatically submitted for funding.
              </p>

              {[
                "Same-day or next-day payouts",
                "Flexible repayment from future sales",
              ].map((text, index) => (
                <div key={index} className="flex gap-3 sm:gap-4 items-center">
                  <div className="w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] bg-[#E0F0E5] rounded-full flex items-center justify-center">
                    <img src={Vectors} alt="vec" />
                  </div>
                  <p className="font-roboto text-[#686868] font-semibold text-[14px] sm:text-[16px] md:text-[16px] lg:text-[18px] text-body">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
