import tripStatuses from "@/app/constants/tripStatuses";
import { TripStatus } from "@/types";

export function validateForm(formData: {
  tripStatus: TripStatus;
  dateTime: string;
}) {
  const errors: { [key: string]: string } = {};
  const { tripStatus, dateTime } = formData;

  const fieldEmpty = [dateTime, tripStatus].some(
    (field) => !field.toString().trim()
  );

  if (fieldEmpty) {
    errors.global = "All the fields are mandatory";
  }

  if (!tripStatuses.includes(tripStatus)) {
    errors.tripStatus = "Please select a valid status";
  }

  const parsedDateTime = new Date(dateTime);

  if (isNaN(parsedDateTime.getTime())) {
    errors.dateTime = "Invalid date and time provided";
  } else {
    const now = new Date();

    if (parsedDateTime.getTime() <= now.getTime()) {
      errors.dateTime = "Date and time cannot be in the past";
    }
  }

  return errors;
}
