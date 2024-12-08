'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Cpu, Globe, Leaf, Zap, Star } from "lucide-react"

export default function Tracks() {
  const [hoveredTrack, setHoveredTrack] = useState<number | null>(null)

  const tracks = [
    {
      title: "Robotics",
      description: "Create innovative solutions combining software and hardware.",
      icon: <Cpu className="w-8 h-8 text-green-400" />,
      difficulty: "Advanced",
      color: "bg-green-800",
    },
    {
      title: "Education",
      description: "Develop projects addressing environmental and social challenges.",
      icon: <Leaf className="w-8 h-8 text-yellow-400" />,
      difficulty: "Beginner",
      color: "bg-yellow-800",
    },
    {
      title: "Entertainment",
      description: "Unleash your creativity with no restrictions. Surprise us!",
      icon: <Zap className="w-8 h-8 text-red-400" />,
      difficulty: "All Levels",
      color: "bg-red-800",
    },
    {
      title: "Health",
      description: "Unleash your creativity with no restrictions. Surprise us!",
      icon: <Globe className="w-8 h-8 text-gray-400" />,
      difficulty: "All Levels",
      color: "bg-gray-800",
    },
    {
      title: "Sustainability",
      description: "Unleash your creativity with no restrictions. Surprise us!",
      icon: <Brain className="w-8 h-8 text-purple-400" />,
      difficulty: "All Levels",
      color: "bg-purple-800",
    },
    {
      title: "New Frontiers",
      description: "Unleash your creativity with no restrictions. Surprise us!",
      icon: <Star className="w-8 h-8 text-blue-400" />,
      difficulty: "All Levels",
      color: "bg-blue-800",
    },
  ]

  return (
    <div className="py-16 relative overflow-hidden">
      {/* Space-like background */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [1, 0.5, 1],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2 
          className="text-4xl font-extrabold text-center text-white mb-8"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Hackathon Tracks
        </motion.h2>
        <motion.p 
          className="text-xl text-center text-blue-200 mb-12"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Choose your challenge and make a difference!
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tracks.map((track, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onHoverStart={() => setHoveredTrack(index)}
              onHoverEnd={() => setHoveredTrack(null)}
            >
              <Card className={`${track.color} border-none shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden`}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <motion.div
                      animate={{
                        rotate: hoveredTrack === index ? 360 : 0,
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      {track.icon}
                    </motion.div>
                    <Badge variant="secondary" className="text-xs">
                      {track.difficulty}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-bold mt-4 text-white">{track.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm text-gray-200">{track.description}</CardDescription>
                </CardContent>
                {/* Animated stars */}
                {hoveredTrack === index && (
                  <>
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        style={{
                          top: `${Math.random() * 100}%`,
                          left: `${Math.random() * 100}%`,
                        }}
                      >
                        <Star className="w-4 h-4 text-yellow-300" />
                      </motion.div>
                    ))}
                  </>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}