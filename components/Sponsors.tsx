"use client"
import { motion } from 'framer-motion'
import Image from 'next/image'

const sponsors = [
  { name: "TechCorp", tier: "Platinum", logo: "/placeholder.svg?height=200&width=200" },
  { name: "InnovateNow", tier: "Gold", logo: "/placeholder.svg?height=200&width=200" },
  { name: "FutureSoft", tier: "Gold", logo: "/placeholder.svg?height=200&width=200" },
  { name: "CodeMasters", tier: "Silver", logo: "/placeholder.svg?height=200&width=200" },
  { name: "DataDynamics", tier: "Silver", logo: "/placeholder.svg?height=200&width=200" },
  { name: "CloudNine", tier: "Silver", logo: "/placeholder.svg?height=200&width=200" },
  { name: "AI Innovations", tier: "Bronze", logo: "/placeholder.svg?height=200&width=200" },
  { name: "Quantum Quest", tier: "Bronze", logo: "/placeholder.svg?height=200&width=200" },
  { name: "CyberShield", tier: "Bronze", logo: "/placeholder.svg?height=200&width=200" },
]

export default function Sponsors() {
  const tiers = ["Platinum", "Gold", "Silver", "Bronze"]

  return (
    <div className="py-16 bg-gradient-to-b from-purple-900 to-indigo-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-4">
          <span className="text-blue-400">Our</span> <span className="text-green-400">Sponsors</span>
        </h2>
        <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto">
          We're grateful to these stellar organizations for fueling our cosmic journey of innovation. Their support propels Morgan Hacks to new heights!
        </p>
        {tiers.map((tier) => (
          <div key={tier} className="mb-16">
            <h3 className="text-2xl font-semibold text-center text-yellow-300 mb-8">{tier} Sponsors</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sponsors
                .filter((sponsor) => sponsor.tier === tier)
                .map((sponsor, index) => (
                  <motion.div
                    key={sponsor.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white bg-opacity-10 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                  >
                    <div className="p-6 flex flex-col items-center">
                      <div className="relative w-40 h-40 mb-4">
                        <Image
                          src={sponsor.logo}
                          alt={`${sponsor.name} logo`}
                          layout="fill"
                          objectFit="contain"
                        />
                      </div>
                      <h4 className="text-xl font-semibold text-white mb-2">{sponsor.name}</h4>
                      <p className="text-sm text-blue-300">{tier} Sponsor</p>
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>
        ))}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-semibold text-white mb-4">Interested in Sponsoring?</h3>
          <p className="text-gray-300 mb-6">
            Join our mission to empower the next generation of innovators. Your support can make a universe of difference!
          </p>
          <a
            href="mailto:sponsors@morganhacks.com"
            className="inline-block px-6 py-3 rounded-full bg-green-500 text-white font-medium transition-all duration-300 hover:bg-green-600 hover:shadow-lg hover:shadow-green-500/50"
          >
            Become a Sponsor
          </a>
        </div>
      </div>
    </div>
  )
}