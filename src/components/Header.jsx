import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { SoftSellLogoIcon } from "@/lib/icons"
import { AlignRight, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-shadow duration-300 bg-background ${
        isScrolled ? "shadow-md" : "shadow-sm"
      }`}
    >
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <a href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <SoftSellLogoIcon className="h-6 w-6" />
          </div>
          <span className="text-xl font-bold">SoftSell</span>
        </a>

        <nav className="hidden md:flex space-x-8">
          <a
            href="#how-it-works"
            className="text-muted-foreground hover:text-primary px-3 py-2 text-sm font-medium"
          >
            How It Works
          </a>
          <a
            href="#why-choose-us"
            className="text-muted-foreground hover:text-primary px-3 py-2 text-sm font-medium"
          >
            Why Choose Us
          </a>
          <a
            href="#testimonials"
            className="text-muted-foreground hover:text-primary px-3 py-2 text-sm font-medium"
          >
            Testimonials
          </a>
          <a
            href="#contact"
            className="text-muted-foreground hover:text-primary px-3 py-2 text-sm font-medium"
          >
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggle />

          <a href="#contact" className="hidden md:block">
            <Button variant="default">Get a Quote</Button>
          </a>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <AlignRight className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background border-t overflow-hidden"
          >
            <div className="px-4 py-3 space-y-1">
              <a
                href="#how-it-works"
                onClick={closeMenu}
                className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary hover:bg-muted"
              >
                How It Works
              </a>
              <a
                href="#why-choose-us"
                onClick={closeMenu}
                className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary hover:bg-muted"
              >
                Why Choose Us
              </a>
              <a
                href="#testimonials"
                onClick={closeMenu}
                className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary hover:bg-muted"
              >
                Testimonials
              </a>
              <a
                href="#contact"
                onClick={closeMenu}
                className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary hover:bg-muted"
              >
                Contact
              </a>
              <a
                href="#contact"
                onClick={closeMenu}
                className="block px-3 py-2 rounded-md text-base font-medium text-primary hover:text-primary-foreground hover:bg-primary"
              >
                Get a Quote
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
