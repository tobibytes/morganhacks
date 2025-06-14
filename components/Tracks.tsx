'use client'

import {  useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog"
import { Brain, Cpu, Globe, Leaf, Zap, Star, LucideProps } from "lucide-react"

interface tracksType {
  title: string;
  description: string;
  resources: {
    name: string;
    link: string;
  }[],
  icon: any;
  difficulty: string;
  color: string;
}
export default function Tracks() {
  const [selectedTrack, setSelectedTrack] = useState<null | tracksType>(null)
  const tracks: tracksType[] = [
    {
      title: "Robotics",
      description: "Create innovative solutions combining software and hardware. Learn about automation, AI, and embedded systems.",
      resources: [
        { name: "Robot Operating System", link: "https://www.ros.org/" },
        { name: "Boston Dynamics", link: "https://bostondynamics.com/webinars/developer-spotlight/" },
        { name: "Nvidia Isaac Ros", link: "https://developer.nvidia.com/isaac/ros" }
      ],
      icon: <Cpu className="w-8 h-8 text-green-400" />, 
      difficulty: "All levels",
      color: "bg-green-800",
    },
    {
      title: "Education",
      description: "Develop projects addressing educational challenges using technology, such as e-learning platforms and AI tutors.",
      resources: [
        { name: "Canvas API", link: "https://canvas.instructure.com/doc/api/" },
        { name: "Manim", link: "https://github.com/3b1b/manim" },
        { name: "Google Classroom", link: "https://developers.google.com/classroom" },
        { name: "Blackboard", link: "https://developer.blackboard.com/portal/displayApi" },
        { name: "Vimeo", link: "https://developer.vimeo.com/" },
      ],
      icon: <Leaf className="w-8 h-8 text-yellow-400" />,
      difficulty: "All levels",
      color: "bg-yellow-800",
    },
    {
      title: "Entertainment",
      description: "Create interactive media, games, or VR experiences that engage and inspire audiences.",
      resources: [
        { name: "Unity", link: "https://unity.com/" },
        { name: "Unreal Engine", link: "https://www.unrealengine.com/en-US" },
        { name: "Oculus", link: "https://developer.oculus.com/" },
        { name: "Twitch Tv", link: "https://dev.twitch.tv/" },
        { name: "Spotify", link: "https://developer.spotify.com/" },
      ],
      icon: <Zap className="w-8 h-8 text-red-400" />,
      difficulty: "All Levels",
      color: "bg-red-800",
    },
    {
      title: "Health",
      description: "Develop solutions to improve healthcare, such as wearable devices, telemedicine apps, and AI diagnostics.",
      resources: [
        { name: "Spoonacular API", link: "https://spoonacular.com/food-api/docs" },
        { name: "World Health Organization", link: "https://www.who.int/data/gho/info/gho-odata-api" },
        { name: "World Health Organization", link: "https://www.who.int/data/gho/info/gho-odata-api" },
        { name: "Drugbank", link: "https://docs.drugbank.com/v1/#introduction" },
        { name: "Human Api", link: "https://www.humanapi.co/" },
      ],
      icon: <Globe className="w-8 h-8 text-gray-400" />,
      difficulty: "All Levels",
      color: "bg-gray-800",
    },
    {
      title: "Sustainability",
      description: "Innovate in renewable energy, smart agriculture, and environmental conservation using tech.",
      resources: [
        { name: "Ecosia", link: "https://www.ecosia.org/?c=en" },
        { name: "Google Maps", link: "https://developers.google.com/maps" },
        { name: "My Climate", link: "https://www.myclimate.org/" },
        { name: "Carbon Interface", link: "https://docs.carboninterface.com/#/" },
        { name: "Electricity Map", link: "https://electricitymap.org/" },
        { name: "Climatiq", link: "https://www.climatiq.io/" },
      ],
      icon: <Brain className="w-8 h-8 text-purple-400" />,
      difficulty: "All Levels",
      color: "bg-purple-800",
    },
    {
      title: "New Frontiers",
      description: "Explore cutting-edge tech such as quantum computing, space tech, and biotech.",
      resources: [
        { name: "Tensorflow", link: "https://www.tensorflow.org/" },
        { name: "Computer Vision", link: "https://opencv.org/" },
        { name: "Blockchain", link: "https://ethereum.org/en/" },
        { name: "ARCore", link: "https://developers.google.com/ar" },
      ],
      icon: <Star className="w-8 h-8 text-blue-400" />,
      difficulty: "All Levels",
      color: "bg-blue-800",
    },
];

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
      <DialogContent className={`${selectedTrack.color} text-white p-8 rounded-lg shadow-2xl max-w-4xl max-h-96`}> 
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold">{selectedTrack.title}</DialogTitle>
        </DialogHeader>
        <DialogDescription className="mt-6">
          <span className="text-lg leading-relaxed text-white">{selectedTrack.description}</span>
          <div className="mt-8 text-base text-gray-300">
            <p className="font-semibold text-white">Recommended Resources:</p>
            <ul className="list-disc pl-6 mt-2">
              {selectedTrack.resources.map((resource, index) => (
                <li key={index} className="mt-2">
                  <a href={resource.link} target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:underline">{resource.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </DialogDescription>
      </DialogContent>
    </Dialog>
)}



    </div>
  )
}
