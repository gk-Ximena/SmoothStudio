// `import type` tells TypeScript (and the bundler) this import only exists
// for type-checking — it gets erased completely from the JS that ships to
// the browser, so it costs nothing at runtime.
import type { Employee } from "./types";

interface ProfileCardProps {
  employee: Employee;
}

function ProfileCard({ employee }: ProfileCardProps) {
  const fullName = `${employee.name} ${employee.lastname}`;

  // An array of objects, typed inline: "an array where every item has a
  // `label` and a `value`, both strings." TypeScript infers the type of
  // `row` inside .map() below automatically from this.
  const details: { label: string; value: string }[] = [
    { label: "Phone", value: employee.telephone },
    { label: "Address", value: employee.address },
  ];

  return (
    <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-sm ring-1 ring-cloudy-sky/40">
      <div className="flex items-center gap-4">
        <div className="h-16 w-16 rounded-full bg-concerto" aria-hidden="true" />
        <p className="font-display text-lg text-anthracite">{fullName}</p>
      </div>

      <dl className="mt-5 space-y-2 text-sm">
        {details.map((row) => (
          <div key={row.label} className="flex justify-between gap-4">
            <dt className="text-alaska-gray">{row.label}</dt>
            <dd className="text-anthracite text-right">{row.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export default ProfileCard;
