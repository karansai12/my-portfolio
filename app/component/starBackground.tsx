"use client";

import { useEffect, useState } from "react";

interface Star {
  id: number;
  size: number;
  x: number;
  y: number;
  opacity: number;
  duration: number;
}

interface Meteor {
  id: number;
  x: number;
  y: number;
  delay: number;
  duration: number;
}

export default function StarBackground() {
  const [stars, setStars] = useState<Star[]>([]);
  const [meteors, setMeteors] = useState<Meteor[]>([]);
  const [mounted, setMounted] = useState(false);

  const generateStars = () => {
    if (typeof window === "undefined") return;

    const count = Math.floor((window.innerWidth * window.innerHeight) / 10000);
    const starList: Star[] = [];

    for (let i = 0; i < count; i++) {
      starList.push({
        id: i,
        size: Math.random() * 3 + 1, // 1px to 4px
        x: Math.random() * 100,      // % of viewport width
        y: Math.random() * 100,      // % of viewport height
        opacity: Math.random() * 0.5 + 0.5,
        duration: Math.random() * 4 + 2,
      });
    }

    setStars(starList);
  };

  const generateMeteors = () => {
    const meteorList: Meteor[] = [];
    for (let i = 0; i < 4; i++) {
      meteorList.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 20,
        delay: Math.random() * 15,
        duration: Math.random() * 3 + 3,
      });
    }
    setMeteors(meteorList);
  };

  useEffect(() => {
    setMounted(true);
    generateStars();
    generateMeteors();

    const handleResize = () => {
      generateStars();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white animate-pulse-subtle"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.x}%`,
            top: `${star.y}%`,
            opacity: star.opacity,
            animationDuration: `${star.duration}s`,
            boxShadow: "0 0 10px 2px rgba(255, 255, 255, 0.4)",
          }}
        />
      ))}

      {/* Meteors */}
      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="absolute h-0.5 w-[80px] bg-gradient-to-r from-white via-white/50 to-transparent rounded-full animate-meteor"
          style={{
            top: `${meteor.y}%`,
            left: `${meteor.x}%`,
            animationDelay: `${meteor.delay}s`,
            animationDuration: `${meteor.duration}s`,
            boxShadow: "0 0 8px 1px rgba(255, 255, 255, 0.3)",
          }}
        />
      ))}
    </div>
  );
}