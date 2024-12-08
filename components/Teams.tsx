import { motion } from 'framer-motion'
// import { Linkedin } from 'lucide-react'
import Image from 'next/image'

const teamMembers = [
  {
    name: "Mordecai Blue",
    role: "Lead Organizer",
    image: "/placeholder.svg?height=400&width=400",
    linkedin: "https://linkedin.com/in/mordecai-blue"
  },
  {
    name: "Rigby Raccoon",
    role: "Tech Lead",
    image: "/placeholder.svg?height=400&width=400",
    linkedin: "https://linkedin.com/in/rigby-raccoon"
  },
  {
    name: "Skips",
    role: "Mentorship Coordinator",
    image: "/placeholder.svg?height=400&width=400",
    linkedin: "https://linkedin.com/in/skips-yeti"
  },
  {
    name: "Pops Maellard",
    role: "Sponsorship Manager",
    image: "/placeholder.svg?height=400&width=400",
    linkedin: "https://linkedin.com/in/pops-maellard"
  },
  {
    name: "Benson Dunwoody",
    role: "Logistics Manager",
    image: "/placeholder.svg?height=400&width=400",
    linkedin: "https://linkedin.com/in/benson-dunwoody"
  },
  {
    name: "Muscle Man",
    role: "Social Media Coordinator",
    image: "/placeholder.svg?height=400&width=400",
    linkedin: "https://linkedin.com/in/muscle-man"
  }
]

export default function Teams() {
  return (
    <div className="py-16 bg-gradient-to-b from-purple-900 to-indigo-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="text-blue-400">Meet Our</span> <span className="text-green-400">Team</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white bg-opacity-10 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={100}
                  height={100}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white mb-1">{member.name}</h3>
                <p className="text-sm text-blue-300 mb-3">{member.role}</p>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors duration-300 text-sm"
                >
                  {/* <Linkedin className="w-4 h-4 mr-2" /> */}
                  <span>LinkedIn</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
