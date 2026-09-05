interface ComingSoonProps {
  label: string;
}

// A tiny, reusable placeholder for pages we haven't built yet — one
// component, reused for schedule/messages/help/settings, instead of
// copy-pasting the same div four times.
function ComingSoon({ label }: ComingSoonProps) {
  return (
    <div className="flex h-40 items-center justify-center rounded-2xl border border-dashed border-cloudy-sky text-alaska-gray">
      {label} — coming soon
    </div>
  );
}

export default ComingSoon;
