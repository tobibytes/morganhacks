"use client"
import React, { useState, useEffect, useRef } from 'react'
import { navLinks } from './navLinks'
import { AnimatePresence, motion, useScroll } from 'framer-motion'
import { usePathname, useRouter } from 'next/navigation'


const Navbar = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const path = usePathname()
  const [selectedNavLink, setSelectedNavLink] = useState<string>(path.slice(1))
  const [underlineStyles, setUnderlineStyles] = useState({ width: 0, left: 0 })
  const navRef = useRef<HTMLDivElement | null>(null)
  console.log(path.slice(1))
  const router = useRouter()


  useEffect(() => {
    const selectedElement = navRef.current?.querySelector(".selected") as HTMLElement | null
    if (selectedElement) {
      const { offsetWidth, offsetLeft } = selectedElement
      setUnderlineStyles({
        width: offsetWidth,
        left: offsetLeft,
      })
    }
  }, [selectedNavLink])
  const { scrollYProgress } = useScroll();

  return (
    
    <div className="navbar-container">
      <nav ref={navRef}>
        <ul>
          {navLinks.map((item) => (
            <li
              key={item.title}
              className={`navlinks ${item.title === selectedNavLink ? "selected" : ""}`}
              onClick={() => {
                setSelectedNavLink(item.title)
                router.push(item.link)
              
              }}
            >
              {item.title}
            </li>
          ))}
        </ul>
      </nav>
          <motion.div
            className="progress-bar"
            style={{ scaleX: scrollYProgress }} />
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedNavLink ? selectedNavLink : "empty"}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >

       
      <motion.div
        className="underline"
        animate={underlineStyles}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      />
                
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  )
}

export default Navbar
