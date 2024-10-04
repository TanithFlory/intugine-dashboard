import { getDelayedStats } from "@/app/services/tripService";
import ProgressCircle from "@/app/utils/ProgressCircle";
import SectionWrapper from "@/app/utils/SectionWrapper";
import StatisticsCard from "@/app/utils/StatisticsCard";
import StatisticsWrapper from "@/app/utils/StatisticsWrapper";
import { SearchParams } from "@/types";
import Link from "next/link";

type Statistics = {
  totalCount: number;
  inTransitCount: number;
  deliveredCount: number;
  searchParams: SearchParams;
};

export default async function Statistics({
  totalCount,
  inTransitCount,
  searchParams,
  deliveredCount,
}: Statistics) {
  const { page = 1, resultsPerPage = 10 } = searchParams || {};

  /* cached fn->getDelayedStats since this retrieves all trips from db. */

  return (
    <SectionWrapper>
      <div className="flex items-center gap-6 w-full">
        <Link href={`/?page=${page}&resultsPerPage=${resultsPerPage}`}>
          <StatisticsWrapper className="flex flex-col justify-between w-[248px]">
            <StatisticsCard title={"Total Trips"} value={totalCount} />
          </StatisticsWrapper>
        </Link>
        <Link
          href={`/?page=${page}&resultsPerPage=${resultsPerPage}&counter=Delivered`}
        >
          <StatisticsWrapper className="w-[352px] flex items-center !p-0">
            <div className="flex flex-col justify-between w-[184px] pl-[24px] py-[12px] h-full">
              <StatisticsCard title={"Delivered"} value={deliveredCount} />
            </div>
            <div className="w-[1px] h-[64px] bg-[#E0E0E0] mx-[16px]"></div>
            <div className="w-[103px]">
              <ProgressCircle />
            </div>
          </StatisticsWrapper>
        </Link>
        <StatisticsWrapper className="flex items-center !p-0 max-w-[592px]">
          <div className="px-[24px] py-[12px] bg-delayed h-full flex flex-col justify-between w-[224px]">
            <StatisticsCard
              title="Delayed"
              value={await getDelayedStats()}
              className="text-delayedText"
            />
          </div>
          <Link
            href={`/?page=${page}&resultsPerPage=${resultsPerPage}&counter=In_Transit`}
          >
            <div className="w-[184px] px-[24px] py-[12px] flex flex-col justify-between h-full">
              <StatisticsCard title="In Transit" value={inTransitCount} />
            </div>
          </Link>
          <Link
            href={`/?page=${page}&resultsPerPage=${resultsPerPage}&counter=Delivered`}
          >
            <div className="px-[24px] py-[12px] w-[184px] flex flex-col justify-between h-full">
              <StatisticsCard title="Delivered" value={deliveredCount} />
            </div>
          </Link>
        </StatisticsWrapper>
      </div>
    </SectionWrapper>
  );
}
