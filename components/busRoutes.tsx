'use client'

import { motion } from 'framer-motion'
import { BusFront } from 'lucide-react'

const busRoutes = [
  {
    name: 'Route 1',
    path: ['Bowie State University', 'Morgan State University'],
    color: 'from-green-400 to-green-600',
  },
  {
    name: 'Route 2',
    path: ['Delaware State', 'Towson University', 'Johns Hopkins University', 'Morgan State University'],
    color: 'from-blue-400 to-blue-600',
  },
  {
    name: 'Route 3',
    path: ['University of Distric Columbia', 'Howard University', 'Morgan State University'],
    color: 'from-purple-400 to-purple-600',
  },
]

export default function BusRoutes() {
  return (
    <section className="py-16 bg-[#1f1f29] text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">🚌 Bus Routes</h2>
        <p className="text-center text-gray-300 mb-12">Need a ride? Check out the participating university pickup routes below.</p>

        <div className="space-y-10">
          {busRoutes.map((route, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="rounded-xl p-6 bg-gradient-to-br shadow-lg border border-white/10"
            >
              <div className={`bg-gradient-to-r ${route.color} p-3 rounded-md inline-flex items-center gap-2 mb-4`}>
                <BusFront className="w-5 h-5" />
                <span className="text-sm font-semibold uppercase tracking-wider">{route.name}</span>
              </div>

              <div className="flex flex-wrap gap-2 sm:gap-4 items-center">
                {route.path.map((stop, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="text-white text-sm sm:text-base">{stop}</span>
                    {i < route.path.length - 1 && (
                      <span className="text-gray-400">&rarr;</span>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
