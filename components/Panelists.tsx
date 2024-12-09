"use client";

import { motion } from 'framer-motion';
import CardComponent from './CardComponent';

const teamMembers = [
  {
    name: "Mordecai Blue",
    role: "Lead Engineer",
    image: "https://media.istockphoto.com/id/1164586449/photo/i-dont-know-portrait-of-young-confused-man-in-white-t-shirt-standing-and-shrugging-shoulders.jpg?s=612x612&w=0&k=20&c=LbPsVG5ZGGitd6Vn3xElKfSWr9PmXHR5J3Qv2TNaAm4=",
    linkedin: "https://linkedin.com/in/mordecai-blue",
    color: "bg-blue-500"
  },
  {
    name: "Mordecai Blue",
    role: "Professor",
    image: "https://media.istockphoto.com/id/1164586449/photo/i-dont-know-portrait-of-young-confused-man-in-white-t-shirt-standing-and-shrugging-shoulders.jpg?s=612x612&w=0&k=20&c=LbPsVG5ZGGitd6Vn3xElKfSWr9PmXHR5J3Qv2TNaAm4=",
    linkedin: "https://linkedin.com/in/mordecai-blue",
    color: "bg-blue-500"
  },
  {
    name: "Mordecai Blue",
    role: "Lead Engineer",
    image: "https://media.istockphoto.com/id/1164586449/photo/i-dont-know-portrait-of-young-confused-man-in-white-t-shirt-standing-and-shrugging-shoulders.jpg?s=612x612&w=0&k=20&c=LbPsVG5ZGGitd6Vn3xElKfSWr9PmXHR5J3Qv2TNaAm4=",
    linkedin: "https://linkedin.com/in/mordecai-blue",
    color: "bg-blue-500"
  },
  {
    name: "Mordecai Blue",
    role: "Tech enthusiast",
    image: "https://media.istockphoto.com/id/1164586449/photo/i-dont-know-portrait-of-young-confused-man-in-white-t-shirt-standing-and-shrugging-shoulders.jpg?s=612x612&w=0&k=20&c=LbPsVG5ZGGitd6Vn3xElKfSWr9PmXHR5J3Qv2TNaAm4=",
    linkedin: "https://linkedin.com/in/mordecai-blue",
    color: "bg-blue-500"
  }
];

export default function Panelists() {

    return (
        <div className="relative bg-[url('https://cdn.gamma.app/y5bpx9vs7tdbwam/generated-images/F6WXSczGpbx0L42fDypL_.png')] py-16 bg-cover bg-center">
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
                  key={member.name}
                  {...member}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      );
}


