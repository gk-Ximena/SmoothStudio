import { NAV_ITEMS, type NavKey } from "./nav";

interface SidebarProps {
  active: NavKey;
  onNavigate: (key: NavKey) => void;
}

function Sidebar({ active, onNavigate }: SidebarProps) {
  return (
    <nav className="flex h-screen w-16 flex-col items-center gap-2 bg-anthracite py-6">
      {/* Destructuring `icon: Icon` renames the field to a capitalized local
          name. React treats a lowercase tag like <icon /> as a plain HTML
          element, so a component reference must be capitalized to be
          rendered as JSX — this rename is what makes <Icon /> below legal. */}
      {NAV_ITEMS.map(({ key, label, icon: Icon }) => {
        const isActive = key === active;
        return (
          <button
            key={key}
            type="button"
            aria-label={label}
            onClick={() => onNavigate(key)}
            className={`flex h-10 w-10 items-center justify-center rounded-full transition-colors ${
              isActive
                ? "bg-cinereous text-anthracite"
                : "text-cloudy-sky hover:bg-alaska-gray"
            }`}
          >
            <Icon size={20} />
          </button>
        );
      })}
    </nav>
  );
}

export default Sidebar;
