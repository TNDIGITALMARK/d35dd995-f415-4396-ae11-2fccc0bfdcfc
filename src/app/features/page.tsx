"use client"

import * as React from "react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { GradientButton } from "@/components/ui/gradient-button"
import {
  Download,
  MessageCircle,
  Sparkles,
  Shield,
  Globe,
  Zap,
  Users,
  Heart,
  Palette,
  Lock,
  Smartphone,
  Crown,
  Check,
  Star
} from "lucide-react"

const features = [
  {
    icon: MessageCircle,
    title: "Unlimited Conversations",
    description: "Chat as much as you want with any character, anytime. No limits on your creativity and curiosity.",
    highlight: "Free forever",
  },
  {
    icon: Sparkles,
    title: "Advanced AI Technology",
    description: "Powered by cutting-edge AI that understands context, emotion, and personality to create authentic conversations.",
    highlight: "Latest GPT models",
  },
  {
    icon: Users,
    title: "1000+ Unique Characters",
    description: "From historical figures to fictional heroes, find the perfect conversation partner for any topic or mood.",
    highlight: "Always growing",
  },
  {
    icon: Palette,
    title: "Create Custom Characters",
    description: "Design your own AI characters with unique personalities, backgrounds, and conversation styles.",
    highlight: "Premium feature",
  },
  {
    icon: Shield,
    title: "Privacy Guaranteed",
    description: "Your conversations are encrypted and private. We never sell your data or share it with third parties.",
    highlight: "End-to-end encrypted",
  },
  {
    icon: Globe,
    title: "Multi-Language Support",
    description: "Chat in your native language. We support 50+ languages with natural, fluent conversations.",
    highlight: "50+ languages",
  },
  {
    icon: Smartphone,
    title: "Offline Mode",
    description: "Download characters and continue conversations even without internet connection.",
    highlight: "Premium feature",
  },
  {
    icon: Zap,
    title: "Instant Responses",
    description: "Lightning-fast AI responses that feel natural and keep the conversation flowing smoothly.",
    highlight: "Sub-second latency",
  },
]

const premiumFeatures = [
  {
    title: "Character Creation Studio",
    description: "Advanced tools to create detailed characters with custom personalities, voices, and backgrounds",
  },
  {
    title: "Voice Chat Capability",
    description: "Have natural voice conversations with AI characters using text-to-speech technology",
  },
  {
    title: "Priority Support",
    description: "Get help instantly with dedicated support team available 24/7",
  },
  {
    title: "Early Access",
    description: "Try new features and characters before anyone else",
  },
  {
    title: "Ad-Free Experience",
    description: "Enjoy uninterrupted conversations without any advertisements",
  },
  {
    title: "Unlimited Character Slots",
    description: "Create and save unlimited custom characters",
  },
]

const stats = [
  { value: "500K+", label: "Downloads" },
  { value: "10M+", label: "Conversations" },
  { value: "4.8★", label: "App Rating" },
  { value: "95%", label: "User Satisfaction" },
]

export default function FeaturesPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-7xl text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Powerful Features
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Everything you need for amazing AI conversations
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 px-4 bg-gradient-to-r from-cyan-900/20 via-purple-900/20 to-pink-900/20 border-y border-gray-700/50">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Features Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-purple-900/20 border border-gray-700/50 hover:border-cyan-400/50 transition-all hover:scale-105 group"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center mb-4 shadow-glow-cyan group-hover:shadow-glow-purple transition-all">
                  <feature.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300 mb-3">{feature.description}</p>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-cyan-400/20 text-cyan-400 border border-cyan-400/30">
                  {feature.highlight}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Features */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-yellow-400/20 to-orange-400/20 border border-yellow-400/30 mb-4">
              <Crown className="text-yellow-400" size={20} />
              <span className="text-yellow-400 font-semibold">Premium</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Unlock Premium Features
            </h2>
            <p className="text-xl text-gray-300">
              Take your experience to the next level
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Free Plan */}
            <div className="p-8 rounded-2xl border border-gray-700/50 bg-gray-900/30">
              <h3 className="text-2xl font-bold text-white mb-2">Free</h3>
              <div className="text-4xl font-bold text-white mb-6">
                $0
                <span className="text-lg text-gray-400 font-normal">/forever</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="text-cyan-400 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-300">Unlimited conversations</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-cyan-400 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-300">Access to 1000+ characters</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-cyan-400 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-300">Multi-language support</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-cyan-400 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-300">Private & encrypted</span>
                </li>
              </ul>
              <GradientButton variant="outline" className="w-full">
                Download Free
              </GradientButton>
            </div>

            {/* Premium Plan */}
            <div className="p-8 rounded-2xl border-2 border-yellow-400/50 bg-gradient-to-br from-yellow-900/20 to-orange-900/20 shadow-2xl shadow-yellow-400/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 px-4 py-1 bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 font-bold text-sm rounded-bl-lg">
                POPULAR
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 mt-4">Premium</h3>
              <div className="text-4xl font-bold text-white mb-6">
                $9.99
                <span className="text-lg text-gray-400 font-normal">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="text-yellow-400 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-300">Everything in Free</span>
                </li>
                {premiumFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="text-yellow-400 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <span className="text-white font-semibold">{feature.title}</span>
                      <p className="text-sm text-gray-400">{feature.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <GradientButton variant="purple" className="w-full">
                <Crown className="mr-2" size={20} />
                Upgrade to Premium
              </GradientButton>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center mx-auto mb-6 shadow-glow-cyan">
                <span className="text-3xl font-bold text-white">1</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Choose a Character</h3>
              <p className="text-gray-300">
                Browse our library of 1000+ characters or create your own with custom personalities
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center mx-auto mb-6 shadow-glow-purple">
                <span className="text-3xl font-bold text-white">2</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Start Chatting</h3>
              <p className="text-gray-300">
                Begin natural conversations with AI that understands context and responds authentically
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center mx-auto mb-6 shadow-glow-pink">
                <span className="text-3xl font-bold text-white">3</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Enjoy & Explore</h3>
              <p className="text-gray-300">
                Discover new perspectives, learn, have fun, and build lasting connections with AI characters
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-gradient-to-b from-black/20 to-transparent">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
            Loved by Users Worldwide
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah M.",
                role: "Student",
                text: "This app helped me understand complex topics through conversations with historical figures. It's like having a personal tutor!",
                avatar: "S",
              },
              {
                name: "Mike R.",
                role: "Writer",
                text: "The character creation feature is incredible. I've overcome writer's block by chatting with my own characters!",
                avatar: "M",
              },
              {
                name: "Lisa K.",
                role: "Teacher",
                text: "My students are more engaged than ever. They love learning through conversations with historical figures and scientists.",
                avatar: "L",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-purple-900/30 border border-gray-700/50 hover:border-cyan-400/50 transition-all"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="#22D3EE" className="text-cyan-400" />
                  ))}
                </div>
                <p className="text-gray-300 italic mb-6">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.avatar}
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

      {/* Final CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Experience the Future?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join over 500,000 users and start your AI conversation journey today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <GradientButton size="lg">
              <Download className="mr-2" size={20} />
              Download Now
            </GradientButton>
            <GradientButton variant="outline" size="lg" asChild>
              <Link href="/demo">Try Demo</Link>
            </GradientButton>
          </div>
        </div>
      </section>
    </div>
  )
}
