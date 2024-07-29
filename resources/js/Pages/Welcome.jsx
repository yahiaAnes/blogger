import { Link, Head } from '@inertiajs/react';
import  Header  from "../Components/Header";
import  Hero  from "../Components/Hero";
import  About  from "../Components/About";
import { motion } from 'framer-motion';



export default function Welcome({ auth }) {
 

    return (
        <>
            <Head title="Welcome" />
            <div className="bg-gray-50 text-black/50 dark:bg-black dark:text-white/70">
               <Header auth={auth}/>
               <Hero />
               <About />
            </div>
        </>
    );
}
