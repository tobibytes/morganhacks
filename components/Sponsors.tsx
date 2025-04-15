"use client";

import { motion } from 'framer-motion';
import CardComponent from './CardComponent';

const sponsors = [
  {
    name: "Capital One",
    role: "",
    image: "/sponsors/capitalone.jpg",
    linkedin: "https://linkedin.com/in/mordecai-blue",
    color: "bg-blue-500"
  },
  {
    name: "Goldman Sachs",
    role: "",
    image: "/sponsors/goldmansachs.jpg",
    linkedin: "https://linkedin.com/in/mordecai-blue",
    color: "bg-blue-500"
  },
  {
    name: "Microsoft",
    role: "",
    image: "/sponsors/microsoft.png",
    linkedin: "https://linkedin.com/in/mordecai-blue",
    color: "bg-blue-500"
  },
  {
    name: "M & T Bank",
    role: "Tech enthusiast",
    image: "/sponsors/mtb.png",
    linkedin: "https://linkedin.com/in/mordecai-blue",
    color: "bg-blue-500"
  },
  {
    name: "Northrop Grumman",
    role: "",
    image: "/sponsors/northopgrumman.png",
    linkedin: "https://linkedin.com/in/mordecai-blue",
    color: "bg-blue-500"
  },
  {
    name: "Wells Fargo",
    role: "",
    image: "/sponsors/wellsfargo.png",
    linkedin: "https://linkedin.com/in/mordecai-blue",
    color: "bg-blue-500"
  },
];

export default function Sponsors() {

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
              <span className="text-green-400">Sponsors</span>
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {sponsors.map((sponsor, index) => (
                <CardComponent
                  key={index}
                  {...sponsor}
                  index={index}
                  type='sponsors'
                />
              ))}
            </div>
          </div>
        </div>
      );
}


