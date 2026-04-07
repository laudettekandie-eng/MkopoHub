const qualifications = [
  { label: "Transaction Amount", value: "1,000 KES to 150,000 KES" },
  { label: "Processing Time", value: "Instant to a few minutes" },
  { label: "Eligibility", value: "18+ years with a valid Kenyan mobile number" },
  { label: "Requirements", value: "National ID and active M-Pesa account" },
  { label: "Access", value: "Available anywhere within Kenya" },
  { label: "Usage", value: "Loan requests, repayments, and direct payments via STK push" },
];

const QualificationsSection = () => {
  return (
    <section id="info" className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-12">
          Mkopo Hub Requirements & Limits
        </h2>

        <div className="max-w-3xl mx-auto bg-card border border-border rounded-xl overflow-hidden shadow-sm">
          {qualifications.map((q, i) => (
            <div
              key={q.label}
              className={`flex flex-col sm:flex-row ${
                i !== qualifications.length - 1
                  ? "border-b border-border"
                  : ""
              }`}
            >
              <div className="sm:w-1/3 px-6 py-4 bg-accent font-medium text-sm text-foreground">
                {q.label}
              </div>
              <div className="sm:w-2/3 px-6 py-4 text-sm text-muted-foreground">
                {q.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QualificationsSection;