import { useEffect, useState } from "react";
import type { Employee } from "./types";
import { fetchCurrentEmployee } from "./api";
import { sampleEmployee } from "./sampleData";

interface UseEmployeeResult {
  employee: Employee;
  isLoading: boolean;
  error: string | null;
}

// This hook is the ONLY place that knows whether the data came from the
// real backend or from the sample fallback. Every component that needs an
// employee (ProfileCard, the top bar) just calls useEmployee() — once the
// backend is actually running, this hook starts succeeding and every one
// of those components gets real data automatically, with zero changes to
// any of them.
export function useEmployee(): UseEmployeeResult {
  const [employee, setEmployee] = useState<Employee>(sampleEmployee);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Guards against setting state after this component has already
    // unmounted (or a newer request has started) — a real bug you'd
    // otherwise hit occasionally and find confusing.
    let cancelled = false;

    fetchCurrentEmployee()
      .then((data) => {
        if (!cancelled) setEmployee(data);
      })
      .catch(() => {
        if (!cancelled) {
          setError("Couldn't reach the backend yet — showing sample data.");
        }
      })
      .finally(() => {
        if (!cancelled) setIsLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return { employee, isLoading, error };
}
