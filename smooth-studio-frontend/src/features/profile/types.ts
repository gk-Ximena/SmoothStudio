// This interface is the "contract" for what an Employee object must look
// like, everywhere in the app. If a component expects an Employee and you
// forget a field (or misspell one), TypeScript catches it before you ever
// run the code — that's the whole point of using TS over plain JS here.
//
// Scaled back on 2026-09-06 to match the real `employee` table's columns
// (employee_id, name, lastname, telephone, address) instead of the
// originally-mocked fields from the design (jobTitle, storeLocation,
// dateOfBirth, email) — those don't exist in the database yet. Add them
// back here once/if they're added to the table.
export interface Employee {
  employeeId: number;
  name: string;
  lastname: string;
  telephone: string;
  address: string;
}
