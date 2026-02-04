export default function Header() {
    return (
        <section id="home" className="w-11/12 max-w-3xl text-center mx-auto min-h-screen flex flex-col items-center justify-center gap-4 px-4 pt-24 pb-10">
            <img src="./assets/pic.jpeg" alt="Manish Chaudhary" className="rounded-full w-32 h-32 object-cover mb-2" />
            <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo text-gray-800 dark:text-gray-100">
                Hi! I&apos;m <span className="text-[#b820e6] dark:text-[#da7d20]">Manish Chaudhary</span>
                <img src="./assets/hand-icon.png" alt="" className="w-6 mb-1" />
            </h3>
            <h1 className="text-3xl sm:text-5xl lg:text-[66px] font-Ovo text-gray-900 dark:text-white leading-tight">
                Software Developer in Noida.
            </h1>
            <p className="max-w-2xl mx-auto font-Ovo text-base md:text-lg text-gray-700 dark:text-gray-200 mt-4">
                Software Developer with 1.5 years of hands-on experience in full-stack web development using React.js and Node.js. Proven track record in delivering scalable web applications, RESTful APIs, and collaborating in Agile teams.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
                <a href="#contact"
                    className="px-10 py-2.5 border rounded-full bg-gradient-to-r from-[#b820e6] to-[#da7d20] text-white flex items-center gap-2 dark:border-transparent hover:opacity-90 transition">
                    Contact me <img src="./assets/right-arrow-white.png" alt="" className="w-4" />
                </a>

                <a href="/MANISH_RESUME.pdf" download
                    className="px-10 py-2.5 rounded-full border border-gray-300 dark:border-white/25 hover:bg-slate-100/70 dark:hover:bg-darkHover flex items-center gap-2 bg-white dark:bg-transparent dark:text-white">
                    My Resume <img src="./assets/download-icon.png" alt="" className="w-4 dark:invert" />
                </a>
            </div>
        </section>
    )
}