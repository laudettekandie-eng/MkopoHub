// (imports unchanged)
import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getLoanFee, formatKES } from "@/lib/loanFees";
import { toast } from "sonner";

const TILL_NUMBER = "6441148";

const Apply = () => {
  const [step, setStep] = useState(1);
  const [paying, setPaying] = useState(false);
  const [stkSent, setStkSent] = useState(false);
  const [confirmMsg, setConfirmMsg] = useState("");
  const [confirmStatus, setConfirmStatus] = useState<"idle" | "success" | "error">("idle");

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    idNumber: "",
    amount: "",
    period: "30",
    purpose: "",
  });

  const totalSteps = 4;

  // ================= FORM =================
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const nextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < totalSteps) setStep((prev) => prev + 1);
  };

  const fee = form.amount ? getLoanFee(Number(form.amount), form.period) : null;

  // ================= STK PUSH =================
  const handlePay = async () => {
    if (!fee) return;

    setPaying(true);
    setStkSent(false);
    setConfirmStatus("idle");
    setConfirmMsg("");

    try {
      let phone = form.phone.replace(/\s+/g, "");
      if (phone.startsWith("0")) phone = "254" + phone.slice(1);

      const res = await fetch("https://wesley-9x8l.onrender.com/api/stk-push", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone, amount: Number(fee), customer_name: `${form.firstName} ${form.lastName}` }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data?.error || data?.message || "STK failed");

      setStkSent(true);

      if (data?.ResponseCode === "0" || data?.success) {
        toast.success("STK sent. Complete payment on your phone.");
      } else {
        toast.info("Request received. Check your phone.", {
          description: data?.CustomerMessage || "If no prompt appears, use manual payment below.",
        });
      }
    } catch (err: any) {
      console.error(err);
      setStkSent(true); // force fallback
      toast.error("STK failed", {
        description: err.message || "Proceed with manual M-Pesa payment.",
      });
    } finally {
      setPaying(false);
    }
  };

  // ================= MANUAL CONFIRM =================
  const handleConfirm = () => {
    const msg = confirmMsg.toLowerCase();

    if (msg.includes("starnet ventures")) {
      setConfirmStatus("success");
    } else {
      setConfirmStatus("error");
    }
  };

  const inputClass =
    "w-full px-4 py-3 border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary";

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* HEADER */}
        <div className="bg-primary py-8 text-primary-foreground">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold">Apply for a Loan</h1>
            <p className="opacity-80">Fill in details and get approved in minutes</p>
          </div>
        </div>

        {/* FORM */}
        <div className="container mx-auto px-4 py-10 max-w-2xl">
          {/* STEPS */}
          <div className="flex justify-center mb-10 gap-2">
            {[1, 2, 3, 4].map((s) => (
              <div key={s} className="flex items-center gap-2">
                <div className={`w-10 h-10 flex items-center justify-center rounded-full font-bold ${s <= step ? "bg-primary text-white" : "bg-muted"}`}>
                  {s}
                </div>
                {s < totalSteps && <div className={`w-10 h-1 ${s < step ? "bg-primary" : "bg-muted"}`} />}
              </div>
            ))}
          </div>

          <form onSubmit={nextStep} className="space-y-6">
            {/* STEP 1 */}
            {step === 1 && (
              <>
                <h2 className="text-xl font-semibold">Personal Info</h2>
                <input name="firstName" value={form.firstName} onChange={handleChange} required placeholder="First Name" className={inputClass} />
                <input name="lastName" value={form.lastName} onChange={handleChange} required placeholder="Last Name" className={inputClass} />
                <input name="idNumber" value={form.idNumber} onChange={handleChange} required placeholder="ID Number" className={inputClass} />
              </>
            )}

            {/* STEP 2 */}
            {step === 2 && (
              <>
                <h2 className="text-xl font-semibold">Contact</h2>
                <input name="phone" value={form.phone} onChange={handleChange} required placeholder="07XX XXX XXX" className={inputClass} />
                <input name="email" value={form.email} onChange={handleChange} placeholder="Email (optional)" className={inputClass} />
              </>
            )}

            {/* STEP 3 */}
            {step === 3 && (
              <>
                <h2 className="text-xl font-semibold">Loan Details</h2>
                <input name="amount" type="number" value={form.amount} onChange={handleChange} required placeholder="Amount (KES)" className={inputClass} />

                <select name="period" value={form.period} onChange={handleChange} className={inputClass}>
                  <option value="14">14 days</option>
                  <option value="21">21 days</option>
                  <option value="30">30 days</option>
                </select>

                {fee && (
                  <div className="p-4 bg-muted rounded-lg">
                    <p>Application Fee</p>
                    <p className="text-2xl font-bold">{formatKES(fee)}</p>
                  </div>
                )}
              </>
            )}

            {/* STEP 4 */}
            {step === 4 && (
              <>
                <h2 className="text-xl font-semibold">Payment</h2>

                <button type="button" onClick={handlePay} disabled={paying} className="w-full py-4 bg-secondary rounded-lg font-bold">
                  {paying ? "Processing..." : `Pay ${fee ? formatKES(fee) : ""}`}
                </button>

                {/* FALLBACK */}
                {stkSent && (
                  <div className="p-4 bg-muted rounded-lg space-y-3">
                    <p className="font-semibold">Didn't receive STK?</p>

                    <p>Pay via Till: <strong>{TILL_NUMBER}</strong></p>

                    <textarea
                      value={confirmMsg}
                      onChange={(e) => setConfirmMsg(e.target.value)}
                      placeholder="Paste M-Pesa message"
                      className={inputClass}
                    />

                    <button type="button" onClick={handleConfirm} className="w-full py-3 bg-primary text-white rounded-lg">
                      Confirm Payment
                    </button>

                    {confirmStatus === "success" && <p className="text-green-600">Payment confirmed</p>}
                    {confirmStatus === "error" && <p className="text-red-600">Verification failed</p>}
                  </div>
                )}
              </>
            )}

            {/* NAV */}
            {step < 4 && (
              <button type="submit" className="w-full py-3 bg-primary text-white rounded-lg">
                Continue
              </button>
            )}
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Apply;
