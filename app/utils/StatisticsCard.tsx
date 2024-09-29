interface IProps {
  className?: string;
  title: string;
  value: string;
}

export default function StatisticsCard({ className, title, value }: IProps) {
  return (
    <>
      <h3 className="flex text-fs-16 text-textSecondary">{title}</h3>
      <div className="font-bold text-fs-24">{value}</div>
    </>
  );
}
