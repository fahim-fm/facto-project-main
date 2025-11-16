import bankIcon from "~/assets/icons/Icon (2).svg";
interface FeatureCardProps {
  title: string;
  description: string;
  icon?: string;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon = bankIcon,
  className = "",
}) => {
  return (
    <div
      className={`
        flex flex-col items-start gap-4 sm:gap-6  lg:gap-4 xl:gap-6
        p-6 sm:p-8 md:p-10 lg:p-8 xl:p-12
        w-full max-w-[456px] md:max-h-[408px]
        rounded-[25px]
        bg-[#F8F8F8] text-[#141414]
        hover:bg-[#0F4E23] hover:text-white
        transition-colors duration-300
        ${className}
      `}
    >


      <h3 className="w-full text-[24px] sm:text-[28px]  md:text-[32px] lg:text-[30px] xl:text-[32px] leading-[28px] sm:leading-[36px] md:leading-[40px] font-roboto font-bold">
        {title}
      </h3>
            <img
        src={icon}
        alt="icon"
        className="w-[40px] sm:w-[48px] md:w-[56px] h-[40px] sm:h-[48px] md:h-[56px] object-contain"
      />

      <p className="w-full text-[16px] sm:text-[18px] md:text-[20px] lg:text-[18px] xl:text-[20px]  leading-[24px] sm:leading-[28px] md:leading-[32px] font-manrope">
        {description}
      </p>
    </div>
  );
};
export default FeatureCard;
