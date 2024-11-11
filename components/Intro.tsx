'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Coffee, Code, Users } from 'lucide-react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'

export default function HackathonIntro() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const hackathonDate = new Date('2025-04-15T09:00:00') // Set your actual date here
      const now = new Date()
      const difference = hackathonDate.getTime() - now.getTime()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])
if (timeLeft === null) {
  return <div>Loading...</div>
}
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  }

  return (
    <div className="relative min-h-screen w-full bg-cover bg-center py-12 text-white">
      <div className="absolute inset-0 bg-opacity-70"></div>
      <motion.div
        className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="text-center">
          <motion.div variants={itemVariants} className="mb-4 text-5xl font-extrabold tracking-tight text-blue-400 sm:text-6xl">
            <TypeAnimation
              sequence={[
                'Morgan Hacks 2025',
              ]}
              wrapper="h1"
              speed={50}
              cursor={false}
            />
          </motion.div>
          <motion.div variants={itemVariants} className="mb-8 text-2xl font-medium text-green-300">
            <TypeAnimation
              sequence={[
                'Where Regular Coders Become Extraordinary Hackers!',
              ]}
              wrapper="p"
              speed={50}
              cursor={false}
            />
          </motion.div>
          <motion.div 
            className="mb-8 flex justify-center space-x-4"
            variants={itemVariants}
          >
            <Card className="bg-opacity-80 backdrop-blur-sm">
              <CardContent className="flex items-center p-4">
                <Coffee className="mr-2 h-6 w-6 text-yellow-400" />
                <span className="text-lg font-semibold">24 Hours</span>
              </CardContent>
            </Card>
            <Card className="bg-opacity-80 backdrop-blur-sm">
              <CardContent className="flex items-center p-4">
                <Users className="mr-2 h-6 w-6 text-pink-400" />
                <span className="text-lg font-semibold">300+ Hackers</span>
              </CardContent>
            </Card>
            <Card className="bg-opacity-80 backdrop-blur-sm">
              <CardContent className="flex items-center p-4">
                <Code className="mr-2 h-6 w-6 text-green-400" />
                <span className="text-lg font-semibold">10+ Challenges</span>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div 
            className="mb-8 text-3xl font-bold text-yellow-300"
            variants={itemVariants}
          >
            <p className="mb-2">Countdown:</p>
            <div className="flex justify-center space-x-4">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="flex flex-col items-center">
                  <span className="text-4xl">{value}</span>
                  <span className="text-sm">{unit}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div 
            className="flex justify-center space-x-4"
            variants={itemVariants}
          >
            <Button 
              size="lg" 
              className="bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300"
            >
              Register Now
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-green-400 text-green-400 hover:bg-green-400 hover:text-white transition-all duration-300"
            >
              Learn More
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}