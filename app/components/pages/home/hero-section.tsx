import { iq } from "~/utils/images/icon.image";
import Button from "~/components/atoms/getbtn";

const HeroSection: React.FC = () => {
  return (
    <section className="pt-[60px] pb-[10px] lg:pt-[121px] lg:pb-[10px]">
      <div className="container container-pad mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full flex flex-col justify-center items-center">

          {/* Badge */}
          <div className="w-[279px] max-w-full h-[42px] inline-flex items-center justify-center gap-2 rounded-full bg-[#DFEDE3]">
            <span className="w-[231px] max-w-full text-[#0F4E23] font-manrope font-medium text-[20px] leading-[26px] sm:text-[18px] lg:text-[20px] text-center">
              Fast.secure.hassle-free
            </span>
          </div>

          {/* Heading */}
          <h1
            className="text-center mt-[28px] lg:mt-[30px] 2xl:mt-[32px] mx-auto max-w-[1042px] w-full text-gray-900 font-bold font-roboto text-[38px] sm:text-[45px] md:text-[48px] 2xl:text-[72px] sm:leading-[58px] lg:text-[64px] lg:leading-[74px] xl:text-[72px] xl:leading-[82px] break-words"
          >
            Get Paid Faster
            <span className="inline-block ml-1 sm:ml-2">
              <img
                src={iq}
                alt="money emoji"
                className="inline-block w-[36px] h-[36px] sm:w-[48px] sm:h-[48px] lg:w-[60px] lg:h-[60px] xl:w-[72px] xl:h-[72px] object-contain"
              />
            </span>
            Instant Cash for Businesses!
          </h1>

          {/* Paragraph */}
          <p
            className="text-center mx-auto mt-3 sm:mt-4 xl:mt-6 max-w-[1042px] w-full text-[#686868] font-manrope font-normal text-[16px] leading-[24px] sm:text-[18px] sm:leading-[28px] lg:text-[22px] lg:leading-[32px] xl:text-[24px] xl:leading-[36px] px-2 sm:px-4 lg:px-0 break-words"
          >
            Stop waiting months for credit card payments. CASA helps business
            owners access cash instantly by converting card transactions into
            immediate funds.
          </p>

          {/* Button */}
          <div className="mt-8 sm:mt-9 lg:mt-12 flex justify-center cursor-pointer">
            <Button
              label="Get Started"
              variant="primary"
              size="md"
              onClick={() => alert("Get Started Clicked!")}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
