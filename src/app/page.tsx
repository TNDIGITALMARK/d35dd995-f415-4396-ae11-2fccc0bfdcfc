"use client"

import * as React from "react"
import { Navigation } from "@/components/navigation"
import { GradientButton } from "@/components/ui/gradient-button"
import { CharacterAvatar } from "@/components/ui/character-avatar"
import { ChatBubble } from "@/components/ui/chat-bubble"
import { Download, Star, Users, MessageCircle, Zap, Shield, Globe } from "lucide-react"

export default function HomePage() {
  const [typingIndex, setTypingIndex] = React.useState(0)
  const messages = [
    { sender: "ai", message: "Hello! I'm here to help you explore the universe!" },
    { sender: "user", message: "Tell me about black holes" },
    { sender: "ai", message: "Black holes are fascinating cosmic phenomena..." },
  ]

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTypingIndex((prev) => (prev + 1) % messages.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-40 pb-32 px-4 overflow-hidden">
        {/* Subtle animated background particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-purple-400 rounded-full animate-pulse"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                opacity: Math.random() * 0.4 + 0.2,
              }}
            />
          ))}
        </div>

        {/* Gradient Orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-cyan-600/15 rounded-full blur-3xl"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center">
            <div className="mb-8 inline-block">
              <span className="px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm font-semibold backdrop-blur-sm">
                Experience the Future of AI
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 bg-gradient-to-r from-purple-300 via-purple-400 to-cyan-400 bg-clip-text text-transparent leading-tight animate-in fade-in slide-in-from-bottom-4 duration-700">
              Chat with AI Characters
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-5 duration-700 delay-100">
              Experience endless conversations with unique personalities powered by advanced AI
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200">
              <GradientButton size="lg" className="min-w-[200px]">
                <Download className="mr-2" size={20} />
                Download App
              </GradientButton>
              <GradientButton variant="outline" size="lg" className="min-w-[200px]">
                Try Demo
              </GradientButton>
            </div>

            {/* Character Showcase - Cleaner Layout */}
            <div className="flex justify-center items-center gap-6 md:gap-12 flex-wrap animate-in fade-in zoom-in duration-700 delay-400">
              <div className="relative group">
                <CharacterAvatar
                  src="/generated/character-girl-purple.png"
                  alt="AI Character 1"
                  size="xl"
                  glowColor="purple"
                />
              </div>
              <div className="relative group">
                <CharacterAvatar
                  src="/generated/character-einstein.png"
                  alt="AI Character 2"
                  size="xl"
                  glowColor="purple"
                />
              </div>
              <div className="relative group">
                <CharacterAvatar
                  src="/generated/character-fantasy.png"
                  alt="AI Character 3"
                  size="xl"
                  glowColor="purple"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Unleash the Future Section */}
      <section className="py-24 px-4 bg-black/30 backdrop-blur-sm">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 bg-gradient-to-r from-purple-300 to-cyan-400 bg-clip-text text-transparent">
            Unleash the Future of Conversation
          </h2>
          <div className="grid md:grid-cols-3 gap-12 items-center">
            {/* Left Phone Mockup */}
            <div className="flex justify-center">
              <div className="relative w-64 h-[500px] rounded-3xl overflow-hidden shadow-2xl shadow-purple-500/20 border-2 border-purple-800/40">
                <img
                  src="/generated/phone-mockup-left.png"
                  alt="Chat Interface"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Center Features */}
            <div className="space-y-8">
              <div className="text-center p-8 rounded-2xl bg-purple-950/40 backdrop-blur-sm border border-purple-500/30 hover:border-purple-500/50 transition-all hover:scale-105">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center shadow-lg shadow-purple-500/30">
                  <Zap className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  AI-Powered
                </h3>
                <p className="text-gray-400">Advanced AI technology for natural conversations</p>
              </div>

              <div className="text-center p-8 rounded-2xl bg-purple-950/40 backdrop-blur-sm border border-purple-500/30 hover:border-purple-500/50 transition-all hover:scale-105">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center shadow-lg shadow-purple-500/30">
                  <Users className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Thousands of Characters
                </h3>
                <p className="text-gray-400">Chat with personalities from every genre</p>
              </div>

              <div className="text-center p-8 rounded-2xl bg-purple-950/40 backdrop-blur-sm border border-purple-500/30 hover:border-purple-500/50 transition-all hover:scale-105">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center shadow-lg shadow-purple-500/30">
                  <MessageCircle className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Personalized Experience
                </h3>
                <p className="text-gray-400">AI adapts to your conversation style</p>
              </div>
            </div>

            {/* Right Phone Mockup */}
            <div className="flex justify-center">
              <div className="relative w-64 h-[500px] rounded-3xl overflow-hidden shadow-2xl shadow-purple-500/20 border-2 border-purple-800/40">
                <img
                  src="/generated/phone-mockup-right.png"
                  alt="Character Selection"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
            <div className="p-8 rounded-2xl bg-purple-950/30 backdrop-blur-sm border border-purple-500/30 hover:border-purple-400/50 transition-all hover:scale-105">
              <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">500K+</div>
              <div className="text-gray-400 font-medium">Downloads</div>
            </div>
            <div className="p-8 rounded-2xl bg-purple-950/30 backdrop-blur-sm border border-purple-500/30 hover:border-purple-400/50 transition-all hover:scale-105">
              <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">50K</div>
              <div className="text-gray-400 font-medium">Daily Users</div>
            </div>
            <div className="p-8 rounded-2xl bg-purple-950/30 backdrop-blur-sm border border-purple-500/30 hover:border-purple-400/50 transition-all hover:scale-105">
              <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">4.8</div>
              <div className="text-gray-400 font-medium flex items-center justify-center gap-1">
                <Star size={16} fill="currentColor" className="text-purple-400" />
                Rating
              </div>
            </div>
            <div className="p-8 rounded-2xl bg-purple-950/30 backdrop-blur-sm border border-purple-500/30 hover:border-purple-400/50 transition-all hover:scale-105">
              <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">1000+</div>
              <div className="text-gray-400 font-medium">Characters</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-4 bg-black/30 backdrop-blur-sm">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-300 to-cyan-400 bg-clip-text text-transparent">
            What Users Are Saying
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah M.",
                role: "Student",
                text: "This app helped me understand complex topics through conversations with historical figures!",
                rating: 5,
              },
              {
                name: "Mike R.",
                role: "Writer",
                text: "Character chats helped me overcome writer's block. It's like having creative partners!",
                rating: 5,
              },
              {
                name: "Lisa K.",
                role: "Teacher",
                text: "I use it to make lessons more engaging for my students. They love it!",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-purple-950/30 backdrop-blur-sm border border-purple-500/30 hover:border-purple-400/50 transition-all hover:scale-105"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} fill="#A78BFA" className="text-purple-400" />
                  ))}
                </div>
                <p className="text-gray-300 italic mb-6 leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="relative p-12 rounded-3xl bg-gradient-to-br from-purple-950/50 to-purple-900/30 backdrop-blur-sm border border-purple-500/40 shadow-2xl shadow-purple-500/20">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-purple-600/30 rounded-full blur-3xl"></div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-300 to-cyan-400 bg-clip-text text-transparent">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              Join thousands of users experiencing the future of conversation
            </p>
            <GradientButton size="lg" className="shadow-lg shadow-purple-500/30">
              <Download className="mr-2" size={20} />
              Download App
            </GradientButton>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 border-t border-purple-900/30 bg-black/40 backdrop-blur-sm">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-5 gap-12 mb-12">
            {/* Logo Column */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 relative">
                  <img
                    src="/generated/aurora-ai-icon.png"
                    alt="Aurora AI Logo"
                    className="w-full h-full object-contain drop-shadow-[0_0_8px_rgba(124,58,237,0.5)]"
                  />
                </div>
                <span className="text-lg font-bold bg-gradient-to-r from-purple-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent">
                  AURORA AI
                </span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                The future of AI conversation
              </p>
            </div>

            {/* Footer Links */}
            <div>
              <h3 className="font-bold text-white mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-purple-400 transition-colors">About</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Blog</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-white mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-purple-400 transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Privacy</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-white mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-purple-400 transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Cookies</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-white mb-4">Social</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-purple-400 transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Discord</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Instagram</a></li>
              </ul>
            </div>
          </div>
          <div className="text-center text-gray-400 pt-8 border-t border-purple-900/30">
            <p>© 2025 Aurora AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
