import FeatureCard from "~/components/pages/home/card";
import bankIcon from "~/assets/icons/Icon (2).svg";
import priceIcon from "~/assets/icons/Icon (3).svg";
import payoutIcon from "~/assets/icons/Icon (4).svg";

const AboutCasa: React.FC = () => {
  return (
    <section className="
      container container-pad  ">
        <div className="flex flex-col lg:flex-row 
      justify-center items-center
      px-6 lg:px-0 
      pt-[100px] md:pt-[120px] lg:pt-[130px]
      gap-12 lg:gap-[141px]">

      {/* ========== LEFT TEXT BLOCK ========== */}
      <div className="flex flex-col items-start gap-6 md:gap-8 w-full lg:w-[680px]">

        {/* Sub Head */}
        <div className="
          flex justify-center items-center 
          px-5 md:px-6 py-2 
          bg-[#DFEDE3] rounded-full
        ">
          <p className="
            font-manrope font-semibold 
            text-[16px] md:text-[18px] xl:text-[20px] 
            leading-[24px] md:leading-[26px]
            text-[#0F4E23]
          ">
            About Casa Service
          </p>
        </div>

        {/* Heading */}
        <h1
          className="
            font-roboto font-extrabold
            text-[32px] leading-[40px]
            sm:text-[36px] sm:leading-[44px]
            md:text-[44px] md:leading-[54px]
            lg:text-[52px] lg:leading-[64px]
            xl:text-[56px] xl:leading-[68px]
            text-[#141414]
            w-full
          "
        >
          Revolutionizing Cash Flow for Business Owners!
        </h1>
      </div>

      {/* ========== RIGHT BODY + CTA ========== */}
      <div className="flex flex-col items-start gap-6 md:gap-8 w-full lg:w-[619px]">

        {/* Description */}
        <p
          className="
            font-manrope font-normal
            text-[16px] leading-[26px]
            md:text-[20px] md:leading-[30px]
            xl:text-[24px] xl:leading-[36px]
            text-[#686868]
          "
        >
          Empowering businesses with faster cash access, CASA provides a secure,
          fast, and flexible solution to get early payments for credit card
          sales.
        </p>

        {/* CTA Button */}
        <button
          className="
            flex justify-center items-center 
            px-8 md:px-10 py-4 
            w-fit
            bg-[#0F4E23] rounded-full
            hover:opacity-90 transition
          "
        >
          <span className="
            font-manrope font-semibold 
            text-[16px] md:text-[18px] xl:text-[20px]
            leading-[24px] md:leading-[26px]
            text-white
          ">
            Join Now
          </span>
        </button>
        </div>
      </div>

      {/* ========== INSERTED FEATURE CARDS (BEFORE SECTION END) ========== */}
   <div className="w-full pt-[100px] md:pt-[133px] md:pb-[160px] 
                grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
                gap-6 justify-center">
  <FeatureCard
    title="Secure and Instant Cash Advances"
    description="No more waiting weeks—convert daily credit card transactions into cash within 24 hours to keep your business running smoothly."
    icon={bankIcon}
    className="mx-auto"
  />

  <FeatureCard
    title="Transparent and Fair Pricing Process"
    description="No hidden fees—enjoy clear, upfront pricing with flexible funding options that help your business stay in control."
    icon={priceIcon}
    className="mx-auto"
  />

  <FeatureCard
    title="Flexible and Secure Payout Options"
    description="Choose from multiple payout methods tailored for your needs. Enjoy secure and quick access to your funds anytime."
    icon={payoutIcon}
    className="mx-auto"
  />
</div>



    </section>
  );
};

export default AboutCasa;
