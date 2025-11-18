interface TextInfoProps {
  subHead: string;
  title: string;
  description: string;
}

const TextInfo: React.FC<TextInfoProps> = ({ subHead, title, description }) => {
  return (
    <section className="flex flex-col items-center gap-7 md:gap-8 lg:gap-9 w-full max-w-[878px] mx-auto px-4">
      {/* Sub Head */}
      <div className="flex justify-center items-center px-6 py-2 gap-2 bg-[#DFEDE3] rounded-full w-[168px] h-[42px]">
        <span className="font-manrope font-semibold text-[20px] leading-[26px] text-[#0F4E23]">
          {subHead}
        </span>
      </div>

      {/* Header */}
      <h2 className="text-center font-roboto font-extrabold text-[36px] sm:text-[44px] md:text-[56px] leading-[44px] sm:leading-[54px] md:leading-[68px] text-[#141414] w-full">
        {title}
      </h2>

      {/* Description */}
      <p className="text-center font-manrope font-normal text-[18px] sm:text-[20px] md:text-[24px] leading-[28px] sm:leading-[32px] md:leading-[36px] text-[#686868] w-full">
        {description}
      </p>
    </section>
  );
};

export default TextInfo;
