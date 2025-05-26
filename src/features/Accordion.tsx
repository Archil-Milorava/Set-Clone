import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is Setanta Sports?",
      answer:
        "Setanta Sports is OTT digital subscription service focused on giving die-hard sports fans access to diverse and exclusive sports content. Setanta Sports offers 24/7 on-demand access to a vast video collection and provides an enormous amount of live content, including live streams of the biggest sports tournaments.",
    },
    {
      question: "How do I purchase a subscription?",
      answer: "You can purchase it here",
    },
    {
      question: "What does my purchase include?",
      answer:
        "By purchasing a subscription, you gain access to the live streams and other exclusive content of the biggest sporting competitions in the world.",
    },
    {
      question: "How can I cancel my subscription?",
      answer:
        "Your Setanta Sports membership must be canceled through the same store or method it was purchased.\n\nIf you purchased through the web, please visit this link and look for the cancel button corresponding to your current membership plan under the Subscription tab. Suppose you cancel before your subscription period ends. In that case, you will still be able to watch all Setanta Sports content until your account automatically closes at the end of your current billing period.",
    },
  ];

  return (
    <div className="  p-8 bg-white rounded-xl lg:mx-[10rem] my-8">
      <h1 className="sm:text-6xl text-4xl font-bold mb-8 uppercase">
        Frequently Asked Questions
      </h1>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className=" pb-4 ">
            <button
              className="flex justify-between items-center w-full text-left font-semibold text-lg py-4 focus:outline-none"
              onClick={() => toggleAccordion(index)}
            >
              <span className="text-xl cursor-pointer">{faq.question}</span>
              {activeIndex === index ? (
                <FiMinus className="text-gray-600 text-xl " />
              ) : (
                <FiPlus className="text-gray-600 text-xl" />
              )}
            </button>

            <div
              className={`overflow-hidden transition-all duration-700 ease-in-out  ${
                activeIndex === index
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="pb-4 text-gray-600 whitespace-pre-line ">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
