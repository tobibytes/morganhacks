"use client";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { navLinks } from "./navLinks";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function NavBar({ children }: Readonly<{ children: React.ReactNode; }>) {
  const path = usePathname();
  const router = useRouter();
  const [selectedNavLink, setSelectedNavLink] = useState(path.slice(1));
  const { scrollYProgress } = useScroll();
  const [underlineStyles, setUnderlineStyles] = useState({ width: 0, left: 0 })
  const [isOpen, setIsOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('Home')
  const [play, setPlay] = useState(true)

  useEffect(() => {
    const currentPath = path
    const activeNavItem = navLinks.find(item => item.link === currentPath)
    if (activeNavItem) {
      setActiveLink(activeNavItem.title)
    }
  }, [path])

  const playAudio = async () => {
    const audio = new Audio('/assets/regularshowaudio.mp3');
    await audio.play();  
  }

  const navbarVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: 'spring',
        stiffness: 100,
        damping: 15,
        staggerChildren: 0.1
      }
    }
  }

  const linkVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <motion.nav 
      className="w-full h-full"
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
      onClick={() => {
        if (play) playAudio()
        setPlay(false)
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div 
            variants={linkVariants} 
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
          >
            <Link href="/" className="text-2xl font-bold">
              <span className="text-[#87CEEB] drop-shadow-[0_0_10px_rgba(135,206,235,0.3)]">Morgan</span>
              <span className="text-[#90EE90] drop-shadow-[0_0_10px_rgba(144,238,144,0.3)]">Hacks</span>
            </Link>
          </motion.div>
          
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((item) => (
              <motion.div key={item.title} variants={linkVariants}>
                <div
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 cursor-pointer ${
                    activeLink === item.title
                      ? 'text-white bg-white/10 shadow-[0_0_10px_rgba(255,255,255,0.1)]'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                  onClick={() => router.push(item.link)}
                >
                  {item.title}
                </div>
              </motion.div>
            ))}
            <motion.div variants={linkVariants}>
              <div
                className="cursor-pointer ml-4 px-6 py-2 rounded-md text-sm font-medium bg-blue-500 text-white transition-all duration-300 hover:bg-blue-600 shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:shadow-[0_0_20px_rgba(59,130,246,0.6)]"
              >
                Register
              </div>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-300 hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Links */}
      {isOpen && (
        <div className="md:hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col space-y-4 p-4 bg-black text-white"
          >
            {navLinks.map((item) => (
              <div
                key={item.title}
                className="px-4 py-2 rounded-md text-sm font-medium"
                onClick={() => {
                  router.push(item.link)
                  setIsOpen(false)  // Close the menu after clicking a link
                }}
              >
                {item.title}
              </div>
            ))}
            <div className="ml-4 px-6 py-2 rounded-md text-sm font-medium bg-blue-500 text-white">
              Register
            </div>
          </motion.div>
        </div>
      )}

      <motion.div className="progress-bar" style={{ scaleX: scrollYProgress }} />
      <main className="w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedNavLink ? selectedNavLink : "empty"}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="w-full"
          >
            <motion.div
              className="underline w-full"
              animate={underlineStyles}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
    </motion.nav>
  );
}
