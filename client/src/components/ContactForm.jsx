import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactForm({
  workerUrl = "https://forms-worker.buildyourbranddigital.workers.dev/submit",
  formId = "stratem-contact",
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    hp: "", // 👈 honeypot, must stay empty
  });
  const [startedAt, setStartedAt] = useState(Date.now());
  const [status, setStatus] = useState({ loading: false, success: false, error: "" });

  // reset start time when form mounts
  useEffect(() => {
    setStartedAt(Date.now());
  }, []);

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
        body: JSON.stringify({
          formId,
          // 👇 send fields flat so the worker can read them
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
          hp: formData.hp, // honeypot
          submittedFrom: window?.location?.href ?? "",
        }),
      });

      const json = await res.json();

      if (!res.ok || json.ok === false) {
        throw new Error(json.error || "Something went wrong");
      }

      setStatus({ loading: false, success: true, error: "" });
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
        hp: "",
      });
    } catch (err) {
      setStatus({ loading: false, success: false, error: err.message });
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
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="phone">
            Phone
          </label>
          <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="service">
          Service (optional)
        </label>
        <Input
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          placeholder="Bookkeeping, ETX, Payroll..."
        />
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
