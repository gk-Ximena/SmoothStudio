// This interface is the "contract" for what an Employee object must look
// like, everywhere in the app. If a component expects an Employee and you
// forget a field (or misspell one), TypeScript catches it before you ever
// run the code — that's the whole point of using TS over plain JS here.
export interface Employee {
  legalName: string;
  jobTitle: string;
  storeLocation: string;
  dateOfBirth: string;
  email: string;
  phone: string;
  avatarUrl?: string; // optional — not every employee has uploaded a photo yet
}
