"use client";

import { motion } from 'framer-motion';
import CardComponent from './CardComponent';

const teamMembers = [
  {
    name: "Markus Proctor",
    role: "Panelists",
    image: "/panelists/markus.jpeg",
    // linkedin: "https://linkedin.com/in/mordecai-blue",
    color: "bg-blue-500"
  },
  {
    name: "Obinna Okudo",
    role: "Panelists",
    image: "/panelists/obinna.jpg",
    // linkedin: "https://linkedin.com/in/mordecai-blue",
    color: "bg-blue-500"
  },
  {
    name: "Christian Martins",
    role: "Panelists",
    image: "/panelists/christain.jpeg",
    // linkedin: "https://linkedin.com/in/mordecai-blue",
    color: "bg-blue-500"
  },
  {
    name: "Jeffrey Scruggs",
    role: "Panelists",
    image: "/panelists/jeff.jpg",
    // linkedin: "https://linkedin.com/in/mordecai-blue",
    color: "bg-blue-500"
  },
  {
    name: "Marcus Winkfield",
    role: "Panelists",
    image: "/panelists/marcus.PNG",
    // linkedin: "https://linkedin.com/in/mordecai-blue",
    color: "bg-blue-500"
  }
];

export default function Panelists() {

    return (
        <div className="relative bg-[url('https://cdn.gamma.app/y5bpx9vs7tdbwam/generated-images/F6WXSczGpbx0L42fDypL_.png')] py-16 mb-14 bg-cover bg-center">
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black opacity-70"></div>
          
          {/* Content Container */}
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2 
              className="text-6xl font-bold text-center mb-16"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-blue-400">Meet Our</span>{" "}
              <span className="text-green-400">Panelists</span>
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
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


