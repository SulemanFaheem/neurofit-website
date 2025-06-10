'use client';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      className="relative h-screen flex items-center justify-center text-white"
      style={{
        backgroundImage: `url("/assets/home-background.jpg")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-0" />

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-5xl md:text-6xl font-bold">NeuroFit</h1>
        <p className="mt-4 text-xl max-w-2xl mx-auto">
          AI-powered fitness, nutrition, and mental wellness at your fingertips.
        </p>
        <button className="mt-8 px-6 py-3 bg-primary hover:bg-accent rounded-full text-white transition">
          Get Started
        </button>
      </div>
    </section>
  );
}
