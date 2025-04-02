"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Linkedin, GithubIcon, Mail } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  linkedin: string;
  color: string;
  index?: number;
}

export default function CardComponent({ name, role, image, linkedin, color, index = 0 }: TeamMemberProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group"
    >
      <div className="relative rounded-xl overflow-hidden shadow-xl transform transition-all duration-300 group-hover:scale-105">
        <div className="relative h-64 w-full">
          <Image
            src={image}
            alt={name}
            fill={true}
            style={{objectFit: 'cover'}}
            className="transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
        </div>
        
        <div className="absolute bottom-0 w-full p-6 transform transition-transform duration-300">
          <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>
          <p className="text-lg text-blue-300 mb-4">{role}</p>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            className="flex gap-4"
          >
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-blue-500 rounded-full hover:bg-blue-600 transition-colors duration-300"
            >
              <Linkedin className="w-5 h-5 text-white" />
            </a> 
            <a
              href="#"
              className="p-2 bg-red-500 rounded-full hover:bg-red-600 transition-colors duration-300"
            >
              <Mail className="w-5 h-5 text-white" />
            </a>
          </motion.div>
        </div>
      </div>
      
      <div 
        className="absolute -bottom-2 -right-2 w-24 h-24 rounded-full blur-xl opacity-60"
        style={{ backgroundColor: color }}
      ></div>
    </motion.div>
  );
}