import ProgressCircle from "@/app/utils/ProgressCircle";
import SectionWrapper from "@/app/utils/SectionWrapper";
import StatisticsCard from "@/app/utils/StatisticsCard";
import StatisticsWrapper from "@/app/utils/StatisticsWrapper";

export default function Statistics() {
  return (
    <SectionWrapper>
      <div className="flex items-center gap-6 w-full">
        <StatisticsWrapper className="flex flex-col justify-between w-[248px]">
          <StatisticsCard title={"Total Trips"} value={"18,033"} />
        </StatisticsWrapper>
        <StatisticsWrapper className="w-[352px] flex items-center !p-0">
          <div className="flex flex-col justify-between w-[184px] pl-[24px] py-[12px] h-full">
            <StatisticsCard title={"Delivered"} value={"18,033"} />
          </div>
          <div className="w-[1px] h-[64px] bg-[#E0E0E0] mx-[16px]"></div>
          <div className="w-[103px]">
            <ProgressCircle />
          </div>
        </StatisticsWrapper>
        <StatisticsWrapper className="flex items-center !p-0 max-w-[592px]">
          <div className="px-[24px] py-[12px] bg-delayed h-full flex flex-col justify-between w-[224px]">
            <StatisticsCard
              title="Delayed"
              value="18,033"
              className="text-delayedText"
            />
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
