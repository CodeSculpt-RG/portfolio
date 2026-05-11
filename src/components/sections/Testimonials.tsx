import { testimonials } from "../../data/testimonials";
import { TestimonialCard } from "../common/TestimonialCard";

export function Testimonials() {
  return (
    <section id="testimonials" className="section">
      <div className="mb-10 flex items-center gap-5">
        <div className="h-px flex-1 bg-slate-400/15" />
        <h2 className="text-center font-mono text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-gold">Collaborator Voices</h2>
        <div className="h-px flex-1 bg-slate-400/15" />
      </div>
      <div className="mx-auto grid w-full gap-5 md:grid-cols-3">
        {testimonials.map((item, index) => (
          <TestimonialCard key={item.name} {...item} index={index} />
        ))}
      </div>
    </section>
  );
}
