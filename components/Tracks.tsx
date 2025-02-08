'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog"
import { Brain, Cpu, Globe, Leaf, Zap, Star } from "lucide-react"

export default function Tracks() {
  const [selectedTrack, setSelectedTrack] = useState<null | any>(null)

  const tracks = [
    {
      title: "Robotics",
      description: "Create innovative solutions combining software and hardware. Learn about automation, AI, and embedded systems.",
      resources: "Courses: Coursera's Robotics Specialization, MIT OpenCourseWare. Tools: ROS, Arduino, Raspberry Pi.",
      icon: <Cpu className="w-8 h-8 text-green-400" />, 
      difficulty: "Advanced",
      color: "bg-green-800",
    },
    {
      title: "Education",
      description: "Develop projects addressing educational challenges using technology, such as e-learning platforms and AI tutors.",
      resources: "Courses: Khan Academy, EdX's EdTech Programs. Tools: Moodle, Google Classroom, OpenAI APIs.",
      icon: <Leaf className="w-8 h-8 text-yellow-400" />,
      difficulty: "Beginner",
      color: "bg-yellow-800",
    },
    {
      title: "Entertainment",
      description: "Create interactive media, games, or VR experiences that engage and inspire audiences.",
      resources: "Courses: Unity Learn, Udemy's Game Development Courses. Tools: Unreal Engine, Godot, WebGL.",
      icon: <Zap className="w-8 h-8 text-red-400" />,
      difficulty: "All Levels",
      color: "bg-red-800",
    },
    {
      title: "Health",
      description: "Develop solutions to improve healthcare, such as wearable devices, telemedicine apps, and AI diagnostics.",
      resources: "Courses: Stanford's AI in Healthcare, Harvard's Biomedical Engineering. Tools: TensorFlow, PyTorch, WHO APIs.",
      icon: <Globe className="w-8 h-8 text-gray-400" />,
      difficulty: "All Levels",
      color: "bg-gray-800",
    },
    {
      title: "Sustainability",
      description: "Innovate in renewable energy, smart agriculture, and environmental conservation using tech.",
      resources: "Courses: Coursera's Renewable Energy, Udacity's AI for Earth. Tools: OpenWeather API, GIS tools, IoT sensors.",
      icon: <Brain className="w-8 h-8 text-purple-400" />,
      difficulty: "All Levels",
      color: "bg-purple-800",
    },
    {
      title: "New Frontiers",
      description: "Explore cutting-edge tech such as quantum computing, space tech, and biotech.",
      resources: "Courses: IBM's Quantum Computing, NASA's Space Apps Challenges. Tools: Qiskit, SpaceX API, CRISPR Simulators.",
      icon: <Star className="w-8 h-8 text-blue-400" />,
      difficulty: "All Levels",
      color: "bg-blue-800",
    },
  ]

  return (
    <div className="py-16 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl font-extrabold text-center text-white mb-8">Hackathon Tracks</h2>
        <p className="text-xl text-center text-blue-200 mb-12">Choose your challenge and make a difference!</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tracks.map((track, index) => (
            <div key={index} onClick={() => setSelectedTrack(track)}>
              <Card className={`${track.color} border-none shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden`}>                
                <CardHeader>
                  <div className="flex items-center justify-between">
                    {track.icon}
                    <Badge variant="secondary" className="text-xs">{track.difficulty}</Badge>
                  </div>
                  <CardTitle className="text-xl font-bold mt-4 text-white">{track.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm text-gray-200">{track.description}</CardDescription>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {selectedTrack && (
        <Dialog open={!!selectedTrack} onOpenChange={() => setSelectedTrack(null)}>
          <DialogContent className={`${selectedTrack.color} text-white p-6 rounded-lg shadow-xl max-w-2xl`}> 
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold">{selectedTrack.title}</DialogTitle>
              <DialogClose className="absolute top-4 right-4 text-white cursor-pointer">✕</DialogClose>
            </DialogHeader>
            <DialogDescription className="mt-4">
              <p className="text-lg">{selectedTrack.description}</p>
              <p className="mt-6 text-sm text-gray-300">{selectedTrack.resources}</p>
            </DialogDescription>
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}
