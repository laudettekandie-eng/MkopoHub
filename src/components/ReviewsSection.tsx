import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    name: "Colo",
    date: "26.05.2023",
    text: "I do delivery services around Nairobi. I started with delivering small stuff and it wasn't easy for me due to high cost of fuel. But there comes a time as I was scrolling the internet, I got to know about an online lending application called LendPlus. Within a few minutes of applying, I received the amount I needed to salvage my business.",
  },
  {
    name: "Ruth",
    date: "24.04.2023",
    text: "I started by general shop in 2019. When I did, I had few challenges but since I joined LendPlus my life has changed and I'm able to manage my business better. I use my loans to buy new stock when I have a shortage, I'm now at the loan limit of 30000 and my business is growing 3 times now.",
  },
  {
    name: "Susan",
    date: "27.03.2023",
    text: "I come from a large family. It pushed me to want to be independent and be able to provide for myself. I opened a small kiosk, but it was on the brink of failure. One day I came across an online lending app LendPlus and decided to ask them for help and they saved my business!",
  },
  {
    name: "Mama Sam",
    date: "20.02.2023",
    text: "Harsh economic times led me to look for a business opportunity. A friend of mine recommended me to use LendPlus app. After applying they approved and helped me start my banana business. Ever since I have been using LendPlus app whenever I am low on cash!",
  },
  {
    name: "Collins",
    date: "16.01.2023",
    text: "I dropped out of school and then I started a business. I discovered later that tailoring was my calling. I joined LendPlus and took a loan to grow my business. With the help of LendPlus I bought a secondhand heavy duty leather sewing machine! I am now stitching my way to success!",
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
          Customer reviews
        </h2>
        <div className="max-w-2xl mx-auto">
          <div className="bg-card border border-border rounded-xl p-8 shadow-sm min-h-[250px] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-secondary text-secondary-foreground font-bold flex items-center justify-center text-sm">
                  {reviews[current].name[0]}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{reviews[current].name}</h4>
                  <span className="text-xs text-muted-foreground">{reviews[current].date}</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{reviews[current].text}</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4 mt-6">
            <button onClick={prev} className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-accent transition-colors">
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${i === current ? "bg-primary" : "bg-border"}`}
                />
              ))}
            </div>
            <button onClick={next} className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-accent transition-colors">
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
