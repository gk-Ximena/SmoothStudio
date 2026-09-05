import { apiFetch } from "../../services/api";
import type { Employee } from "./types";

// One function per backend endpoint this feature needs. When your
// colleague builds the real route, this is the only line that has to
// match it — everything else in the app just calls fetchCurrentEmployee()
// and doesn't know or care that it's a network request underneath.
export function fetchCurrentEmployee(): Promise<Employee> {
  return apiFetch<Employee>("/employees/me");
}
