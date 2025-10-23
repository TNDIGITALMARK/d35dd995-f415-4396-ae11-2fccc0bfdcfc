"use client"

import * as React from "react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { GradientButton } from "@/components/ui/gradient-button"
import { CharacterAvatar } from "@/components/ui/character-avatar"
import { ChatBubble } from "@/components/ui/chat-bubble"
import { Send, Download } from "lucide-react"

interface Character {
  id: string
  name: string
  description: string
  image: string
  greeting: string
  personality: string
}

const characters: Character[] = [
  {
    id: "einstein",
    name: "Albert Einstein",
    description: "Nobel Prize winner, theoretical physicist",
    image: "/generated/character-einstein.png",
    greeting: "Hello! Let's explore the mysteries of the universe together. What scientific question intrigues you today?",
    personality: "Curious, insightful, loves explaining complex concepts simply"
  },
  {
    id: "artist",
    name: "Luna",
    description: "Creative AI artist and storyteller",
    image: "/generated/character-girl-purple.png",
    greeting: "Hi there! I'm Luna! Want to create something amazing together? Stories, art, or just chat?",
    personality: "Creative, enthusiastic, imaginative"
  },
  {
    id: "wizard",
    name: "Merlin",
    description: "Ancient wizard with timeless wisdom",
    image: "/generated/character-fantasy.png",
    greeting: "Greetings, young seeker! What magical knowledge do you wish to discover today?",
    personality: "Wise, mystical, speaks in riddles"
  },
]

const sampleConversations: Record<string, Array<{ sender: "user" | "ai"; message: string }>> = {
  einstein: [
    { sender: "ai", message: "Hello! Let's explore the mysteries of the universe together. What scientific question intrigues you today?" },
    { sender: "user", message: "Can you explain time dilation in simple terms?" },
    { sender: "ai", message: "Ah, excellent question! Imagine you're on a train moving very fast. From your perspective, time flows normally. But to someone standing still watching you, your time appears to move slower. This is because nothing can travel faster than light, so as you approach light speed, time itself must slow down to keep the laws of physics consistent." },
  ],
  artist: [
    { sender: "ai", message: "Hi there! I'm Luna! Want to create something amazing together? Stories, art, or just chat?" },
    { sender: "user", message: "Help me write a story about a robot learning to paint" },
    { sender: "ai", message: "Oh, I love this! Let's start: 'Unit-7 had calculated a million trajectories, solved countless equations, but had never understood why humans stared at canvas for hours. That changed the day a child's spilled paint created an accidental sunset...' Should we continue from here?" },
  ],
  wizard: [
    { sender: "ai", message: "Greetings, young seeker! What magical knowledge do you wish to discover today?" },
    { sender: "user", message: "What's the secret to true wisdom?" },
    { sender: "ai", message: "Ah, a question as old as the ancient oaks! True wisdom lies not in knowing all answers, but in asking the right questions. Like water shapes stone through patience, understanding comes through humble curiosity and time. What specific wisdom path calls to your heart?" },
  ],
}

