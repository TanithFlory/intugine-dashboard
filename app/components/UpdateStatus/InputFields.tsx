import SelectInput from "@/app/utils/SelectInput";
import TextInput from "@/app/utils/TextInput";

export default function InputFields() {
  const transporterOptions = [
    "Booked",
    "In Transit",
    "Reached Destination",
    "Delivered",
  ];

  return (
    <div>
      <div className="mb-[24px]">
        <div className="text-fs-12 font-bold mb-2">Transporter</div>
        <SelectInput options={transporterOptions} />
      </div>
      <div className="mb-[24px]">
        <div className="text-fs-12 font-bold mb-2">Transporter</div>
        <TextInput type="date" placeholder="Placeholder" />
      </div>
    </div>
  );
}
