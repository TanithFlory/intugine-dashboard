export default function TableHeaderTitle({
  width,
  label,
  index,
}: {
  width: string;
  label: string;
  index: number;
}) {
  return (
    <th
      key={index}
      className={`box-border ${width} ${
        index === 0 ? "flex items-center justify-center" : ""
      }`}
    >
      {index === 0 ? (
        <input type="checkbox" className="w-[16px] bg-[#FFFFFF] h-[16px]" />
      ) : (
        label
      )}
    </th>
  );
}
