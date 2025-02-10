import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is the adoption process?",
      answer: "Our adoption process involves several steps: 1) Browse available animals, 2) Submit an adoption application, 3) Home visit and interview, 4) Meet the animal, 5) Complete adoption paperwork and pay adoption fee, 6) Take your new family member home!"
    },
    {
      question: "What are the adoption fees?",
      answer: "Adoption fees vary depending on the animal: Dogs: ₹2,000-4,000, Cats: ₹1,500-3,000. All adopted animals are vaccinated, spayed/neutered, and microchipped. The fee helps cover these medical expenses."
    },
    {
      question: "How can I volunteer?",
      answer: "You can volunteer by filling out our volunteer application form. We have various opportunities including animal care, transportation, event support, and social media management. All volunteers receive proper training."
    },
    {
      question: "What should I do if I find a stray animal?",
      answer: "If you find a stray animal: 1) Ensure your safety first, 2) Call our rescue helpline, 3) If possible, contain the animal safely, 4) Take photos and note the location, 5) Wait for our rescue team or follow their guidance."
    },
    {
      question: "Do you offer post-adoption support?",
      answer: "Yes! We provide ongoing support including behavioral advice, medical consultations, and training resources. We're committed to ensuring successful adoptions and are always here to help."
    },
    {
      question: "How are donations used?",
      answer: "Donations directly support our rescue operations, medical care, shelter maintenance, and animal rehabilitation programs. We maintain full transparency and publish quarterly reports on fund utilization."
    },
    {
      question: "Can I foster an animal?",
      answer: "Yes, we have a foster program! Fostering helps socialize animals and prepare them for permanent homes. We provide all necessary supplies and medical care for foster animals."
    },
    {
      question: "What areas do you serve?",
      answer: "We primarily operate in Mumbai and surrounding areas, but we can coordinate with partner organizations across India for adoptions and rescues in other cities."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-emerald-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <HelpCircle className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-4xl font-bold mb-6">Frequently Asked Questions</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Find answers to common questions about our adoption process, volunteering, 
            and how you can help make a difference.
          </p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between font-semibold"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span>{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-emerald-600" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-emerald-600" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-6 py-4 bg-gray-50">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Still Have Questions?</h2>
          <p className="text-gray-600 mb-8">
            We're here to help! Contact us directly and we'll get back to you as soon as possible.
          </p>
          <a 
            href="mailto:help@pawsofindia.org"
            className="inline-block bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition duration-300"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default FAQ;