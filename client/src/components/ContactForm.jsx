// src/components/ContactForm.jsx
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactForm({ workerUrl, formId }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState({ loading: false, success: false, error: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: "" });

    try {
      const res = await fetch(workerUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // 👇 this is the shape the worker will expect
        body: JSON.stringify({
          formId: formId,
          data: {
            ...formData,
            // you can add page or utm here
            submittedFrom: window?.location?.href ?? "",
          },
        }),
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || "Something went wrong");
      }

      setStatus({ loading: false, success: true, error: "" });
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      setStatus({ loading: false, success: false, error: err.message });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="name">
          Name
        </label>
        <Input
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          placeholder="Your full name"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="email">
            Email
          </label>
          <Input
            id="email"
            name="email"
            required
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="phone">
            Phone
          </label>
          <Input
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+264 ..."
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="message">
          Message
        </label>
        <Textarea
          id="message"
          name="message"
          rows={4}
          required
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us what you need help with"
        />
      </div>

      <Button type="submit" disabled={status.loading} className="w-full md:w-auto">
        {status.loading ? "Sending..." : "Send message"}
      </Button>

      {status.success && (
        <p className="text-sm text-green-600 mt-2">Thanks! We received your message.</p>
      )}
      {status.error && <p className="text-sm text-red-600 mt-2">{status.error}</p>}
    </form>
  );
}
