import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Mail, MapPin, Send } from "lucide-react";
import type { ReactNode } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { profile } from "../../data/profile";
import { Reveal } from "../common/Reveal";

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
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    
    if (!accessKey) {
      console.error("Web3Forms Access Key is missing. Please add VITE_WEB3FORMS_ACCESS_KEY to your .env file.");
      setStatus("error");
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          ...values,
          from_name: values.name,
          subject: `New Contact Form Submission: ${values.subject}`,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus("success");
        reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section overflow-hidden">
      <div className="heavy-glow absolute right-10 top-20 h-96 w-96 rounded-full bg-gold-bright/15 blur-[80px]" />
      <div className="relative grid items-end gap-12 lg:grid-cols-[0.85fr_1.15fr] max-md:justify-items-center">
        <Reveal className="max-md:text-center">
          <h2 className="font-ui text-[clamp(2.2rem,5vw,4.2rem)] font-extrabold leading-[0.98] tracking-[-0.06em] text-platinum">
            Let&apos;s Build<br />
            <span className="text-gradient">Something Refined</span>
          </h2>
          <p className="mt-5 max-w-md text-base leading-8 text-soft max-md:mx-auto">
            Currently accepting select new projects and opportunities. If you have an idea that needs engineering precision, let&apos;s talk.
          </p>
          <div className="mt-8 grid max-w-md gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 max-md:mx-auto">
            <a href={`mailto:${profile.email}`} className="glass flex items-center gap-4 rounded-2xl p-4 transition hover:-translate-y-1 hover:border-gold/35">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950/35 text-gold"><Mail size={18} /></span>
              <span>
                <span className="block font-mono text-[0.6rem] uppercase tracking-[0.14em] text-muted">Email</span>
                <span className="mt-1 block break-all text-sm text-platinum">{profile.email}</span>
              </span>
            </a>
            <a href="#contact" className="glass flex items-center gap-4 rounded-2xl p-4 transition hover:-translate-y-1 hover:border-gold/35">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950/35 text-gold"><MapPin size={18} /></span>
              <span>
                <span className="block font-mono text-[0.6rem] uppercase tracking-[0.14em] text-muted">Location</span>
                <span className="mt-1 block text-sm text-platinum">{profile.location}</span>
              </span>
            </a>
          </div>
        </Reveal>
        <Reveal className="w-full max-md:max-w-[420px]">
          <form onSubmit={handleSubmit(onSubmit)} className="glass-strong rounded-[28px] p-5 sm:p-8" noValidate>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Name" error={errors.name?.message}>
                <input id="contact-name" {...register("name")} className="input" autoComplete="name" />
              </Field>
              <Field label="Email" error={errors.email?.message}>
                <input id="contact-email" {...register("email")} className="input" type="email" autoComplete="email" />
              </Field>
            </div>
            <Field label="Subject" error={errors.subject?.message}>
              <input id="contact-subject" {...register("subject")} className="input" />
            </Field>
            <Field label="Message" error={errors.message?.message}>
              <textarea id="contact-message" {...register("message")} className="input min-h-36 resize-y" />
            </Field>
            <button
              disabled={isSubmitting}
              className="accent-gradient mt-3 inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-xl px-5 py-3 font-ui text-sm font-bold text-slate-950 shadow-[0_14px_34px_rgba(147,197,253,0.18)] transition duration-300 hover:-translate-y-0.5 disabled:cursor-wait disabled:opacity-70"
            >
              {isSubmitting ? <Loader2 className="animate-spin" size={16} /> : <Send size={16} />}
              {isSubmitting ? "Sending" : "Send Message"}
            </button>
            {status === "success" ? <p className="mt-4 text-sm text-emerald">Message sent! I'll get back to you soon.</p> : null}
            {status === "error" ? <p className="mt-4 text-sm text-gold-bright">Error sending message. Please email me directly at {profile.email}</p> : null}
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: ReactNode }) {
  const id = `contact-${label.toLowerCase()}`;
  return (
    <label className="mb-5 block" htmlFor={id}>
      <span className="mb-2 block font-mono text-[0.66rem] uppercase tracking-[0.14em] text-muted">{label}</span>
      {children}
      {error ? <span className="mt-2 block text-xs text-gold-bright">{error}</span> : null}
    </label>
  );
}
