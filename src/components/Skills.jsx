import { skills } from '../data/portfolioData';

const Skills = () => {
  const categories = [...new Set(skills.map(skill => skill.category))];

  return (
    <section id="skills" className="py-20 lg:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-radial opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-wider text-purple-400 font-semibold mb-4">
            What I Know
          </h2>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            My <span className="gradient-text">Skills</span>
          </h3>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I've been working with to create amazing web experiences
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="glass rounded-2xl p-6 card-hover group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl">{skill.icon}</div>
                <div>
                  <h4 className="font-semibold text-white group-hover:text-purple-400 transition-colors">
                    {skill.name}
                  </h4>
                  <p className="text-xs text-gray-500">{skill.category}</p>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="relative">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-400">Proficiency</span>
                  <span className="text-purple-400 font-medium">{skill.level}%</span>
                </div>
                <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack Banner */}
        <div className="mt-20">
          <div className="glass rounded-2xl p-8 lg:p-12 text-center">
            <h4 className="text-2xl font-bold text-white mb-6">
              Primary Tech Stack
            </h4>
            <div className="flex flex-wrap justify-center gap-4">
              {['React.js', 'JavaScript', 'Redux', 'Tailwind CSS'].map((tech) => (
                <div
                  key={tech}
                  className="px-6 py-3 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-purple-500/30 rounded-xl text-white font-medium hover:from-indigo-500/30 hover:to-purple-500/30 transition-all cursor-default"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="glass rounded-2xl p-6 text-center card-hover">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h5 className="text-lg font-semibold text-white mb-2">Clean Code</h5>
            <p className="text-gray-400 text-sm">
              Writing maintainable, scalable, and well-documented code
            </p>
          </div>

          <div className="glass rounded-2xl p-6 text-center card-hover">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h5 className="text-lg font-semibold text-white mb-2">Responsive Design</h5>
            <p className="text-gray-400 text-sm">
              Creating seamless experiences across all devices
            </p>
          </div>

          <div className="glass rounded-2xl p-6 text-center card-hover">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h5 className="text-lg font-semibold text-white mb-2">Performance</h5>
            <p className="text-gray-400 text-sm">
              Optimizing for speed and best user experience
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
