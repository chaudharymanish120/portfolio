export default function Skills() {
    const skillCategories = [
        {
            name: 'Languages',
            skills: ['HTML/CSS', 'JavaScript', 'TypeScript', 'Java']
        },
        {
            name: 'Frameworks',
            skills: ['React.js', 'Node.js', 'Sails.js', 'Express.js']
        },
        {
            name: 'Databases',
            skills: ['MySQL', 'MongoDB', 'Neo4j', 'Redis']
        },
        {
            name: 'Tools & Others',
            skills: ['VS Code', 'Git', 'IntelliJ IDEA', 'Linux', 'Microservices', 'REST API']
        }
    ];

    return (
        <section id="skills" className="w-full px-[12%] py-10 scroll-mt-20">
            <h1 className="text-center text-5xl font-Ovo mb-12 text-gray-900 dark:text-white">
                Technical <span className="text-[#b820e6] dark:text-[#da7d20]">skills</span>
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
                {skillCategories.map((category) => (
                    <div key={category.name} className="border border-gray-300 dark:border-white/30 rounded-xl p-6 hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:hover:shadow-white/80 dark:hover:bg-darkHover/50">
                        <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-100 mb-4">{category.name}</h3>
                        <div className="flex flex-wrap gap-2">
                            {category.skills.map((skill) => (
                                <span key={skill} className="px-4 py-2 bg-gray-100 dark:bg-darkHover rounded-full text-sm text-gray-700 dark:text-gray-200">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
