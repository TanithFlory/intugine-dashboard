import SectionWrapper from "@/app/utils/SectionWrapper";

export default function TripTable() {
  const columns = [
    { label: "", width: "w-[50px]" }, // Checkbox column
    { label: "Trip ID", width: "w-[112px]" },
    { label: "Transporter", width: "w-[100px]" },
    { label: "Source", width: "w-[128px]" },
    { label: "Destination", width: "w-[128px]" },
    { label: "Phone", width: "w-[80px]" },
    { label: "ETA", width: "w-[112px]" },
    { label: "Distance Remaining", width: "w-[120px]" },
    { label: "Trip Status", width: "w-[118px]" },
    { label: "TAT Status", width: "w-[104px]" },
  ];

  const rows = [
    {
      tripId: "12345",
      transporter: "BlueDart",
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
        <h3 className="text-fs-16 font-bold py-[12px] px-[20px]">Trip List</h3>
        <table className="min-w-full table-auto text-fs-12">
          <thead className="bg-[#F8F8F8] ">
            <tr className="text-left h-[44px] flex items-center gap-4">
              {columns.map((column, index) => (
                <th
                  key={index}
                  className={`box-border ${column.width} ${
                    index === 0 ? "flex items-center justify-center" : ""
                  }`}
                >
                  {index === 0 ? (
                    <input
                      type="checkbox"
                      className="w-[16px]  bg-[#FFFFFF] h-[16px]"
                    />
                  ) : (
                    column.label
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="gap-4">
            {rows.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className="border-t h-[44px] flex gap-4 items-center"
              >
                <td className="w-[50px] flex items-center justify-center">
                  <input
                    type="checkbox"
                    className="w-[16px] accent-black h-[16px]"
                  />
                </td>
                <td className="w-[112px]">{row.tripId}</td>
                <td className="w-[100px]">{row.transporter}</td>
                <td className="w-[128px]">{row.source}</td>
                <td className="w-[128px]">{row.destination}</td>
                <td className="w-[80px]">{row.phone}</td>
                <td className="w-[112px]">{row.eta}</td>
                <td className="w-[120px]">{row.distanceRemaining}</td>
                <td className="w-[118px]">{row.tripStatus}</td>
                <td className="w-[104px]">{row.tatStatus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </SectionWrapper>
  );
}
