import { Bell, LogOut } from "lucide-react";

interface TopBarProps {
  employeeName: string;
  onSignOut?: () => void;
}

function TopBar({ employeeName, onSignOut }: TopBarProps) {
  return (
    <header className="flex items-center justify-between border-b border-cloudy-sky/40 px-6 py-4">
      <p className="font-display text-lg text-anthracite">Welcome {employeeName}!</p>
      <div className="flex items-center gap-4 text-alaska-gray">
        <button type="button" aria-label="Notifications" className="hover:text-anthracite">
          <Bell size={20} />
        </button>
        <button
          type="button"
          aria-label="Sign out"
          onClick={onSignOut}
          className="hover:text-anthracite"
        >
          <LogOut size={20} />
        </button>
      </div>
    </header>
  );
}

export default TopBar;
