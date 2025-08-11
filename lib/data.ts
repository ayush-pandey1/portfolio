import { IProject } from '@/types';
// import Image from 'next/image';

export const GENERAL_INFO = {
    email: 'ayushpandey9350@gmail.com',

    emailSubject: 'Regarding a potential developer opportunity',
    emailBody: 'Hi Ayush, I am reaching out to you because...',

    oldPortfolio: '////',
    resumeURL:
        'https://drive.google.com/file/d/1hTJLBpGkyaJL1sb0VgkkvqdhhiBUHGon/view?usp=sharing',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/ayush-pandey1' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/ayush-pandey1/' },
    { name: 'Leetcode', url: 'https://leetcode.com/u/ayush-pandey1/' },
    { name: 'Other', url: GENERAL_INFO.oldPortfolio },
];

export const MY_STACK = {
    Languages: [
        {
            name: 'TypeScript',
            icon: '/logo/ts.png',
        },
        {
            name: 'JavaScript',
            icon: '/logo/js.png',
        },

        {
            name: 'c++',
            icon: '/logo/Cpp.png',
        },
    ],
    frontend: [
        {
            name: 'Next.js',
            icon: '/logo/next.png',
        },
        {
            name: 'React',
            icon: '/logo/react.png',
        },
        {
            name: 'Redux',
            icon: '/logo/redux.png',
        },
        {
            name: 'Tailwind CSS',
            icon: '/logo/tailwind.png',
        },
        {
            name: 'Zod',
            icon: '/logo/Zod.png',
        },
        {
            name: 'Shadcn',
            icon: '/logo/Shadcn.png',
        },
        {
            name: 'Framer Motion',
            icon: '/logo/framer-motion.png',
        },

        {
            name: 'Bootstrap',
            icon: '/logo/bootstrap.svg',
        },
    ],
    backend: [
        {
            name: 'Node.js',
            icon: '/logo/node.png',
        },
        {
            name: 'Express.js',
            icon: '/logo/express.png',
        },
        {
            name: 'Socket.io',
            icon: '/logo/Socket.png',
        },
    ],
    database: [
        {
            name: 'Prisma',
            icon: '/logo/prisma.png',
        },

        {
            name: 'MongoDB',
            icon: '/logo/mongodb.svg',
        },
        {
            name: 'PostgreSQL',
            icon: '/logo/postgreSQL.png',
        },
        {
            name: 'MySQL',
            icon: '/logo/mysql.svg',
        },
    ],
    tools: [
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
        {
            name: 'Postman',
            icon: '/logo/postman.png',
        },
        {
            name: 'AWS',
            icon: '/logo/aws.png',
        },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'Karmsetu',
        slug: 'karmsetu',
        liveUrl: 'https://karmsetu.vercel.app/',
        year: 2024,
        description: `
      Karmsetu is a geolocation-based freelancing platform built specifically for the Indian market, aiming to connect local clients with nearby freelancers in real-time. It enables seamless gig discovery, project posting, and collaboration by using GPS and interactive maps for location-aware job matching.<br/><br/>

Designed with a clean, responsive interface and backed by real-time communication via built-in chat and video calls, Karmsetu simplifies the freelancing process for both urban and rural users. Its milestone-based payment system with Razorpay integration ensures secure transactions, while the platform's rating and review system builds trust between users. <br/> <br/>
      
      
      
      Technical Highlights:
      <ul>
        <li>Built a full-stack freelancing platform using <span  style="color: #00000; font-weight: bold;">Next.js</span> and <span style="color: #61DBFB; font-weight: bold;">React.js</span>, with dynamic routing, SSR, and optimization.</li>
  <li>Used <span style="color: #764abc; font-weight: bold;">Redux</span> to manage global state for user sessions, gig filters, and real-time updates.</li>
  <li>Integrated geolocation-based gig-client matching using the Geolocation API and Leaflet.js for map interactions.</li>
  <li>Created backend REST APIs with Next.js and <span style="color: #3c873a; font-weight: bold;">Node.js</span>, connected it to <span style="color: #00ED64; font-weight: bold;">MongoDB</span> for CRUD operations.</li>
  <li>Implemented secure authentication a   nd role-based access using NextAuth, including OAuth integration for providers like Google and GitHub.</li>
  <li>Added real-time chat and notifications with Socket.io to enable smooth freelancer-client communication.</li>
  <li>Ensured robust data validation and error handling across the stack using Zod, and designed a responsive, accessible UI with Tailwind CSS.</li>
      </ul>
      `,
        role: `
      Full-Stack Developer <br/>
      Owned the entire development lifecycle`,
        techStack: [
            'Next.Js',
            'React.Js',
            'Redux',
            'Node.Js',
            'MongoDB',
            'Tailwind CSS',
            'Shadcn',
            'NextAuth',
            'Socket.io',
            'Zod',
            'Vercel',
        ],
        thumbnail: '/projects/thumbnail/karmsetu.png',
        longThumbnail: '/projects/long/karmsetu_long.png',
        images: [
            '/projects/images/karmsetu1.png ',
            '/projects/images/karmsetu2.png',
        ],
    },
    {
        title: 'Sahayatri',
        slug: 'sahayatri',
        liveUrl: 'https://shayatri.vercel.app/',
        year: 2023,
        description: `
      Sahayatri is a geoproximity-based ride and vehicle pooling platform that leverages spatial radius matching to identify potential co-travelers. It compares the user-defined radii around the origin and destination points with those of other users to algorithmically detect overlapping routes, enabling efficient and optimized carpooling.<br/> <br/>


      Technical Highlights:
      <ul>
        <li>Developed a full-stack vehicle pooling platform using <span style="color: #61DBFB; font-weight: bold;">React.Js</span> that matches users based on proximity, route, and destination using geolocation logic.</li>
        <li>Built the backend using <span style="color: #F0DB4F; font-weight: bold;">Express.Js</span>, <span style="color: #3c873a; font-weight: bold;">Node.js</span>, and <span style="color: #00ED64; font-weight: bold;">MongoDB</span> to store and query data.</li>
        <li>Integrated the Geolocation API and OpenCage Autocomplete for dynamic search and route-based filtering.</li>
        <li>Implemented real-time chat between users using <span style="color: #000000; font-weight: bold; -webkit-text-stroke: 0.2px white;">Socket.io</span> for seamless communication between users.</li>
        <li>Designed the frontend using React.js and styled it with Tailwind CSS for responsiveness and accessibility.</li>
        <li>Handled complete data flow between frontend, backend, and database using structured RESTful APIs.</li>

      </ul>
      `,
        role: `
      Full-Stack Developer <br/>
      Owned the entire development lifecycle
      `,
        techStack: [
            'React.Js',
            'Node.Js',
            'Express.Js',
            'Tailwind CSS',
            'MongoDB',
            'Socket.io',
            'Opencage API',
        ],
        thumbnail: '/projects/thumbnail/sahayatri_long.png',
        longThumbnail: '/projects/long/mti-electronics.webp',
        images: [
            '/projects/images/sahayatri1.png',
            '/projects/images/sahayatri2.png',
        ],
    },
    // {
    //     title: 'Epikcart',
    //     slug: 'epikcart',
    //     techStack: [
    //         'React',
    //         'Redux',
    //         'React i18n',
    //         'Tailwind CSS',
    //         'Framer Motion',
    //         'debouncing',
    //         'Api Integration',
    //     ],
    //     thumbnail: '/projects/thumbnail/epikcart.jpg',
    //     longThumbnail: '/projects/long/epikcart.jpg',
    //     images: [
    //         '/projects/images/epikcart-1.png',
    //         '/projects/images/epikcart-2.png',
    //         '/projects/images/epikcart-3.png',
    //         '/projects/images/epikcart-4.png',
    //         '/projects/images/epikcart-5.png',
    //     ],
    //     liveUrl: 'https://demo.epikcart.siphertech.com/',
    //     year: 2023,
    //     description: `Epikcart is a feature-rich, scalable e-commerce platform tailored for large businesses. It features dynamic product filtering, multi-language support with RTL, advanced inventory management, order tracking, and refund systems, offering a comprehensive solution for multi-vendor operations.`,
    //     role: `As the frontend developer in a team of five, I: <br/>
    //     - Built the frontend from scratch using React, Redux, RTK Query, and Tailwind CSS.<br/>
    //     - Developed dynamic filtering logic for the product search page with admin-configurable parameters.<br/>
    //     - Integrated multi-language support with React i18n, including RTL handling.<br/>
    //     - Delivered a responsive, user-friendly interface in collaboration with the UI/UX designer.`,
    // },
    // {
    //     title: 'Resume Roaster',
    //     slug: 'resume-roaster',
    //     techStack: [
    //         'GPT-4',
    //         'Next.js',
    //         'Postgressql',
    //         'Prisma',
    //         'Tailwind CSS',
    //     ],
    //     thumbnail: '/projects/thumbnail/resume-roaster.jpg',
    //     longThumbnail: '/projects/long/resume-roaster.jpg',
    //     images: [
    //         '/projects/images/resume-roaster-1.png',
    //         '/projects/images/resume-roaster-2.png',
    //         '/projects/images/resume-roaster-3.png',
    //     ],
    //     liveUrl: 'https://resume-roaster.vercel.app/',
    //     year: 2023,
    //     description:
    //         'Resume Roaster is a web application designed to provide tailored resume feedback and professional writing services. Built with Next.js, PostgreSQL, Prisma, and Tailwind CSS, it integrates GPT-4 for AI-powered recommendations. The platform also includes peer-to-peer reviews with a points-based system, fostering a collaborative and engaging experience. Targeting freshers, experienced professionals, and programmers, it helps optimize resumes for job-specific success.',
    //     role: `As the sole developer and business owner, I:<br/>
    //     - Designed and developed the platform end-to-end using Next.js, PostgreSQL, Prisma, and Tailwind CSS.<br/>
    //     - Integrated GPT-4 for AI-driven feedback and insights.<br/>
    //     - Implemented complex SQL queries, including one to identify the top two resumes based on user points.`,
    // },
    // {
    //     title: 'Real Estate',
    //     slug: 'property-pro',
    //     techStack: [
    //         'React.js',
    //         'Redux',
    //         'Tailwind CSS',
    //         'React i18n',
    //         'Framer Motion',
    //     ],
    //     thumbnail: '/projects/thumbnail/property-pro.jpg',
    //     longThumbnail: '/projects/long/property-pro.jpg',
    //     images: [
    //         '/projects/images/property-pro-1.png',
    //         '/projects/images/property-pro-2.png',
    //         '/projects/images/property-pro-3.png',
    //     ],
    //     liveUrl: 'https://demo.propertypro.siphertech.com/',
    //     year: 2023,
    //     description:
    //         'PropertyPro is a real estate management platform offering users a seamless experience to explore, manage, and view property listings. The application emphasizes accessibility and responsive design, ensuring a smooth interface across devices.',
    //     role: `As the frontend developer, I:<br/>
    //     - Built the frontend using React, Redux, RTK Query, Framer Motion, and Tailwind CSS.<br/>
    //     - Integrated dynamic state management for efficient handling of property data.<br/>
    //     - Implemented multi-language support with React i18n to cater to diverse audiences.<br/>
    //     - Enhanced user interaction with animations and transitions using Framer Motion.`,
    // },
    // {
    //     title: 'Consulting Finance',
    //     slug: 'crenotive',
    //     techStack: ['HTML', 'CSS & SCSS', 'Javascript', 'Bootstrap'],
    //     thumbnail: '/projects/thumbnail/consulting-finance.jpg',
    //     longThumbnail: '/projects/long/consulting-finance.jpg',
    //     images: [
    //         '/projects/images/consulting-finance-1.png',
    //         '/projects/images/consulting-finance-2.png',
    //         '/projects/images/consulting-finance-3.png',
    //     ],
    //     sourceCode: 'https://github.com/Tajmirul/crenotive',
    //     liveUrl: 'https://crenotive.netlify.app/',
    //     year: 2023,
    //     description:
    //         'I developed Crenotive, a portfolio website using Html, SASS, and jQuery to showcase services and expertise. The design focuses on responsive user experience and effective presentation of professional achievements.',
    //     role: ``,
    // },
    // {
    //     title: 'devLinks',
    //     slug: 'devLinks',
    //     techStack: ['Next.js', 'Formik', 'Drag & Drop', 'Tailwind CSS'],
    //     thumbnail: '/projects/thumbnail/devLinks.jpg',
    //     longThumbnail: '/projects/long/devLinks.jpg',
    //     images: [
    //         '/projects/images/devLinks-1.png',
    //         '/projects/images/devLinks-2.png',
    //         '/projects/images/devLinks-3.png',
    //     ],
    //     sourceCode: 'https://github.com/Tajmirul/devsLink',
    //     liveUrl: 'https://devlinks-demo.vercel.app/auth/signin',
    //     year: 2023,
    //     description: `One of the most challenging projects in Frontend Mentor.<br/><br/>

    //         I developed a LinkSharing App as part of the Frontend Mentor challenge, utilizing React, Redux, and Tailwind CSS to create a responsive and feature-rich platform. The app allows users to share, save, and explore links, with a focus on intuitive design and smooth navigation. Advanced state management ensures efficient data handling for user interactions.`,
    //     role: ``,
    // },
];

export const MY_EXPERIENCE = [
    {
        title: 'Web Developer Intern (Frontend)',
        company: 'Google Developers Group ',
        duration: 'Dec 2023 – June 2024',
    },
];
