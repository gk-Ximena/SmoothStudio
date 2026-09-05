import { useState } from "react";
import AppLayout from "./layouts/AppLayout";
import type { NavKey } from "./layouts/nav";
import Welcome from "./features/welcome/Welcome";
import Button from "./components/Button";
import ComingSoon from "./components/ComingSoon";
import ProfileCard from "./features/profile/ProfileCard";
import type { Employee } from "./features/profile/types";

// Sample data shaped exactly like the Employee interface. Try deleting a
// field below, or misspelling one — TypeScript will underline the error
// immediately, before you even save.
const sampleEmployee: Employee = {
  legalName: "Name Lastname",
  jobTitle: "Barber",
  storeLocation: "Vancouver, BC",
  dateOfBirth: "19/02/2000",
  email: "lastname@smooth.com",
  phone: "604-670-8903",
};

// Every branch has to return the same kind of thing: renderable React
// content. The `default` branch is a safety net — see the comment on
// `_exhaustive` below for what it's actually doing.
function renderPage(active: NavKey) {
  switch (active) {
    case "home":
      return <Welcome />;
    case "profile":
      return (
        <div className="flex flex-col items-center gap-6">
          <ProfileCard employee={sampleEmployee} />
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
      // This line only compiles if every NavKey case above has been
      // handled — if you add a new page to the NavKey union in nav.ts and
      // forget to add a case for it here, TypeScript narrows `active` to
      // something other than `never` at this point, and this assignment
      // becomes a type error. It's a compile-time reminder that says
      // "you added a page and forgot to wire it up."
      const _exhaustive: never = active;
      return _exhaustive;
    }
  }
}

function App() {
  // This state now lives here, in the closest shared parent of the Sidebar
  // (inside AppLayout) and the page content below — see the comment in
  // AppLayout.tsx for why it moved.
  const [active, setActive] = useState<NavKey>("home");

  return (
    <AppLayout employeeName={sampleEmployee.legalName} active={active} onNavigate={setActive}>
      {renderPage(active)}
    </AppLayout>
  );
}

export default App;
