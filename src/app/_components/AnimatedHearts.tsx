"use client"
import { Heart } from 'lucide-react'
import { motion } from "motion/react"

interface AnimatedHeartProps {
    x: number
    y: number
    size: number
}

export const AnimatedHeart: React.FC<AnimatedHeartProps> = ({ x, y, size }) => {
    return (
        <>
            <motion.div
                style={{
                    position: "absolute",
                    left: x,
                    top: y,
                }}
                animate={{
                    y: [y, y - 100, y],
                    opacity: [0, 1, 0],
                }}
                transition={{
                    duration: Math.random() * 2 + 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >
                <Heart size={size} color="#ffc4d6" fill="#ffc4d6" />
            </motion.div>

        </>

    )
}