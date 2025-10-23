"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { GradientButton } from "@/components/ui/gradient-button"
import { cn } from "@/lib/utils"

export function Navigation() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-black/80 backdrop-blur-xl shadow-lg shadow-purple-500/10 border-b border-purple-900/20"
          : "bg-transparent"
      )}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 relative group-hover:scale-110 transition-transform duration-300">
              <img
                src="/generated/aurora-ai-icon-minimal.png"
                alt="Aurora AI Logo"
                className="w-full h-full object-contain drop-shadow-[0_0_12px_rgba(124,58,237,0.6)]"
              />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent tracking-wide">
              AURORA AI
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-gray-300 hover:text-purple-400 transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              href="/demo"
              className="text-gray-300 hover:text-purple-400 transition-colors font-medium"
            >
              Demo
            </Link>
            <Link
              href="/features"
              className="text-gray-300 hover:text-purple-400 transition-colors font-medium"
            >
              Features
            </Link>
            <GradientButton size="sm">Download App</GradientButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-300 hover:text-purple-400 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-in slide-in-from-top duration-300">
            <div className="flex flex-col gap-4">
              <Link
                href="/"
                className="text-gray-300 hover:text-purple-400 transition-colors font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/demo"
                className="text-gray-300 hover:text-purple-400 transition-colors font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Demo
              </Link>
              <Link
                href="/features"
                className="text-gray-300 hover:text-purple-400 transition-colors font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Features
              </Link>
              <GradientButton className="w-full" size="sm">
                Download App
              </GradientButton>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
