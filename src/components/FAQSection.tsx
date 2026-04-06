import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is an online loan?",
    answer:
      "An online loan is a type of credit that you can apply for and receive over the internet. It offers quick access to funds for short-term financial needs. Our loans range from 1000 to 150,000 KES.",
  },
  {
    question: "Is LendPlus loan app legit?",
    answer:
      "Yes, the LendPlus loan app is legitimate. It's a registered financial service provider in Kenya offering online lending services to eligible borrowers. The company adheres to the regulations set by the relevant authorities.",
  },
  {
    question: "How does LendPlus work?",
    answer:
      "LendPlus works through an easy-to-use mobile app. Download the app, register and fill out a simple form with your personal details and financial information. Once approved, the loan amount is deposited directly into your M-Pesa account.",
  },
  {
    question: "How to apply for a quick M-Pesa loan?",
    answer:
      "Get approved within minutes by completing a straightforward application and verification process. The asked amount will be directly deposited into your M-Pesa for easy access.",
  },
  {
    question: "How to get the maximum loan limit of 150,000 KES?",
    answer:
      "The more consistently you repay your M-Pesa loans on time, the higher your credit limit grows. By being a responsible borrower, you can quickly move from small starter loans to the full KES 150,000.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border border-border rounded-lg px-6 bg-card"
              >
                <AccordionTrigger className="text-sm font-semibold text-foreground hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
