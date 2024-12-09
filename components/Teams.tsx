"use client";

import { motion } from 'framer-motion';
import CardComponent from './CardComponent';

const teamMembers = [
  {
    name: "Mordecai Blue",
    role: "Lead Organizer",
    image: "https://media.istockphoto.com/id/1164586449/photo/i-dont-know-portrait-of-young-confused-man-in-white-t-shirt-standing-and-shrugging-shoulders.jpg?s=612x612&w=0&k=20&c=LbPsVG5ZGGitd6Vn3xElKfSWr9PmXHR5J3Qv2TNaAm4=",
    linkedin: "https://linkedin.com/in/mordecai-blue",
    color: "bg-blue-500"
  },
  {
    name: "Mordecai Blue",
    role: "Lead Organizer",
    image: "https://media.istockphoto.com/id/1164586449/photo/i-dont-know-portrait-of-young-confused-man-in-white-t-shirt-standing-and-shrugging-shoulders.jpg?s=612x612&w=0&k=20&c=LbPsVG5ZGGitd6Vn3xElKfSWr9PmXHR5J3Qv2TNaAm4=",
    linkedin: "https://linkedin.com/in/mordecai-blue",
    color: "bg-blue-500"
  },
  {
    name: "Mordecai Blue",
    role: "Lead Organizer",
    image: "https://media.istockphoto.com/id/1164586449/photo/i-dont-know-portrait-of-young-confused-man-in-white-t-shirt-standing-and-shrugging-shoulders.jpg?s=612x612&w=0&k=20&c=LbPsVG5ZGGitd6Vn3xElKfSWr9PmXHR5J3Qv2TNaAm4=",
    linkedin: "https://linkedin.com/in/mordecai-blue",
    color: "bg-blue-500"
  },
  {
    name: "Mordecai Blue",
    role: "Lead Organizer",
    image: "https://media.istockphoto.com/id/1164586449/photo/i-dont-know-portrait-of-young-confused-man-in-white-t-shirt-standing-and-shrugging-shoulders.jpg?s=612x612&w=0&k=20&c=LbPsVG5ZGGitd6Vn3xElKfSWr9PmXHR5J3Qv2TNaAm4=",
    linkedin: "https://linkedin.com/in/mordecai-blue",
    color: "bg-blue-500"
  },
  {
    name: "Mordecai Blue",
    role: "Lead Organizer",
    image: "https://media.istockphoto.com/id/1164586449/photo/i-dont-know-portrait-of-young-confused-man-in-white-t-shirt-standing-and-shrugging-shoulders.jpg?s=612x612&w=0&k=20&c=LbPsVG5ZGGitd6Vn3xElKfSWr9PmXHR5J3Qv2TNaAm4=",
    linkedin: "https://linkedin.com/in/mordecai-blue",
    color: "bg-blue-500"
  },
  {
    name: "Mordecai Blue",
    role: "Lead Organizer",
    image: "https://media.istockphoto.com/id/1164586449/photo/i-dont-know-portrait-of-young-confused-man-in-white-t-shirt-standing-and-shrugging-shoulders.jpg?s=612x612&w=0&k=20&c=LbPsVG5ZGGitd6Vn3xElKfSWr9PmXHR5J3Qv2TNaAm4=",
    linkedin: "https://linkedin.com/in/mordecai-blue",
    color: "bg-blue-500"
  },
  {
    name: "Mordecai Blue",
    role: "Lead Organizer",
    image: "https://media.istockphoto.com/id/1164586449/photo/i-dont-know-portrait-of-young-confused-man-in-white-t-shirt-standing-and-shrugging-shoulders.jpg?s=612x612&w=0&k=20&c=LbPsVG5ZGGitd6Vn3xElKfSWr9PmXHR5J3Qv2TNaAm4=",
    linkedin: "https://linkedin.com/in/mordecai-blue",
    color: "bg-blue-500"
  },
  {
    name: "Rigby Raccoon",
    role: "Tech Lead",
    image: "https://media.istockphoto.com/id/1164586449/photo/i-dont-know-portrait-of-young-confused-man-in-white-t-shirt-standing-and-shrugging-shoulders.jpg?s=612x612&w=0&k=20&c=LbPsVG5ZGGitd6Vn3xElKfSWr9PmXHR5J3Qv2TNaAm4=",
    linkedin: "https://linkedin.com/in/rigby-raccoon",
    color: "bg-brown-500"
  },
  {
    name: "Skips",
    role: "Mentorship Coordinator",
    image: "https://media.istockphoto.com/id/1164586449/photo/i-dont-know-portrait-of-young-confused-man-in-white-t-shirt-standing-and-shrugging-shoulders.jpg?s=612x612&w=0&k=20&c=LbPsVG5ZGGitd6Vn3xElKfSWr9PmXHR5J3Qv2TNaAm4=",
    linkedin: "https://linkedin.com/in/skips-yeti",
    color: "bg-gray-200"
  },
  {
    name: "Pops Maellard",
    role: "Sponsorship Manager",
    image: "https://media.istockphoto.com/id/1164586449/photo/i-dont-know-portrait-of-young-confused-man-in-white-t-shirt-standing-and-shrugging-shoulders.jpg?s=612x612&w=0&k=20&c=LbPsVG5ZGGitd6Vn3xElKfSWr9PmXHR5J3Qv2TNaAm4=",
    linkedin: "https://linkedin.com/in/pops-maellard",
    color: "bg-pink-200"
  },
  {
    name: "Benson Dunwoody",
    role: "Logistics Manager",
    image: "https://media.istockphoto.com/id/1164586449/photo/i-dont-know-portrait-of-young-confused-man-in-white-t-shirt-standing-and-shrugging-shoulders.jpg?s=612x612&w=0&k=20&c=LbPsVG5ZGGitd6Vn3xElKfSWr9PmXHR5J3Qv2TNaAm4=",
    linkedin: "https://linkedin.com/in/benson-dunwoody",
    color: "bg-red-500"
  },
  {
    name: "Muscle Man",
    role: "Social Media Coordinator",
    image: "https://media.istockphoto.com/id/1164586449/photo/i-dont-know-portrait-of-young-confused-man-in-white-t-shirt-standing-and-shrugging-shoulders.jpg?s=612x612&w=0&k=20&c=LbPsVG5ZGGitd6Vn3xElKfSWr9PmXHR5J3Qv2TNaAm4=",
    linkedin: "https://linkedin.com/in/muscle-man",
    color: "bg-green-500"
  }
];

export default function TeamComponent() {

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 via-purple-900 to-blue-900 py-16" >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-6xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-blue-400">Meet Our</span>{" "}
          <span className="text-green-400">Team</span>
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


