import { testimonials } from "../../data/testimonials";
import { TestimonialCard } from "../common/TestimonialCard";
import { SectionHeader } from "../layout/SectionHeader";

export function Testimonials() {
  return (
    <section id="testimonials" className="section">
      <SectionHeader eyebrow="05 - Testimonials" title="Professional Feedback" copy="Measured, business-focused feedback written as placeholders until real client comments are ready for deployment." />
      <div className="grid gap-4 md:grid-cols-2">
        {testimonials.map((item, index) => (
          <TestimonialCard key={item.name} {...item} index={index} />
        ))}
      </div>
    </section>
  );
}
