"use client";

import { motion } from 'framer-motion';
import CardComponent from './CardComponent';

const teamMembers = [
  // {
  //   name: "Heritage",
  //   role: "President",
  //   image: "https://media.istockphoto.com/id/1164586449/photo/i-dont-know-portrait-of-young-confused-man-in-white-t-shirt-standing-and-shrugging-shoulders.jpg?s=612x612&w=0&k=20&c=LbPsVG5ZGGitd6Vn3xElKfSWr9PmXHR5J3Qv2TNaAm4=",
  //   linkedin: "https://linkedin.com/in/muscle-man",
  //   color: "bg-green-500"
  // },
  {
    name: "Anay Zaveri",
    role: "Vice President and Lead of Sponsorships and Partnerships",
    image: "/team/anay.jpg",
    linkedin: "https://www.linkedin.com/in/anay-zaveri-b5ab941b3e",
    color: "bg-blue-500"
  },
  {
    name: "Iyinoluwa Grace Ayodele",
    role: "Operations Team",
    image: "/team/grace.jpg",
    linkedin: "http://www.linkedin.com/in/iyinoluwa-ayodele",
    color: "bg-blue-500"
  },
  {
    name: "Sanae",
    role: "Operations Team",
    image: "/team/sanae.jpg",
    linkedin: "https://www.linkedin.com/in/mordecai-blue",
    color: "bg-blue-500"
  },
  // {
  //   name: "Chelsea",
  //   role: "Media Team",
  //   image: "/team/chelsea.webp",
  //   linkedin: "https://linkedin.com/in/mordecai-blue",
  //   color: "bg-blue-500"
  // },
  {
    name: "Obaloluwa Wojuade ",
    role: "Media Team",
    image: "/team/oba.jpg",
    linkedin: "https://www.linkedin.com/in/obwoj/",
    color: "bg-blue-500"
  },
  {
    name: "Tobi",
    role: "Technology Team",
    image: "/team/tobi.jpg",
    linkedin: "https://www.linkedin.com/in/oluwatobi-olajide",
    color: "bg-blue-500"
  },
//   {
//   name: "Teddy",
//   role: "Technology Team",
//   image: "https://media.istockphoto.com/id/1164586449/photo/i-dont-know-portrait-of-young-confused-man-in-white-t-shirt-standing-and-shrugging-shoulders.jpg?s=612x612&w=0&k=20&c=LbPsVG5ZGGitd6Vn3xElKfSWr9PmXHR5J3Qv2TNaAm4=",
//   linkedin: "https://linkedin.com/in/pops-maellard",
//   color: "bg-pink-200"
// },
  // {
  //   name: "Chelsea Minard",
  //   role: "Media + Marketing Lead",
  //   image: "https://media.istockphoto.com/id/1164586449/photo/i-dont-know-portrait-of-young-confused-man-in-white-t-shirt-standing-and-shrugging-shoulders.jpg?s=612x612&w=0&k=20&c=LbPsVG5ZGGitd6Vn3xElKfSWr9PmXHR5J3Qv2TNaAm4=",
  //   linkedin: "https://www.linkedin.com/in/chelsea-minard",
  //   color: "bg-blue-500"
  // },
  {
    name: "Adefikayo",
    role: "Logistics Manager",
    image: "/team/fikayo.jpg",
    linkedin: "https://linkedin.com/in/benson-dunwoody",
    color: "bg-red-500"
  },
  {
    name: "Olwasegun Soji-John",
    role: "Registration Team",
    image: "/team/segun.jpg",
    linkedin: "https://www.linkedin.com/in/oluwasegun-soji-john/",
    color: "bg-brown-500"
  },
  // {
  //   name: "Stephanie",
  //   role: "Registration Team",
  //   image: "https://media.istockphoto.com/id/1164586449/photo/i-dont-know-portrait-of-young-confused-man-in-white-t-shirt-standing-and-shrugging-shoulders.jpg?s=612x612&w=0&k=20&c=LbPsVG5ZGGitd6Vn3xElKfSWr9PmXHR5J3Qv2TNaAm4=",
  //   linkedin: "https://linkedin.com/in/skips-yeti",
  //   color: "bg-gray-200"
  // },
  {
    name: "Ayomide Ajibola",
    role: "Finance Team",
    image: "/team/ayo.jpg",
    linkedin: "https://www.linkedin.com/in/ayomide-ajibola-",
    color: "bg-pink-200"
  },
  // {
  //   name: "Jomiloju",
  //   role: "Sponsorship Team",
  //   image: "https://media.istockphoto.com/id/1164586449/photo/i-dont-know-portrait-of-young-confused-man-in-white-t-shirt-standing-and-shrugging-shoulders.jpg?s=612x612&w=0&k=20&c=LbPsVG5ZGGitd6Vn3xElKfSWr9PmXHR5J3Qv2TNaAm4=",
  //   linkedin: "https://www.linkedin.com/in/oluwajomiloju-king/",
  //   color: "bg-gray-200"
  // },
];

export default function TeamComponent() {

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 via-purple-900 to-blue-900 py-10 mb-14" >
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