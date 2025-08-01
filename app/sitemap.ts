import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://ayushdevfolio.vercel.app/',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
    ];
}

export const metadata = {
  title: 'Ayush Pandey - Full Stack Developer Portfolio',
  description: 'Portfolio of Ayush Pandey showcasing projects and skills in web development.',
  keywords: ['Ayush Pandey', 'Full Stack Developer', 'Portfolio', 'Web Developer'],
};
