const steps = [
  {
    number: "1",
    title: "Enter your details",
    description: "Provide your phone number and the amount you want to send or request",
  },
  {
    number: "2",
    title: "Confirm via M-Pesa",
    description: "Receive an STK push prompt on your phone and enter your M-Pesa PIN",
  },
  {
    number: "3",
    title: "Complete instantly",
    description: "Your transaction is processed immediately — funds sent or payment completed",
  },
];

const HowToBorrowSection = () => {
  return (
    <section id="steps" className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-12">
          How It Works
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="w-14 h-14 rounded-full bg-secondary text-secondary-foreground font-bold text-xl flex items-center justify-center mx-auto mb-4">
                {step.number}
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-block px-10 py-4 bg-secondary text-secondary-foreground font-semibold rounded-lg text-base hover:brightness-110 transition-all shadow-lg"
          >
            Start Transaction
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowToBorrowSection;
