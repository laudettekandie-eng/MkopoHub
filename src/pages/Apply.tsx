import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getLoanFee, formatKES } from "@/lib/loanFees";
import { toast } from "sonner";

const Apply = () => {
  const [step, setStep] = useState(1);
  const [paying, setPaying] = useState(false);
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 4) setStep(step + 1);
  };

  const fee = form.amount ? getLoanFee(Number(form.amount), form.period) : null;

  const handlePay = async () => {
    if (!fee) return;

    setPaying(true);

    try {
      // Format phone to 2547XXXXXXXX
      const phoneFormatted = form.phone.replace(/^0/, "254");

      const res = await fetch("https://wesley-9x8l.onrender.com/api/stkpush", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phone: phoneFormatted,
          amount: fee,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "STK Push failed");
      }

      if (data?.success || data?.ResponseCode === "0") {
        toast.success("STK Push sent! Check your phone to complete payment.");
      } else {
        toast.info("Request sent. Check your phone.", {
          description: data?.message || "If no prompt appears, try again.",
        });
      }
    } catch (err: any) {
      toast.error("Payment failed", {
        description: err.message || "Please try again.",
      });
    } finally {
      setPaying(false);
    }
  };

  const inputClass =
    "w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:outline-none";

  const totalSteps = 4;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1">
        <div className="bg-primary py-8">
          <div className="container mx-auto px-4">
            <h1 className="text-2xl md:text-3xl font-bold text-primary-foreground">
              Apply for a Loan
            </h1>
            <p className="text-primary-foreground/80 mt-1">
              Complete the form below to get your loan in minutes
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-10 max-w-2xl">
          {/* Progress steps */}
          <div className="flex items-center justify-center gap-2 mb-10">
            {[1, 2, 3, 4].map((s) => (
              <div key={s} className="flex items-center gap-2">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${
                    s <= step
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {s}
                </div>
                {s < totalSteps && (
                  <div className={`w-12 h-1 rounded ${s < step ? "bg-primary" : "bg-muted"}`} />
                )}
              </div>
            ))}
          </div>

          <form onSubmit={handleNext} className="space-y-6">
            {/* Step 1 */}
            {step === 1 && (
              <>
                <h2 className="text-xl font-semibold text-foreground">Personal Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input name="firstName" value={form.firstName} onChange={handleChange} required className={inputClass} placeholder="First Name" />
                  <input name="lastName" value={form.lastName} onChange={handleChange} required className={inputClass} placeholder="Last Name" />
                </div>
                <input name="idNumber" value={form.idNumber} onChange={handleChange} required className={inputClass} placeholder="National ID" />
              </>
            )}

            {/* Step 2 */}
            {step === 2 && (
              <>
                <h2 className="text-xl font-semibold text-foreground">Contact Details</h2>
                <input name="phone" value={form.phone} onChange={handleChange} required className={inputClass} placeholder="0700 000 000" />
                <input name="email" type="email" value={form.email} onChange={handleChange} className={inputClass} placeholder="Email (optional)" />
              </>
            )}

            {/* Step 3 */}
            {step === 3 && (
              <>
                <h2 className="text-xl font-semibold text-foreground">Loan Details</h2>
                <input name="amount" type="number" value={form.amount} onChange={handleChange} required className={inputClass} placeholder="Amount (KES)" />
                <select name="period" value={form.period} onChange={handleChange} className={inputClass}>
                  <option value="14">14 days</option>
                  <option value="21">21 days</option>
                  <option value="30">30 days</option>
                </select>
                <select name="purpose" value={form.purpose} onChange={handleChange} required className={inputClass}>
                  <option value="">Purpose</option>
                  <option value="business">Business</option>
                  <option value="personal">Personal</option>
                  <option value="emergency">Emergency</option>
                </select>

                {fee !== null && (
                  <div className="p-4 bg-muted rounded-lg">
                    <p>Application Fee</p>
                    <p className="text-xl font-bold">{formatKES(fee)}</p>
                  </div>
                )}
              </>
            )}

            {/* Step 4 */}
            {step === 4 && (
              <>
                <h2 className="text-xl font-semibold text-foreground">Confirm & Pay</h2>

                <div className="p-4 bg-primary/10 rounded-lg text-center">
                  <p>Your loan is approved</p>
                  <p className="text-2xl font-bold">{fee ? formatKES(fee) : "-"}</p>
                </div>

                <button
                  type="button"
                  onClick={handlePay}
                  disabled={paying}
                  className="w-full py-4 bg-secondary rounded-lg font-bold"
                >
                  {paying ? "Sending STK Push..." : "Pay via M-Pesa"}
                </button>
              </>
            )}

            {step < 4 && (
              <button type="submit" className="w-full py-3 bg-primary text-white rounded-lg">
                Continue
              </button>
            )}
          </form>

          <p className="text-xs text-center mt-6">
            By applying, you agree to Terms & Conditions
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Apply;