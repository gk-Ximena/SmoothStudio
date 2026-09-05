import type { ReactNode } from "react";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import type { NavKey } from "./nav";

interface AppLayoutProps {
  employeeName: string;
  active: NavKey;
  onNavigate: (key: NavKey) => void;
  children: ReactNode; // "anything React can render" — a string, JSX, a list of JSX, etc.
}

// Notice this component no longer calls useState itself. `active` now lives
// in App.tsx instead, because BOTH the Sidebar (to highlight the right icon)
// and App (to decide which page to show) need to read and change it. When
// two components need to share one piece of state, that state has to move
// up to their closest common parent — this is called "lifting state up,"
// and it's one of the most common patterns in React.
function AppLayout({ employeeName, active, onNavigate, children }: AppLayoutProps) {
  return (
    <div className="flex min-h-screen">
      <Sidebar active={active} onNavigate={onNavigate} />
      <div className="flex flex-1 flex-col">
        <TopBar employeeName={employeeName} onSignOut={() => alert("Signed out")} />
        <main className="flex-1 bg-white p-8">{children}</main>
      </div>
    </div>
  );
}

export default AppLayout;
