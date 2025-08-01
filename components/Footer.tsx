import { GENERAL_INFO } from '@/lib/data';
import { GitFork, Star } from 'lucide-react';

interface RepoStats {
    stargazers_count: number;
    forks_count: number;
}

const Footer = async () => {
    const repoStats = await fetch(
        'https://api.github.com/repos/tajmirul/portfolio-2.0',
        {
            next: {
                revalidate: 60 * 60, // 1 hour
            },
        },
    );

    const { stargazers_count, forks_count } =
        (await repoStats.json()) as RepoStats;

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
