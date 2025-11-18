import SalesChart from "~/components/pages/home/dashboard/chart/chart";
const Different: React.FC = () => {
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
        Empowering businesses with faster cash access, CASA provides a secure, fast, and flexible 
        solution to get early payments for credit card sales.
      </p>
    </div>
        </div>

       
        </div>
   </section>
  );
};

export default Different;