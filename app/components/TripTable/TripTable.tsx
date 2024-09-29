import SectionWrapper from "@/app/utils/SectionWrapper";

export default function TripTable() {
  const columns = [
    { label: "", width: "w-28" }, // Checkbox column
    { label: "Trip ID", width: "w-28" },
    { label: "Transporter", width: "w-24" },
    { label: "Source", width: "w-32" },
    { label: "Destination", width: "w-32" },
    { label: "Phone", width: "w-20" },
    { label: "ETA", width: "w-28" },
    { label: "Distance Remaining", width: "w-30" },
    { label: "Trip Status", width: "w-28" },
    { label: "TAT Status", width: "w-26" },
  ];

  const rows = [
    {
      tripId: "12345",
      transporter: "ABC Logistics",
      source: "New York",
      destination: "Los Angeles",
      phone: "9902713573",
      eta: "12:00 PM",
      distanceRemaining: "300 miles",
      tripStatus: "In Progress",
      tatStatus: "On Time",
    },
  ];

  return (
    <SectionWrapper>
      <div className="overflow-x-auto border-borderColor border-[1px] rounded-[8px]">
        <h3 className="text-fs-300 font-bold py-[12px] px-[20px]">Trip List</h3>
        <table className="min-w-full table-auto text-fs-100">
          <thead className="bg-[#F8F8F8]">
            <tr className="text-left h-[40px]">
              {columns.map((column, index) => (
                <th
                  key={index}
                  className={`box-border px-4 py-2 ${column.width} ${
                    index === 0 ? "pl-[20px] w-[50px]" : ""
                  }`}
                >
                  {index === 0 ? (
                    <input type="checkbox" className="w-[16px] h-[16px]" />
                  ) : (
                    column.label
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="gap-4">
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex} className="border-t h-[40px]">
                <td className="px-4 py-2 pl-[20px] ">
                  <input type="checkbox" className="w-[16px] h-[16px]" />
                </td>
                <td className="px-4 py-2">{row.tripId}</td>
                <td className="px-4 py-2">{row.transporter}</td>
                <td className="px-4 py-2">{row.source}</td>
                <td className="px-4 py-2">{row.destination}</td>
                <td className="px-4 py-2">{row.phone}</td>
                <td className="px-4 py-2">{row.eta}</td>
                <td className="px-4 py-2">{row.distanceRemaining}</td>
                <td className="px-4 py-2">{row.tripStatus}</td>
                <td className="px-4 py-2">{row.tatStatus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </SectionWrapper>
  );
}
