import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    name: "Colo",
    date: "26.05.2023",
    text: "I run delivery services around Nairobi and managing fuel costs was tough. After discovering Mkopo Hub, I was able to access quick funds and keep my business running smoothly. The process was fast and reliable.",
  },
  {
    name: "Ruth",
    date: "24.04.2023",
    text: "I run a small shop and Mkopo Hub has really helped me manage my stock. Whenever I run low, I can quickly access funds or make payments instantly. It has made my business operations much easier.",
  },
  {
    name: "Susan",
    date: "27.03.2023",
    text: "I started a small kiosk but struggled at first. Mkopo Hub helped me access quick financial support and manage payments easily. It has been a game changer for my business.",
  },
  {
    name: "Mama Sam",
    date: "20.02.2023",
    text: "During tough economic times, I needed a reliable way to access money quickly. Mkopo Hub made it simple through M-Pesa STK push. I now use it whenever I need support for my business.",
  },
  {
    name: "Collins",
    date: "16.01.2023",
    text: "I started a tailoring business and needed capital to grow. Mkopo Hub helped me access funds quickly and securely. Now I can invest in my work and grow steadily.",
  },
];

const ReviewsSection = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? reviews.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === reviews.length - 1 ? 0 : c + 1));

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-12">
          What Our Users Say
        </h2>

        <div className="max-w-2xl mx-auto">
          <div className="bg-card border border-border rounded-xl p-8 shadow-sm min-h-[250px] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-secondary text-secondary-foreground font-bold flex items-center justify-center text-sm">
                  {reviews[current].name[0]}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">
                    {reviews[current].name}
                  </h4>
                  <span className="text-xs text-muted-foreground">
                    {reviews[current].date}
                  </span>
                </div>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {reviews[current].text}
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-accent transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>

            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    i === current ? "bg-primary" : "bg-border"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-accent transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;