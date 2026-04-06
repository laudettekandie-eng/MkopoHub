import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is Mkopo Hub?",
    answer:
      "Mkopo Hub is a digital financial platform that allows users to access instant mobile loans and make seamless payments via M-Pesa. It provides fast, secure, and convenient financial services directly from your phone.",
  },
  {
    question: "Is Mkopo Hub legit?",
    answer:
      "Yes, Mkopo Hub operates as a secure digital platform designed to facilitate loans and payments. We prioritize data protection, transparency, and reliable service for all users.",
  },
  {
    question: "How does Mkopo Hub work?",
    answer:
      "Mkopo Hub works through a simple online process. Enter your details, request a loan or payment, and confirm via M-Pesa STK push. Once approved, funds are disbursed instantly or payments are processed in real time.",
  },
  {
    question: "How do I request a loan or make a payment?",
    answer:
      "Simply enter your phone number and amount, then confirm the transaction via the M-Pesa prompt sent to your phone (STK push). The process takes only a few seconds.",
  },
  {
    question: "How long does it take to receive funds?",
    answer:
      "Transactions are processed instantly. Once you approve the M-Pesa prompt, funds are sent to your account or the payment is completed within seconds.",
  },
  {
    question: "Can my loan limit increase?",
    answer:
      "Yes, consistent usage and timely repayments improve your profile, allowing you to access higher limits over time.",
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
