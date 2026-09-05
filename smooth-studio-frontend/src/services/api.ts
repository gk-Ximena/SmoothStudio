// A custom error class so calling code can tell "the backend responded
// with an error" apart from "the network request itself failed" if it
// ever needs to. `extends Error` means it's still a real JS Error
// underneath — try/catch and error.message both still work normally.
//
// Note: this declares `status` as a field explicitly and assigns it in the
// constructor body, rather than the shorter `constructor(public status:
// number, ...)` shorthand you may see in other TS codebases. This
// project's tsconfig turns on `erasableSyntaxOnly`, which requires that
// TypeScript syntax be removable by just stripping types — that shorthand
// actually generates extra runtime code (an assignment), so it's disallowed
// here even though it's valid TypeScript elsewhere.
export class ApiError extends Error {
  status: number;

  constructor(status: number, message: string) {
    super(message);
    this.name = "ApiError";
    this.status = status;
  }
}

// The <T> here is a generic: apiFetch doesn't know or care what shape of
// data it's fetching. The CALLER decides that, by writing e.g.
// apiFetch<Employee>("/employees/me") — and TypeScript then knows the
// resolved value is an Employee, with autocomplete and everything, without
// this file needing to import Employee at all.
export async function apiFetch<T>(path: string, options?: RequestInit): Promise<T> {
  const response = await fetch(`/api${path}`, {
    headers: { "Content-Type": "application/json", ...options?.headers },
    ...options,
  });

  if (!response.ok) {
    throw new ApiError(response.status, `Request to ${path} failed (${response.status})`);
  }

  return (await response.json()) as T;
}
