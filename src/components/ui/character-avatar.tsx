import * as React from "react"
import { cn } from "@/lib/utils"

export interface CharacterAvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string
  alt: string
  size?: "sm" | "md" | "lg" | "xl"
  glowColor?: "cyan" | "pink" | "purple"
}

const sizeClasses = {
  sm: "w-16 h-16",
  md: "w-24 h-24",
  lg: "w-32 h-32",
  xl: "w-40 h-40",
}

const glowClasses = {
  cyan: "shadow-[0_0_30px_rgba(34,211,238,0.5),0_0_60px_rgba(34,211,238,0.25)]",
  pink: "shadow-[0_0_30px_rgba(236,72,153,0.5),0_0_60px_rgba(236,72,153,0.25)]",
  purple: "shadow-[0_0_30px_rgba(124,58,237,0.5),0_0_60px_rgba(124,58,237,0.25)]",
}

const CharacterAvatar = React.forwardRef<HTMLDivElement, CharacterAvatarProps>(
  ({ src, alt, size = "lg", glowColor = "cyan", className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative rounded-full overflow-hidden",
          sizeClasses[size],
          className
        )}
        {...props}
      >
        {/* Gradient border ring */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 p-1 animate-pulse">
          <div className="w-full h-full rounded-full overflow-hidden bg-aurora-navy">
            <img
              src={src}
              alt={alt}
              className={cn(
                "w-full h-full object-cover transition-transform hover:scale-110",
                glowClasses[glowColor]
              )}
            />
          </div>
        </div>
      </div>
    )
  }
)
CharacterAvatar.displayName = "CharacterAvatar"

export { CharacterAvatar }
