"use client";
import { useState, useEffect, useRef } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import { usePathname, useRouter } from "next/navigation";
// import { AcmeLogo } from "./AcmeLogo.jsx";
import { navLinks } from "./navLinks";
import { AnimatePresence, motion, useScroll } from "framer-motion";

export default function NavBar({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  const path = usePathname();
  const router = useRouter();
  const [selectedNavLink, setSelectedNavLink] = useState(path.slice(1));
  const { scrollYProgress } = useScroll();
  const [underlineStyles, setUnderlineStyles] = useState({ width: 0, left: 0 })
  const navRef = useRef<HTMLDivElement | null>(null)
  console.log(path.slice(1))


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
  // Framer Motion variants for animations
  const navItemVariant = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } }
  };

  return (
    <div className="navbar-container relative">
            <Navbar as={motion.div} initial="hidden" animate="visible" className="w-full shadow-md">
        {/* Navbar Content Wrapper */}
        <div className="flex items-center justify-between w-full px-4">
          {/* Left Side: Logo */}
          <NavbarBrand className="gap-2">
            <p className="font-bold text-inherit">Morgan Hacks</p>
          </NavbarBrand>

          {/* Center: Navigation Links */}
          <NavbarContent className="hidden sm:flex gap-6">
            {navLinks.map((item, index) => (
              <NavbarItem key={item.title} isActive={item.title === selectedNavLink}>
                <motion.span
                  variants={navItemVariant}
                  initial="hidden"
                  animate="visible"
                  custom={index}
                >
                  <Link
                    href="#"
                    color={item.title === selectedNavLink ? "secondary" : "foreground"}
                    onClick={() => {
                      setSelectedNavLink(item.title);
                      router.push(item.link);
                    }}
                    aria-current={item.title === selectedNavLink ? "page" : undefined}
                    className="text-lg font-medium"
                  >
                    {item.title}
                  </Link>
                </motion.span>
              </NavbarItem>
            ))}
          </NavbarContent>

          {/* Right Side: Register Button */}
          <NavbarContent justify="end">
            <NavbarItem>
              <Button as={Link} color="primary" href="#" variant="flat" onClick={() => router.push("/signup")}>
                Register
              </Button>
            </NavbarItem>
          </NavbarContent>
        </div>
      </Navbar>

      {/* Animated Progress Bar */}
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
  );
}
