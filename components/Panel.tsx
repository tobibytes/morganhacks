"use client"
import { motion } from 'framer-motion'
import { Linkedin, Github, Twitter } from 'lucide-react'
import Image from 'next/image'

const panelMembers = [
  {
    name: "Dr. Skips",
    role: "AI Research Scientist",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Expert in machine learning and quantum computing",
    linkedin: "https://linkedin.com/in/dr-skips",
    github: "https://github.com/dr-skips",
    twitter: "https://twitter.com/dr_skips"
  },
  {
    name: "Mordecai Blue",
    role: "Senior Software Engineer",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Full-stack developer with a passion for scalable architectures",
    linkedin: "https://linkedin.com/in/mordecai-blue",
    github: "https://github.com/mordecai-blue",
    twitter: "https://twitter.com/mordecai_blue"
  },
  {
    name: "Rigby Raccoon",
    role: "Blockchain Specialist",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Pioneering decentralized solutions for next-gen applications",
    linkedin: "https://linkedin.com/in/rigby-raccoon",
    github: "https://github.com/rigby-raccoon",
    twitter: "https://twitter.com/rigby_raccoon"
  },
  {
    name: "Pops Maellard",
    role: "UX/UI Design Guru",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Creating delightful user experiences for over two decades",
    linkedin: "https://linkedin.com/in/pops-maellard",
    github: "https://github.com/pops-maellard",
    twitter: "https://twitter.com/pops_maellard"
  },
  {
    name: "Benson Dunwoody",
    role: "Cybersecurity Expert",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Keeping systems safe and secure in an ever-evolving threat landscape",
    linkedin: "https://linkedin.com/in/benson-dunwoody",
    github: "https://github.com/benson-dunwoody",
    twitter: "https://twitter.com/benson_dunwoody"
  },
  {
    name: "Muscle Man",
    role: "Growth Hacking Specialist",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Turning innovative ideas into market-disrupting realities",
    linkedin: "https://linkedin.com/in/muscle-man",
    github: "https://github.com/muscle-man",
    twitter: "https://twitter.com/muscle_man"
  }
]

export default function Panel() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-4">
          <span className="text-blue-400">Expert</span> <span className="text-green-400">Panels</span>
        </h2>
        <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto">
          Meet our constellation of brilliant minds! Our panel of experts brings a universe of knowledge and experience to Morgan Hacks. They're here to guide, inspire, and launch your ideas into the stratosphere of innovation!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {panelMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white bg-opacity-10 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="relative w-full pt-[100%]">
                <Image
                  src={member.image}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white mb-1">{member.name}</h3>
                <p className="text-sm text-blue-300 mb-2">{member.role}</p>
                <p className="text-xs text-gray-300 mb-3">{member.bio}</p>
                <div className="flex space-x-3">
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition-colors duration-300">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-300 transition-colors duration-300">
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}