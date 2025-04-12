'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: "What is Morgan Hacks?",
    answer: "Morgan Hacks is a 24-hour hackathon where regular coders become extraordinary hackers! It's an opportunity to collaborate, learn, and build innovative projects in a fun, space-themed environment."
  },
  {
    question: "Who can participate?",
    answer: "Morgan Hacks is open to all students, regardless of their major or experience level. Whether you're a coding newbie or a seasoned developer, you're welcome to join!"
  },
  {
    question: "Do I need a team?",
    answer: "You can participate in a team of 2-4 members. Don't have a team? No worries! We'll have team formation activities at the beginning of the event."
  },
  {
    question: "What should I bring?",
    answer: "Bring your laptop, charger, any hardware you want to work with, and your creativity! Don't forget a sleeping bag and toiletries if you plan to stay overnight."
  },
  {
    question: "Is there a cost to participate?",
    answer: "Nope! Morgan Hacks is completely free to attend. We'll provide meals, snacks, and plenty of caffeine to fuel your coding adventure."
  },
  {
    question: "What kind of projects can I build?",
    answer: "The sky's not the limit - space is! You can build anything from web and mobile apps to hardware hacks, AI projects, and more. Check out our tracks for inspiration!"
  },
  {
    question: "Will there be prizes?",
    answer: "We have awesome prizes for the top projects in each track, as well as special category awards. May the best hackers win!"
  },
  {
    question: "Is there a code of conduct?",
    answer: "Yes, we follow the MLH code of coduct. You can find it at https://mlh.link/CodeOfConduct"
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="min-h-screen py-16 text-white bg-[#454351] px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          <span className="text-blue-400">Frequently</span>{" "}
          <span className="text-green-400">Asked Questions</span>
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-white bg-opacity-10 rounded-lg overflow-hidden"
            >
              <button
                className="w-full px-4 sm:px-6 py-4 text-left focus:outline-none flex justify-between items-center"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-base sm:text-lg font-medium">{faq.question}</span>
                <motion.span
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-blue-400" />
                </motion.span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-4 sm:px-6 pb-4 text-gray-300 text-sm sm:text-base leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center px-4">
          <p className="text-base sm:text-lg text-gray-300 mb-4">Still have questions?</p>
          <a
  href="mailto:morganhacks2022@gmail.com?subject=Learn%20More%20About%20MorganHacks&body=Hello%20there%20i%20would%20love%20to%20learn%20more%20about%20morganhacks."
  target="_blank"
  className="inline-block max-w-full px-6 py-3 rounded-full text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 text-center break-words"
>
  Contact Us:&nbsp;
  <span className="text-[#87CEEB]">Morgan</span>
  <span className="text-[#90EE90]">Hacks</span>
  <span className="text-white">2022</span>
  <span className="text-white">@gmail.com</span>
</a>

        </div>
      </div>
    </div>
  )
}
