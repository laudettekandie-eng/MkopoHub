import { DollarSign, Shield, Zap } from "lucide-react";

const advantages = [
  {
    icon: DollarSign,
    title: "Fast & Flexible",
    description: "Access loans instantly and make payments seamlessly from your phone",
    points: [
      "Apply anytime, anywhere via mobile",
      "Instant STK push payments with M-Pesa",
    ],
  },
  {
    icon: Shield,
    title: "Secure & Trusted",
    description: "Mkopo Hub ensures safe, encrypted and reliable financial transactions",
    points: [
      "Your data is protected with advanced security",
      "Trusted platform for loans and repayments",
    ],
  },
  {
    icon: Zap,
    title: "Simple & Convenient",
    description: "No paperwork, no queues — everything happens digitally in minutes",
    points: [
      "Quick approval and instant disbursement",
      "Easy loan management and repayment options",
    ],
  },
];

const AdvantagesSection = () => {
  return (
    <section id="advantages" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-12">
          Why Choose Mkopo Hub
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {advantages.map((adv) => (
            <div
              key={adv.title}
              className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                  <adv.icon className="w-5 h-5 text-secondary" />
                </div>
                <h3 className="text-lg font-semibold text-primary">
                  {adv.title}
                </h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                {adv.description}
              </p>
              <ul className="space-y-2">
                {adv.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
