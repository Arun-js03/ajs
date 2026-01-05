"use client";

import { Plus } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = Array.from({ length: 10 }).map((_, i) => ({
  id: i.toString(),
  question: "Lorem ipsum dolor sit amet consectetur amet consectetur",
  answer:
    "Lorem ipsum dolor sit amet consectetur. Sit id amet amet velit lorem neque tincidunt mi tortor. Vestibulum vestibulum. Sit id amet amet velit lorem neque tincidunt mi tortor.",
}));

export default function FaqSec() {
  return (
    <div className="bg-[#260205] py-6 mb-12 rounded-2xl">
      {/* Header */}
      <div className="text-center text-white space-y-2">
        <h3 className="italic font-bold text-2xl">FAQ</h3>
        <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
      </div>

      {/* Content */}
      <section className=" p-10">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2">
          {[0, 1].map((col) => (
            <Accordion key={col} className="space-y-6 border-0">
              {faqs
                .filter((_, i) => i % 2 === col)
                .map((item) => (
                  <AccordionItem
                    key={item.id}
                    value={item.id}
                    className="rounded-xl border bg-[linear-gradient(0deg,#190103,#190103)] border-red-800 bg-transparent! shadow-[inset_0_0_8px_rgba(255,0,0,0.35)]"
                  >
                    <AccordionTrigger className="px-6 py-5 text-left font-semibold text-white text-base! hover:no-underline **:data-[slot=accordion-trigger-icon]:hidden">
                      <span>{item.question}</span>

                      {/* Custom icons */}
                      <span className="ml-4">
                        <Plus className="h-5 w-5 shrink-0 transition-transform duration-200 group-aria-expanded/accordion-trigger:rotate-45" />
                      </span>
                    </AccordionTrigger>

                    <AccordionContent className="px-6 pb-6 text-sm leading-relaxed text-white">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
            </Accordion>
          ))}
        </div>
      </section>
    </div>
  );
}
