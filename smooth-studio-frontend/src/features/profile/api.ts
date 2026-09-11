import { apiFetch } from "../../services/api";
import type { Employee } from "./types";

// The shape the backend actually sends right now: snake_case columns,
// straight from Postgres, plus a `password` field the frontend has no
// business receiving at all. This interface isn't exported — it's an
// implementation detail of this file, not something the rest of the app
// should ever need to know about.
interface EmployeeResponse {
  employee_id: number;
  name: string;
  lastname: string;
  telephone: string;
  address: string;
  password: string;
}

// One function per backend endpoint this feature needs. This is also
// where the raw response gets translated into the app's own Employee
// shape — camelCase, and deliberately dropping `password` on the way in,
// so no component further down ever sees it, let alone stores it in
// React state.
export async function fetchCurrentEmployee(): Promise<Employee> {
  const raw = await apiFetch<EmployeeResponse>("/employees/me");

  return {
    employeeId: raw.employee_id,
    name: raw.name,
    lastname: raw.lastname,
    telephone: raw.telephone,
    address: raw.address,
  };
}
