// A "union type": this variable can ONLY ever be one of these two exact strings.
// TypeScript will error if anything else is passed in.
type ButtonVariant = "primary" | "secondary";

// An "interface" describes the shape of an object — here, the props this
// component accepts. The `?` marks a prop as optional.
interface ButtonProps {
  children: string;
  variant?: ButtonVariant;
  onClick?: () => void; // a function that takes nothing and returns nothing
}

// Destructuring the props object in the function signature, with a default
// value for `variant` in case the caller doesn't pass one.
function Button({ children, variant = "primary", onClick }: ButtonProps) {
  const base =
    "rounded-full px-5 py-2 font-sans font-medium transition-colors cursor-pointer";

  // Record<K, V> is a built-in TS utility type: "an object whose keys are
  // ButtonVariant and whose values are strings." It guarantees we can never
  // forget to style one of the variants.
  const variants: Record<ButtonVariant, string> = {
    primary: "bg-anthracite text-white hover:bg-alaska-gray",
    secondary:
      "bg-transparent text-anthracite border border-anthracite hover:bg-concerto",
  };

  return (
    <button type="button" className={`${base} ${variants[variant]}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
