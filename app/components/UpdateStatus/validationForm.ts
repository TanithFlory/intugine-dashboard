import transporters from "@/app/constants/transporters";

export function validateForm(formData: { transporter: ""; dateTime: Date }) {
  const errors: { [key: string]: string } = {};
  const { transporter, dateTime } = formData;

  const fieldEmpty = [dateTime, transporter].some(
    (field) => !field.toString().trim()
  );

  if (fieldEmpty) {
    errors.global = "All the fields are mandatory";
  }

  if (!transporters.includes(transporter)) {
    errors.transporter = "Please select a valid transporter";
  }

  if (dateTime && isNaN(dateTime.getTime())) {
    errors.dateTime = "Invalid date and time provided";
  } else {
    const now = new Date();
    if (dateTime < now) {
      errors.dateTime = "Date and time cannot be in the past";
    }
  }
}
