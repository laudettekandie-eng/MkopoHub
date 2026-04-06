const steps = [
  {
    number: "1",
    title: "Leave a request on app",
    description: "You can leave a request by filling out the form",
  },
  {
    number: "2",
    title: "Wait for the decision",
    description: "The decision is made in just 15 minutes",
  },
  {
    number: "3",
    title: "Receive money",
    description: "The transaction usually takes just 1 minute",
  },
];

const HowToBorrowSection = () => {
  return (
    <section id="steps" className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-12">
          How to borrow money
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="w-14 h-14 rounded-full bg-secondary text-secondary-foreground font-bold text-xl flex items-center justify-center mx-auto mb-4">
                {step.number}
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-block px-10 py-4 bg-secondary text-secondary-foreground font-semibold rounded-lg text-base hover:brightness-110 transition-all shadow-lg"
          >
            Download app & Apply for a loan
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowToBorrowSection;
