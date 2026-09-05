import { useState } from "react";
import AppLayout from "./layouts/AppLayout";
import type { NavKey } from "./layouts/nav";
import Welcome from "./features/welcome/Welcome";
import Button from "./components/Button";
import ComingSoon from "./components/ComingSoon";
import ProfileCard from "./features/profile/ProfileCard";
import type { Employee } from "./features/profile/types";
import { useEmployee } from "./features/profile/useEmployee";

function renderPage(active: NavKey, employee: Employee) {
  switch (active) {
    case "home":
      return <Welcome />;
    case "profile":
      return (
        <div className="flex flex-col items-center gap-6">
          <ProfileCard employee={employee} />
          <div className="flex gap-3">
            <Button onClick={() => alert("Primary clicked")}>Save changes</Button>
            <Button variant="secondary" onClick={() => alert("Secondary clicked")}>
              Cancel
            </Button>
          </div>
        </div>
      );
    case "schedule":
      return <ComingSoon label="Schedule" />;
    case "messages":
      return <ComingSoon label="Messages" />;
    case "help":
      return <ComingSoon label="Help" />;
    case "settings":
      return <ComingSoon label="Settings" />;
    default: {
      // This line only compiles if every NavKey case above has been handled
      const _exhaustive: never = active;
      return _exhaustive;
    }
  }
}

function App() {
  const [active, setActive] = useState<NavKey>("home");

  // Tries the real backend, falls back to sample data if it's not up yet.
  // Nothing else in this file needs to know which one it actually got.
  const { employee, error } = useEmployee();

  return (
    <AppLayout employeeName={employee.legalName} active={active} onNavigate={setActive}>
      {error && (
        <p className="mb-4 rounded-lg bg-cloudy-sky/20 px-4 py-2 text-sm text-alaska-gray">
          {error}
        </p>
      )}
      {renderPage(active, employee)}
    </AppLayout>
  );
}

export default App;
