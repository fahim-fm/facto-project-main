import React from "react";

import cubyn from "~/assets/brand/1.svg";
import digits from "~/assets/brand/3.svg";
import bastion from "~/assets/brand/4.svg";
import pipe from "~/assets/brand/5.svg";
import ramp from "~/assets/brand/6.svg";

interface Company {
  name: string;
  logo: string;
}

const companies: Company[] = [
  { name: "Cubyn", logo: cubyn },
  { name: "Digits", logo: digits },
  { name: "Bastion", logo: bastion },
  { name: "Pipe", logo: pipe },
  { name: "Ramp", logo: ramp },
];

const Trust: React.FC = () => {
  return (
    <section className="w-full bg-[#0F4E23] py-6 md:py-8 lg:py-10 xl:py-[50px] overflow-hidden">
      <div className="container container-pad flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-0">

        {/* Left text + divider */}
        <div className="flex items-center relative pr-4 md:pr-7 lg:pr-9 shrink-0">
          <div className="absolute right-0 top-1/2 -translate-y-1/2 h-[60%] md:h-full w-[3px] bg-[#BFE5A6]"></div>

          <h4 className="
            flex items-center 
            text-left font-roboto font-bold
            text-[20px] md:text-[22px] xl:text-[24px]
            leading-[30px] md:leading-[32px] xl:leading-[34px]
            text-[#F8F8F8]
            h-auto md:h-[68px] 
            max-w-[200px]
          ">
            Trusted by Top Companies
          </h4>
        </div>

        {/* ⬇️ Infinite Looping Logos */}
        <div className="w-full overflow-hidden md:ml-[36px]">
          <div className="flex items-center gap-[40px] sm:gap-[50px] md:gap-[60px] lg:gap-[70px] xl:gap-[96px] animate-marquee whitespace-nowrap">
            {companies.concat(companies).map((company, index) => (
              <img
                key={company.name + index}
                src={company.logo}
                alt={company.name}
                className="
                  h-6 sm:h-7 md:h-8 xl:h-9 
                  w-auto object-contain 
                  transition-all duration-300 
                  mx-6 sm:mx-8 md:mx-10 xl:mx-12
                  inline-block
                "
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Trust;
