interface IProps {
  className?: string;
  title: string;
  value: string;
}

export default function StatisticsCard({ className, title, value }: IProps) {
  return (
    <>
      <h3 className="flex text-fs-300 text-textSecondary">{title}</h3>
      <div className="font-bold text-fs-400">{value}</div>
    </>
  );
}
