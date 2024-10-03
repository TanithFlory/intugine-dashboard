const tripColumns = [
  { label: "", width: "w-[50px]", identifier: "checkbox" },
  { label: "Trip ID", width: "w-[112px]", identifier: "tripId" },
  { label: "Transporter", width: "w-[100px]", identifier: "transporter" },
  { label: "Source", width: "w-[128px]", identifier: "source" },
  { label: "Destination", width: "w-[128px]", identifier: "dest" },
  { label: "Phone", width: "w-[80px]", identifier: "phoneNumber" },
  { label: "ETA", width: "w-[112px]", identifier: "etaDays" },
  {
    label: "Distance Remaining",
    width: "w-[120px]",
    identifier: "distanceRemaining",
  },
  { label: "Trip Status", width: "w-[118px]", identifier: "currentStatus" },
  { label: "TAT Status", width: "w-[104px]", identifier: "currentStatusCode" },
];

export default tripColumns;
