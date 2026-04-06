import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getLoanFee, formatKES } from "@/lib/loanFees";
import { supabase } from "@/integrations/supabase/client";
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
      const { data, error } = await supabase.functions.invoke("mpesa-stkpush", {
        body: { phone: form.phone, amount: fee },
      });
      if (error) throw error;

      if (data?.ResponseCode === "0") {
        toast.success("STK Push sent! Check your phone to complete payment.");
      } else {
        toast.info("STK Push initiated. Check your phone for the M-Pesa prompt.", {
          description: data?.CustomerMessage || data?.errorMessage || "If no prompt appears, try again.",
        });
      }
    } catch (err: any) {
      toast.error("Payment failed", { description: err.message || "Please try again." });
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
            {/* Step 1 – Personal Info */}
            {step === 1 && (
              <>
                <h2 className="text-xl font-semibold text-foreground">Personal Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">First Name</label>
                    <input name="firstName" value={form.firstName} onChange={handleChange} required className={inputClass} placeholder="Enter first name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">Last Name</label>
                    <input name="lastName" value={form.lastName} onChange={handleChange} required className={inputClass} placeholder="Enter last name" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">ID Number</label>
                  <input name="idNumber" value={form.idNumber} onChange={handleChange} required className={inputClass} placeholder="National ID number" />
                </div>
              </>
            )}

            {/* Step 2 – Contact */}
            {step === 2 && (
              <>
                <h2 className="text-xl font-semibold text-foreground">Contact Details</h2>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Phone Number</label>
                  <input name="phone" value={form.phone} onChange={handleChange} required className={inputClass} placeholder="0700 000 000" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Email Address</label>
                  <input name="email" type="email" value={form.email} onChange={handleChange} className={inputClass} placeholder="your@email.com (optional)" />
                </div>
              </>
            )}

            {/* Step 3 – Loan Details */}
            {step === 3 && (
              <>
                <h2 className="text-xl font-semibold text-foreground">Loan Details</h2>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Loan Amount (KES)</label>
                  <input name="amount" type="number" value={form.amount} onChange={handleChange} required className={inputClass} placeholder="e.g. 5000" min="500" max="150000" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Loan Period</label>
                  <select name="period" value={form.period} onChange={handleChange} className={inputClass}>
                    <option value="14">14 days</option>
                    <option value="21">21 days</option>
                    <option value="30">30 days</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Purpose</label>
                  <select name="purpose" value={form.purpose} onChange={handleChange} required className={inputClass}>
                    <option value="">Select purpose</option>
                    <option value="business">Business</option>
                    <option value="personal">Personal</option>
                    <option value="emergency">Emergency</option>
                    <option value="education">Education</option>
                    <option value="medical">Medical</option>
                  </select>
                </div>
                {fee !== null && (
                  <div className="p-4 rounded-lg bg-muted border border-border">
                    <p className="text-sm text-muted-foreground">Application Fee</p>
                    <p className="text-2xl font-bold text-foreground">{formatKES(fee)}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      For {formatKES(Number(form.amount))} over {form.period} days
                    </p>
                  </div>
                )}
              </>
            )}

            {/* Step 4 – Payment Confirmation */}
            {step === 4 && (
              <>
                <h2 className="text-xl font-semibold text-foreground">Confirm & Pay Fee</h2>

                <div className="rounded-lg border border-border bg-muted/50 p-6 space-y-4">
                  <h3 className="font-semibold text-foreground">Application Summary</h3>
                  <div className="grid grid-cols-2 gap-y-2 text-sm">
                    <span className="text-muted-foreground">Name</span>
                    <span className="text-foreground font-medium">{form.firstName} {form.lastName}</span>
                    <span className="text-muted-foreground">ID Number</span>
                    <span className="text-foreground font-medium">{form.idNumber}</span>
                    <span className="text-muted-foreground">Phone</span>
                    <span className="text-foreground font-medium">{form.phone}</span>
                    <span className="text-muted-foreground">Loan Amount</span>
                    <span className="text-foreground font-medium">{formatKES(Number(form.amount))}</span>
                    <span className="text-muted-foreground">Period</span>
                    <span className="text-foreground font-medium">{form.period} days</span>
                    <span className="text-muted-foreground">Purpose</span>
                    <span className="text-foreground font-medium capitalize">{form.purpose}</span>
                  </div>
                </div>

                <div className="p-5 rounded-lg bg-primary/10 border border-primary/30 text-center space-y-2">
                  <p className="text-sm text-foreground">Your loan is <span className="font-bold text-primary">approved!</span></p>
                  <p className="text-3xl font-bold text-foreground">{fee !== null ? formatKES(fee) : "—"}</p>
                  <p className="text-sm text-muted-foreground">Application fee to be paid via M-Pesa</p>
                </div>

                <button
                  type="button"
                  onClick={handlePay}
                  disabled={paying}
                  className="w-full py-4 bg-secondary text-secondary-foreground rounded-lg font-bold text-lg hover:brightness-110 transition-all disabled:opacity-50"
                >
                  {paying ? "Sending STK Push…" : `Pay ${fee !== null ? formatKES(fee) : ""} via M-Pesa`}
                </button>
              </>
            )}

            {/* Navigation buttons (steps 1–3) */}
            {step < 4 && (
              <div className="flex items-center gap-4 pt-4">
                {step > 1 && (
                  <button type="button" onClick={() => setStep(step - 1)} className="px-8 py-3 border border-border rounded-lg text-foreground font-medium hover:bg-muted transition-colors">
                    Back
                  </button>
                )}
                <button type="submit" className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:brightness-110 transition-all">
                  {step === 3 ? "Submit Application" : "Continue"}
                </button>
              </div>
            )}

            {step === 4 && (
              <button type="button" onClick={() => setStep(3)} className="w-full py-3 border border-border rounded-lg text-foreground font-medium hover:bg-muted transition-colors">
                ← Back to Loan Details
              </button>
            )}
          </form>

          <p className="text-xs text-muted-foreground mt-8 text-center">
            By applying, you agree to our{" "}
            <Link to="#" className="text-primary underline">Terms & Conditions</Link> and{" "}
            <Link to="#" className="text-primary underline">Privacy Policy</Link>.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Apply;
