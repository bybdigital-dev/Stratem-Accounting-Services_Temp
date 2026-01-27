import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactForm({
  workerUrl = "https://forms.afriwafel.co.za/submit",
  formId = "stratem-contact",
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    benchmark: "",
    message: "",
    hp: "", // honeypot
  });

  const [startedAt, setStartedAt] = useState(Date.now());
  const [status, setStatus] = useState({ loading: false, success: false, error: "" });

  useEffect(() => {
    setStartedAt(Date.now());
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Safely parse JSON (Workers sometimes return non-JSON on error)
  const safeParseJson = async (res) => {
    const text = await res.text();
    try {
      return { json: JSON.parse(text), raw: text };
    } catch {
      return { json: null, raw: text };
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status.loading) return;

    setStatus({ loading: true, success: false, error: "" });

    // Helps prevent duplicate emails if you retry submissions
    const submissionId =
      globalThis.crypto?.randomUUID?.() ?? `${Date.now()}-${Math.random().toString(16).slice(2)}`;

    try {
      const res = await fetch(workerUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        keepalive: true,
        body: JSON.stringify({
          formId,
          ...formData,
          _t0: startedAt, // ✅ required if your KV config uses spam.minMs
          submissionId, // ✅ enables backend dedupe (if enabled in Worker)
          submittedFrom: window?.location?.href ?? "",
        }),
      });

      const { json, raw } = await safeParseJson(res);

      if (!res.ok || json?.ok === false) {
        throw new Error(json?.error || raw || `Request failed (${res.status})`);
      }

      setStatus({ loading: false, success: true, error: "" });
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        benchmark: "",
        message: "",
        hp: "",
      });

      // Reset timer so another submission isn't flagged as "too fast"
      setStartedAt(Date.now());
    } catch (err) {
      const msg = err?.name === "AbortError"
        ? "Network is slow — please try again."
        : err?.message || "Network issue — please try again.";

      setStatus({ loading: false, success: false, error: msg });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* honeypot */}
      <input
        type="text"
        name="hp"
        value={formData.hp}
        onChange={handleChange}
        className="hidden"
        autoComplete="off"
        tabIndex={-1}
      />

      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="name">
          Name
        </label>
        <Input id="name" name="name" required value={formData.name} onChange={handleChange} />
      </div>

      {/* Row 1: email + phone */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="email">
            Email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            autoComplete="email"
            inputMode="email"
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
            autoComplete="tel"
            inputMode="tel"
          />
        </div>
      </div>

      {/* Row 2: service + benchmark */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="service">
            Service
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="">Select a service...</option>
            <option value="Bookkeeping">Bookkeeping</option>
            <option value="Employee Taxation (PAYE)">Employee Taxation (PAYE)</option>
            <option value="Payroll">Payroll</option>
            <option value="Pension Assistance">Pension Assistance</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="benchmark">
            Is this a benchmark exercise?
          </label>
          <select
            id="benchmark"
            name="benchmark"
            value={formData.benchmark}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="">Select an option...</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
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
        />
      </div>

      <Button type="submit" disabled={status.loading}>
        {status.loading ? "Sending..." : "Send message"}
      </Button>

      {status.success && <p className="text-sm text-green-600">Message sent ✅</p>}
      {status.error && <p className="text-sm text-red-600">{status.error}</p>}
    </form>
  );
}