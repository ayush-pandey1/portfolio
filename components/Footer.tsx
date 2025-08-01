import { GENERAL_INFO } from '@/lib/data';
// import { GitFork, Star } from 'lucide-react';



const Footer = async () => {
    
    return (
        <footer className="text-center pb-5" id="contact">
            <div className="container">
                <p className="text-lg">Get in touch</p>
                <a
                    href={`mailto:${GENERAL_INFO.email}`}
                    className="text-3xl sm:text-4xl font-anton inline-block mt-5 mb-10 hover:text-primary "
                >
                    {GENERAL_INFO.email}
                </a>

                <div className="">
                    <div
                       
                        className="leading-none text-muted-foreground  hover:text-white"
                    >
                        Design & built by <span className="hover:text-primary font-semibold">Ayush Pandey</span>
                       
                    </div>

                    
                </div>
            </div>
        </footer>
    );
};

export default Footer;
