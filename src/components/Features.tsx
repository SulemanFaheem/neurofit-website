import { FaBrain, FaHeartbeat, FaAppleAlt, FaMobileAlt } from 'react-icons/fa';

export default function Features() {
  const features = [
    { icon: <FaBrain />, title: 'AI Custom Workouts' },
    { icon: <FaAppleAlt />, title: 'Smart Diet Suggestions' },
    { icon: <FaHeartbeat />, title: 'Mental Wellness Support' },
    { icon: <FaMobileAlt />, title: 'Web & Mobile Access' },
  ];

  return (
    <section className="bg-black text-white px-6 py-16">
      <h2 className="text-3xl font-bold text-center mb-10">Core Features</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {features.map((f, i) => (
          <div
            key={i}
            className="bg-gray-900 text-white p-6 rounded-xl shadow-lg hover:bg-gray-800 transition"
          >
            <div className="text-4xl mb-4 text-indigo-400">{f.icon}</div>
            <h3 className="text-lg font-semibold">{f.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
