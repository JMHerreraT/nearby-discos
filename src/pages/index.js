import React, {useState} from 'react'
import About from '../components/About';
import Clients from '../components/Clients';
import Events from '../components/Events';
import HeroSection from '../components/Hero';
import Reservation from '../components/Reservation';
import Navbar from '../components/shared/Navbar';
import Sidebar from '../components/shared/Sidebar';
const Home = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    };

    return (
        <>
         <Sidebar isOpen={isOpen} toggle={toggle}/>
         <Navbar toggle={toggle} />
         <HeroSection />
         <About/>
         <Events/>
         <Clients/>
         <Reservation/>
        </>
    )
}

export default Home
