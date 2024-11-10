'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Coffee, Code, Users } from 'lucide-react'

export default function HackathonIntro() {
  const [timeLeft, setTimeLeft] = useState('')

  useEffect(() => {
    const calculateTimeLeft = () => {
      const hackathonDate = new Date('2025-04-15T09:00:00') // Set your actual date here
      const now = new Date()
      const difference = hackathonDate.getTime() - now.getTime()

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
        const minutes = Math.floor((difference / 1000 / 60) % 60)
        setTimeLeft(`${days}d ${hours}h ${minutes}m`)
      } else {
        setTimeLeft('Hackathon has started!')
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 60000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative min-h-screen w-full bg-cover bg-center py-12 text-white" style={{backgroundImage: "url('https://i.imgur.com/8BXlXhN.jpg')"}}>
      <div className="absolute inset-0 bg-purple-900 bg-opacity-70"></div>
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="mb-4 text-5xl font-extrabold tracking-tight text-blue-400 sm:text-6xl">
            Morgan Hacks 2024
          </h1>
          <p className="mb-8 text-2xl font-medium text-green-300">
            Where Regular Coders Become Extraordinary Hackers!
          </p>
          <div className="mb-8 flex justify-center space-x-4">
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
          </div>
          <p className="mb-8 text-3xl font-bold text-yellow-300">
            Countdown: {timeLeft}
          </p>
          <div className="flex justify-center space-x-4">
            <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700">
              Register Now
            </Button>
            <Button size="lg" variant="outline" className="border-green-400 text-green-400 hover:bg-green-400 hover:text-white">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}