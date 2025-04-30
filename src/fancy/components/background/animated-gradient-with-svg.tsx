"use client"

import React, { useMemo, useRef } from "react"

import { cn } from "@/lib/utils"
import { useDimensions } from "@/hooks/use-debounced-dimensions"

interface AnimatedGradientProps {
  colors: string[]
  speed?: number
  blur?: "light" | "medium" | "heavy"
}

// Seeded random function for stable values
function seededRandom(seed: number) {
  const x = Math.sin(seed++) * 10000
  return x - Math.floor(x)
}

const AnimatedGradient: React.FC<AnimatedGradientProps> = ({
  colors,
  speed = 5,
  blur = "light",
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { width = 0, height = 0 } = useDimensions(containerRef)

  const circleSize = useMemo(
    () => Math.max(width, height),
    [width, height]
  )

  const blurClass =
    blur === "light"
      ? "blur-2xl"
      : blur === "medium"
        ? "blur-3xl"
        : "blur-[100px]"

  // Generate stable random values for each circle
  const circles = useMemo(() => {
    return colors.map((color, index) => {
      const seed = index + 1
      return {
        color,
        size: circleSize * (0.5 + seededRandom(seed) * 1),
        position: {
          top: seededRandom(seed * 2) * 50,
          left: seededRandom(seed * 3) * 50,
        },
        transforms: {
          tx1: seededRandom(seed * 4) - 0.5,
          ty1: seededRandom(seed * 5) - 0.5,
          tx2: seededRandom(seed * 6) - 0.5,
          ty2: seededRandom(seed * 7) - 0.5,
          tx3: seededRandom(seed * 8) - 0.5,
          ty3: seededRandom(seed * 9) - 0.5,
          tx4: seededRandom(seed * 10) - 0.5,
          ty4: seededRandom(seed * 11) - 0.5,
        },
      }
    })
  }, [colors, circleSize])

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      <div className={cn(`absolute inset-0`, blurClass)}>
        {circles.map((circle, index) => {
          const animationProps = {
            animation: `background-gradient ${speed}s infinite ease-in-out`,
            animationDuration: `${speed}s`,
            top: `${circle.position.top.toFixed(6)}%`,
            left: `${circle.position.left.toFixed(6)}%`,
            "--tx-1": circle.transforms.tx1.toFixed(6),
            "--ty-1": circle.transforms.ty1.toFixed(6),
            "--tx-2": circle.transforms.tx2.toFixed(6),
            "--ty-2": circle.transforms.ty2.toFixed(6),
            "--tx-3": circle.transforms.tx3.toFixed(6),
            "--ty-3": circle.transforms.ty3.toFixed(6),
            "--tx-4": circle.transforms.tx4.toFixed(6),
            "--ty-4": circle.transforms.ty4.toFixed(6),
          } as React.CSSProperties

          return (
            <svg
              key={index}
              className={cn("absolute", "animate-background-gradient")}
              width={circle.size}
              height={circle.size}
              viewBox="0 0 100 100"
              style={animationProps}
            >
              <circle cx="50" cy="50" r="50" fill={circle.color} />
            </svg>
          )
        })}
      </div>
    </div>
  )
}

export default AnimatedGradient
