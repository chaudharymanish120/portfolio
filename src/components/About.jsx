export default function About() {
    return (
        <section id="about" className="w-full px-[12%] py-10 scroll-mt-20">
            <h1 className="text-center text-5xl font-Ovo mb-12 text-gray-900 dark:text-white">
                <span className="text-[#b820e6] dark:text-[#da7d20]">About</span> me
            </h1>

            <div className="flex w-full flex-col lg:flex-row items-start gap-12 my-12">
                <div className="flex-1 space-y-4">
                    <div className="space-y-3">
                        <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-100">
                            <span className="text-[#b820e6] dark:text-[#da7d20]">Name :</span> Manish Chaudhary
                        </h3>
                        <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-100">
                            <span className="text-[#b820e6] dark:text-[#da7d20]">Age :</span> 25 years
                        </h3>
                        <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-100">
                            <span className="text-[#b820e6] dark:text-[#da7d20]">Qualification :</span> B.Tech Computer Science
                        </h3>
                        <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-100">
                            <span className="text-[#b820e6] dark:text-[#da7d20]">Position :</span> Software Developer
                        </h3>
                        <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-100">
                            <span className="text-[#b820e6] dark:text-[#da7d20]">Company :</span> W3villa Technologies
                        </h3>
                        <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-100">
                            <span className="text-[#b820e6] dark:text-[#da7d20]">Language :</span> English/Hindi
                        </h3>
                    </div>
                    <a href="/MANISH_RESUME.pdf" download className="inline-block mt-6">
                        <button className="px-10 py-2.5 border rounded-full bg-gradient-to-r from-[#b820e6] to-[#da7d20] text-white flex items-center gap-2 dark:border-transparent hover:opacity-90 transition">
                            Download CV <i className="fas fa-download"></i>
                        </button>
                    </a>
                </div>

                <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="border border-gray-300 dark:border-white/30 rounded-xl p-6 hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:hover:shadow-white/80 dark:hover:bg-darkHover/50">
                        <span className="text-3xl font-bold text-[#b820e6] dark:text-[#da7d20]">1.5+</span>
                        <h3 className="mt-2 font-semibold text-gray-700 dark:text-gray-100">Years of experience</h3>
                    </div>

                    <div className="border border-gray-300 dark:border-white/30 rounded-xl p-6 hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:hover:shadow-white/80 dark:hover:bg-darkHover/50">
                        <span className="text-3xl font-bold text-[#b820e6] dark:text-[#da7d20]">10+</span>
                        <h3 className="mt-2 font-semibold text-gray-700 dark:text-gray-100">Projects completed</h3>
                    </div>
                </div>
            </div>
        </section>
    )
}