import Contact from './components/Contact'
import Footer from './components/Footer'
import Work from './components/Work'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Certifications from './components/Certifications'
import About from './components/About'
import Header from './components/Header'
import Navbar from './components/Navbar'
import LenisScroll from './components/LenisScroll'
import { ToastContainer } from 'react-toastify'

export default function App() {
    return (
        <>
            <LenisScroll />
            <Navbar />
            <Header />
            <About />
            <Skills />
            <Experience />
            <Certifications />
            <Work />
            <Contact />
            <Footer />
            <ToastContainer />
        </>
    )
}