export default function Work() {
    const projects = [
        {
            name: 'EduCraft - Educational Platform',
            techStack: ['MERN Stack', 'JWT', 'OAuth', 'Stripe', 'REST API'],
            description: [
                'Built a full-stack educational platform with secure user authentication (JWT) and Google & GitHub OAuth',
                'Integrated Stripe for seamless payment processing with plan-based access to premium courses',
                'Implemented RESTful APIs for course creation, enrollment, and user progress tracking'
            ],
            githubLink: 'https://github.com/chaudharymanish120',
            liveLink: null,
            isProfessional: false
        },
        {
            name: 'Bot Application Simulation',
            techStack: ['Node.js', 'REST API', 'Load Testing', 'UI'],
            description: [
                'Developed a versatile bot to simulate API interactions including load testing, stress testing, and endpoint validation',
                'Designed configurable test scenarios with custom payloads, request patterns, and concurrency support',
                'Enabled detailed logging and automated reporting for performance benchmarking and issue tracing'
            ],
            githubLink: 'https://github.com/chaudharymanish120',
            liveLink: null,
            isProfessional: false
        },
        {
            name: 'Affiliate MLM Admin Panel',
            techStack: ['React.js', 'Node.js', 'Microservices', 'REST API'],
            description: [
                'Built from scratch using React.js with modular components and role-based routing',
                'Implemented dynamic dashboards with real-time data visualization',
                'Developed using microservices architecture for scalability and maintainability'
            ],
            githubLink: null,
            liveLink: null,
            isProfessional: true
        },
        {
            name: 'Real-time QnA Game',
            techStack: ['Node.js', 'Socket.io', 'Real-time', 'Microservices'],
            description: [
                'Developed real-time QnA game using Socket.io for seamless multiplayer experience',
                'Optimized backend for low-latency performance and efficient socket handling',
                'Built using microservices architecture for independent scaling'
            ],
            githubLink: null,
            liveLink: null,
            isProfessional: true
        }
    ];

    return (
        <section id="portfolio" className="w-full px-[12%] py-10 scroll-mt-20">
            <h1 className="text-center text-5xl font-Ovo mb-12 text-gray-900 dark:text-white">
                My <span className="text-[#b820e6] dark:text-[#da7d20]">Projects</span>
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-10">
                {projects.map((project, index) => (
                    <div key={index} className="border border-gray-300 dark:border-white/30 rounded-xl p-6 hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:hover:shadow-white/80 dark:hover:bg-darkHover/50">
                        <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-100 mb-3">{project.name}</h3>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.techStack.map((tech) => (
                                <span key={tech} className="px-3 py-1 bg-gray-100 dark:bg-darkHover rounded-full text-xs text-gray-700 dark:text-gray-200">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <ul className="space-y-2 mb-4 text-gray-700 dark:text-gray-200">
                            {project.description.map((desc, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-sm">
                                    <span className="text-[#b820e6] dark:text-[#da7d20] mt-1">•</span>
                                    <span>{desc}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="flex gap-4 mt-4">
                            {project.githubLink && (
                                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#b820e6] dark:text-[#da7d20] hover:underline">
                                    <i className="fab fa-github"></i> Source Code
                                </a>
                            )}
                            {project.isProfessional && (
                                <span className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                                    <i className="fas fa-briefcase"></i> Professional Project
                                </span>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}