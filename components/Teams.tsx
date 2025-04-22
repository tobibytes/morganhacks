"use client";

import { motion } from 'framer-motion';
import CardComponent from './CardComponent';

const teamMembers = [
  {
    name: "Heritage",
    role: "President",
    image: "/team/heritage.jpg",
    linkedin: "https://www.linkedin.com/in/godsheritage/",
    color: "bg-green-500"
  },
  {
    name: "Anay Zaveri",
    role: "Vice President and Lead of Sponsorships and Partnerships",
    image: "/team/anay.jpg",
    linkedin: "https://www.linkedin.com/in/anay-zaveri-b5ab941b3/",
    color: "bg-blue-500"
  },
  {
    name: "Iyinoluwa Ayodele",
    role: "Operations Team",
    image: "/team/grace.jpg",
    linkedin: "http://www.linkedin.com/in/iyinoluwa-ayodele",
    color: "bg-blue-500"
  },
  {
    name: "Sanae Freeman",
    role: "Operations Team",
    image: "/team/sanae.jpg",
    linkedin: "https://www.linkedin.com/in/sanae-freeman-98323419a/",
    color: "bg-blue-500"
  },
  {
    name: "Obaloluwa Wojuade ",
    role: "Media Team",
    image: "/team/oba.jpg",
    linkedin: "https://www.linkedin.com/in/obwoj/",
    color: "bg-blue-500"
  },
  {
    name: "Oluwatobi Olajide",
    role: "Technology Team",
    image: "/team/tobi.jpg",
    linkedin: "https://www.linkedin.com/in/oluwatobi-olajide",
    color: "bg-blue-500"
  },
  {
    name: "Chelsea Minard",
    role: "Media + Marketing Lead",
    image: "/team/chelsea.jpg",
    linkedin: "https://www.linkedin.com/in/chelsea-minard",
    color: "bg-blue-500"
  },
  {
    name: "Adefikayo Dipe",
    role: "Logistics Manager",
    image: "/team/fikayo.jpg",
    linkedin: "https://www.linkedin.com/in/adefikayodipe/",
    color: "bg-red-500"
  },
  {
    name: "Oluwasegun Soji-John",
    role: "Registration Team",
    image: "/team/segun.jpg",
    linkedin: "https://www.linkedin.com/in/oluwasegun-soji-john/",
    color: "bg-brown-500"
  },
  {
    name: "Stephanie Adeoye",
    role: "Registration Team",
    image: "/team/stephanie.jpg",
    linkedin: "https://www.linkedin.com/in/stephanie-adeoye-2a3b70291",
    color: "bg-gray-200"
  },
  {
    name: "Ayomide Ajibola",
    role: "Finance Team",
    image: "/team/ayo.jpg",
    linkedin: "https://www.linkedin.com/in/ayomide-ajibola-",
    color: "bg-pink-200"
  },
  {
    name: "Jomiloju King",
    role: "Sponsorship Team",
    image: "/team/jk.jpg",
    linkedin: "https://www.linkedin.com/in/oluwajomiloju-king/",
    color: "bg-gray-200"
  },
];

export default function TeamComponent() {

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 via-purple-900 to-blue-900 py-10 px-4 sm:px-6 lg:px-8 mb-14">
    <div className="max-w-7xl mx-auto">
      <motion.h2 
        className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-12 sm:mb-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-blue-400">Meet Our</span>{" "}
        <span className="text-green-400">Team</span>
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
        {teamMembers.map((member, index) => (
          <CardComponent
            key={index}
            {...member}
            index={index}
          />
        ))}
      </div>
    </div>
  </div>
  );
}