export default function ProblemSolution() {
    return (
      <section className="bg-black py-20 text-white">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold">Problem & Solution</h2>
      </div>
      <div className="flex justify-around text-left max-w-5xl mx-auto gap-12">
        <div>
          <h3 className="text-2xl font-semibold mb-4">The Problem</h3>
          <ul className="list-disc list-inside text-gray-200">
            <li>Lack of personalized fitness guidance</li>
            <li>Generic workout and nutrition plans</li>
            <li>Limited access to mental wellness tools</li>
            <li>Non-integrated, platform-restricted fitness apps</li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-4">Our Solution</h3>
          <ul className="list-disc list-inside text-gray-200">
            <li>AI-based personalized workouts & plans</li>
            <li>Tailored nutrition & wellness tracking</li>
            <li>Cross-platform mobile & web access</li>
            <li>Real-time progress and goal adaptation</li>
          </ul>
        </div>
      </div>
    </section>    
    );
  }
  