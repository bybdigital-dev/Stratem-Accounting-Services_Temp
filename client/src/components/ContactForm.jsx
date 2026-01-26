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

  // -------- helpers for slow/flaky mobile networks --------
  const fetchWithTimeout = async (url, options, timeoutMs = 25000) => {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

    try {
      const res = await fetch(url, { ...options, signal: controller.signal });
      return res;
    } finally {
      clearTimeout(timeoutId);
    }
  };

  const safeParseResponse = async (res) => {
    const text = await res.text(); // read once
    try {
      return { data: JSON.parse(text), raw: text };
    } catch {
      return { data: null, raw: text };
    }
  };

  // Retry only for timeout/network failures (not for non-OK HTTP responses)
  const postWithRetry = async (url, options, { timeoutMs = 25000, retries = 1 } = {}) => {
    let lastErr;

    for (let attempt = 0; attempt <= retries; attempt++) {
      try {
        const res = await fetchWithTimeout(url, options, timeoutMs);
        return res;
      } catch (err) {
        lastErr = err;

        const message = (err?.message || "").toLowerCase();
        const isRetryable =
          err?.name === "AbortError" ||
          err instanceof TypeError ||
          message.includes("failed to fetch") ||
          message.includes("network") ||
          message.includes("fetch");

        if (!isRetryable || attempt === retries) throw err;

        // small backoff
        await new Promise((r) => setTimeout(r, 600 * (attempt + 1)));
      }
    }

    throw lastErr;
  };
  // --------------------------------------------------------

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status.loading) return; // guard double taps

    setStatus({ loading: true, success: false, error: "" });

    // Optional but recommended if you later add backend dedupe
    const submissionId =
      globalThis.crypto?.randomUUID?.() ?? `${Date.now()}-${Math.random().toString(16).slice(2)}`;

    try {
      const res = await postWithRetry(
        workerUrl,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          // Helps on mobile if user backgrounds/navigates quickly (small payload only)
          keepalive: true,
          body: JSON.stringify({
            formId,
            submissionId,
            ...formData,
            submittedFrom: window?.location?.href ?? "",
            // Optional: helps debugging mobile failures in Worker logs
            clientHints: {
              ua: navigator.userAgent,
              online: navigator.onLine,
              effectiveType: navigator.connection?.effectiveType,
              downlink: navigator.connection?.downlink,
              rtt: navigator.connection?.rtt,
            },
          }),
        },
        { timeoutMs: 25000, retries: 1 }
      );

      const { data, raw } = await safeParseResponse(res);

      // Success if HTTP OK and either { ok: true } or no `ok` field
      const ok = res.ok && (data?.ok === true || data?.ok === undefined);

      if (!ok) {
        const serverMsg = data?.error || data?.message || raw;
        throw new Error(serverMsg || `Request failed (${res.status})`);
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
    } catch (err) {
      let msg = err?.message || "Something went wrong";

      if (err?.name === "AbortError") {
        msg = "Network is slow — please try again.";
      } else if (/failed to fetch|network/i.test(msg)) {
        msg = "Network issue — please try again when signal is stronger.";
      }

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
