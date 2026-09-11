import type { Employee } from "./types";

// Fallback data, shown until the real backend endpoint exists (or if a
// request to it ever fails). Kept in its own file so it's obvious this is
// throwaway data, not something a component should import directly.
export const sampleEmployee: Employee = {
  employeeId: 0,
  name: "Name",
  lastname: "Lastname",
  telephone: "604-670-8903",
  address: "1300 Cambie Street",
};
