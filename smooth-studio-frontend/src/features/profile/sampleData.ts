import type { Employee } from "./types";

// Fallback data, shown until the real backend endpoint exists (or if a
// request to it ever fails). Kept in its own file so it's obvious this is
// throwaway data, not something a component should import directly.
export const sampleEmployee: Employee = {
  legalName: "Name Lastname",
  jobTitle: "Barber",
  storeLocation: "Vancouver, BC",
  dateOfBirth: "19/02/2000",
  email: "lastname@smooth.com",
  phone: "604-670-8903",
};
