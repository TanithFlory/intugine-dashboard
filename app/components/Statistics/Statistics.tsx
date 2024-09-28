import SectionWrapper from "@/app/utils/SectionWrapper";
import StatisticsCard from "@/app/utils/StatisticsCard";
import StatisticsWrapper from "@/app/utils/StatisticsWrapper";

export default function Statistics() {
  const stats = [
    { title: "Total Trips", value: "18,033", className: "w-[240px]" },
    { title: "Delivered", value: "18,033", className: "max-w-[352px]" },
  ];

  return (
    <SectionWrapper>
      <div className="flex items-center gap-6">
        {stats.map(({ title, value, className }) => (
          <StatisticsWrapper key={title} className={`${className} flex flex-col justify-between`}>
            <StatisticsCard title={title} value={value} />
          </StatisticsWrapper>
        ))}
        <StatisticsWrapper className="flex items-center !p-0 max-w-[592px]">
          <div className="px-[24px] py-[12px] bg-delayed h-full flex flex-col justify-between w-[224px]">
            <StatisticsCard title="Delayed" value="18,033" className="text-delayedText" />
          </div>
          <div className="w-[184px] px-[24px] py-[12px] flex flex-col justify-between h-full">
            <StatisticsCard title="In Transit" value="18,033" />
          </div>
          <div className="px-[24px] py-[12px] w-[184px] flex flex-col justify-between h-full">
            <StatisticsCard title="Delivered" value="18,033" />
          </div>
        </StatisticsWrapper>
      </div>
    </SectionWrapper>
  );
}
