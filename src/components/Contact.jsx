import { useState } from 'react'
import { toast } from 'react-toastify'

export default function Contact() {
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        
        const formData = new FormData(event.target);
        
        try {
            const response = await fetch("https://formspree.io/f/maykdoqa", {
                method: "POST",
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            const data = await response.json();
            
            if (data.ok) {
                event.target.reset();
                toast.success("Message sent successfully!");
            } else {
                toast.error("Error sending message. Please try again.");
            }
        } catch (error) {
            toast.error("Error sending message. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section id="contact" className="w-full px-[12%] py-16 scroll-mt-20 bg-[url('./assets/footer-bg-color.png')] bg-no-repeat bg-[length:90%_auto] bg-center dark:bg-none">
            <h1 className="text-center text-5xl font-Ovo mb-16 text-gray-900 dark:text-white">
                <span className="text-[#b820e6] dark:text-[#da7d20]">Contact</span> me
            </h1>

            <div className="flex flex-col lg:flex-row gap-16 max-w-6xl mx-auto">
                {/* Contact Info Section */}
                <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 font-Ovo">Contact Info</h3>
                    <div className="space-y-5">
                        <div className="flex items-center gap-4">
                            <i className="fas fa-envelope text-[#b820e6] dark:text-[#da7d20] text-xl w-6"></i>
                            <a href="mailto:chaudharymanish120@gmail.com" className="text-gray-700 dark:text-gray-200 hover:text-[#b820e6] dark:hover:text-[#da7d20] transition-colors text-base">
                                chaudharymanish120@gmail.com
                            </a>
                        </div>
                        <div className="flex items-center gap-4">
                            <i className="fab fa-linkedin text-[#b820e6] dark:text-[#da7d20] text-xl w-6"></i>
                            <a href="https://linkedin.com/in/chaudharymanish120" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-200 hover:text-[#b820e6] dark:hover:text-[#da7d20] transition-colors text-base">
                                linkedin.com/in/chaudharymanish120
                            </a>
                        </div>
                        <div className="flex items-center gap-4">
                            <i className="fab fa-github text-[#b820e6] dark:text-[#da7d20] text-xl w-6"></i>
                            <a href="https://github.com/chaudharymanish120" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-200 hover:text-[#b820e6] dark:hover:text-[#da7d20] transition-colors text-base">
                                github.com/chaudharymanish120
                            </a>
                        </div>
                        <div className="flex items-center gap-4">
                            <i className="fas fa-globe text-[#b820e6] dark:text-[#da7d20] text-xl w-6"></i>
                            <a href="https://manishfolio.in" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-200 hover:text-[#b820e6] dark:hover:text-[#da7d20] transition-colors text-base">
                                manishfolio.in
                            </a>
                        </div>
                        <div className="flex items-center gap-4">
                            <i className="fas fa-phone text-[#b820e6] dark:text-[#da7d20] text-xl w-6"></i>
                            <a href="tel:+919517312558" className="text-gray-700 dark:text-gray-200 hover:text-[#b820e6] dark:hover:text-[#da7d20] transition-colors text-base">
                                +91 9517312558
                            </a>
                        </div>
                        <div className="flex items-center gap-4">
                            <i className="fas fa-map-marker-alt text-[#b820e6] dark:text-[#da7d20] text-xl w-6"></i>
                            <span className="text-gray-700 dark:text-gray-200 text-base">Noida, UP 201308</span>
                        </div>
                    </div>
                </div>

                {/* Contact Form Section */}
                <div className="flex-1">
                    <form onSubmit={onSubmit} className="space-y-5">
                        <input 
                            type="text" 
                            placeholder="name" 
                            className="w-full px-5 py-4 focus:ring-2 focus:ring-[#b820e6] dark:focus:ring-[#da7d20] outline-none border-2 border-gray-300 dark:border-white/30 rounded-lg bg-white dark:bg-darkHover/50 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 transition-all hover:border-[#b820e6] dark:hover:border-[#da7d20]" 
                            required 
                            name="name" 
                            autoComplete="off"
                        />
                        <input 
                            type="email" 
                            placeholder="email" 
                            className="w-full px-5 py-4 focus:ring-2 focus:ring-[#b820e6] dark:focus:ring-[#da7d20] outline-none border-2 border-gray-300 dark:border-white/30 rounded-lg bg-white dark:bg-darkHover/50 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 transition-all hover:border-[#b820e6] dark:hover:border-[#da7d20]" 
                            required 
                            name="email" 
                            autoComplete="off"
                        />
                        <input 
                            type="text" 
                            placeholder="project" 
                            className="w-full px-5 py-4 focus:ring-2 focus:ring-[#b820e6] dark:focus:ring-[#da7d20] outline-none border-2 border-gray-300 dark:border-white/30 rounded-lg bg-white dark:bg-darkHover/50 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 transition-all hover:border-[#b820e6] dark:hover:border-[#da7d20]" 
                            name="project" 
                            autoComplete="off"
                        />
                        <textarea 
                            rows="4" 
                            placeholder="message" 
                            className="w-full px-5 py-4 focus:ring-2 focus:ring-[#b820e6] dark:focus:ring-[#da7d20] outline-none border-2 border-gray-300 dark:border-white/30 rounded-lg bg-white dark:bg-darkHover/50 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 transition-all hover:border-[#b820e6] dark:hover:border-[#da7d20] resize-none" 
                            required 
                            name="subject" 
                            autoComplete="off"
                        ></textarea>
                        <button 
                            type="submit" 
                            disabled={isLoading}
                            className="w-full px-10 py-3.5 border rounded-full bg-gradient-to-r from-[#b820e6] to-[#da7d20] text-white flex items-center justify-center gap-2 dark:border-transparent hover:opacity-90 hover:scale-105 transition-all shadow-lg hover:shadow-xl font-semibold disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                        >
                            {isLoading ? (
                                <>
                                    <span className="animate-spin inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full"></span>
                                    Sending...
                                </>
                            ) : (
                                <>
                                    Submit Now <i className="fas fa-paper-plane"></i>
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}