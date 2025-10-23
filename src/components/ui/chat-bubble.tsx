import * as React from "react"
import { cn } from "@/lib/utils"

export interface ChatBubbleProps extends React.HTMLAttributes<HTMLDivElement> {
  message: string
  sender: "user" | "ai"
  timestamp?: string
}

const ChatBubble = React.forwardRef<HTMLDivElement, ChatBubbleProps>(
  ({ message, sender, timestamp, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex w-full mb-4 animate-in fade-in slide-in-from-bottom-2 duration-300",
          sender === "user" ? "justify-end" : "justify-start",
          className
        )}
        {...props}
      >
        <div
          className={cn(
            "max-w-[80%] rounded-2xl px-4 py-3 shadow-md",
            sender === "user"
              ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-br-sm"
              : "bg-gray-800/50 backdrop-blur-sm text-gray-100 rounded-bl-sm border border-gray-700/50"
          )}
        >
          <p className="text-sm leading-relaxed">{message}</p>
          {timestamp && (
            <span className="text-xs opacity-70 mt-1 block">{timestamp}</span>
          )}
        </div>
      </div>
    )
  }
)
ChatBubble.displayName = "ChatBubble"

export { ChatBubble }
