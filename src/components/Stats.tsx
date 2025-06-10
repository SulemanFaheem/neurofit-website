'use client';
import { motion } from 'framer-motion';
import { stats } from '@/data/stats';

export default function Stats() {
  return (
    <section className="bg-purple-100 py-16">
      <h2 className="text-3xl font-bold text-center text-primary mb-12">Facts & Figures</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 max-w-6xl mx-auto gap-8 text-center">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            className="bg-white p-6 rounded-xl shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
          >
            <h3 className="text-4xl font-bold text-primary">{stat.value}</h3>
            <p className="mt-2 text-gray-700">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