export default function DemoPage() {
  const [selectedCharacter, setSelectedCharacter] = React.useState<Character>(characters[0])
  const [messages, setMessages] = React.useState(sampleConversations[characters[0].id])
  const [inputMessage, setInputMessage] = React.useState("")
  const [isTyping, setIsTyping] = React.useState(false)
  const chatEndRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleSelectCharacter = (character: Character) => {
    setSelectedCharacter(character)
    setMessages(sampleConversations[character.id])
  }

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return

    const newUserMessage = { sender: "user" as const, message: inputMessage }
    setMessages((prev) => [...prev, newUserMessage])
    setInputMessage("")
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      const responses = [
        "That's a fascinating perspective! Tell me more about what you're thinking.",
        "I see where you're coming from. Let me share my thoughts on that...",
        "Interesting question! This reminds me of something I once experienced...",
        "Great point! Here's how I would approach this situation...",
      ]
      const randomResponse = responses[Math.floor(Math.random() * responses.length)]

      setMessages((prev) => [...prev, { sender: "ai", message: randomResponse }])
      setIsTyping(false)
    }, 1500)
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Try the Experience
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              Select a character and start chatting instantly
            </p>
          </div>

          {/* Main Demo Interface */}
          <div className="grid lg:grid-cols-[350px_1fr] gap-8">
            {/* Character Selection Sidebar */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white mb-4">Choose a Character</h2>

              {characters.map((character) => (
                <button
                  key={character.id}
                  onClick={() => handleSelectCharacter(character)}
                  className={`w-full p-4 rounded-2xl transition-all text-left ${
                    selectedCharacter.id === character.id
                      ? "bg-gradient-to-br from-cyan-900/50 to-purple-900/50 border-2 border-cyan-400 shadow-glow-cyan"
                      : "bg-gray-900/30 border border-gray-700/50 hover:border-cyan-400/50 hover:bg-gray-900/50"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <CharacterAvatar
                      src={character.image}
                      alt={character.name}
                      size="md"
                      glowColor="cyan"
                    />
                    <div className="flex-1">
                      <h3 className="font-bold text-white text-lg">{character.name}</h3>
                      <p className="text-sm text-gray-400">{character.description}</p>
                    </div>
                  </div>
                </button>
              ))}

              {/* CTA */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-500/20 mt-8">
                <h3 className="font-bold text-white mb-2">Love the experience?</h3>
                <p className="text-sm text-gray-300 mb-4">
                  Get access to 1000+ characters and unlimited conversations
                </p>
                <GradientButton className="w-full" size="sm">
                  <Download className="mr-2" size={16} />
                  Download Full App
                </GradientButton>
              </div>
            </div>

            {/* Chat Interface */}
            <div className="flex flex-col h-[700px] rounded-2xl border border-gray-700/50 bg-gray-900/30 backdrop-blur-sm overflow-hidden">
              {/* Chat Header */}
              <div className="p-6 border-b border-gray-700/50 bg-gradient-to-r from-cyan-900/20 to-purple-900/20">
                <div className="flex items-center gap-4">
                  <CharacterAvatar
                    src={selectedCharacter.image}
                    alt={selectedCharacter.name}
                    size="md"
                    glowColor="cyan"
                  />
                  <div>
                    <h3 className="font-bold text-white text-xl">{selectedCharacter.name}</h3>
                    <p className="text-sm text-gray-400">{selectedCharacter.personality}</p>
                  </div>
                </div>
              </div>

              {/* Messages Area */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {messages.map((msg, index) => (
                  <ChatBubble
                    key={index}
                    sender={msg.sender}
                    message={msg.message}
                  />
                ))}

                {isTyping && (
                  <div className="flex items-center gap-2 text-gray-400">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                      <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                      <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                    <span className="text-sm">{selectedCharacter.name} is typing...</span>
                  </div>
                )}

                <div ref={chatEndRef} />
              </div>

              {/* Input Area */}
              <div className="p-6 border-t border-gray-700/50 bg-gray-900/50">
                <div className="flex gap-3">
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                    placeholder="Type your message..."
                    className="flex-1 px-4 py-3 rounded-full bg-gray-800/50 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                  <button
                    onClick={handleSendMessage}
                    className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold hover:shadow-glow-cyan transition-all hover:scale-105 flex items-center gap-2"
                  >
                    <Send size={20} />
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-2 text-center">
                  This is a demo. Download the app for the full experience!
                </p>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <div className="max-w-2xl mx-auto p-8 rounded-2xl bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-500/20">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready for the Full Experience?
              </h2>
              <p className="text-gray-300 mb-6">
                Access 1000+ unique characters, create your own, and enjoy unlimited conversations
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <GradientButton size="lg">
                  <Download className="mr-2" size={20} />
                  Download Now
                </GradientButton>
                <GradientButton variant="outline" size="lg" asChild>
                  <Link href="/features">View Features</Link>
                </GradientButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
