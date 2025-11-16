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
    <section className="w-full bg-[#0F4E23] py-8 lg:py-10 xl:py-[50px] overflow-hidden">
      <div className="container container-pad flex items-center">

        {/* Left text + divider */}
        <div className="flex items-center relative pr-5 md:pr-7 lg:pr-9">
          <div className="absolute right-1 top-1/2 -translate-y-1/2 h-full w-[3px] bg-[#BFE5A6]"></div>

          <h4 className="flex items-center text-left font-roboto font-bold text-[24px] leading-[34px] text-[#F8F8F8] h-[68px] w-[168px]">
            Trusted by Top Companies
          </h4>
        </div>

        {/* ⬇️ Infinite Looping Logos */}
        <div className="ml-[36px] w-full overflow-hidden">
          <div className="flex items-center gap-[96px] animate-marquee whitespace-nowrap">
            {companies.concat(companies).map((company, index) => (
              <img
                key={company.name + index}
                src={company.logo}
                alt={company.name}
                className="h-8 xl:h-9 w-auto object-contain transition-all duration-300 mx-12 inline-block"
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Trust;
