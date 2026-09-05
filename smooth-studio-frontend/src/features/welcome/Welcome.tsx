import { ChevronDown } from "lucide-react";

// No props, no interface needed — this component has nothing that changes
// between renders, so there's nothing to type. Not every component needs
// props; only add an interface once something actually varies.
function Welcome() {
  return (
    <section className="overflow-hidden rounded-2xl bg-gradient-to-br from-anthracite to-alaska-gray p-10 text-white">
      {/*
        TODO: swap this gradient for the real hero photo once it's exported
        from the design file — the mockup's Assets page lists three
        "Free to Use" Pixabay photos with required author attribution.
        Whichever one becomes the actual hero image needs its credit line
        kept somewhere visible (e.g. a small caption or the page footer).
      */}
      <h1 className="font-display text-3xl">Are you ready to start?</h1>
      <p className="mt-4 max-w-md text-cloudy-sky">
        Here at Smooth Studio, we value our team by keeping communication
        clear, compassionate, and purposeful. Every interaction you have —
        especially with clients facing difficult moments — reflects the
        respect and care that define us. Together, we make a meaningful
        difference with every shave.
      </p>
      <ChevronDown className="mt-8 animate-bounce" aria-hidden="true" />
    </section>
  );
}

export default Welcome;
