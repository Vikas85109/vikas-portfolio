import { personalInfo, education, interests } from '../data/portfolioData';

const About = () => {
  const stats = [
    { label: 'Years Experience', value: '3.5+' },
    { label: 'Projects Completed', value: '15+' },
    { label: 'Technologies', value: '12+' },
    { label: 'Happy Clients', value: '10+' },
  ];

  return (
    <section id="about" className="py-20 lg:py-32 relative">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-purple-500/5 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-wider text-purple-400 font-semibold mb-4">
            Get To Know Me
          </h2>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            About <span className="gradient-text">Me</span>
          </h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Image/Visual */}
          <div className="relative">
            <div className="relative">
              {/* Main Card */}
              <div className="glass rounded-2xl p-8 glow">
                {/* Code Window Header */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="ml-4 text-gray-400 text-sm font-mono">about-me.js</span>
                </div>

                {/* Code Content */}
                <div className="font-mono text-sm space-y-3">
                  <div>
                    <span className="text-purple-400">const</span>{' '}
                    <span className="text-blue-400">developer</span>{' '}
                    <span className="text-white">=</span>{' '}
                    <span className="text-yellow-400">{'{'}</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-green-400">name</span>
                    <span className="text-white">:</span>{' '}
                    <span className="text-orange-400">"{personalInfo.name}"</span>
                    <span className="text-white">,</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-green-400">role</span>
                    <span className="text-white">:</span>{' '}
                    <span className="text-orange-400">"{personalInfo.role}"</span>
                    <span className="text-white">,</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-green-400">experience</span>
                    <span className="text-white">:</span>{' '}
                    <span className="text-orange-400">"{personalInfo.experience}"</span>
                    <span className="text-white">,</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-green-400">location</span>
                    <span className="text-white">:</span>{' '}
                    <span className="text-orange-400">"{personalInfo.location}"</span>
                    <span className="text-white">,</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-green-400">isAvailable</span>
                    <span className="text-white">:</span>{' '}
                    <span className="text-purple-400">true</span>
                    <span className="text-white">,</span>
                  </div>
                  <div>
                    <span className="text-yellow-400">{'}'}</span>
                    <span className="text-white">;</span>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-purple-500/30 rounded-2xl"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-indigo-500/30 rounded-2xl"></div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h4 className="text-2xl font-bold text-white">
                Passionate Frontend Developer Based in India
              </h4>
              <p className="text-gray-400 leading-relaxed">
                {personalInfo.summary}
              </p>
              <p className="text-gray-400 leading-relaxed">
                With {personalInfo.experience} of hands-on experience, I specialize in building
                modern web applications using React.js and its ecosystem. I love turning complex
                problems into simple, beautiful, and intuitive designs.
              </p>
            </div>

            {/* Education */}
            <div className="glass rounded-xl p-6">
              <h5 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
                Education
              </h5>
              {education.map((edu, index) => (
                <div key={index}>
                  <p className="text-white font-medium">{edu.degree}</p>
                  <p className="text-gray-400 text-sm">{edu.institution}</p>
                  <p className="text-purple-400 text-sm">{edu.duration}</p>
                </div>
              ))}
            </div>

            {/* Interests */}
            <div>
              <h5 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                Interests
              </h5>
              <div className="flex flex-wrap gap-3">
                {interests.map((interest, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 glass rounded-lg text-sm text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="glass rounded-2xl p-6 text-center card-hover"
            >
              <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
