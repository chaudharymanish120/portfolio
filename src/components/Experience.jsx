export default function Experience() {
    const experiences = [
        {
            title: 'Software Developer',
            company: 'W3villa Technologies Pvt. Ltd.',
            duration: 'April 2024 – Present | Noida, India',
            responsibilities: [
                'Worked on two core products: A Node.js affiliate MLM base application and a real-time QnA game using Sockets',
                'Built applications using microservices architecture, enabling independent deployment, scalability, and better maintainability',
                'Developed and scaled multiple RESTful APIs and backend functions, optimized for high traffic and designed to auto-scale under load',
                'Built the Affiliate MLM Admin Panel from scratch using React.js with modular components, role-based routing, and dynamic dashboards',
                'Optimized backend for both applications to ensure low-latency performance and efficient socket handling for real-time gameplay'
            ]
        }
    ];

    return (
        <section id="experience" className="w-full px-[12%] py-10 scroll-mt-20">
            <h1 className="text-center text-5xl font-Ovo mb-12 text-gray-900 dark:text-white">
                Work <span className="text-[#b820e6] dark:text-[#da7d20]">experience</span>
            </h1>

            <div className="max-w-4xl mx-auto">
                {experiences.map((exp, index) => (
                    <div key={index} className="border-l-4 border-[#b820e6] dark:border-[#da7d20] pl-6 mb-8 relative">
                        <div className="absolute -left-2 top-0 w-4 h-4 bg-[#b820e6] dark:bg-[#da7d20] rounded-full"></div>
                        <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-100 mb-1">{exp.title}</h3>
                        <h4 className="text-xl text-[#b820e6] dark:text-[#da7d20] mb-2">{exp.company}</h4>
                        <div className="text-sm text-gray-600 dark:text-gray-300 mb-4">{exp.duration}</div>
                        <ul className="space-y-2 text-gray-700 dark:text-gray-200">
                            {exp.responsibilities.map((resp, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                    <span className="text-[#b820e6] dark:text-[#da7d20] mt-1">•</span>
                                    <span>{resp}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    )
}
