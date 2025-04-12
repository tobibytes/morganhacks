"use client";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { navLinks } from "./navLinks";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";
import Image from "next/image";

export default function NavBar({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  const router = useRouter();
  const [selectedNavLink, setSelectedNavLink] = useState(path.slice(1));
  const { scrollYProgress } = useScroll();
  const [underlineStyles, setUnderlineStyles] = useState({ width: 0, left: 0 });
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const [play, setPlay] = useState(true);

  useEffect(() => {
    const currentPath = path;
    const activeNavItem = navLinks.find((item) => item.link === currentPath);
    if (activeNavItem) {
      setActiveLink(activeNavItem.title);
    }
  }, [path]);

  const playAudio = async () => {
    const audio = new Audio("/assets/regularshowaudio.mp3");
    await audio.play();
  };

  const navbarVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        staggerChildren: 0.1,
      },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.nav
      className="w-full h-full relative overflow-x-hidden"
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
      onClick={() => {
        if (play) playAudio();
        setPlay(false);
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
              <span className="text-[#87CEEB] drop-shadow-[0_0_10px_rgba(135,206,235,0.3)]">
                Morgan
              </span>
              <span className="text-[#90EE90] drop-shadow-[0_0_10px_rgba(144,238,144,0.3)]">
                Hacks
              </span>
            </Link>
          </motion.div>

          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((item) => (
              <motion.div key={item.title} variants={linkVariants}>
                <div
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 cursor-pointer ${
                    activeLink === item.title
                      ? "text-white bg-white/10 shadow-[0_0_10px_rgba(255,255,255,0.1)]"
                      : "text-gray-300 hover:text-white hover:bg-white/5"
                  }`}
                  onClick={() => router.push(item.link)}
                >
                  {item.title}
                </div>
              </motion.div>
            ))}
            <motion.div variants={linkVariants}>
              <a href="https://www.jotform.com/form/240934884390162" target="_blank">
                <div className="cursor-pointer ml-4 px-6 py-2 rounded-md text-sm font-medium bg-[#60A5FA] text-white transition-all duration-300 hover:bg-blue-600 shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:shadow-[0_0_20px_rgba(59,130,246,0.6)]">
                  Register
                </div>
              </a>
            </motion.div>

            {/* MLH Badge */}
            <a
              id="mlh-trust-badge"
              className="hidden md:block"
              style={{
                display: "block",
                maxWidth: 100,
                minWidth: 60,
                width: "10%",
                marginTop: "15%",
                zIndex: 10000,
              }}
              href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2025-season&utm_content=white"
              target="_blank"
            >
              <Image
                src="https://s3.amazonaws.com/logged-assets/trust-badge/2025/mlh-trust-badge-2025-white.svg"
                alt="Major League Hacking 2025 Hackathon Season"
                width={90}
                height={90}
              />
            </a>
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

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="md:hidden z-50 absolute top-16 left-0 w-full bg-black text-white py-4 px-6 space-y-4 shadow-lg"
        >
          {navLinks.map((item) => (
            <div
              key={item.title}
              className="px-4 py-2 rounded-md text-base font-medium bg-white/10 hover:bg-white/20 transition-all"
              onClick={() => {
                router.push(item.link);
                setIsOpen(false);
              }}
            >
              {item.title}
            </div>
          ))}
          <a
            href="https://www.jotform.com/form/240934884390162"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-6 py-2 rounded-md text-center text-base font-medium bg-blue-500 text-white hover:bg-blue-600 transition-all"
          >
            Register
          </a>
        </motion.div>
      )}

      {/* Progress Bar */}
      <motion.div className="progress-bar" style={{ scaleX: scrollYProgress }} />

      {/* Page Content */}
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

        {/* Social Icons */}
        <div className="sm:flex absolute bottom-4 left-1/2 transform -translate-x-1/2 space-x-5 z-50">
          <SocialIcon url="https://instagram.com" />
          <SocialIcon url="https://facebook.com" />
          <SocialIcon url="https://x.com" />
        </div>
      </main>
    </motion.nav>
  );
}
