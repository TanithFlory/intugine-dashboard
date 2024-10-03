interface TextInputField {
  label: string;
  type: "text" | "tel";
  placeholder: string;
  name: string;
  options?: never;
  maxLength: number;
}

interface DropdownField {
  label: string;
  type: "dropdown";
  name: string;
  options: string[];
  placeholder?: never;
  maxLength?: never;
}

type InputField = TextInputField | DropdownField;

const inputFields: InputField[][] = [
  [
    {
      label: "Trip id",
      type: "text",
      placeholder: "Placeholder",
      name: "tripId",
      maxLength: 16,
    },
    {
      label: "Transporter",
      type: "dropdown",
      name: "transporter",
      options: ["Bluedart", "DHL", "Delhivery", "DTDC", "Gati", "Safexpress"],
    },
  ],
  [
    {
      label: "Source",
      type: "text",
      placeholder: "Placeholder",
      name: "source",
      maxLength: 16,
    },
    {
      label: "Destination",
      type: "text",
      placeholder: "Placeholder",
      name: "dest",
      maxLength: 16,
    },
  ],
  [
    {
      label: "Phone",
      type: "tel",
      placeholder: "Placeholder",
      name: "phoneNumber",
      maxLength: 10,
    },
  ],
];

export default inputFields;
