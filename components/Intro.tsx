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
      const hackathonDate = new Date('2025-04-26T09:00:00') // Set your actual date here
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
<div className="relative w-full bg-cover bg-center py-12 text-white">
  <div className="absolute inset-0 bg-opacity-70"></div>
  <motion.div
    className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"
    initial="hidden"
    animate="visible"
    variants={containerVariants}
  >
    <div className="text-center">
      <motion.div variants={itemVariants} className="mb-4 text-4xl sm:text-6xl font-extrabold tracking-tight text-blue-400">
        <TypeAnimation sequence={['Morgan Hacks 2025']} wrapper="h1" speed={50} cursor={false} />
      </motion.div>

      <motion.div variants={itemVariants} className="mb-8 text-xl sm:text-2xl font-medium text-green-300">
        <TypeAnimation sequence={['Where Regular Coders Become Extraordinary Hackers!']} wrapper="p" speed={50} cursor={false} />
      </motion.div>

      <motion.div className="mb-8 flex flex-col sm:flex-row justify-center items-center sm:space-x-4 space-y-4 sm:space-y-0" variants={itemVariants}>
        <Card className="bg-opacity-80 backdrop-blur-sm w-64">
          <CardContent className="flex items-center justify-center p-4">
            <Coffee className="mr-2 h-6 w-6 text-yellow-400" />
            <span className="text-lg font-semibold">36 Hours</span>
          </CardContent>
        </Card>
        <Card className="bg-opacity-80 backdrop-blur-sm w-64">
          <CardContent className="flex items-center justify-center p-4">
            <Users className="mr-2 h-6 w-6 text-pink-400" />
            <span className="text-lg font-semibold">150+ Hackers</span>
          </CardContent>
        </Card>
        <Card className="bg-opacity-80 backdrop-blur-sm w-64">
          <CardContent className="flex items-center justify-center p-4">
            <Code className="mr-2 h-6 w-6 text-green-400" />
            <span className="text-lg font-semibold">Workshops</span>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div className="mb-8 text-2xl sm:text-3xl font-bold text-yellow-300" variants={itemVariants}>
        <p className="mb-2">Countdown:</p>
        <div className="flex flex-wrap justify-center gap-4">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="flex flex-col items-center w-20">
              <span className="text-3xl sm:text-4xl">{value}</span>
              <span className="text-sm capitalize">{unit}</span>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div className="flex flex-col sm:flex-row justify-center items-center gap-4" variants={itemVariants}>
  <a href="https://www.jotform.com/form/240934884390162" target="_blank">
    <Button size="lg" className="bg-[#60A5FA] text-white hover:bg-blue-700 transition-all duration-300 w-48 sm:w-auto">
      Register Now
    </Button>
  </a>
  <a href="https://form.jotform.com/251074394248157" target="_blank">
    <Button
      size="lg"
      variant="outline"
      className="border-green-400 text-green-400 hover:bg-green-400 hover:text-white transition-all duration-300 w-48 sm:w-auto"
    >
      Bus Routes RSVP!
    </Button>
  </a>
  <a href="https://form.jotform.com/250966057383162" target="_blank">
    <Button
      size="lg"
      variant="outline"
      className="border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white transition-all duration-300 w-48 sm:w-auto"
    >
      RSVP Here!
    </Button>
  </a>
</motion.div>

    </div>
  </motion.div>
</div>

  )
}