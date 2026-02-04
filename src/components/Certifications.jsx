export default function Certifications() {
    const certifications = [
        {
            year: '2024',
            icon: 'fas fa-trophy',
            title: 'Flipkart GRiD 5.0 - Software Development Track',
            description: 'Certificate of Participation, Level 1.1: E-Commerce & Tech Quiz from Flipkart'
        },
        {
            year: '2022',
            icon: 'fas fa-graduation-cap',
            title: 'Introduction to Web Development with HTML, CSS, JavaScript',
            description: 'An online non-credit course authorized by IBM Skills Network and offered through Coursera'
        },
        {
            year: '2022',
            icon: 'fas fa-graduation-cap',
            title: 'Programming Fundamentals using Python - Part 1',
            description: 'Certificate from INFOSYS after completing the given assignment and questions'
        },
        {
            year: '2022',
            icon: 'fas fa-graduation-cap',
            title: 'Programming Fundamentals using Python - Part 2',
            description: 'Certificate from INFOSYS after completing the advanced Python programming concepts'
        },
        {
            year: '2021',
            icon: 'fas fa-graduation-cap',
            title: 'Object Oriented Programming in Java',
            description: 'An online non-credit course authorized by University of California San Diego through Coursera'
        }
    ];

    return (
        <section id="Achievements" className="w-full px-[12%] py-10 scroll-mt-20">
            <h1 className="text-center text-5xl font-Ovo mb-12 text-gray-900 dark:text-white">
                <span className="text-[#b820e6] dark:text-[#da7d20]">Certifications</span>
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
                {certifications.map((cert, index) => (
                    <div key={index} className="border border-gray-300 dark:border-white/30 rounded-xl p-6 hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:hover:shadow-white/80 dark:hover:bg-darkHover/50">
                        <i className={`${cert.icon} text-3xl text-[#b820e6] dark:text-[#da7d20] mb-3`}></i>
                        <span className="text-sm text-gray-600 dark:text-gray-300">{cert.year}</span>
                        <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-100 my-3">{cert.title}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-200">{cert.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}
