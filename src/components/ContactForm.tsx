"use client";

import { useState, useRef } from "react";
import { Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";

/* ─── Types ──────────────────────────────────────────────────────── */

type FormState = "idle" | "loading" | "success" | "error";

interface FormFields {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

/* ─── Validation ─────────────────────────────────────────────────── */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(fields: FormFields): FormErrors {
  const errors: FormErrors = {};

  if (!fields.name.trim()) {
    errors.name = "Name is required.";
  }

  if (!fields.email.trim()) {
    errors.email = "Email is required.";
  } else if (!EMAIL_RE.test(fields.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!fields.subject.trim()) {
    errors.subject = "Subject is required.";
  }

  if (!fields.message.trim()) {
    errors.message = "Message is required.";
  } else if (fields.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters.";
  }

  return errors;
}

/* ─── Shared input class ─────────────────────────────────────────── */

const BASE_INPUT =
  "w-full rounded-xl border bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-slate-500 backdrop-blur-sm transition-all duration-200 focus:outline-none focus:border-[#00D9FF]/50 focus:ring-1 focus:ring-[#00D9FF]/30";

function inputClass(hasError: boolean): string {
  return `${BASE_INPUT} ${hasError ? "border-red-500/60" : "border-white/10"}`;
}

/* ─── Component ──────────────────────────────────────────────────── */

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);

  const [formState, setFormState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<FormErrors>({});
  const [fields, setFields] = useState<FormFields>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
    // Clear the error for this field as the user types
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const validationErrors = validate(fields);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setFormState("loading");

    try {
      if (!formRef.current) throw new Error("Form ref not attached.");
      const formData = new FormData(formRef.current);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setFormState("success");
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  }

  /* ── Success state ──────────────────────────────────────────── */

  if (formState === "success") {
    return (
      <div className="rounded-2xl border border-green-500/30 bg-green-500/5 p-10 text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-green-400" />
        <h3 className="mt-4 text-xl font-bold text-white">Message Sent!</h3>
        <p className="mt-2 text-slate-300/90">
          Thanks for reaching out! I&apos;ll get back to you soon.
        </p>
      </div>
    );
  }

  /* ── Form ───────────────────────────────────────────────────── */

  const isLoading = formState === "loading";

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      noValidate
      className="mt-8 space-y-5"
    >
      {/* Hidden Web3Forms fields */}
      <input
        type="hidden"
        name="access_key"
        value="dd613a59-4f51-4571-ae90-e0d68a035cbe"
      />
      <input
        type="hidden"
        name="subject"
        value="New Contact Form Submission"
      />
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        style={{ display: "none" }}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      {/* Error banner */}
      {formState === "error" && (
        <div className="mb-5 flex items-start gap-3 rounded-xl border border-red-500/30 bg-red-500/5 px-4 py-3">
          <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-400" />
          <p className="text-sm text-slate-300">
            Something went wrong. Please email me directly at{" "}
            <a
              href="mailto:bonaccivfx@gmail.com"
              className="text-red-300 underline hover:text-red-200"
            >
              bonaccivfx@gmail.com
            </a>
          </p>
        </div>
      )}

      {/* Name + Email row */}
      <div className="grid gap-5 sm:grid-cols-2">
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="mb-1.5 block text-sm font-medium text-slate-300"
          >
            Name <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your name"
            value={fields.name}
            onChange={handleChange}
            disabled={isLoading}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={inputClass(!!errors.name)}
          />
          {errors.name && (
            <p id="name-error" className="mt-1 text-xs text-red-400" role="alert">
              {errors.name}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="mb-1.5 block text-sm font-medium text-slate-300"
          >
            Email <span className="text-red-400">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="you@example.com"
            value={fields.email}
            onChange={handleChange}
            disabled={isLoading}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={inputClass(!!errors.email)}
          />
          {errors.email && (
            <p id="email-error" className="mt-1 text-xs text-red-400" role="alert">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      {/* Subject */}
      <div>
        <label
          htmlFor="subject"
          className="mb-1.5 block text-sm font-medium text-slate-300"
        >
          Subject <span className="text-red-400">*</span>
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          placeholder="What's this about?"
          value={fields.subject}
          onChange={handleChange}
          disabled={isLoading}
          aria-invalid={!!errors.subject}
          aria-describedby={errors.subject ? "subject-error" : undefined}
          className={inputClass(!!errors.subject)}
        />
        {errors.subject && (
          <p id="subject-error" className="mt-1 text-xs text-red-400" role="alert">
            {errors.subject}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="mb-1.5 block text-sm font-medium text-slate-300"
        >
          Message <span className="text-red-400">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          placeholder="Tell me about your project, opportunity, or idea..."
          value={fields.message}
          onChange={handleChange}
          disabled={isLoading}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={`${inputClass(!!errors.message)} resize-none`}
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-xs text-red-400" role="alert">
            {errors.message}
          </p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isLoading}
        className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#00D9FF] to-blue-500 px-8 py-3.5 text-sm font-semibold text-[#0a1628] shadow-lg shadow-[#00D9FF]/20 transition-all hover:brightness-110 hover:shadow-xl hover:shadow-[#00D9FF]/30 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isLoading ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending&hellip;
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            Send Message
          </>
        )}
      </button>
    </form>
  );
}
