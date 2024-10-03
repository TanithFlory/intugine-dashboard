import { AddTripForm } from "@/types";
import transporters from "@/app/constants/transporters";

export function validateForm(formData: AddTripForm) {
  const errors: { [key: string]: string } = {};
  const { tripId, transporter, source, dest, phoneNumber } = formData;

  const fieldEmpty = [tripId, transporter, source, dest, phoneNumber].some(
    (field) => !field.toString().trim()
  );

  if (!transporters.includes(transporter)) {
    errors.transporter = "Select a valid transporter";
  }
  if (fieldEmpty) {
    errors.global = "All the fields are mandatory.";
  }

  if (/\d/.test(source)) {
    errors.source = "Source cannot contain numbers.";
  }

  if (/\d/.test(dest)) {
    errors.dest = "Destination cannot contain numbers.";
  }

  if (!/[0-9]/.test(phoneNumber.toString())) {
    errors.phoneNumber = "Phone number must only contain digits.";
  }

  if (formData.phoneNumber.toString().length !== 10) {
    errors.phoneNumber = "Phone number must be 10 digits.";
  }

  return Object.keys(errors).length > 0 ? errors : null;
}
