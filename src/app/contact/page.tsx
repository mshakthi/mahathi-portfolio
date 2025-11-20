/* eslint-disable react/jsx-no-comment-textnodes */
"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(formData: FormData) {
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="max-w-xl space-y-6">
      <SectionHeading
        title="Contact"
        subtitle="Interested in working together? Reach out to mahathi.shakthi@gmail.com."/>
    </section>
  );

  /**
   *  Add this inside the <section> tag in the contact page once integration with email service is done.
   * <form
        action={handleSubmit}
        className="space-y-4"
      >
        <Input label="Name" name="name" required />
        <Input label="Email" name="email" type="email" required />
        <Textarea
          label="Message"
          name="message"
          rows={5}
          required
        />
        <Button type="submit" disabled={status === "submitting"}>
          {status === "submitting" ? "Sending..." : "Send message"}
        </Button>
        {status === "success" && (
          <p className="text-xs text-emerald-400">Message sent. Thank you!</p>
        )}
        {status === "error" && (
          <p className="text-xs text-red-400">
            Something went wrong. Please try again.
          </p>
        )}
      </form>  */
}