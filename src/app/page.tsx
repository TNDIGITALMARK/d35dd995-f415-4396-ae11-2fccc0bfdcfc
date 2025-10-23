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
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Animated background stars */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                opacity: Math.random() * 0.7 + 0.3,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom-4 duration-700">
              Chat with AI Characters
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-5 duration-700 delay-200">
              Experience endless conversations with unique personalities
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300">
              <GradientButton size="lg">
                <Download className="mr-2" size={20} />
                Download App
              </GradientButton>
              <GradientButton variant="outline" size="lg">
                Try Demo
              </GradientButton>
            </div>
          </div>

          {/* Character Showcase */}
          <div className="flex justify-center items-center gap-8 mb-16 flex-wrap animate-in fade-in zoom-in duration-700 delay-500">
            <div className="relative group">
              <CharacterAvatar
                src="/generated/character-girl-purple.png"
                alt="AI Character 1"
                size="xl"
                glowColor="pink"
              />
              <div className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs px-3 py-1 rounded-full shadow-glow-pink opacity-0 group-hover:opacity-100 transition-opacity">
                "Let's chat!"
              </div>
            </div>
            <div className="relative group">
              <CharacterAvatar
                src="/generated/character-einstein.png"
                alt="AI Character 2"
                size="xl"
                glowColor="cyan"
              />
              <div className="absolute -top-2 -right-2 bg-cyan-500 text-white text-xs px-3 py-1 rounded-full shadow-glow-cyan opacity-0 group-hover:opacity-100 transition-opacity">
                "Ask me anything!"
              </div>
            </div>
            <div className="relative group">
              <CharacterAvatar
                src="/generated/character-fantasy.png"
                alt="AI Character 3"
                size="xl"
                glowColor="purple"
              />
              <div className="absolute -top-2 -right-2 bg-purple-500 text-white text-xs px-3 py-1 rounded-full shadow-glow-purple opacity-0 group-hover:opacity-100 transition-opacity">
                "Adventure awaits!"
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Unleash the Future Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent to-black/20">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
            Unleash the Future of Conversation
          </h2>
          <div className="grid md:grid-cols-3 gap-12 items-start">
            {/* Left Phone Mockup */}
            <div className="flex justify-center">
              <div className="relative w-64 h-[500px] rounded-3xl overflow-hidden shadow-2xl shadow-cyan-500/20 border-4 border-gray-800">
                <img
                  src="/generated/phone-mockup-left.png"
                  alt="Chat Interface"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Center Features */}
            <div className="space-y-8">
              <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm border border-purple-500/20">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center shadow-glow-cyan">
                  <Zap className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  AI-Powered
                </h3>
                <p className="text-gray-300">Advanced AI technology for natural conversations</p>
              </div>

              <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm border border-purple-500/20">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center shadow-glow-pink">
                  <Users className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Thousands of Characters
                </h3>
                <p className="text-gray-300">Chat with personalities from every genre</p>
              </div>

              <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm border border-purple-500/20">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-400 to-blue-500 flex items-center justify-center shadow-glow-purple">
                  <MessageCircle className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Personalized Experience
                </h3>
                <p className="text-gray-300">AI adapts to your conversation style</p>
              </div>
            </div>

            {/* Right Phone Mockup */}
            <div className="flex justify-center">
              <div className="relative w-64 h-[500px] rounded-3xl overflow-hidden shadow-2xl shadow-pink-500/20 border-4 border-gray-800">
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
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-900/30 to-blue-900/30 backdrop-blur-sm border border-cyan-500/20">
              <div className="text-4xl font-bold text-cyan-400 mb-2">500K+</div>
              <div className="text-gray-300">Downloads</div>
            </div>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm border border-purple-500/20">
              <div className="text-4xl font-bold text-purple-400 mb-2">50K</div>
              <div className="text-gray-300">Daily Users</div>
            </div>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-pink-900/30 to-purple-900/30 backdrop-blur-sm border border-pink-500/20">
              <div className="text-4xl font-bold text-pink-400 mb-2">4.8</div>
              <div className="text-gray-300 flex items-center justify-center gap-1">
                <Star size={16} fill="currentColor" />
                Rating
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-900/30 to-purple-900/30 backdrop-blur-sm border border-cyan-500/20">
              <div className="text-4xl font-bold text-cyan-400 mb-2">1000+</div>
              <div className="text-gray-300">Characters</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-black/20 to-transparent">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
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
                className="p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-purple-900/30 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-500/50 transition-all hover:scale-105"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="#22D3EE" className="text-cyan-400" />
                  ))}
                </div>
                <p className="text-gray-300 italic mb-4">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center text-white font-bold">
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
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of users experiencing the future of conversation
          </p>
          <GradientButton size="lg">
            <Download className="mr-2" size={20} />
            Download App
          </GradientButton>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-gray-800">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-white mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-cyan-400 transition-colors">About</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Blog</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-white mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Privacy</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-white mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Cookies</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-white mb-4">Social</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Discord</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Instagram</a></li>
              </ul>
            </div>
          </div>
          <div className="text-center text-gray-400 pt-8 border-t border-gray-800">
            <p>© 2025 Aurora AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
