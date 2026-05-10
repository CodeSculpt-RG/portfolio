import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";
import { Loader2, Send } from "lucide-react";
import type { ReactNode } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { contactLinks, profile } from "../../data/profile";
import { Reveal } from "../common/Reveal";
import { SectionHeader } from "../layout/SectionHeader";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Enter a valid email"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactForm = z.infer<typeof schema>;

export function Contact() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactForm>({ resolver: zodResolver(schema) });

  const onSubmit = async (values: ContactForm) => {
    setStatus("idle");
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    if (!serviceId || !templateId || !publicKey) {
      setStatus("error");
      return;
    }
    try {
      await emailjs.send(serviceId, templateId, { ...values, to_email: profile.email }, { publicKey });
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section">
      <SectionHeader
        eyebrow="06 - Contact"
        title="Let's Build Something Refined"
        copy="For freelance projects, full-time opportunities, collaborations, or product development work."
      />
      <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
        <Reveal className="space-y-3">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="flex items-center gap-4 rounded-lg border border-white/[0.08] bg-navy-card p-4 transition duration-500 hover:border-gold/35 hover:bg-surface"
            >
              <link.icon className="text-gold/75" size={19} />
              <span>
                <span className="block font-mono text-[0.62rem] uppercase tracking-[0.22em] text-muted">{link.label}</span>
                <span className="mt-1 block break-all text-sm text-platinum/80">{link.value}</span>
              </span>
            </a>
          ))}
        </Reveal>
        <Reveal>
          <form onSubmit={handleSubmit(onSubmit)} className="rounded-lg border border-white/[0.08] bg-surface p-5 shadow-2xl sm:p-8" noValidate>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Name" error={errors.name?.message}>
                <input {...register("name")} className="input" autoComplete="name" />
              </Field>
              <Field label="Email" error={errors.email?.message}>
                <input {...register("email")} className="input" type="email" autoComplete="email" />
              </Field>
            </div>
            <Field label="Subject" error={errors.subject?.message}>
              <input {...register("subject")} className="input" />
            </Field>
            <Field label="Message" error={errors.message?.message}>
              <textarea {...register("message")} className="input min-h-36 resize-y" />
            </Field>
            <button
              disabled={isSubmitting}
              className="mt-3 inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-sm bg-gold px-5 py-3 font-ui text-xs font-semibold uppercase tracking-[0.18em] text-black transition duration-500 hover:bg-gold-bright disabled:cursor-wait disabled:opacity-70 sm:w-auto"
            >
              {isSubmitting ? <Loader2 className="animate-spin" size={16} /> : <Send size={16} />}
              {isSubmitting ? "Sending" : "Send Message"}
            </button>
            {status === "success" ? <p className="mt-4 text-sm text-emerald">Message sent successfully. Rahul will get back to you soon.</p> : null}
            {status === "error" ? <p className="mt-4 text-sm text-gold-bright">Message could not be sent. Check EmailJS env keys or email Rahul directly.</p> : null}
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: ReactNode }) {
  return (
    <label className="mb-5 block">
      <span className="mb-2 block font-mono text-[0.66rem] uppercase tracking-[0.2em] text-muted">{label}</span>
      {children}
      {error ? <span className="mt-2 block text-xs text-gold-bright">{error}</span> : null}
    </label>
  );
}
